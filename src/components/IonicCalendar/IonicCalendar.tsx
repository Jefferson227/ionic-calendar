import './IonicCalendar.css';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const IonicCalendar = () => {
  return (
    <section className="ionic-calendar-container">
      <div className="header">
        <button className="button button-arrow">
          <IonIcon icon={chevronBackOutline} />
        </button>

        <button className="button button-month">September</button>
        <button className="button button-year">2022</button>

        <button className="button button-arrow">
          <IonIcon icon={chevronForwardOutline} />
        </button>
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
            <div className="day">
              <button className="button button-day">1</button>
            </div>
            <div className="day">
              <button className="button button-day">2</button>
            </div>
            <div className="day">
              <button className="button button-day">3</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">4</button>
            </div>
            <div className="day">
              <button className="button button-day">5</button>
            </div>
            <div className="day">
              <button className="button button-day">6</button>
            </div>
            <div className="day">
              <button className="button button-day">7</button>
            </div>
            <div className="day">
              <button className="button button-day">8</button>
            </div>
            <div className="day">
              <button className="button button-day">9</button>
            </div>
            <div className="day">
              <button className="button button-day">10</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">11</button>
            </div>
            <div className="day">
              <button className="button button-day">12</button>
            </div>
            <div className="day">
              <button className="button button-day">13</button>
            </div>
            <div className="day">
              <button className="button button-day">14</button>
            </div>
            <div className="day">
              <button className="button button-day">15</button>
            </div>
            <div className="day">
              <button className="button button-day">16</button>
            </div>
            <div className="day">
              <button className="button button-day">17</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">18</button>
            </div>
            <div className="day">
              <button className="button button-day">19</button>
            </div>
            <div className="day">
              <button className="button button-day">20</button>
            </div>
            <div className="day">
              <button className="button button-day">21</button>
            </div>
            <div className="day">
              <button className="button button-day">22</button>
            </div>
            <div className="day">
              <button className="button button-day">23</button>
            </div>
            <div className="day">
              <button className="button button-day">24</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">25</button>
            </div>
            <div className="day">
              <button className="button button-day">26</button>
            </div>
            <div className="day">
              <button className="button button-day">27</button>
            </div>
            <div className="day">
              <button className="button button-day">28</button>
            </div>
            <div className="day">
              <button className="button button-day">29</button>
            </div>
            <div className="day">
              <button className="button button-day">30</button>
            </div>
            <div className="day"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IonicCalendar;
