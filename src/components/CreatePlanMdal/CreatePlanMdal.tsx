import React, { useReducer, useState } from "react";
import { ModalParam } from "../../@types/componetsPrams";
import {
  IonModal,
  IonContent,
  IonText,
  IonIcon,
  IonInput,
  IonChip,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import {
  clipboardOutline,
  schoolOutline,
  hammerOutline,
  cartOutline,
  carSportOutline,
  cashOutline,
  airplane,
  medkitOutline,
  giftOutline,
  person,
  briefcaseOutline,
  optionsOutline,
  pencilOutline,
  menuOutline,
  caretDown,
} from "ionicons/icons";
import { BudgetItem } from "../../@types/budget";
import { Action } from "../../@types/actions";
import { getUUIDString } from "../../helpers/utils";
import { getSaveData, saveData } from "../../helpers/storageSDKs";
import { BUDGET_ITEMS } from "../../helpers/keys";
import { useSetRecoilState } from "recoil";
import { budgetItemAtom } from "../../atoms/budgetAtom";
import { SET_TITLE, SET_TYPE, SET_AMOUNT, SET_CATEGORY, SET_DESCRIPTION } from "../../reducer/actions/budgetActions";
import { budgetItemReducer } from "../../reducer/reducers/budgetReducers";




const CreatePlanMdal: React.FC<ModalParam> = ({
  isOpen,
  setIsOpen,
  budgetId,
}) => {
  const [suggestions, setSuggestions] = useState("");
  const setBudgetItems = useSetRecoilState(budgetItemAtom);

  const [state, setState] = useReducer(budgetItemReducer, {
    title: "",
    amount: 0,
    category: "whishlist",
    aditional_decription: "",
    type: "food",
  });

  // [functions]----------------------------------------------------------
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const timestamp = new Date().getTime();

    const newBudgetItem: BudgetItem = {
      ...state,
      id: getUUIDString(),
      created: timestamp,
      updated: timestamp,
      budget: budgetId,
      is_complete: false,
    };

    const budgetItems = (await getSaveData(BUDGET_ITEMS)) as BudgetItem[];
    const currentBudgetItems = [...budgetItems, newBudgetItem];
    saveData(BUDGET_ITEMS, currentBudgetItems);
    setBudgetItems(currentBudgetItems);

    setIsOpen(false);
  }

  return (
    <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.5}
      breakpoints={[0.5, 0.7, 0.9, 1]}
      onDidDismiss={() => setIsOpen(false)}
    >
      <IonContent className="ion-padding">
        <section>
          <IonText className="fw-strong">Add Plan</IonText>
          <hr />
        </section>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="d-flex align-items-center">
            <IonIcon icon={clipboardOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="Buy a car"
              label="Title"
              labelPlacement="floating"
              className="ion-margin-start"
              onIonChange={(e) =>
                setState({
                  type: SET_TITLE,
                  payload: e.detail.value,
                })
              }
            />
          </div>

          {/* Type */}
          <div className="d-flex align-items-center my-3">
            <IonIcon icon={menuOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="Gift"
              label="Type"
              labelPlacement="floating"
              className="ion-margin-start"
              value={suggestions}
              readonly
              onIonChange={(e) =>
                setState({
                  type: SET_TYPE,
                  payload: e.detail.value,
                })
              }
            />
          </div>
            <IonText className="text-muted d-flex align-items-center"><small>Select a type </small> <IonIcon icon={caretDown} color={'dark'} className="ms-3" /></IonText>
            <hr />
          <div className="my-3">
            <IonChip outline onClick={() => setSuggestions("Education")}>
              <IonIcon icon={schoolOutline} />
              <IonText>education</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Utility")}>
              <IonIcon icon={hammerOutline} />
              <IonText>utility</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Shoping")}>
              <IonIcon icon={cartOutline} />
              <IonText>shoping</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Transportation")}>
              <IonIcon icon={carSportOutline} />
              <IonText>transportation</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Savings")}>
              <IonIcon icon={cashOutline} />
              <IonText>savings</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Travel")}>
              <IonIcon icon={airplane} />
              <IonText>travel</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Health")}>
              <IonIcon icon={medkitOutline} />
              <IonText>health</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Gift")}>
              <IonIcon icon={giftOutline} />
              <IonText>gift</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Personal")}>
              <IonIcon icon={person} />
              <IonText>peronal</IonText>
            </IonChip>
            <IonChip outline onClick={() => setSuggestions("Work")}>
              <IonIcon icon={briefcaseOutline} />
              <IonText>work</IonText>
            </IonChip>
          </div>

          {/* Amount */}
          <div className="d-flex align-items-center">
            <IonIcon icon={cashOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="$445,789"
              label="Amount"
              labelPlacement="floating"
              inputMode="numeric"
              className="ion-margin-start"
              onIonChange={(e) =>
                setState({
                  type: SET_AMOUNT,
                  payload: e.detail.value,
                })
              }
            />
          </div>

          {/* Category */}
          <div className="d-flex align-items-center">
            <IonIcon icon={optionsOutline} slot="start" size="large" />
            <IonSelect
              label="Category"
              className="ion-margin-start"
              onIonChange={(e) =>
                setState({
                  type: SET_CATEGORY,
                  payload: e.detail.value,
                })
              }
            >
              <IonSelectOption value={"urgent"}>Urgent</IonSelectOption>
              <IonSelectOption value={"needed"}>Needed</IonSelectOption>
              <IonSelectOption value={"important"}>Important</IonSelectOption>
              <IonSelectOption value={"whishlist"}>Whislist</IonSelectOption>
            </IonSelect>
          </div>

          {/* Extra Note */}
          <div className="d-flex align-items-center">
            <IonIcon icon={pencilOutline} slot="start" size="large" />
            <IonInput
              type="text"
              placeholder="Just some random thought"
              label="Description"
              labelPlacement="floating"
              className="ion-margin-start"
              helperText="optional"
              onIonChange={(e) =>
                setState({
                  type: SET_DESCRIPTION,
                  payload: e.detail.value,
                })
              }
            />
          </div>

          {/* button */}
          <IonButton
            type="submit"
            expand="block"
            shape="round"
            className="ion-padding-vertical text-capitalize"
          >
            Confirm
          </IonButton>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default CreatePlanMdal;
