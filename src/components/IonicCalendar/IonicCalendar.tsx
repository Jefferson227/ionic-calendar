import './IonicCalendar.css';
import { IonIcon } from '@ionic/react';
import {
  chevronBackOutline,
  chevronForwardOutline,
  closeOutline,
} from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { addMonths } from 'date-fns';
import controller from './controller/controller';
import CalendarGrid from './components/CalendarGrid';
import MonthSelector from './components/MonthSelector/MonthSelector';
import YearSelector from './components/YearSelector/YearSelector';
import HeaderButtons from './components/HeaderButtons';
import IonicCalendarProps from './interfaces/IonicCalendarProps';

const IonicCalendar: React.FC<IonicCalendarProps> = ({
  getEvents,
  addEvent,
  removeEvent,
  updateEvent,
}) => {
  const [firstRow, setFirstRow] = useState(['', '', '', '', '', '', '']);
  const [secondRow, setSecondRow] = useState(['', '', '', '', '', '', '']);
  const [thirdRow, setThirdRow] = useState(['', '', '', '', '', '', '']);
  const [fourthRow, setFourthRow] = useState(['', '', '', '', '', '', '']);
  const [fifthRow, setFifthRow] = useState(['', '', '', '', '', '', '']);
  const [sixthRow, setSixthRow] = useState(['', '', '', '', '', '', '']);
  const [monthName, setMonthName] = useState('');
  const [year, setYear] = useState('');
  const [mainDate, setMainDate] = useState(new Date());
  const [bodyDisplay, setBodyDisplay] = useState('calendar-grid');

  const selectNextMonth = () => {
    setMainDate(addMonths(mainDate, 1));
  };

  const selectPreviousMonth = () => {
    setMainDate(addMonths(mainDate, -1));
  };

  const toggleMonthSelector = () => {
    if (bodyDisplay === 'month-selector') {
      setBodyDisplay('calendar-grid');
      return;
    }

    setBodyDisplay('month-selector');
  };

  const toggleYearSelector = () => {
    if (bodyDisplay === 'year-selector') {
      setBodyDisplay('calendar-grid');
      return;
    }

    setBodyDisplay('year-selector');
  };

  useEffect(() => {
    setMonthName(controller.getMonthName(mainDate));
    setYear(controller.getYear(mainDate));
  }, [
    mainDate,
    setMonthName,
    controller.getMonthName,
    setYear,
    controller.getYear,
  ]);

  useEffect(() => {
    const params = {
      firstRow,
      setFirstRow,
      secondRow,
      setSecondRow,
      thirdRow,
      setThirdRow,
      fourthRow,
      setFourthRow,
      fifthRow,
      setFifthRow,
      sixthRow,
      setSixthRow,
      mainDate,
    };
    controller.getCalendarDays(params);
  }, [
    firstRow,
    setFirstRow,
    secondRow,
    setSecondRow,
    thirdRow,
    setThirdRow,
    fourthRow,
    setFourthRow,
    fifthRow,
    setFifthRow,
    sixthRow,
    setSixthRow,
    mainDate,
    controller.getCalendarDays,
  ]);

  return (
    <section className="ionic-calendar-container">
      <div className="header">
        {bodyDisplay === 'calendar-grid' ? (
          <HeaderButtons
            iconBack={chevronBackOutline}
            iconForward={chevronForwardOutline}
            toggleMonthSelector={toggleMonthSelector}
            toggleYearSelector={toggleYearSelector}
            selectPreviousMonth={selectPreviousMonth}
            selectNextMonth={selectNextMonth}
            monthName={monthName}
            year={year}
          />
        ) : (
          <button className="button button-close">
            <IonIcon
              icon={closeOutline}
              onClick={() => setBodyDisplay('calendar-grid')}
            />
          </button>
        )}
      </div>

      <div className="body">
        {bodyDisplay === 'calendar-grid' ? (
          <CalendarGrid
            firstRow={firstRow}
            secondRow={secondRow}
            thirdRow={thirdRow}
            fourthRow={fourthRow}
            fifthRow={fifthRow}
            sixthRow={sixthRow}
          />
        ) : null}

        {bodyDisplay === 'month-selector' ? (
          <MonthSelector
            mainDate={mainDate}
            setMainDate={setMainDate}
            setBodyDisplay={setBodyDisplay}
          />
        ) : null}

        {bodyDisplay === 'year-selector' ? (
          <YearSelector
            mainDate={mainDate}
            setMainDate={setMainDate}
            setBodyDisplay={setBodyDisplay}
          />
        ) : null}
      </div>
    </section>
  );
};

export default IonicCalendar;
