import React, { Component } from 'react'
import {
    IonApp, IonHeader, IonTitle, IonToolbar, IonImg, IonText, IonThumbnail,
    IonButtons, IonIcon, IonButton, IonFooter
} from '@ionic/react'
import { IonPage,IonContent } from '@ionic/react'
import { RouteComponentProps } from "react-router-dom";
import Data from "../../resources/whatsappsmileys_de.json"
import {Emoji} from "../../models/emoji";
import '../../css/detail.css';

import { decode } from "he";
import {chevronBack, home, settings, starOutline, star} from "ionicons/icons";

interface CategoriesProps extends RouteComponentProps<{
    id: string;
    category:string;
}> {}

interface CategoriesStates {
    id: string;
    category:string;
}

class Detail extends Component<CategoriesProps,CategoriesStates> {

    constructor(props:any) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            category: this.props.match.params.category
        };
    }

    backHome() {
        this.props.history.push('/');
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
                    <IonHeader class="header">
                        <IonToolbar color="colorful" class="toolbar">
                            <IonButtons slot="start">
                                <IonButton href={"/category/" + emoji.category}>
                                    <IonIcon className="icon" src={chevronBack}></IonIcon>
                                    Zurück
                                </IonButton>
                            </IonButtons>
                            <IonTitle>
                                {decode(emoji.htmlcode)} Bedeutung
                            </IonTitle>
                            <IonButtons slot="end">
                                <IonButton>
                                    <IonIcon className="icon" src={starOutline}></IonIcon>
                                </IonButton>

                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding content">
                        <h1 className="detail-emoji-title">{decode(emoji.title)}</h1>
                        <IonThumbnail className="detail-emoji-image-container">
                            <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + emoji.image + ".png"}></IonImg>
                        </IonThumbnail>
                        <IonText className="detail-emoji-text">{decode(emoji.text)}</IonText>
                    </IonContent>

                    <IonFooter class="footer">
                        <IonToolbar color="colorful" class="toolbar">
                            <IonButtons slot="start" class="footertabs">
                                <IonButton onClick={() => this.backHome()}>
                                    <IonIcon className="icon" src={home}></IonIcon>
                                </IonButton>
                                <IonButton>
                                    <IonIcon className="icon" src={star}></IonIcon>
                                </IonButton>
                                <IonButton>
                                    <IonIcon className="icon" src={settings}></IonIcon>
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonFooter>
                </IonPage>
            </IonApp>
        );
    }
}

export default Detail
