import React, { useState } from "react";
import { ModalParam } from "../../@types/componetsPrams";
import {
  IonModal,
  IonContent,
  IonText,
  IonInput,
  IonButton,
  IonSearchbar,
} from "@ionic/react";

const SearchBudgetPlans: React.FC<ModalParam> = ({ isOpen, setIsOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  //TODO: use reactQuery

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //TODO: submit form
  }

  return (
    <IonModal
      isOpen={isOpen}
      initialBreakpoint={0.5}
      //   breakpoints={[0.5, 0.8]}
      onDidDismiss={() => setIsOpen(false)}
    >
      <IonContent className="ion-padding">
      <section className="mt-4">
        <IonText className="">Search</IonText>
      </section>
        <form action="" onSubmit={handleSearch} className="ion-margin-top">
          <section className="">
            <IonSearchbar
              placeholder="Chrismas Plans"
              showCancelButton="focus"
              type="search"
              aria-required
              onIonChange={(e) => setSearchQuery(e.detail.value!)}
            />
          </section>
          <section className="">
            <IonButton
              expand="block"
              shape="round"
              className="ion-padding-vertical ion-text-capitalize"
              type="submit"
            >
              Search
            </IonButton>
          </section>
        </form>
      </IonContent>
    </IonModal>
  );
};

export default SearchBudgetPlans;
