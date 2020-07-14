import React, { Component } from 'react'
import { IonApp, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import DataService from '../../services/DataService';


class Home extends Component {

    render() {
        const categories: Array<string> = DataService.getCategories();
        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Hallo</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {
                            categories.map((category:string) => {
                                return(
                                    <IonButton routerLink={"/category/" + category} >{category}</IonButton>
                                )
                            })
                        }
                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Home
