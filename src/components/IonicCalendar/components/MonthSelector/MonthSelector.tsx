import './MonthSelector.css';

interface MonthSelectorProps {
  mainDate: Date;
  setMainDate: (date: Date) => void;
  setBodyDisplay: (component: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  mainDate,
  setMainDate,
  setBodyDisplay,
}) => {
  const setDate = (month: number) => {
    setMainDate(new Date(mainDate.getFullYear(), month, mainDate.getDate()));
    setBodyDisplay('calendar-grid');
    console.log(mainDate);
  };

  return (
    <div className="month-selector">
      <div className="row">
        <button className="button button-month" onClick={() => setDate(0)}>
          Jan
        </button>
        <button className="button button-month" onClick={() => setDate(1)}>
          Feb
        </button>
        <button className="button button-month" onClick={() => setDate(2)}>
          Mar
        </button>
      </div>
      <div className="row">
        <button className="button button-month" onClick={() => setDate(3)}>
          Apr
        </button>
        <button className="button button-month" onClick={() => setDate(4)}>
          May
        </button>
        <button className="button button-month" onClick={() => setDate(5)}>
          Jun
        </button>
      </div>
      <div className="row">
        <button className="button button-month" onClick={() => setDate(6)}>
          Jul
        </button>
        <button className="button button-month" onClick={() => setDate(7)}>
          Aug
        </button>
        <button className="button button-month" onClick={() => setDate(8)}>
          Sept
        </button>
      </div>
      <div className="row">
        <button className="button button-month" onClick={() => setDate(9)}>
          Oct
        </button>
        <button className="button button-month" onClick={() => setDate(10)}>
          Nov
        </button>
        <button className="button button-month" onClick={() => setDate(11)}>
          Dec
        </button>
      </div>
    </div>
  );
};
export default MonthSelector;
