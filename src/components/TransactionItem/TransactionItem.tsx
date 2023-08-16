import React from "react";
import { TransactionCaegory, TransactionType } from "../../@types/transactions";
import { IonItem, IonIcon, IonLabel, IonText } from "@ionic/react";
import {
  school,
  pizza,
  busOutline,
  phoneLandscapeOutline,
  cartOutline,
  walletOutline,
  personOutline,
  addOutline,
  giftOutline,
  settingsOutline,
} from "ionicons/icons";

interface TransactionItemPrams {
  type: TransactionType;
  title: string;
  timestamp: string;
  category: TransactionCaegory;
  amount: number;
}

const TransactionItem: React.FC<TransactionItemPrams> = ({
  type,
  title,
  timestamp,
  category,
  amount,
}) => {
  return (
    <IonItem lines="none">
      <div
        className={`d-flex align-items-center justify-content-center rounded-circle p-2 ${
          type === "income" && "bg-success"
        } ${type === "expense" && "bg-danger"}`}
      >
        {/* Education */}
        {category === "education" ? (
          <IonIcon icon={school} size="large" color={"light"} />
        ) : null}

        {category === "food" ? (
          <IonIcon icon={pizza} size="large" color={"light"} />
        ) : null}

        {category === "transportation" ? (
          <IonIcon icon={busOutline} size="large" color={"light"} />
        ) : null}

        {category === "telecomes" ? (
          <IonIcon icon={phoneLandscapeOutline} size="large" color={"light"} />
        ) : null}

        {category === "shopping" ? (
          <IonIcon icon={cartOutline} size="large" color={"light"} />
        ) : null}

        {category === "savings" ? (
          <IonIcon icon={walletOutline} size="large" color={"light"} />
        ) : null}

        {category === "personal" ? (
          <IonIcon icon={personOutline} size="large" color={"light"} />
        ) : null}

        {category === "health" ? (
          <IonIcon icon={addOutline} size="large" color={"light"} />
        ) : null}

        {category === "gift" ? (
          <IonIcon icon={giftOutline} size="large" color={"light"} />
        ) : null}
        {category === "utility" ? (
          <IonIcon icon={settingsOutline} size="large" color={"light"} />
        ) : null}
      </div>

      <IonLabel className="ion-margin-start">
        <h2>{title}</h2>
        <p>{timestamp}</p>
      </IonLabel>

      {type === "income" && (
        <span className="">
          <IonText className="text-success fw-bold" slot="end">
            <small>+{amount}</small>
          </IonText>
        </span>
      )}

      {type === "expense" && (
        <span className="">
          <IonText className="text-danger fw-bold" slot="end">
            <small>+{amount}</small>
          </IonText>
        </span>
      )}
    </IonItem>
  );
};

export default TransactionItem;
