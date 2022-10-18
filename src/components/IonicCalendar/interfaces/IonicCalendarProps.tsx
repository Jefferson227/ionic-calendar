import Event from './Event';

interface IonicCalendarProps {
  getEvents?: (startDate?: Date, endDate?: Date) => Array<Event>;
  addEvent?: (event: Event) => void;
  removeEvent?: (event: Event) => void;
  updateEvent?: (event: Event) => void;
}

export default IonicCalendarProps;
