import Event from './Event';

interface IonicCalendarProps {
  events?: Array<Event>;
  setEvents?: (event: Array<Event>) => void;
  onClickOnDay?: (param?: any) => void;
}

export default IonicCalendarProps;
