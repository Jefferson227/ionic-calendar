import { addDays, addMonths, format } from 'date-fns';
import CalendarDay from '../interfaces/CalendarDay';
import Event from '../interfaces/Event';

const checkEvents = (date: Date, events: Array<Event>) => {
  const formattedDate = format(date, 'yyyy-MM-dd');
  let hasEvents = false;

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const formattedEventDate = format(event.start, 'yyyy-MM-dd');

    if (formattedDate === formattedEventDate) {
      hasEvents = true;
      break;
    }
  }

  return hasEvents;
};

const setRow = (
  row: Array<CalendarDay>,
  rowFn: (arr: Array<CalendarDay>) => void,
  date: Date,
  events: Array<Event>
) => {
  row[date.getDay()].day = date.getDate().toString();
  row[date.getDay()].hasEvents = checkEvents(date, events);
  rowFn(row);
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

const setCalendarDays = (params: {
  setFirstRow: (row: Array<CalendarDay>) => void;
  setSecondRow: (row: Array<CalendarDay>) => void;
  setThirdRow: (row: Array<CalendarDay>) => void;
  setFourthRow: (row: Array<CalendarDay>) => void;
  setFifthRow: (row: Array<CalendarDay>) => void;
  setSixthRow: (row: Array<CalendarDay>) => void;
  mainDate: Date;
  events: Array<Event>;
}) => {
  const selectedDate = params.mainDate || new Date();
  let calendarDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
  console.log('events.length: ' + params.events.length);

  const calendarLastDay = addDays(addMonths(calendarDay, 1), -1);
  let currentRow = 1;

  let firstRow = initializeRow();
  let secondRow = initializeRow();
  let thirdRow = initializeRow();
  let fourthRow = initializeRow();
  let fifthRow = initializeRow();
  let sixthRow = initializeRow();

  while (calendarDay.getTime() <= calendarLastDay.getTime()) {
    if (currentRow === 1) {
      setRow(firstRow, params.setFirstRow, calendarDay, params.events);
    } else if (currentRow === 2) {
      setRow(secondRow, params.setSecondRow, calendarDay, params.events);
    } else if (currentRow === 3) {
      setRow(thirdRow, params.setThirdRow, calendarDay, params.events);
    } else if (currentRow === 4) {
      setRow(fourthRow, params.setFourthRow, calendarDay, params.events);
    } else if (currentRow === 5) {
      setRow(fifthRow, params.setFifthRow, calendarDay, params.events);
    } else if (currentRow === 6) {
      setRow(sixthRow, params.setSixthRow, calendarDay, params.events);
    }

    calendarDay = addDays(calendarDay, 1);

    if (firstRow[6].day !== '' && currentRow === 1) currentRow++;
    if (secondRow[6].day !== '' && currentRow === 2) currentRow++;
    if (thirdRow[6].day !== '' && currentRow === 3) currentRow++;
    if (fourthRow[6].day !== '' && currentRow === 4) currentRow++;
    if (fifthRow[6].day !== '' && currentRow === 5) currentRow++;
    if (sixthRow[6].day !== '' && currentRow === 6) currentRow++;
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
  setCalendarDays,
  getMonthName,
  getYear,
  initializeRow,
};
