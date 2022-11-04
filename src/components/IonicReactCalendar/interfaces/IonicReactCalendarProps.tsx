import IonicReactCalendarEvent from './IonicReactCalendarEvent';

interface IonicReactCalendarProps {
  events?: Array<IonicReactCalendarEvent>;
  onClickOnDay?: (date: string) => void;
}

export default IonicReactCalendarProps;
