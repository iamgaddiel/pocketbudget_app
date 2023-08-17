import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import {
  calendarNumberOutline,
  createOutline,
  searchOutline,
} from "ionicons/icons";
import AddBudgetForm from "../../components/AddBudgetForm/AddBudgetForm";
import SearchBudgetPlans from "../../components/SearchBudgetPlans/SearchBudgetPlans";
import { getOrCreateBudget } from "../../helpers/utils";
import { useRecoilState } from "recoil";
import { budgetAtom } from "../../atoms/budgetAtom";



const Budget = () => {
  // [State] --------------------------------------------------------

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // [Recoil] --------------------------------------------------------

  const [budgets, setBudgets] = useRecoilState(budgetAtom);

  // [Effect] --------------------------------------------------------
  useEffect(() => {
    (async () => {
      const storedBudgets = await getOrCreateBudget();
      setBudgets(storedBudgets);
    })();
  }, []);

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
        {budgets.length > 0 ? budgets.map((budget) => (
          <IonCard
            className="ion-padding"
            routerDirection="forward"
            routerLink={`/budget/title/${budget.id!}`}
            key={budget.id}
          >
            <IonLabel className="ms-3 d-flex align-items-center">
              <IonIcon
                icon={calendarNumberOutline}
                color={"danger"}
                size="large"
              />
              <div className="ion-margin-start">
                <h2>{budget.title}</h2>
                <p>{budget.deadline}</p>
              </div>
            </IonLabel>
          </IonCard>
          // FIXME: use a better not found error
        )) : <IonText classNmae='text-muted'>No budtet yet</IonText>}
      </IonContent>
    </IonPage>
  );
};

export default Budget;
