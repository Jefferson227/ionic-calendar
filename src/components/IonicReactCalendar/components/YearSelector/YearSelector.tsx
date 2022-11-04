import './YearSelector.css';

interface YearSelectorProps {
  mainDate: Date;
  setMainDate: (date: Date) => void;
  setBodyDisplay: (component: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  mainDate,
  setMainDate,
  setBodyDisplay,
}) => {
  let years: Array<number>;
  years = [];

  for (let i = 4; i > 0; i--) {
    years = [...years, mainDate.getFullYear() - i];
  }

  for (let i = 0; i < 5; i++) {
    years = [...years, mainDate.getFullYear() + i];
  }

  years.sort();

  const setDate = (year: number) => {
    setMainDate(new Date(year, mainDate.getMonth(), mainDate.getDay()));
    setBodyDisplay('calendar-grid');
  };

  return (
    <div className="year-selector">
      <div className="row">
        <button
          className="button button-year"
          onClick={() => setDate(years[0])}
        >
          {years[0]}
        </button>
        <button
          className="button button-year"
          onClick={() => setDate(years[1])}
        >
          {years[1]}
        </button>
        <button
          className="button button-year"
          onClick={() => setDate(years[2])}
        >
          {years[2]}
        </button>
      </div>

      <div className="row">
        <button
          className="button button-year"
          onClick={() => setDate(years[3])}
        >
          {years[3]}
        </button>
        <button
          className="button button-year"
          onClick={() => setDate(years[4])}
        >
          {years[4]}
        </button>
        <button
          className="button button-year"
          onClick={() => setDate(years[5])}
        >
          {years[5]}
        </button>
      </div>

      <div className="row">
        <button
          className="button button-year"
          onClick={() => setDate(years[6])}
        >
          {years[6]}
        </button>
        <button
          className="button button-year"
          onClick={() => setDate(years[7])}
        >
          {years[7]}
        </button>
        <button
          className="button button-year"
          onClick={() => setDate(years[8])}
        >
          {years[8]}
        </button>
      </div>
    </div>
  );
};

export default YearSelector;
