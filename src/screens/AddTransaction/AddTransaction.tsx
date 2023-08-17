import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLoading,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  cashOutline,
  linkOutline,
  menuOutline,
  pencilOutline,
} from "ionicons/icons";
import React, { useReducer, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Action } from "../../@types/actions";
import { useRecoilState, useSetRecoilState } from "recoil";
import { transactionsAtom } from "../../atoms/transactionAtom";
import { v4 as uuid4 } from "uuid";
import { getOrCreateTransactions, getUUIDString } from "../../helpers/utils";
import { Transaction, TransactionCaegory } from "../../@types/transactions";
import { saveData } from "../../helpers/storageSDKs";
import { TRANSACTIONS } from "../../helpers/keys";

const SET_TITLE = "SET_TTILE";
const SET_AMOUNT = "SET_AMOUNT";
const SET_CATEGORY = "SET_CATEGORY";
const SET_DESCRIPTION = "SET_DESCRIPTION";

interface FormField {
  title: string;
  amount: number;
  category: TransactionCaegory;
  description: string;
}

function reducer(state: FormField, { payload, type }: Action) {
  const newState = { ...state };

  switch (type) {
    case SET_TITLE:
      newState.title = payload;
      break;

    case SET_AMOUNT:
      newState.amount = parseInt(payload as string);
      break;

    case SET_CATEGORY:
      newState.category = payload;
      break;

    case SET_DESCRIPTION:
      newState.description = payload;
      break;

    default:
      return newState;
  }
  return newState;
}

const AddTransaction = () => {
  const { transactionType } = useParams<{
    transactionType: "income" | "expense";
  }>();
  const history = useHistory();

  const [formFields, setFormFields] = useReducer(reducer, {
    amount: 0,
    title: "",
    category: "food",
    description: "",
  });

  const [currentTransactionsState, setTransactionState] =
    useRecoilState(transactionsAtom);

    const [isLoading, setIsLoading] = useState(false)


  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    let transaction_type: string;
    if (transactionType === "income") transaction_type = "income";
    if (transactionType === "expense") transaction_type = "expense";

    const timestamp = new Date().getTime();
    const newFormData: Transaction = {
      ...formFields,
      id: getUUIDString(),
      type: transactionType,
      timestamp,
    };

    // save to DB
    const transactions = await getOrCreateTransactions();
    saveData(TRANSACTIONS, [...transactions, newFormData]);

    // save to state
    const newTransactions: Transaction[] = [
      ...currentTransactionsState,
      newFormData,
    ];
    setTransactionState(newTransactions);

    setIsLoading(false);
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle className="fw-small">Add Transacntion </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonLoading
          isOpen={isLoading}
          message={"Saving..."}
          onDidDismiss={() => history.push('/')}
        />
        <form onSubmit={handleFormSubmit}>
          {/* Title */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={pencilOutline} size="large" />
              <IonInput
                type="text"
                label="Title"
                labelPlacement="floating"
                placeholder="Get a gift"
                className="ms-3"
                required
                onIonChange={(e) =>
                  setFormFields({
                    type: SET_TITLE,
                    payload: e.detail.value,
                  })
                }
              />
            </div>
          </IonCard>

          {/* Transaction Type */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={linkOutline} size="large" />
              <IonSelect
                placeholder="Income"
                label="Transaction type"
                labelPlacement="floating"
                className="ms-3"
                value={transactionType === "income" ? "income" : "expense"}
                disabled
              >
                <IonSelectOption value={"income"}>Income</IonSelectOption>
                <IonSelectOption value={"expense"}>Expense</IonSelectOption>
              </IonSelect>
            </div>
          </IonCard>

          {/* Amount */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={cashOutline} size="large" />
              <IonInput
                type="text"
                label="Amount"
                inputMode="numeric"
                labelPlacement="floating"
                placeholder="$100,000"
                className="ms-3"
                required
                onIonChange={(e) =>
                  setFormFields({
                    type: SET_AMOUNT,
                    payload: e.detail.value,
                  })
                }
              />
            </div>
          </IonCard>

          {/* Transaction Category */}
          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={menuOutline} size="large" />
              <IonSelect
                placeholder="Income"
                label="Category"
                labelPlacement="floating"
                className="ms-3"
                aria-required
                onIonChange={(e) =>
                  setFormFields({
                    type: SET_CATEGORY,
                    payload: e.detail.value,
                  })
                }
              >
                <IonSelectOption value={"transportation"}>
                  transportation
                </IonSelectOption>
                <IonSelectOption value={"food"}>food</IonSelectOption>
                <IonSelectOption value={"gift"}>gift</IonSelectOption>
                <IonSelectOption value={"savings"}>savings</IonSelectOption>
                <IonSelectOption value={"health"}>health</IonSelectOption>
                <IonSelectOption value={"utility"}>utility</IonSelectOption>
                <IonSelectOption value={"education"}>education</IonSelectOption>
                <IonSelectOption value={"travel"}>travel</IonSelectOption>
                <IonSelectOption value={"shopping"}>shopping</IonSelectOption>
                <IonSelectOption value={"personal"}>personal</IonSelectOption>
                <IonSelectOption value={"telecomes"}>telecomes</IonSelectOption>
              </IonSelect>
            </div>
          </IonCard>

          <IonCard className="px-4 py-3 rounded-3">
            <div className="d-flex align-items-center">
              <IonIcon icon={pencilOutline} size="large" />
              <IonInput
                type="text"
                label="Description"
                labelPlacement="floating"
                placeholder="Something to unique to remember this tranaction"
                className="ms-3"
                onIonChange={(e) =>
                  setFormFields({
                    type: SET_DESCRIPTION,
                    payload: e.detail.value,
                  })
                }
              />
            </div>
          </IonCard>

          <div className="mt-5">
            <IonButton
              type="submit"
              expand="block"
              shape="round"
              size="large"
              className="text-capitalize"
            >
              Confirm
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddTransaction;
