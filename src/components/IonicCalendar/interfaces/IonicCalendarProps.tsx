import Event from './Event';

interface IonicCalendarProps {
  events?: Array<Event>;
  onClickOnDay?: (date: string) => void;
}

export default IonicCalendarProps;
