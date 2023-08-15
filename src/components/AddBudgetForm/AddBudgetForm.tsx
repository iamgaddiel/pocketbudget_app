import { IonModal, IonContent, IonText, IonInput, IonButton } from '@ionic/react'
import React, { useReducer } from 'react'
import { addBudgetReducer } from '../../reducer/reducers/budgetReducer'
import { SET_BUDGET_DEADLINE, SET_BUDGET_TITLE, SET_INITIAL_BUDGET } from '../../reducer/actions/AddBudgetAtions'
import { ModalParam } from '../../@types/componetsPrams'




const AddBudgetForm: React.FC<ModalParam> = ({ isOpen, setIsOpen}) => {
    const [state, setState] = useReducer(addBudgetReducer, {
        title: "",
        timestamp: "sfsdfsdf",
        is_complete: false,
        deadline: "",
        initialBudget: "3000"
    })


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        //TODO: submit form
    }

  return (
    <IonModal
          isOpen={isOpen}
          initialBreakpoint={0.5}
          breakpoints={[0.5, 0.8]}
          onDidDismiss={() => setIsOpen(false)}
        >
          <IonContent className="ion-padding">
            <section className="my-4">
              <IonText className="fw-bold">Add Budget Plan</IonText>
              <hr />
            </section>

            <form action="" className="ion-margin-vertical" onSubmit={handleSubmit}>
              <section>
                <IonInput
                  type="text"
                  placeholder="Things to get before Chrismas"
                  labelPlacement="start"
                  label="Title : "
                  required
                  onIonChange={(event) => setState({
                    type: SET_BUDGET_TITLE,
                    payload: event.detail.value
                  })}
                />
                <IonInput
                  type="text"
                  placeholder="$50,000"
                  labelPlacement="start"
                  label="Initial Budget :"
                  required
                  helperText="Don't worry this value can change as you add budget items"
                  onIonChange={(event) => setState({
                    type: SET_INITIAL_BUDGET,
                    payload: event.detail.value
                  })}
                />
                <IonInput
                  type="date"
                  placeholder="$50,000"
                  labelPlacement="start"
                  label="Deatline :"
                  required
                  onIonChange={(event) => setState({
                    type: SET_BUDGET_DEADLINE,
                    payload: event.detail.value
                  })}
                />
              </section>
              <section className="mt-4">
                <IonButton
                  expand="block"
                  shape='round'
                  className="ion-padding-vertical ion-text-capitalize"
                  type='submit'
                >
                  Confirm
                </IonButton>
              </section>
            </form>
          </IonContent>
        </IonModal>
  )
}

export default AddBudgetForm