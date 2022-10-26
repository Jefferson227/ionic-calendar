import Event from './Event';

interface IonicCalendarProps {
  events?: Array<Event>;
  setEvents?: (event: Array<Event>) => void;
  onClickOnDay?: (date: string) => void;
}

export default IonicCalendarProps;
