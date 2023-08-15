import { IonModal, IonContent, IonText, IonIcon, IonInput, IonChip, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { clipboardOutline, schoolOutline, hammerOutline, cartOutline, carSportOutline, cashOutline, airplane, medkitOutline, giftOutline, person, briefcaseOutline, optionsOutline, pencilOutline, atOutline, personOutline, phonePortraitOutline } from 'ionicons/icons';
import React, { useState } from 'react'
import { ModalParam } from '../../@types/componetsPrams';
import { Budget, BudgetItem } from '../../@types/budget';




interface EditPlanMOdalParam {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    user: BudgetItem,
} 


const EditPlanModal: React.FC<EditPlanMOdalParam>  = ({ isOpen, setIsOpen, user}) => {
  //TODO: accpet user Object as Params
    const [suggestions, setSuggestions] = useState("");

  
    return (
      <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.5}
      breakpoints={[0.5, 0.7, 0.9]}
      onDidDismiss={() => setIsOpen(false)}
    >
      <IonContent className="ion-padding">
        <section>
          <IonText className="fw-strong">Edit Profile</IonText>
          <hr />
        </section>

        <form action="">
          {/* Name */}
          <div className="d-flex align-items-center">
            <IonIcon icon={personOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="John Doe"
              label="Title"
              labelPlacement="fixed"
              className="ion-margin-start"
              value={user.title ?? suggestions}
            />
          </div>
  
          {/* Email */}
          <div className="d-flex align-items-center">
            <IonIcon icon={atOutline} slot="start" size="large" />
            <IonInput
              type="email"
              placeholder="$445,789"
              label="Email"
              labelPlacement="fixed"
              className="ion-margin-start"
              value={user.amount}
            />
          </div>
  
          {/* Phone */}
          <div className="d-flex align-items-center">
            <IonIcon icon={phonePortraitOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="Just some random thought"
              label="Phone"
              labelPlacement="floating"
              className="ion-margin-start"
              helperText="optional"
              value={user.aditional_decription}
            />
          </div>
  
          {/* button */}
          <IonButton
            type="submit"
            expand="block"
            shape='round'
            className="ion-padding-vertical"
          >
            Confirm
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
    )
  }

export default EditPlanModal