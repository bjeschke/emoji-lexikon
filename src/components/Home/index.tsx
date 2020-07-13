import React, { Component } from 'react'
import {
    IonApp,
    IonTitle,
    IonToolbar,
    IonButton,
    IonImg
} from '@ionic/react'
import { IonPage,IonContent,IonHeader } from '@ionic/react'
import Data from "../Data/whatsappsmileys_de.json"
import {Emoji} from "../../models/emoji";


interface Home { cats: string[]; }

let cats = function(){
    let that: string[] = [];
    Data.map((item: any) => {
            if (that.indexOf(item.category) == -1) {
                that.push(item.category);
            }
        }
    );

    return that;
};

class Home extends Component {

    render() {

        const benjamin: Emoji = new Emoji();
        benjamin.id = "fotze";



        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Hallo</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">


                        {cats().map((category:string) => {
                            return(
                                <IonButton routerLink={"/category/" + category} >{category}</IonButton>
                            )
                        })}

                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Home
