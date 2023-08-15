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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { BudgetCategory } from "../../@types/budget";
import { budgetDemoAtom } from "../../atoms/budgetAtom";
import CreatePlanMdal from "../../components/CreatePlanMdal/CreatePlanMdal";
import BudgetPlanItem from "../../components/BudgetItem/BudgetPlanItem";
import { createOutline } from "ionicons/icons";

const PlanDetail = () => {
  const { budgetTitle, budgetId } = useParams<{
    budgetTitle: string;
    budgetId: string;
  }>();

  const [category, setCategory] = useState<BudgetCategory | "all">("all");
  const budgets = useRecoilValue(budgetDemoAtom);

  const [openCreateModal, setCrateModal] = useState(false);

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
          {budgets.map((item) => (
            <>
              {item.category === category ? (
                <BudgetPlanItem
                  amount={item.amount}
                  category={item.category}
                  title={item.title}
                  is_complete={false}
                  budgetPlan={item}
                  />
                  ) : null}

              {category === "all" ? (
                <BudgetPlanItem
                amount={item.amount}
                  category={item.category}
                  title={item.title}
                  is_complete={false}
                  budgetPlan={item}
                />
              ) : null}
            </>
          ))}
        </IonList>

        <section className="modal">
          <CreatePlanMdal isOpen={openCreateModal} setIsOpen={setCrateModal} />
        </section>
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
