import { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/react';
import './Home.css';
import IonicReactCalendar from 'ionic-react-calendar';
import { parse, format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import IonicReactCalendarEvent from 'ionic-react-calendar/dist/IonicReactCalendar/interfaces/IonicReactCalendarEvent';

const Home: React.FC = () => {
  const [events, setEvents] = useState<IonicReactCalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [description, setDescription] = useState('');
  const [startDateHours, setStartDateHours] = useState(0);
  const [endDateHours, setEndDateHours] = useState(0);
  const [startDateMinutes, setStartDateMinutes] = useState(0);
  const [endDateMinutes, setEndDateMinutes] = useState(0);
  const onClickOnDay = (date: string) => setSelectedDate(date);
  const addEvent = () => {
    const date = parse(selectedDate, 'yyyy-MM-dd', new Date());

    const ev = {
      id: uuid(),
      description: description,
      start: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        startDateHours,
        startDateMinutes,
        0
      ),
      end: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        endDateHours,
        endDateMinutes,
        0
      ),
    };

    setEvents([...events, ev]);
    console.log('Mocked events added out of the component.');
  };
  const deleteEvent = (eventId: string) => {
    setEvents(events.filter((e) => e.id !== eventId));
  };
  const addDescription = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setDescription(val);
  };
  const addStartTimeHours = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setStartDateHours(parseInt(val));
  };
  const addEndTimeHours = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setEndDateHours(parseInt(val));
  };
  const addStartTimeMinutes = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setStartDateMinutes(parseInt(val));
  };
  const addEndTimeMinutes = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setEndDateMinutes(parseInt(val));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonicReactCalendar
          events={events}
          onClickOnDay={onClickOnDay}
        />

        <br />

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Selected date</IonLabel>
              <IonInput
                value={selectedDate}
                disabled={true}
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel>Description</IonLabel>
              <IonInput
                placeholder="Event description"
                onIonInput={(ev) => addDescription(ev)}
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel>Start time (hours)</IonLabel>
              <IonInput
                placeholder="Between 00 and 23"
                onIonInput={(ev) => addStartTimeHours(ev)}
              ></IonInput>
            </IonCol>

            <IonCol>
              <IonLabel>Start time (minutes)</IonLabel>
              <IonInput
                placeholder="Between 00 and 59"
                onIonInput={(ev) => addStartTimeMinutes(ev)}
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonLabel>End time (hours)</IonLabel>
              <IonInput
                placeholder="Between 00 and 23"
                onIonInput={(ev) => addEndTimeHours(ev)}
              ></IonInput>
            </IonCol>

            <IonCol>
              <IonLabel>End time (minutes)</IonLabel>
              <IonInput
                placeholder="Between 00 and 59"
                onIonInput={(ev) => addEndTimeMinutes(ev)}
              ></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton onClick={addEvent}>Submit</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <br />

        <IonList>
          <IonItem>
            <strong>Events in {selectedDate}</strong>
          </IonItem>
          {events.filter(
            (event) =>
              format(event.start, 'yyyy-MM-dd') === selectedDate
          ).length > 0 ? (
            events
              .filter(
                (event) =>
                  format(event.start, 'yyyy-MM-dd') === selectedDate
              )
              .map((event, index) => (
                <IonItem key={index}>
                  Description: {event.description} - start:{' '}
                  {format(event.start, 'HH:mm')} - end:{' '}
                  {format(event.end, 'HH:mm')}&nbsp;
                  <button onClick={() => deleteEvent(event.id)}>
                    Delete
                  </button>
                </IonItem>
              ))
          ) : (
            <IonItem>No events.</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
