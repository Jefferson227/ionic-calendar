import './IonicCalendar.css';

const IonicCalendar = () => {
  return (
    <section className="ionic-calendar-container">
      <div className="header">
        <button className="button-back">Back</button>
        <button className="button-month">September</button>
        <button className="button-year">2022</button>
        <button className="button-forward">Forward</button>
      </div>

      <div className="body">This is the body</div>
      <div className="footer">This is the footer</div>
    </section>
  );
};

export default IonicCalendar;
