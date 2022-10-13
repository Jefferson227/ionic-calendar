import './MonthSelector.css';

const MonthSelector = () => {
  return (
    <div className="month-selector">
      <div className="row">
        <button className="button button-month">Jan</button>
        <button className="button button-month">Feb</button>
        <button className="button button-month">Mar</button>
      </div>
      <div className="row">
        <button className="button button-month">Apr</button>
        <button className="button button-month">May</button>
        <button className="button button-month">Jun</button>
      </div>
      <div className="row">
        <button className="button button-month">Jul</button>
        <button className="button button-month">Aug</button>
        <button className="button button-month">Sept</button>
      </div>
      <div className="row">
        <button className="button button-month">Oct</button>
        <button className="button button-month">Nov</button>
        <button className="button button-month">Dec</button>
      </div>
    </div>
  );
};
export default MonthSelector;
