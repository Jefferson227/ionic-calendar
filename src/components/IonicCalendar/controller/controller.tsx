import { addDays, addMonths } from 'date-fns';
import CalendarDay from '../interfaces/CalendarDay';

const setRow = (
  row: Array<CalendarDay>,
  rowFn: (arr: Array<CalendarDay>) => void,
  date: Date
) => {
  const tempRow = row;
  tempRow[date.getDay()].day = date.getDate().toString();
  tempRow[date.getDay()].hasEvents = false;
  rowFn(tempRow);
};

const resetRow = (
  row: Array<CalendarDay>,
  rowFn: (arr: Array<CalendarDay>) => void
) => {
  for (let i = 0; i < 7; i++) {
    const tempRow = row;
    tempRow[i].day = '';
    tempRow[i].hasEvents = false;

    rowFn(tempRow);
  }
};

const getCalendarDays = (params: {
  firstRow: Array<CalendarDay>;
  setFirstRow: (row: Array<CalendarDay>) => void;
  secondRow: Array<CalendarDay>;
  setSecondRow: (row: Array<CalendarDay>) => void;
  thirdRow: Array<CalendarDay>;
  setThirdRow: (row: Array<CalendarDay>) => void;
  fourthRow: Array<CalendarDay>;
  setFourthRow: (row: Array<CalendarDay>) => void;
  fifthRow: Array<CalendarDay>;
  setFifthRow: (row: Array<CalendarDay>) => void;
  sixthRow: Array<CalendarDay>;
  setSixthRow: (row: Array<CalendarDay>) => void;
  mainDate: Date;
}) => {
  const selectedDate = params.mainDate || new Date();
  let calendarDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );

  const calendarLastDay = addDays(addMonths(calendarDay, 1), -1);
  let currentRow = 1;

  resetRow(params.firstRow, params.setFirstRow);
  resetRow(params.secondRow, params.setSecondRow);
  resetRow(params.thirdRow, params.setThirdRow);
  resetRow(params.fourthRow, params.setFourthRow);
  resetRow(params.fifthRow, params.setFifthRow);
  resetRow(params.sixthRow, params.setSixthRow);

  while (calendarDay.getTime() <= calendarLastDay.getTime()) {
    if (currentRow === 1) {
      setRow(params.firstRow, params.setFirstRow, calendarDay);
    } else if (currentRow === 2) {
      setRow(params.secondRow, params.setSecondRow, calendarDay);
    } else if (currentRow === 3) {
      setRow(params.thirdRow, params.setThirdRow, calendarDay);
    } else if (currentRow === 4) {
      setRow(params.fourthRow, params.setFourthRow, calendarDay);
    } else if (currentRow === 5) {
      setRow(params.fifthRow, params.setFifthRow, calendarDay);
    } else if (currentRow === 6) {
      setRow(params.sixthRow, params.setSixthRow, calendarDay);
    }

    calendarDay = addDays(calendarDay, 1);

    if (params.firstRow[6].day !== '' && currentRow === 1) currentRow++;
    if (params.secondRow[6].day !== '' && currentRow === 2) currentRow++;
    if (params.thirdRow[6].day !== '' && currentRow === 3) currentRow++;
    if (params.fourthRow[6].day !== '' && currentRow === 4) currentRow++;
    if (params.fifthRow[6].day !== '' && currentRow === 5) currentRow++;
    if (params.sixthRow[6].day !== '' && currentRow === 6) currentRow++;
  }
};

const getMonthName = (dateParam?: Date) => {
  const date = dateParam || new Date();
  const currentMonthIndex = date.getMonth();

  switch (currentMonthIndex) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return '';
  }
};

const getYear = (dateParam?: Date) => {
  const date = dateParam || new Date();
  return date.getFullYear().toString();
};

const initializeRow = () => {
  return [
    { day: '', hasEvents: false },
    { day: '', hasEvents: false },
    { day: '', hasEvents: false },
    { day: '', hasEvents: false },
    { day: '', hasEvents: false },
    { day: '', hasEvents: false },
    { day: '', hasEvents: false },
  ];
};

export default {
  getCalendarDays,
  getMonthName,
  getYear,
  initializeRow,
};
