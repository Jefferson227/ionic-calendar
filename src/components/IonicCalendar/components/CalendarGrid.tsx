import CalendarDay from '../interfaces/CalendarDay';

interface CalendarGridProps {
  rows: Array<Array<CalendarDay>>;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ rows }) => {
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

      {rows.map((row, rowIndex) => {
        return (
          <div className="calendar-grid" key={rowIndex}>
            <div className="row">
              {row.map((calendarDay, calendarDayIndex) => {
                return (
                  <div
                    className={`day ${
                      calendarDay.hasEvents ? 'day-circled' : ''
                    }`}
                    key={calendarDayIndex}
                  >
                    <button className="button button-day">
                      {calendarDay.day}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CalendarGrid;
