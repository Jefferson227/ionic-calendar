import { addDays, addMonths, format } from 'date-fns';
import CalendarDay from '../interfaces/CalendarDay';
import Event from '../interfaces/Event';

const checkEvents = (date: Date, events?: Array<Event>) => {
  const formattedDate = format(date, 'yyyy-MM-dd');
  let hasEvents = false;

  if (!events) return false;

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

const setRow = (row: Array<CalendarDay>, date: Date, events?: Array<Event>) => {
  row[date.getDay()].day = date.getDate().toString();
  row[date.getDay()].hasEvents = checkEvents(date, events);
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
  events?: Array<Event>;
}) => {
  const selectedDate = params.mainDate || new Date();
  let calendarDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );

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
      setRow(firstRow, calendarDay, params.events);
    } else if (currentRow === 2) {
      setRow(secondRow, calendarDay, params.events);
    } else if (currentRow === 3) {
      setRow(thirdRow, calendarDay, params.events);
    } else if (currentRow === 4) {
      setRow(fourthRow, calendarDay, params.events);
    } else if (currentRow === 5) {
      setRow(fifthRow, calendarDay, params.events);
    } else if (currentRow === 6) {
      setRow(sixthRow, calendarDay, params.events);
    }

    if (
      calendarDay.getDay() === 6 &&
      (currentRow === 1 ||
        currentRow === 2 ||
        currentRow === 3 ||
        currentRow === 4 ||
        currentRow === 5 ||
        currentRow === 6)
    ) {
      currentRow++;
    }

    calendarDay = addDays(calendarDay, 1);
  }

  params.setFirstRow(firstRow);
  params.setSecondRow(secondRow);
  params.setThirdRow(thirdRow);
  params.setFourthRow(fourthRow);
  params.setFifthRow(fifthRow);
  params.setSixthRow(sixthRow);
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
