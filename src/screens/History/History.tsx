import React from "react";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { IonContent, IonIcon, IonList, IonPage } from "@ionic/react";
import { calendarOutline, cloudOfflineOutline } from "ionicons/icons";
import { useRecoilValue } from "recoil";
import { demoTransactionAtom, transactionsAtom } from "../../atoms/transactionAtom";
import TransactionItem from "../../components/TransactionItem/TransactionItem";

const History = () => {
  const transactions = useRecoilValue(transactionsAtom);
  return (
    <IonPage>
      <HeaderTitle title="History" icon={calendarOutline} className="py-2" />
      <IonContent className="ion-padding">
        <IonList lines="none">
          {transactions.length >= 1 ? transactions.map((item) => (
            <TransactionItem
              amount={item.amount}
              category={item.category}
              timestamp={item.timestamp}
              title={item.title}
              type={item.type}
            />
          )) : <h4 className="text-muted text-center d-flex align-items-center justify-content-center"><IonIcon icon={cloudOfflineOutline} className="me-2" /> { } No History</h4>
        }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default History;
