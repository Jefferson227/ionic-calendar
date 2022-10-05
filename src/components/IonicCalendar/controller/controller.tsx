import { addDays, addMonths } from 'date-fns';

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
  var calendarDay = new Date(now.getFullYear(), now.getMonth(), 1);

  const nextMonth = addMonths(now, 1).getMonth();
  var currentRow = 1;

  while (calendarDay.getMonth() < nextMonth) {
    if (currentRow === 1) {
      const tempRow = params.firstRow;
      tempRow[calendarDay.getDay()] = calendarDay.getDate().toString();

      params.setFirstRow(tempRow);
    } else if (currentRow === 2) {
      const tempRow = params.secondRow;
      tempRow[calendarDay.getDay()] = calendarDay.getDate().toString();

      params.setSecondRow(tempRow);
    } else if (currentRow === 3) {
      const tempRow = params.thirdRow;
      tempRow[calendarDay.getDay()] = calendarDay.getDate().toString();

      params.setThirdRow(tempRow);
    } else if (currentRow === 4) {
      const tempRow = params.fourthRow;
      tempRow[calendarDay.getDay()] = calendarDay.getDate().toString();

      params.setFourthRow(tempRow);
    } else if (currentRow === 5) {
      const tempRow = params.fifthRow;
      params.fifthRow[calendarDay.getDay()] = calendarDay.getDate().toString();

      params.setFifthRow(tempRow);
    } else if (currentRow === 6) {
      const tempRow = params.sixthRow;
      params.sixthRow[calendarDay.getDay()] = calendarDay.getDate().toString();

      params.setSixthRow(tempRow);
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

export default {
  getCalendarDays,
};
