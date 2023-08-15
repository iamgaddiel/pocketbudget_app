import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  checkboxOutline,
  personCircleOutline,
  calendarOutline,
} from "ionicons/icons";
import { Route } from "react-router";
import { useRecoilValue } from "recoil";
import { utilsAtom } from "./atoms/utilityAtom";
import Home from "./screens/Home/Home";
import TransactionDetail from "./screens/TransactionDetail/TransactionDetail";
import Budget from "./screens/Budget/Budget";
import PlanDetail from "./screens/PlanDetail/PlanDetail";
import AddTransaction from "./screens/AddTransaction/AddTransaction";
import History from "./screens/History/History";
import Me from "./screens/Me/Me";
import ProfilelInfo from "./screens/ProfilelInfo/ProfilelInfo";

const Routes = () => {
  const { showTabs } = useRecoilValue(utilsAtom);

  return (
    <IonReactRouter>
      {/* <Route exact path="/" render={() => <Landing />} /> */}
      <Route exact path="/" render={() => <Home />} />
      {/* <Route exact path="/" render={() => <Landing />} /> */}
      <Route exact path="/transaction/:transactionType/:transactionId" render={() => <TransactionDetail />} />
      <Route exact path="/budgets" render={() => <Budget />} />
      <Route exact path="/budget/:title/:budgetId" render={() => <PlanDetail />} />
      <Route exact path="/add_transaction/:transactionType" render={() => <AddTransaction />} />
      <Route exact path="/history" render={() => <History />} />
      <Route exact path="/me" render={() => <Me />} />
      <Route exact path="/profile_info" render={() => <ProfilelInfo />} />

      {showTabs ? (
        <IonTabs>
          <IonRouterOutlet>
          <Route exact path="/profile_info" render={() => <ProfilelInfo />} />
          <Route exact path="/me" render={() => <Me />} />
          <Route exact path="/history" render={() => <History />} />
          <Route exact path="/add_transaction/:transactionType" render={() => <AddTransaction />} />
          <Route exact path="/budget/:budgetId/:budgetId" render={() => <PlanDetail />} />
          <Route exact path="/budgets" render={() => <Budget />} />
          <Route exact path="/transaction/:transactionType/:transactionId" render={() => <TransactionDetail />} />
            {/* <Route exact path="/" render={() => <Landing />} /> */}
            <Route exact path="/" render={() => <Home />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" className="ion-padding-vertical">
            <IonTabButton tab="tab1" href="/">
              <IonIcon icon={homeOutline} size="large" />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/budgets">
              <IonIcon icon={checkboxOutline} size="large" />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/history">
              <IonIcon icon={calendarOutline} size="large" />
            </IonTabButton>
            <IonTabButton tab="tab4" href="/me">
              <IonIcon icon={personCircleOutline} size="large" />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      ) : null}
    </IonReactRouter>
  );
};

export default Routes;
