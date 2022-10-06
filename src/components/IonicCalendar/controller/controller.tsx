import { addDays, addMonths } from 'date-fns';

const setRow = (
  row: Array<string>,
  rowFn: (arr: Array<string>) => void,
  date: Date
) => {
  const tempRow = row;
  tempRow[date.getDay()] = date.getDate().toString();
  rowFn(tempRow);
};

const getCalendarDays = (params: {
  firstRow: Array<string>;
  setFirstRow: (row: Array<string>) => void;
  secondRow: Array<string>;
  setSecondRow: (row: Array<string>) => void;
  thirdRow: Array<string>;
  setThirdRow: (row: Array<string>) => void;
  fourthRow: Array<string>;
  setFourthRow: (row: Array<string>) => void;
  fifthRow: Array<string>;
  setFifthRow: (row: Array<string>) => void;
  sixthRow: Array<string>;
  setSixthRow: (row: Array<string>) => void;
}) => {
  const now = new Date();
  let calendarDay = new Date(now.getFullYear(), now.getMonth(), 1);

  const nextMonth = addMonths(now, 1).getMonth();
  let currentRow = 1;

  while (calendarDay.getMonth() < nextMonth) {
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

    if (params.firstRow[6].length !== 0 && currentRow === 1) currentRow++;
    if (params.secondRow[6].length !== 0 && currentRow === 2) currentRow++;
    if (params.thirdRow[6].length !== 0 && currentRow === 3) currentRow++;
    if (params.fourthRow[6].length !== 0 && currentRow === 4) currentRow++;
    if (params.fifthRow[6].length !== 0 && currentRow === 5) currentRow++;
    if (params.sixthRow[6].length !== 0 && currentRow === 6) currentRow++;
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

export default {
  getCalendarDays,
  getMonthName,
  getYear,
};
