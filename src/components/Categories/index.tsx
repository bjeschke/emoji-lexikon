import React, { Component } from 'react'
import { RouteComponentProps } from "react-router-dom";
import {
    IonApp,
    IonContent,
    IonImg,
    IonPage,
    IonThumbnail,
    IonLabel,
    IonList,
    IonItem,
    IonToolbar, IonButtons, IonTitle, IonHeader, IonButton
} from '@ionic/react'
import Data from "../Data/whatsappsmileys_de.json"
import { Emoji } from '../../models/emoji';
import { plainToClass } from "class-transformer";
import {decode} from "he";
import '../../css/category.css';

interface CategoriesProps extends RouteComponentProps<{
    category: string
}> {}

interface CategoriesStates {
    category: string
}


class Categories extends Component<CategoriesProps,CategoriesStates> {

    constructor(props:any) {
        super(props);
        this.state = {
            category: this.props.match.params.category
        };
    }

    render() {
        const emojis: Array<Emoji> = [];
        Data.map((item: any) => {
            const emoji = plainToClass<Emoji, any>(Emoji, item);
            emojis.push(emoji);
        });

        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton href="/">Zurück</IonButton>
                            </IonButtons>
                            <IonTitle>
                                {this.state.category}
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <IonList>

                        {
                            emojis.map((item: any) => {
                                if(item.category === this.state.category)
                                {
                                    return(
                                        <IonItem className="listitem" routerLink={"/detail/" + item.id}>
                                            <IonThumbnail className="emoji-img-container">
                                                <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + item.image + ".png"}></IonImg>
                                            </IonThumbnail>
                                            <IonLabel><span className="emoji-name">{decode(item.title)}</span></IonLabel>
                                        </IonItem>
                                    );
                                }
                            })
                        }
                        </IonList>
                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Categories
