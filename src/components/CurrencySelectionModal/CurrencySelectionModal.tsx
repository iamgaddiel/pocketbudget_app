import { IonContent, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import { APP_CONFIG } from '../../helpers/keys'
import { AppConfig } from '../../@types/appConfig'
import { updateAppDBCollection } from '../../helpers/utils'
import { useSetRecoilState } from 'recoil'
import { appConfigAtom } from '../../atoms/appAtom'


type CurrencySelectionModalProp = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CurrencySelectionModal: React.FC<CurrencySelectionModalProp> = ({ isOpen, setIsOpen }) => {
    const setAppConfig = useSetRecoilState(appConfigAtom)



    async function setAppCurrency(currency: string) {
        const data = await updateAppDBCollection<AppConfig>(APP_CONFIG, { app_currency: currency })
        setAppConfig(data)
        setIsOpen(false)
    }

    return (
        <IonModal initialBreakpoint={.3} breakpoints={[.3, .5]} isOpen={isOpen} onDidDismiss={() => setIsOpen(() => false)}>
            <IonContent className='ion-padding'>
                {/* TODO: use a currency list API */}
                <IonList>
                    <IonListHeader>
                        <IonLabel className='text-muted'>Select Currency</IonLabel>
                    </IonListHeader>
                    <IonItem onClick={() => setAppCurrency('NGN')}>
                        <IonLabel>Naira</IonLabel>
                        <IonLabel slot='end'>NGN</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => setAppCurrency('GHC')}>
                        <IonLabel>Ghanian Cidis</IonLabel>
                        <IonLabel slot='end'>GHC</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => setAppCurrency('USD')}>
                        <IonLabel>Dollar</IonLabel>
                        <IonLabel slot='end'>USD</IonLabel>
                    </IonItem>
                    <IonItem onClick={() => setAppCurrency('CAD')}>
                        <IonLabel>Canadian Dollar</IonLabel>
                        <IonLabel slot='end'>CAD</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonModal>
    )
}

export default CurrencySelectionModal