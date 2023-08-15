import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import {
  calendarNumberOutline,
  createOutline,
  searchOutline,
} from "ionicons/icons";
import AddBudgetForm from "../../components/AddBudgetForm/AddBudgetForm";
import SearchBudgetPlans from "../../components/SearchBudgetPlans/SearchBudgetPlans";

const Budget = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"} className="p-2">
          <IonIcon
            className="mx-2"
            icon={searchOutline}
            slot="start"
            size="large"
            onClick={() => setShowSearchModal(true)}
          />
          <IonTitle>Budget Plans</IonTitle>
          <IonIcon
            className="mx-2"
            icon={createOutline}
            slot="end"
            size="large"
            onClick={() => setShowCreateModal(true)}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* ========================= [Add Budget Modal Start] ================================= */}
        <AddBudgetForm
          isOpen={showCreateModal}
          setIsOpen={setShowCreateModal}
        />
        {/* ========================= [Add Budget Modal Ends] ================================= */}
        {/* ========================= [Search Modal Start] ================================= */}
        <SearchBudgetPlans
          isOpen={showSearchModal}
          setIsOpen={setShowSearchModal}
        />
        {/* ========================= [Search Modal Ends] ================================= */}

        <IonCard
          className="ion-padding"
          routerDirection="forward"
          routerLink={`/budget/title/2`}
        >
          <IonLabel className="ms-3 d-flex align-items-center">
            <IonIcon
              icon={calendarNumberOutline}
              color={"danger"}
              size="large"
            />
            <div className="ion-margin-start">
              <h2>New Plan</h2>
              <p>gedssdf</p>
            </div>
          </IonLabel>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Budget;
