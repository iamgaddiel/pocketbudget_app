import React, { useCallback, useEffect, useState } from "react";
import { BudgetCategory, BudgetItem } from "../../@types/budget";
import {
  IonItem,
  IonIcon,
  IonLabel,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonAlert,
} from "@ionic/react";
import { checkmarkOutline, optionsOutline, ribbonOutline, trash } from "ionicons/icons";
import EditPlanModal from "../EditPlanModal/EditPlanModal";
import { BUDGET_ITEMS } from "../../helpers/keys";
import { getSaveData, saveData } from "../../helpers/storageSDKs";
import { useSetRecoilState } from "recoil";
import { budgetItemAtom } from "../../atoms/budgetAtom";
import { getOrCreateAppDBCollectionList, getTimestamp, updateAppDBCollection } from "../../helpers/utils";

interface Prop {
  category: BudgetCategory | "all";
  title: string;
  amount: number;
  budgetPlan: BudgetItem;
}

const BudgetPlanItem: React.FC<Prop> = ({
  category,
  title,
  amount,
  budgetPlan: budgetItem,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const setBudgetItems = useSetRecoilState(budgetItemAtom);

  const [showAlert, setShowAleart] = useState({
    enabled: false,
    itemTitle: "",
  });






  function removeObjectFromArray<T>(array: T[], objectToDelete: T): T[] {
    const indexToDelete = array.indexOf(objectToDelete);

    if (indexToDelete !== -1) {
      return array.slice(0, indexToDelete).concat(array.slice(indexToDelete + 1));
    }

    return array;
  }


  async function handlePlanItemDelete(budgetPlanId: string) {
    const budgetPlanItems = await getOrCreateAppDBCollectionList<BudgetItem>(BUDGET_ITEMS)

    const updateBudgetItems = budgetPlanItems.filter(item => item?.id !== budgetPlanId)

    saveData(BUDGET_ITEMS, updateBudgetItems); // save to DB

    setBudgetItems(updateBudgetItems); // save to App State

    setShowAleart({ enabled: false, itemTitle: '' }) // reset aleart object
  }


  async function toggleItemComplete() {
    const newBudgetItemValues: BudgetItem = {
      ...budgetItem,
      is_complete: true,
      updated: getTimestamp(),
    };

    const budgetItems = (await getSaveData(BUDGET_ITEMS)) as BudgetItem[];

    // Get budgetItem
    const currentBudgetItemValues = budgetItems.find(
      (item) => item.id === budgetItem.id
    );

    // Get budgetItemIndex
    const currentBudgetItemIndex = budgetItems.findIndex(
      (item) => item.id === budgetItem.id
    );

    // Update budget values
    const updatedBudgetItem = {
      ...currentBudgetItemValues,
      ...newBudgetItemValues,
    };

    // Update budgetItems with update budgetItem values
    budgetItems[currentBudgetItemIndex] = updatedBudgetItem;

    saveData(BUDGET_ITEMS, budgetItems);
    setBudgetItems(budgetItems);
  }

  return (
    <section>
      <IonAlert
        isOpen={showAlert.enabled}
        title={`Delete "${showAlert.itemTitle}"`}
        message={"You are about to delete an item"}
        buttons={[
          {
            text: "Cancel",
          },
          {
            text: "Confirm",
            cssClass: "text-danger",
            handler: () => handlePlanItemDelete(budgetItem.id!),
            // handler: () => console.log(budgetItem.id!),
          },
        ]}
        onDidDismiss={() => setShowAleart({
          enabled: false,
          itemTitle: ''
        })}
      />
      {/* ============================= [Show Edit Modal Start]  ================================ */}
      <EditPlanModal
        isOpen={openEditModal}
        budgetPlan={budgetItem}
        setIsOpen={setOpenEditModal}
      />
      {/* ============================= [Show Edit Modal Stop ] ================================ */}

      <IonItemSliding>

        <IonItemOptions side="start">
          <IonItemOption className="" color={"danger"} expandable>
            <IonIcon
              icon={trash}
              slot="icon-only"
              onClick={() => setShowAleart({ enabled: true, itemTitle: budgetItem?.title! })}
            />
          </IonItemOption>
        </IonItemOptions>

        <IonItem lines="none">
          <div
            className={`d-flex align-items-center justify-content-center rounded-circle p-2 ${category === "urgent" && "bg-danger"
              } ${category === "needed" && "bg-warning"} ${category === "important" && "bg-success"
              } ${category === "whishlist" && "bg-dark"} ${category === "all" && "bg-primary"
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
              checked={budgetItem.is_complete}
              disabled={budgetItem.is_complete}
              color={"primary"}
            />
          </span>
        </IonItem>

        {/* Edit button */}
        <IonItemOptions side="end">
          <IonItemOption
            className=""
            color={"success"}
            expandable
            onClick={() => setOpenEditModal(true)}
          >
            <IonIcon icon={optionsOutline} slot="icon-only" />
          </IonItemOption>
          {/* Check Button */}
          <IonItemOption
            className=""
            color={"tertiary"}
            expandable
            onClick={toggleItemComplete}
          >
            <IonIcon icon={checkmarkOutline} slot="icon-only" />
          </IonItemOption>
        </IonItemOptions>

      </IonItemSliding>
    </section>
  );
};

export default BudgetPlanItem;
