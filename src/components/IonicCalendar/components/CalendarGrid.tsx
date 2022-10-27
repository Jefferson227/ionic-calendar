import CalendarDay from '../interfaces/CalendarDay';
import { format } from 'date-fns';

interface CalendarGridProps {
  rows: Array<Array<CalendarDay>>;
  onClickOnDay: (date: string) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ rows, onClickOnDay }) => {
  const test = () => console.log('test');

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
                      calendarDay.hasEvents
                        ? 'day-circled day-circled-event'
                        : ''
                    } ${
                      calendarDay.fullDate === format(new Date(), 'yyyy-MM-dd')
                        ? 'day-circled day-circled-today'
                        : ''
                    }`}
                    key={calendarDayIndex}
                  >
                    <button
                      className="button button-day"
                      onClick={() => {
                        onClickOnDay(calendarDay.fullDate);
                        test();
                      }}
                    >
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
