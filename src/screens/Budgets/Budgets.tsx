import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import {
  calendarNumberOutline,
  createOutline,
  searchOutline,
  trash,
} from "ionicons/icons";
import AddBudgetForm from "../../components/AddBudgetForm/AddBudgetForm";
import SearchBudgetPlans from "../../components/SearchBudgetPlans/SearchBudgetPlans";
import { formatDate, getOrCreateAppDBCollectionList } from "../../helpers/utils";
import { useRecoilState } from "recoil";
import { budgetAtom } from "../../atoms/budgetAtom";
import { Budget } from "../../@types/budget";
import { BUDGETS } from "../../helpers/keys";
import { saveData } from "../../helpers/storageSDKs";



const Budgets = () => {
  // [State] --------------------------------------------------------

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // [Recoil] --------------------------------------------------------

  const [budgets, setBudgets] = useRecoilState(budgetAtom);

  // [Effect] --------------------------------------------------------
  // useEffect(() => {
  //   (async () => {
  //     const storedBudgets = await getOrCreateAppDBCollectionList<Budget>(BUDGETS);
  //     setBudgets(storedBudgets);
  //   })();
  // }, []);


  useIonViewDidEnter(() => {
    (async () => {
      const storedBudgets = await getOrCreateAppDBCollectionList<Budget>(BUDGETS);
      setBudgets(storedBudgets);
    })();
  }, [budgets])


  async function deleteAllBudgets() {
    saveData(BUDGETS, [])
    setBudgets([])
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"} className="p-2">
          <IonTitle>Budget Plans</IonTitle>
          <IonIcon
            className="mx-2"
            icon={createOutline}
            slot="end"
            size="large"
            onClick={() => setShowCreateModal(true)}
          />
          <IonIcon
            className="mx-2"
            icon={trash}
            slot="end"
            size="large"
            onClick={() => deleteAllBudgets()}
          />
        </IonToolbar>
        <IonToolbar color={"primary"} className="p-2">
          <IonSearchbar mode="ios" />
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
        {/* <SearchBudgetPlans
          isOpen={showSearchModal}
          setIsOpen={setShowSearchModal}
        /> */}
        {/* ========================= [Search Modal Ends] ================================= */}
        {budgets.length > 0 ? budgets.map((budget) => (
          <IonCard
            className="ion-padding"
            routerDirection="forward"
            routerLink={`/budget/${budget.id}/${budget.id!}`}
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
                <p>{formatDate(budget.deadline)}</p>
              </div>
            </IonLabel>
          </IonCard>
          // FIXME: use a better not found error
        )) : <IonText className='text-muted'>No budget yet</IonText>}
      </IonContent>
    </IonPage>
  );
};

export default Budgets;
