import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

interface HeaderTitleParam {
  title: string;
  className?: string;
  icon?: string;
}

const HeaderTitle: React.FC<HeaderTitleParam> = ({
  title,
  className,
  icon,
}) => {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar color={"primary"} className={`px-3 ${className}`}>
        <IonIcon icon={icon!} slot={"start"} size="large" />
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeaderTitle;
