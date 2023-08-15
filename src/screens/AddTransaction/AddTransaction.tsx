import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  cashOutline,
  linkOutline,
  menuOutline,
  pencilOutline,
} from "ionicons/icons";
import React from "react";
import { useParams } from "react-router";

const AddTransaction = () => {
  const { transactionType } = useParams<{ transactionType: string }>();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle className="fw-small">Add Transacntion </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <form action="">
          {/* Title */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={pencilOutline} size="large" />
              <IonInput
                type="text"
                label="Title"
                labelPlacement="floating"
                placeholder="Get a gift"
                className="ms-3"
              />
            </div>
          </IonCard>

          {/* Transaction Type */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={linkOutline} size="large" />
              <IonSelect
                placeholder="Income"
                label="Transaction type"
                labelPlacement="floating"
                className="ms-3"
                value={transactionType === "income" ? "income" : "expense"}
                disabled
              >
                <IonSelectOption value={"income"}>Income</IonSelectOption>
                <IonSelectOption value={"expense"}>Expense</IonSelectOption>
              </IonSelect>
            </div>
          </IonCard>

          {/* Amount */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={cashOutline} size="large" />
              <IonInput
                type="text"
                label="Amount"
                inputMode="numeric"
                labelPlacement="floating"
                placeholder="$100,000"
                className="ms-3"
              />
            </div>
          </IonCard>

          {/* Transaction Category */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={menuOutline} size="large" />
              <IonSelect
                placeholder="Income"
                label="Transaction Type"
                labelPlacement="floating"
                className="ms-3"
              >
                <IonSelectOption value={"transportation"}>
                  transportation
                </IonSelectOption>
                <IonSelectOption value={"food"}>food</IonSelectOption>
                <IonSelectOption value={"gift"}>gift</IonSelectOption>
                <IonSelectOption value={"savings"}>savings</IonSelectOption>
                <IonSelectOption value={"health"}>health</IonSelectOption>
                <IonSelectOption value={"utility"}>utility</IonSelectOption>
                <IonSelectOption value={"education"}>education</IonSelectOption>
                <IonSelectOption value={"travel"}>travel</IonSelectOption>
                <IonSelectOption value={"shopping"}>shopping</IonSelectOption>
                <IonSelectOption value={"personal"}>personal</IonSelectOption>
                <IonSelectOption value={"telecomes"}>telecomes</IonSelectOption>
              </IonSelect>
            </div>
         </IonCard>

          <div className="mt-5">
            <IonButton expand="block" shape="round" size="large" className="text-capitalize">Confirm</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddTransaction;
