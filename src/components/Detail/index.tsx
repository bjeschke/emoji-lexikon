import React, { Component } from 'react'
import {
    IonApp, IonHeader, IonTitle, IonToolbar,IonImg,IonText,IonThumbnail,IonButtons,IonBackButton
} from '@ionic/react'
import { IonPage,IonContent } from '@ionic/react'
import { RouteComponentProps } from "react-router-dom";
import Data from "../Data/whatsappsmileys_de.json"
import {Emoji} from "../../models/emoji";
import '../../css/detail.css';

import { decode } from "he";

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

        let emoji = new Emoji();

        Data.map((item) => {
            if (item.id === this.state.id) {
                emoji = item;
                return false;
            }
        });

        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton defaultHref="home" />
                            </IonButtons>
                            <IonTitle>
                                {decode(emoji.htmlcode)} Bedeutung
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding content">
                        <h1 className="detail-emoji-title">{emoji.title}</h1>
                        <IonThumbnail className="detail-emoji-image-container">
                            <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + emoji.image + ".png"}></IonImg>
                        </IonThumbnail>
                        <IonText className="detail-emoji-text">{decode(emoji.text)}</IonText>
                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Detail
