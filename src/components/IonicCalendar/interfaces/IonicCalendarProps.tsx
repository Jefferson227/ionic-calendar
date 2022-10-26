import Event from './Event';

interface IonicCalendarProps {
  events?: Array<Event>;
  setEvents?: (event: Array<Event>) => void;
}

export default IonicCalendarProps;
