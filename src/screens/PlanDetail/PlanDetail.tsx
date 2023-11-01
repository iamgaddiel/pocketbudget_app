import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonViewDidEnter,
} from "@ionic/react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { BudgetCategory, BudgetItem } from "../../@types/budget";
import { budgetItemAtom } from "../../atoms/budgetAtom";
import BudgetPlanItem from "../../components/BudgetItem/BudgetPlanItem";
import { createOutline } from "ionicons/icons";
import { getOrCreateAppDBCollectionList } from "../../helpers/utils";
import { BUDGET_ITEMS } from "../../helpers/keys";
import CreatePlanModal from "../../components/CreatePlanMdal/CreatePlanMdal";

const PlanDetail = () => {
  const { budgetTitle, budgetId } = useParams<{
    budgetTitle: string;
    budgetId: string;
  }>();

  const [budgetItems, setBudgetItems] = useRecoilState(budgetItemAtom);

  const [category, setCategory] = useState<BudgetCategory | "all">("all");

  // const budgets = useRecoilValue(budgetDemoAtom);

  const [openCreateModal, setCrateModal] = useState(false);


  useIonViewDidEnter(() => {
    getBudgetItems()
  }, [budgetItems])


  // useEffect(() => {
  //   (async () => {
  //     const loadedBudgetItems = await getOrCreateAppDBCollectionList<BudgetItem>(BUDGET_ITEMS);
  //     setBudgetItems(loadedBudgetItems);
  //   })();
  // }, [budgetItems]);

  async function getBudgetItems() {
    const loadedBudgetItems = await getOrCreateAppDBCollectionList<BudgetItem>(BUDGET_ITEMS);
    setBudgetItems(loadedBudgetItems);
  }

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      getBudgetItems()
      event.detail.complete();
    }, 3000);
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"} className="pe-3">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/budgets" />
          </IonButtons>
          <IonTitle className="text-capitalize">{category} plans</IonTitle>
          <IonIcon
            icon={createOutline}
            size="large"
            slot="end"
            onClick={() => setCrateModal(true)}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent className="">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <section className="ion-margin-top ion-text-center">
          <IonTitle></IonTitle>
        </section>


        <IonList lines="none" className="ion-margin-top">
          {budgetItems.filter(item => item.budget === budgetId).map((item) => (
            <>
              {item.category === category ? (
                <BudgetPlanItem
                  amount={item.amount}
                  category={item.category}
                  title={item.title}
                  budgetPlan={item}
                  key={item.id}
                />
              ) : null}

              {category === "all" ? (
                <BudgetPlanItem
                  amount={item.amount}
                  category={item.category}
                  title={item.title}
                  budgetPlan={item}
                  key={item.id}
                />
              ) : null}
            </>
          ))}
        </IonList>

        {/* ========================= [Add Budget Item Modal Start] ================================= */}
        <section className="modal">
          <CreatePlanModal isOpen={openCreateModal} setIsOpen={setCrateModal} budgetId={budgetId} />
        </section>
        {/* ========================= [Add Budget Item Modal Stop] ================================= */}
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonChip color={"primary"} onClick={() => setCategory("all")}>
            <small>All</small>
          </IonChip>
          <IonChip color={"danger"} onClick={() => setCategory("urgent")}>
            <small>Urgent</small>
          </IonChip>
          <IonChip color={"tertiary"} onClick={() => setCategory("needed")}>
            <small>Needed</small>
          </IonChip>
          <IonChip color={"secondary"} onClick={() => setCategory("important")}>
            <small>Important</small>
          </IonChip>
          <IonChip color={"dark"} onClick={() => setCategory("whishlist")}>
            <small>Whistlist</small>
          </IonChip>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default PlanDetail;
