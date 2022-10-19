import CalendarDay from '../interfaces/CalendarDay';

interface CalendarGridProps {
  firstRow: Array<CalendarDay>;
  secondRow: Array<CalendarDay>;
  thirdRow: Array<CalendarDay>;
  fourthRow: Array<CalendarDay>;
  fifthRow: Array<CalendarDay>;
  sixthRow: Array<CalendarDay>;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  fifthRow,
  sixthRow,
}) => {
  return (
    <>
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
          <div className="day">
            <button className="button button-day">{firstRow[0].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[1].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[2].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[3].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[4].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[5].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[6].day}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{secondRow[0].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[1].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[2].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[3].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[4].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[5].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[6].day}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{thirdRow[0].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[1].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[2].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[3].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[4].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[5].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[6].day}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{fourthRow[0].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[1].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[2].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[3].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[4].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[5].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[6].day}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{fifthRow[0].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[1].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[2].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[3].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[4].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[5].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[6].day}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{sixthRow[0].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[1].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[2].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[3].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[4].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[5].day}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[6].day}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarGrid;
