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
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import IonicCalendar from '../components/IonicCalendar/IonicCalendar';
import './Page.css';
interface Event {
  id?: number;
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
  const onClickOnDay = () => console.log('clicked on day.');

  useEffect(() => {
    if (!datetime.current) return;
    datetime.current.value = ['2022-09-03', '2022-09-13', '2022-09-29'];
  }, []);

  useEffect(() => {
    const now = new Date();

    const ev1 = {
      description: 'Event 1',
      start: new Date(now.getFullYear(), now.getMonth(), 10, 10, 0, 0),
      end: new Date(now.getFullYear(), now.getMonth(), 10, 10, 30, 0),
    };
    const ev2 = {
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
          </div>
        ) : (
          <ExploreContainer name={name} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
