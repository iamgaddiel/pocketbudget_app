import React from "react";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { IonContent, IonList, IonPage } from "@ionic/react";
import { calendarOutline } from "ionicons/icons";
import { useRecoilValue } from "recoil";
import { demoTransactionAtom } from "../../atoms/transactionAtom";
import TransactionItem from "../../components/TransactionItem/TransactionItem";

const History = () => {
  const transactions = useRecoilValue(demoTransactionAtom);
  return (
    <IonPage>
      <HeaderTitle title="History" icon={calendarOutline} className="py-2" />
      <IonContent className="ion-padding">
        <IonList lines="none">
          {transactions.map((item) => (
            <TransactionItem
              amount={item.amount}
              category={item.category}
              timestamp={item.timestamp}
              title={item.title}
              type={item.type}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default History;
