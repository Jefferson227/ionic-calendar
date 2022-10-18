import Event from './Event';

interface IonicCalendarProps {
  events?: Array<Event>;
  addEvent?: (event: Event) => void;
  removeEvent?: (event: Event) => void;
  updateEvent?: (event: Event) => void;
}

export default IonicCalendarProps;
