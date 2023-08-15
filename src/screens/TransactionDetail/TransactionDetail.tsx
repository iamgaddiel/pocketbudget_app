import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import { TrasctionDetailParam } from "../../@types/transactions";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import { useRecoilValue } from "recoil";
import { transactionsDemoAtom } from "../../atoms/transactionAtom";

function TransactionDetail() {
  const { transactionType, trasactionId } = useParams<TrasctionDetailParam>();
  const transactions = useRecoilValue(transactionsDemoAtom);

  //   const BIBLE = "2peter 3:9"
  // const PRAy_like_this_30_tile  = pray fisrt (then prophesy)

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"} className="">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <section
          style={banner}
          className="rounded-bottom-4 ion-text-center text-light"
          color={"light"}
        >
          <div>
            {transactionType === "income" && <IonText>Total Icome</IonText>}
            {transactionType === "expense" && <IonText>Total Expense</IonText>}

            <h1 className="fw-bold">$200,0334.00</h1>
          </div>
        </section>

        <IonItem>
          <IonList>
            {transactionType === "income" &&
              transactions.map((item) => (
                <>
                  {item.type === "income" && (
                    <TransactionItem
                      amount={item.amount}
                      category={item.category}
                      timestamp={item.timestamp}
                      title={item.title}
                      type={item.type}
                    />
                  )}
                </>
              ))}

            {transactionType === "expense" &&
              transactions.map((item) => (
                <>
                  {item.type === "expense" && (
                    <TransactionItem
                      amount={item.amount}
                      category={item.category}
                      timestamp={item.timestamp}
                      title={item.title}
                      type={item.type}
                    />
                  )}
                </>
              ))}
          </IonList>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

export default TransactionDetail;

const banner = {
  height: "15vh",
  backgroundColor: "var(--ion-color-primary)",
  overflow: "hidden",
};
