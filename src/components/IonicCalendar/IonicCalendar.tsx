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

      <div className="body">
        <div className="weekdays">
          <div className="weekday">Su</div>
          <div className="weekday">Mo</div>
          <div className="weekday">Tu</div>
          <div className="weekday">We</div>
          <div className="weekday">Th</div>
          <div className="weekday">Fr</div>
          <div className="weekday">Sa</div>
        </div>

        <div className="calendar-grid">
          <div className="row row-1">
            <div className="day day-1"></div>
            <div className="day day-2"></div>
            <div className="day day-3"></div>
            <div className="day day-4"></div>
            <div className="day day-5">1</div>
            <div className="day day-6">2</div>
            <div className="day day-7">3</div>
          </div>

          <div className="row row-2">
            <div className="day day-1">4</div>
            <div className="day day-2">5</div>
            <div className="day day-3">6</div>
            <div className="day day-4">7</div>
            <div className="day day-5">8</div>
            <div className="day day-6">9</div>
            <div className="day day-7">10</div>
          </div>

          <div className="row row-3">
            <div className="day day-1">11</div>
            <div className="day day-2">12</div>
            <div className="day day-3">13</div>
            <div className="day day-4">14</div>
            <div className="day day-5">15</div>
            <div className="day day-6">16</div>
            <div className="day day-7">17</div>
          </div>

          <div className="row row-4">
            <div className="day day-1">18</div>
            <div className="day day-2">19</div>
            <div className="day day-3">20</div>
            <div className="day day-4">21</div>
            <div className="day day-5">22</div>
            <div className="day day-6">23</div>
            <div className="day day-7">24</div>
          </div>

          <div className="row row-5">
            <div className="day day-1">25</div>
            <div className="day day-2">26</div>
            <div className="day day-3">27</div>
            <div className="day day-4">28</div>
            <div className="day day-5">29</div>
            <div className="day day-6">30</div>
            <div className="day day-7"></div>
          </div>
        </div>
      </div>

      <div className="footer">This is the footer</div>
    </section>
  );
};

export default IonicCalendar;
