import React, { useEffect, useState } from "react";
import { BudgetCategory, BudgetItem } from "../../@types/budget";
import {
  IonItem,
  IonIcon,
  IonLabel,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
} from "@ionic/react";
import { optionsOutline, ribbonOutline, trash } from "ionicons/icons";
import EditPlanModal from "../EditPlanModal/EditPlanModal";
import { useRecoilState } from "recoil";
import { budgetItemAtom } from "../../atoms/budgetAtom";

interface Prop {
  category: BudgetCategory | "all";
  title: string;
  amount: number;
  is_complete: boolean;
  budgetPlan: BudgetItem
}

const BudgetPlanItem: React.FC<Prop> = ({
  category,
  title,
  amount,
  is_complete,
  budgetPlan
}) => {
  const [openEditModal, setOpenEditModal] = useState(false)




  async function handlePlanItemDelete(budgetPlanId: string){
    //TODO: Delete budgetPlan
  }

  return (
    <>
      {/* ============================= [Show Edit Modal Start]  ================================ */}
      <EditPlanModal isOpen={openEditModal} budgetPlan={budgetPlan} setIsOpen={setOpenEditModal} />
      {/* ============================= [Show Edit Modal Stop ] ================================ */}

      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption
            className=""
            color={"success"}
            expandable
            onClick={() => setOpenEditModal(true)}
          >
            <IonIcon icon={optionsOutline} slot="icon-only" />
          </IonItemOption>
        </IonItemOptions>

        <IonItem lines="none">
          <div
            className={`d-flex align-items-center justify-content-center rounded-circle p-2 ${
              category === "urgent" && "bg-danger"
            } ${category === "needed" && "bg-warning"} ${
              category === "important" && "bg-success"
            } ${category === "whishlist" && "bg-dark"} ${
              category === "all" && "bg-primary"
            } `}
          >
            <IonIcon icon={ribbonOutline} size="large" color={"light"} />
          </div>

          <IonLabel className="ion-margin-start">
            <h2>{title}</h2>
            <p>{amount}</p>
          </IonLabel>

          <span className="">
            <IonCheckbox
              checked={is_complete}
              disabled={is_complete}
              color={"primary"}
            />
          </span>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption className="" color={"danger"} expandable>
            <IonIcon icon={trash} slot="icon-only" onClick={() => handlePlanItemDelete(budgetPlan.id!)} />
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </>
  );
};

export default BudgetPlanItem;
