import { IonModal, IonContent, IonText, IonIcon, IonInput, IonChip, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { clipboardOutline, schoolOutline, hammerOutline, cartOutline, carSportOutline, cashOutline, airplane, medkitOutline, giftOutline, person, briefcaseOutline, optionsOutline, pencilOutline } from 'ionicons/icons';
import React, { useState } from 'react'
import { ModalParam } from '../../@types/componetsPrams';
import { Budget, BudgetItem } from '../../@types/budget';




interface EditPlanMOdalParam {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    budgetPlan: BudgetItem,
} 


const EditPlanModal: React.FC<EditPlanMOdalParam>  = ({ isOpen, setIsOpen, budgetPlan}) => {
    const [suggestions, setSuggestions] = useState("");

  
    return (
      <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.5}
      breakpoints={[0.5, 0.7, 0.9, 1]}
      onDidDismiss={() => setIsOpen(false)}
    >
      <IonContent className="ion-padding">
        <section>
          <IonText className="fw-strong">Edit Plan</IonText>
          <hr />
        </section>

        <form action="">
          {/* Title */}
          <div className="d-flex align-items-center">
            <IonIcon icon={clipboardOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="Buy a car"
              label="Title"
              labelPlacement="floating"
              className="ion-margin-start"
              value={budgetPlan.title ?? suggestions}
            />
          </div>
          <div className="my-3">
            <IonChip outline onClick={() => setSuggestions("Education")}>
              <IonIcon icon={schoolOutline} />
              <IonText>education</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Utility")}>
              <IonIcon icon={hammerOutline} />
              <IonText>utility</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Shoping")}>
              <IonIcon icon={cartOutline} />
              <IonText>shoping</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Transportation")}>
              <IonIcon icon={carSportOutline} />
              <IonText>transportation</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Savings")}>
              <IonIcon icon={cashOutline} />
              <IonText>savings</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Travel")}>
              <IonIcon icon={airplane} />
              <IonText>travel</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Health")}>
              <IonIcon icon={medkitOutline} />
              <IonText>health</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Gift")}>
              <IonIcon icon={giftOutline} />
              <IonText>gift</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Personal")}>
              <IonIcon icon={person} />
              <IonText>peronal</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Work")}>
              <IonIcon icon={briefcaseOutline} />
              <IonText>work</IonText>
            </IonChip>
          </div>
  
          {/* Amount */}
          <div className="d-flex align-items-center">
            <IonIcon icon={cashOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="$445,789"
              label="Amount"
              labelPlacement="floating"
              inputMode="numeric"
              className="ion-margin-start"
              value={budgetPlan.amount}
            />
          </div>
  
          {/* Category */}
          <div className="d-flex align-items-center">
            <IonIcon icon={optionsOutline} slot="start" size="large" />
            <IonSelect label="Category" className="ion-margin-start" value={budgetPlan.category}>
              <IonSelectOption value={"urgent"}>Urgent</IonSelectOption>
              <IonSelectOption value={"needed"}>Needed</IonSelectOption>
              <IonSelectOption value={"important"}>
                Important
              </IonSelectOption>
              <IonSelectOption value={"whishlist"}>
                Whislist
              </IonSelectOption>
            </IonSelect>
          </div>
  
          {/* Extra Note */}
          <div className="d-flex align-items-center">
            <IonIcon icon={pencilOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="Just some random thought"
              label="Description"
              labelPlacement="floating"
              className="ion-margin-start"
              helperText="optional"
              value={budgetPlan.aditional_decription}
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