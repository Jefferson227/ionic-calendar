import React, { useRef, useEffect } from 'react';
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

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const dateChange = (event: any) => {
    console.log('date changed ' + event.target.value);
  };

  useEffect(() => {
    if (!datetime.current) return;
    datetime.current.value = ['2022-09-03', '2022-09-13', '2022-09-29'];
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
            <IonDatetime
              ref={datetime}
              presentation="date"
              multiple={true}
              onIonChange={(e) => dateChange(e)}
            ></IonDatetime>

            <IonicCalendar />
          </div>
        ) : (
          <ExploreContainer name={name} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
