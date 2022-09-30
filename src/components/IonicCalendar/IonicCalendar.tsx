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
          <div className="row">
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day">1</div>
            <div className="day">2</div>
            <div className="day">3</div>
          </div>

          <div className="row">
            <div className="day">4</div>
            <div className="day">5</div>
            <div className="day">6</div>
            <div className="day">7</div>
            <div className="day">8</div>
            <div className="day">9</div>
            <div className="day">10</div>
          </div>

          <div className="row">
            <div className="day">11</div>
            <div className="day">12</div>
            <div className="day">13</div>
            <div className="day">14</div>
            <div className="day">15</div>
            <div className="day">16</div>
            <div className="day">17</div>
          </div>

          <div className="row">
            <div className="day">18</div>
            <div className="day">19</div>
            <div className="day">20</div>
            <div className="day">21</div>
            <div className="day">22</div>
            <div className="day">23</div>
            <div className="day">24</div>
          </div>

          <div className="row">
            <div className="day">25</div>
            <div className="day">26</div>
            <div className="day">27</div>
            <div className="day">28</div>
            <div className="day">29</div>
            <div className="day">30</div>
            <div className="day"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IonicCalendar;
