import React, { useRef, useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';
import { useParams } from 'react-router';
import { parse, format } from 'date-fns';
import ExploreContainer from '../components/ExploreContainer';
import IonicCalendar from '../components/IonicCalendar/IonicCalendar';
import { v4 as uuid } from 'uuid';
import './Page.css';
interface Event {
  id: string;
  description: string;
  start: Date;
  end: Date;
}

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const dateChange = (event: any) => {
    console.log('date changed ' + event.target.value);
  };
  const [events, setEvents] = useState(Array<Event>);
  const [selectedDate, setSelectedDate] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);
  const onClickOnDay = (date: string) => setSelectedDate(date);
  const addEvent = () => {
    const date = parse(selectedDate, 'yyyy-MM-dd', new Date());

    const ev1 = {
      id: uuid(),
      description: description,
      start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), startDate, 0, 0),
      end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), endDate, 30, 0),
    };

    setEvents([...events, ev1]);
    console.log('Mocked events added out of the component.');
  };
  const deleteEvent = (eventId: string) => {
    setEvents(events.filter(e => e.id !== eventId));
  };
  const addDescription = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setDescription(val);
  };
  const addStartTime = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setStartDate(parseInt(val));
  };
  const addEndTime = (ev: any) => {
    const val = (ev.target as HTMLInputElement).value;
    setEndDate(parseInt(val));
  };

  useEffect(() => {
    if (!datetime.current) return;
    datetime.current.value = ['2022-09-03', '2022-09-13', '2022-09-29'];
  }, []);

  useEffect(() => {
    const now = new Date();

    const ev1 = {
      id: uuid(),
      description: 'Event 1',
      start: new Date(now.getFullYear(), now.getMonth(), 10, 10, 0, 0),
      end: new Date(now.getFullYear(), now.getMonth(), 10, 10, 30, 0),
    };
    const ev2 = {
      id: uuid(),
      description: 'Event 2',
      start: new Date(now.getFullYear(), now.getMonth(), 15, 14, 0, 0),
      end: new Date(now.getFullYear(), now.getMonth(), 15, 14, 30, 0),
    };

    const evs = [ev1, ev2];
    setEvents(evs);
    console.log('Mocked events added out of the component.');
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {name === 'Calendar' ? (
          <div>
            {/*<IonDatetime
              ref={datetime}
              presentation="date"
              multiple={true}
              onIonChange={(e) => dateChange(e)}
            ></IonDatetime>*/}

            <IonicCalendar events={events} setEvents={setEvents} onClickOnDay={onClickOnDay} />

            <IonList>
              <IonItem>
                <IonLabel>Selected date</IonLabel>
                <IonInput value={selectedDate} disabled={true}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel>Description</IonLabel>
                <IonInput placeholder="Event description" onIonInput={(ev) => addDescription(ev)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel>Start time</IonLabel>
                <IonInput placeholder="Between 0 and 23" onIonInput={(ev) => addStartTime(ev)}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel>End time</IonLabel>
                <IonInput placeholder="Between 0 and 23" onIonInput={(ev) => addEndTime(ev)}></IonInput>
              </IonItem>

              <IonItem>
                <IonButton onClick={addEvent}>Submit</IonButton>
              </IonItem>
            </IonList>

            <br />

            <IonList>
              <IonItem><strong>Events in {selectedDate}</strong></IonItem>
              {
                events
                  .filter(event => format(event.start, 'yyyy-MM-dd') === selectedDate)
                  .length > 0
                  ? events
                    .filter(event => format(event.start, 'yyyy-MM-dd') === selectedDate)
                    .map((event, index) =>
                    <IonItem key={index}>Description: {event.description} - start: {format(event.start, 'HH:mm')} - end: {format(event.end, 'HH:mm')}&nbsp;<button onClick={() => deleteEvent(event.id)}>Delete</button></IonItem>)
                  : <IonItem>No events.</IonItem>
              }
            </IonList>
          </div>
        ) : (
          <ExploreContainer name={name} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
