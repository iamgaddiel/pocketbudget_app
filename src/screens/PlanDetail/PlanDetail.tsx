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
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { BudgetCategory } from "../../@types/budget";
import { budgetDemoAtom, budgetItemAtom } from "../../atoms/budgetAtom";
import CreatePlanMdal from "../../components/CreatePlanMdal/CreatePlanMdal";
import BudgetPlanItem from "../../components/BudgetItem/BudgetPlanItem";
import { createOutline } from "ionicons/icons";
import { getOrCreateBudgetItem } from "../../helpers/utils";

const PlanDetail = () => {
  const { budgetTitle, budgetId } = useParams<{
    budgetTitle: string;
    budgetId: string;
  }>();

  const [budgetItems, setBudgetItems] = useRecoilState(budgetItemAtom);

  const [category, setCategory] = useState<BudgetCategory | "all">("all");

  const budgets = useRecoilValue(budgetDemoAtom);

  const [openCreateModal, setCrateModal] = useState(false);

  useEffect(() => {
    (async () => {
      const loadedBudgetItems = await getOrCreateBudgetItem();
      setBudgetItems(loadedBudgetItems);
    })();
  }, [budgetItems]);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"}>
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
        <section className="ion-margin-top ion-text-center">
          <IonTitle></IonTitle>
        </section>


        <IonList lines="none" className="ion-margin-top">
          {budgetItems.filter(item => item.budget === budgetId).map((item) => (
            <>
              {item.category === category  ? (
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
          <CreatePlanMdal isOpen={openCreateModal} setIsOpen={setCrateModal} budgetId={budgetId} />
        </section>
        {/* ========================= [Add Budget Item Modal Stop] ================================= */}
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonChip color={"primary"} onClick={() => setCategory("all")}>
            All
          </IonChip>
          <IonChip color={"danger"} onClick={() => setCategory("urgent")}>
            Urgent
          </IonChip>
          <IonChip color={"tertiary"} onClick={() => setCategory("needed")}>
            Needed
          </IonChip>
          <IonChip color={"secondary"} onClick={() => setCategory("important")}>
            Important
          </IonChip>
          <IonChip color={"dark"} onClick={() => setCategory("whishlist")}>
            Whistlist
          </IonChip>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default PlanDetail;
