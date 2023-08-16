import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, chevronForward, menu, personCircleOutline } from "ionicons/icons";
import { useCallback, useEffect, useState } from "react";

import ChartLine from "../../assets/images/chartline.png";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { utilsAtom } from "../../atoms/utilityAtom";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import {
  transactionsAtom,
  demoTransactionAtom,
} from "../../atoms/transactionAtom";
import { getSaveData, saveData } from "../../helpers/storageSDKs";
import { TRANSACTIONS } from "../../helpers/keys";
import { Transaction } from "../../@types/transactions";





const Home = () => {
  const setShowTabs = useSetRecoilState(utilsAtom);
  const [transactions, setAppTransactionsState] = useRecoilState(transactionsAtom);

  
  const totalIncome = useCallback(getTotalTransactionIcome, [])();
  const totalExpenses = useCallback(getTotalTransactionExpense, [])();
  const totalBalance = useCallback(getTotalBalance, [
    totalIncome,
    totalExpenses,
  ])();




  useEffect(() => {
    loadTransactions();
  }, []);

  useEffect(() => {
    setShowTabs({ showTabs: true });
  }, []);



  /**
   * Gets transactions from DB if avaiable, if trasnactions return null creates an array of trsnactions: Transaction[]
   * @returns transactions[] | []
   */
  async function getOrCreateTransactions(): Promise<Transaction[]> {
    const storedTransactions = (await getSaveData(TRANSACTIONS)) as Transaction[];
    if (storedTransactions === null) {
      saveData(TRANSACTIONS, []);
      return [];
    }
    return storedTransactions;
  }

  async function loadTransactions() {
    const transactions = await getOrCreateTransactions();
    setAppTransactionsState(transactions);
  }

  /**
   * Gets all income transactions and returns thier sum or zero (0) no transactions are found
   * @returns income
   */
  function getTotalTransactionIcome(): number {
    // check if transactions are empty
    if (transactions.length < 1) return 0;

    const income = transactions
      .filter((transaction) => transaction.type === "income")
      .map((transaction) => transaction.amount)
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    return income;
  }

  /**
   * Gets all expense transactions and returns thier sum or zero (0) no transactions are found
   * @returns expense
   */
  function getTotalTransactionExpense(): number {
    const expense = transactions
      .filter((transaction) => transaction.type === "expense")
      .map((transaction) => transaction.amount)
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    return expense;
  }

  function getTotalBalance(): number {
    return totalIncome + totalIncome;
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="px-2" color={"primary"}>
          {/* <IonIcon icon={menu} slot="start" size="large" /> */}
          <IonTitle className="">
            {/* diplay "Welcome Anonymous" if anonymous */}
            Welcome anonymous
          </IonTitle>
          <IonIcon
            icon={personCircleOutline}
            color={"light"}
            size="large"
            slot="end"
          />
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-no-padding ion-no-margin" color={"light"}>
        {/* Banner */}
        <section style={banner} className="rounded-bottom-4">
          <div style={bannerContent} className="ion-padding text-center">
            <span className="text-light">Current Balance</span>
            <h1 className="text-center text-light fw-3">
              <strong>${totalBalance}</strong>
            </h1>
          </div>
        </section>

        {/* counter dashboard */}
        <section
          style={counterDashboard}
          className="px-3 py-2 mx-auto rounded-4 shadow"
        >
          <div className="border-right border-primary my-2">
            <IonText className="fw-5">
              <small>Income</small>
            </IonText>{" "}
            <br />
            <IonText color={"success"} className="fs-4 fw-4">
              <strong>${totalIncome}</strong>
              <br />
            </IonText>
          </div>

          <div className="">
            <IonText className="fw-5">
              <small>Expense</small>
            </IonText>{" "}
            <br />
            <IonText color={"danger"} className="fs-4 fw-4">
              <strong>${totalExpenses}</strong>
              <br />
            </IonText>
          </div>
        </section>

        {/* Section add income/expense */}
        <section className="p-3 rounded-4 shadow" style={counterDashboard2}>
          <div className="text-center">
            <div>
              {/* Add Income */}
              <IonRouterLink
                routerLink="/add_transaction/income"
                routerDirection="forward"
                className="d-felx align-items-center text-success"
              >
                {/* <IonIcon icon={add} slot="" /> */}
                <small>Add Icome</small>
              </IonRouterLink>

              {/* Add Expense */}
              <IonRouterLink
                routerLink="/add_transaction/expense"
                routerDirection="forward"
                className="ms-4 text-danger"
              >
                {/* <IonIcon icon={add} /> */}
                <small>Add Expense</small>
              </IonRouterLink>
            </div>
          </div>
        </section>

        {/* Income Transactions */}
        <section className="ion-padding mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <strong>Income</strong>
            <IonRouterLink
              routerLink="/transaction/income/3"
              routerDirection="forward"
            >
              <small>
                <strong>
                  See all <IonIcon icon={chevronForward} />{" "}
                </strong>
              </small>
            </IonRouterLink>
          </div>

          {/* Income List */}
          <IonList lines="none" className="ion-margin-top">
            {transactions.length > 0 ? (
              transactions
                .filter((t) => t.type === "income")
                .map((item) => (
                  <>
                    {item.type === "income" ? (
                      <TransactionItem
                        amount={item.amount}
                        category={item.category}
                        timestamp={item.timestamp}
                        title={item.title}
                        type={item.type}
                        key={item.id}
                      />
                    ) : null}
                  </>
                ))
            ) : (
              <IonText className="text-muted p-2">
                <small>No income yet</small>
              </IonText>
            )}
          </IonList>
        </section>

        {/* Expense  Transactions */}
        <section className="ion-padding mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <strong>Expense</strong>

            <IonRouterLink
              routerLink="/transaction/expense/4"
              routerDirection="forward"
            >
              <small>
                <strong>
                  See all <IonIcon icon={chevronForward} />{" "}
                </strong>
              </small>
            </IonRouterLink>
          </div>

          {/* Income List */}
          <IonList lines="none" className="ion-margin-top">
            {transactions.length > 0 ? (
              transactions
                .filter((t) => t.type === "expense")
                .map((item) => (
                  <>
                    {item.type === "expense" ? (
                      <TransactionItem
                        amount={item.amount}
                        category={item.category}
                        timestamp={item.timestamp}
                        title={item.title}
                        type={item.type}
                        key={item.id}
                      />
                    ) : null}
                  </>
                ))
            ) : (
              <IonText className="text-muted p-2">
                <small>No expenses yet</small>
              </IonText>
            )}
          </IonList>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;

const banner = {
  height: "45vh",
  backgroundColor: "var(--ion-color-primary)",
  overflow: "hidden",
};

const bannerContent = {
  height: "100%",
  width: "100vw",
  backgroundImage: `url(${ChartLine})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const counterDashboard = {
  backgroundColor: "var(--ion-color-light)",
  marginTop: "-290px",
  width: "90vw",
  height: "20vh",
};
const counterDashboard2 = {
  backgroundColor: "var(--ion-color-light)",
  marginTop: "10px",
  width: "90vw",
  height: "7vh",
  marginLeft: "auto",
  marginRight: "auto",
};
