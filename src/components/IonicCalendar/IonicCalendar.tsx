import './IonicCalendar.css';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useEffect, useState } from 'react';
import { addMonths } from 'date-fns';
import controller from './controller/controller';
import CalendarGrid from './components/CalendarGrid';
import MonthSelector from './components/MonthSelector';

const IonicCalendar = () => {
  const [firstRow, setFirstRow] = useState(['', '', '', '', '', '', '']);
  const [secondRow, setSecondRow] = useState(['', '', '', '', '', '', '']);
  const [thirdRow, setThirdRow] = useState(['', '', '', '', '', '', '']);
  const [fourthRow, setFourthRow] = useState(['', '', '', '', '', '', '']);
  const [fifthRow, setFifthRow] = useState(['', '', '', '', '', '', '']);
  const [sixthRow, setSixthRow] = useState(['', '', '', '', '', '', '']);
  const [monthName, setMonthName] = useState('');
  const [year, setYear] = useState('');
  const [mainDate, setMainDate] = useState(new Date());

  const selectNextMonth = () => {
    setMainDate(addMonths(mainDate, 1));
  };

  const selectPreviousMonth = () => {
    setMainDate(addMonths(mainDate, -1));
  };

  const openMonthSelector = () => {
    console.log('open MonthSelector');
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
        <button className="button button-arrow">
          <IonIcon icon={chevronBackOutline} onClick={selectPreviousMonth} />
        </button>

        <button className="button button-month">{monthName}</button>
        <button className="button button-year">{year}</button>

        <button className="button button-arrow">
          <IonIcon icon={chevronForwardOutline} onClick={selectNextMonth} />
        </button>
      </div>

      <div className="body">
        <CalendarGrid
          firstRow={firstRow}
          secondRow={secondRow}
          thirdRow={thirdRow}
          fourthRow={fourthRow}
          fifthRow={fifthRow}
          sixthRow={sixthRow}
        />
      </div>
    </section>
  );
};

export default IonicCalendar;
