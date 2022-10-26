import Event from './Event';

interface IonicCalendarProps {
  events?: Array<Event>;
  setEvents?: (event: Array<Event>) => void;
  onClickOnDay?: (day: string) => void;
}

export default IonicCalendarProps;
