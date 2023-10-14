import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import {
  idCardOutline,
  languageOutline,
  logOutOutline,
  logoEuro,
  personCircle,
  phonePortraitOutline,
  shareOutline,
  trailSignOutline,
  trashOutline,
} from "ionicons/icons";

import PlaceholderImage from "../../assets/images/404.png";
import CurrencySelectionModal from "../../components/CurrencySelectionModal";
import { useRecoilValue } from "recoil";
import { appConfigAtom } from "../../atoms/appAtom";

interface AlertState {
  message: string;
  enabled: boolean;
  isConfirm?: boolean;
  header?: string;
  subHeader?: string;
}






// import { Share } from '@capacitor/share';

// await Share.share({
//   title: 'See cool stuff',
//   text: 'Really awesome thing you need to see right meow',
//   url: 'http://ionicframework.com/',
//   dialogTitle: 'Share with buddies',
// });

// // Share text only
// await Share.share({
//   text: 'Really awesome thing you need to see right meow',
// });

// // Share url only
// await Share.share({
//   url: 'http://ionicframework.com/',
// });

// // Share local file using url parameter
// const photo = await Camera.getPhoto(options);
// await Share.share({
//   url: photo.path,
// });

// // Share multiple files using files parameter
// const { photos } = await Camera.pickImages(options);
// await Share.share({
//   files: photos.map(photo => photo.path!),
// });





const Me = () => {
  //TODO: implement share functionality
  const [showCofirmDeleteAlert, setShowConfirmDeleteAlert] =
    useState<AlertState>({
      message: "",
      enabled: false,
      isConfirm: false,
    });
  useState(false);
  const [showContactAlert, setShowContactlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  
  const { app_currency } = useRecoilValue(appConfigAtom)








  async function deleteAccount() {
    //TODO: implement accound deletion
    setShowConfirmDeleteAlert({
      message: "",
      isConfirm: false,
      enabled: false,
      header: "",
      subHeader: "",
    });
  }

  return (
    <IonPage>
      <HeaderTitle title="Profile" className="py-2" icon={personCircle} />
      <IonContent className="ion-padding">
        {/* ======================= Currency Modal ===================== */}
        <CurrencySelectionModal isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* ======================= Currency Modal ===================== */}

        {/* ======================= Alart Starts ===================== */}
        <IonAlert
          isOpen={showContactAlert}
          message={"thisrupt@pm.me"}
          header={"Contact Info"}
          onDidDismiss={() => setShowContactlert(false)}
        />
        <IonAlert
          isOpen={showCofirmDeleteAlert.enabled}
          message={showCofirmDeleteAlert.message}
          header={showCofirmDeleteAlert.header}
          subHeader={showCofirmDeleteAlert.subHeader}
          color="danger"
          onDidDismiss={() =>
            setShowConfirmDeleteAlert({
              message: "",
              isConfirm: false,
              enabled: false,
            })
          }
          buttons={[
            {
              text: "Cancel",
              cssClass: "ion-text-pirmary text-capitalize",
            },
            {
              text: "Confirm",
              cssClass: "text-danger text-capitalize",
              handler: () => deleteAccount(),
            },
          ]}
        />
        {/* ======================= Alart Ends ===================== */}
        <section className="mt-5 ion-text-center bg-light rounded-4 py-3 shadow">
          <div>
            <IonAvatar className="mx-auto" style={profileAvater}>
              <IonImg src={PlaceholderImage} />
            </IonAvatar>
            {/* TODO: display anonymous if not signed in */}
            <div className="mt-3">
              <big className="mt-2 fw-bold fs-1">Gaddiel Ighota</big> <br />
              <IonText>
                <small>ighotagaddiel98@gmail.com</small>
              </IonText>
            </div>
          </div>

          <IonList className="mt-3" lines="full">
            {/* TODO: hide if anonymous */}
            {/* Profile Info */}
            <IonItem routerDirection="forward" routerLink="/profile_info">
              <IonIcon icon={idCardOutline} slot="start" />
              <IonLabel>Profile Info</IonLabel>
            </IonItem>
            {/* Share */}
            <IonItem>
              <IonIcon icon={shareOutline} slot="start" />
              <IonLabel>Share</IonLabel>
            </IonItem>
            {/* Contact Us */}
            <IonItem onClick={() => setShowContactlert(true)}>
              <IonIcon icon={phonePortraitOutline} slot="start" />
              <IonLabel color={"primary"}>Contact Us</IonLabel>
            </IonItem>
            {/* Currency */}
            <IonItem onClick={() => setIsOpen(() => true)}>
              <IonIcon icon={logoEuro} slot="start" />
              <IonLabel color={"primary"}>Currency</IonLabel>
              <IonLabel color={"primary"} slot="end">{app_currency}</IonLabel>
            </IonItem>

            {/* TODO: hide if anonymous */}
            <IonItem
              onClick={() =>
                setShowConfirmDeleteAlert({
                  message: "Are you sure you want to continue?",
                  isConfirm: true,
                  enabled: true,
                  header: "Account Delete",
                  subHeader: "This process can't be undone",
                })
              }
            >
              <IonIcon icon={trashOutline} slot="start" color="danger" />
              <IonLabel color={"danger"}>Delete Account</IonLabel>
            </IonItem>
          </IonList>
        </section>

        {/* TODO: display sign in if anonymous */}
        <section className="mt-3">
          <IonButton
            expand="block"
            shape="round"
            className="py-2 text-capitalize"
            size="large"
          >
            Sign Out
            <IonIcon icon={logOutOutline} slot="end" />
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Me;

const profileAvater = {
  marginTop: "-3em",
};
