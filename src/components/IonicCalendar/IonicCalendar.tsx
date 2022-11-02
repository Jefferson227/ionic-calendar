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
  events,
  onClickOnDay,
}) => {
  const [firstRow, setFirstRow] = useState(controller.initializeRow());
  const [secondRow, setSecondRow] = useState(controller.initializeRow());
  const [thirdRow, setThirdRow] = useState(controller.initializeRow());
  const [fourthRow, setFourthRow] = useState(controller.initializeRow());
  const [fifthRow, setFifthRow] = useState(controller.initializeRow());
  const [sixthRow, setSixthRow] = useState(controller.initializeRow());
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
  }, [mainDate]);

  useEffect(() => {
    const params = {
      setFirstRow,
      setSecondRow,
      setThirdRow,
      setFourthRow,
      setFifthRow,
      setSixthRow,
      mainDate,
      events,
    };
    controller.setCalendarDays(params);
  }, [mainDate, events]);

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
            rows={[
              firstRow,
              secondRow,
              thirdRow,
              fourthRow,
              fifthRow,
              sixthRow,
            ]}
            onClickOnDay={
              typeof onClickOnDay === 'function' ? onClickOnDay : () => {}
            }
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
