import './YearSelector.css';

const YearSelector = () => {
  const mainDate = new Date();
  let years: Array<number>;
  years = [];

  for (let i = 4; i > 0; i--) {
    years = [...years, mainDate.getFullYear() - i];
  }

  for (let i = 0; i < 5; i++) {
    years = [...years, mainDate.getFullYear() + i];
  }

  years.sort();

  return (
    <div className="year-selector">
      <div className="row">
        <button className="button button-year">{years[0]}</button>
        <button className="button button-year">{years[1]}</button>
        <button className="button button-year">{years[2]}</button>
      </div>

      <div className="row">
        <button className="button button-year">{years[3]}</button>
        <button className="button button-year">{years[4]}</button>
        <button className="button button-year">{years[5]}</button>
      </div>

      <div className="row">
        <button className="button button-year">{years[6]}</button>
        <button className="button button-year">{years[7]}</button>
        <button className="button button-year">{years[8]}</button>
      </div>
    </div>
  );
};

export default YearSelector;
