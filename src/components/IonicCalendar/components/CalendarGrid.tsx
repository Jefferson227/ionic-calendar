interface CalendarGridProps {
  firstRow: Array<string>;
  secondRow: Array<string>;
  thirdRow: Array<string>;
  fourthRow: Array<string>;
  fifthRow: Array<string>;
  sixthRow: Array<string>;
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
            <button className="button button-day">{firstRow[0]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[1]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[2]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[3]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[4]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[5]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{firstRow[6]}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{secondRow[0]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[1]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[2]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[3]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[4]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[5]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{secondRow[6]}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{thirdRow[0]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[1]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[2]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[3]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[4]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[5]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{thirdRow[6]}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{fourthRow[0]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[1]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[2]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[3]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[4]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[5]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fourthRow[6]}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{fifthRow[0]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[1]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[2]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[3]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[4]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[5]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{fifthRow[6]}</button>
          </div>
        </div>

        <div className="row">
          <div className="day">
            <button className="button button-day">{sixthRow[0]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[1]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[2]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[3]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[4]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[5]}</button>
          </div>
          <div className="day">
            <button className="button button-day">{sixthRow[6]}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarGrid;
