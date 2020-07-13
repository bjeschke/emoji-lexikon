import React, { Component } from 'react'
import {
    IonApp,
    IonButton, IonHeader, IonTitle, IonToolbar,IonImg,IonText,IonThumbnail
} from '@ionic/react'
import { IonPage,IonContent } from '@ionic/react'
import { RouteComponentProps } from "react-router-dom";
import Data from "../Data/whatsappsmileys_de.json"
import {Emoji} from "../../models/emoji";

interface CategoriesProps extends RouteComponentProps<{
    id: string;
}> {}

interface CategoriesStates {
    id: string;

}

class Detail extends Component<CategoriesProps,CategoriesStates> {

    constructor(props:any) {
        super(props);
        this.state = {
            id: this.props.match.params.id

        };
    }


    render() {

        let emoji = new Emoji;

        Data.map((item) => {
            if (item.id == this.state.id) {
                emoji = item;
            }
        });

        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                <>{emoji.htmlcode}</> Bedeutung
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonTitle>{emoji.title}</IonTitle>
                        <IonText>{emoji.text}</IonText>
                        <IonThumbnail>
                            <IonImg src={"https://www.smileybedeutung.com/img/emojis/" + emoji.image + ".png"}></IonImg>
                        </IonThumbnail>



                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Detail
