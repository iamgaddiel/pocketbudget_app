import {
  IonPage,
  IonContent,
  IonAvatar,
  IonImg,
  IonText,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import {
  personCircle,
  shareOutline,
  phonePortraitOutline,
  trashOutline,
  atCircle,
  pencilOutline,
  personOutline,
} from "ionicons/icons";
import React from "react";
import HeaderTitle from "../../components/HeaderTitle";

import PlaceholderImage from "../../assets/images/404.png";

const ProfilelInfo = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="py-2" color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/me" />
          </IonButtons>
          <IonTitle>Profile Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* ======================= Alart Starts ===================== */}

        {/* ======================= Alart Ends ===================== */}
        <section className="mt-5 ion-text-center bg-light rounded-4 py-3 shadow">
          <div>
            <IonAvatar className="mx-auto" style={profileAvater}>
              <IonImg src={PlaceholderImage} />
            </IonAvatar>
            <div className="mt-3">
              <big className="mt-2 fw-bold fs-1">Gaddiel Ighota</big> <br />
              <IonText>
                <small>ighotagaddiel98@gmail.com</small>
              </IonText>
            </div>
            <div className="ion-text-center mt-3">
              <div className="">
                <IonIcon icon={pencilOutline} />
                <IonLabel>edit</IonLabel>
              </div>
            </div>
          </div>

          <IonList className="mt-3" lines="full">
            <IonItem>
              <IonIcon icon={personOutline} slot="start" />
              <IonLabel>Gaddiel Ighota</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={atCircle} slot="start" />
              <IonLabel>info@example@.com</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={phonePortraitOutline} slot="start" />
              <IonLabel>+23409090987</IonLabel>
            </IonItem>
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ProfilelInfo;

const profileAvater = {
  marginTop: "-3em",
};
