import React, { Component } from 'react'
import { RouteComponentProps } from "react-router-dom";
import {
    IonApp,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/react'
import { Emoji } from '../../models/emoji';
import { decode } from "he";
import '../../css/category.css';
import DataService from '../../services/DataService';

interface CategoriesProps extends RouteComponentProps<{
    category: string
}> {}

interface CategoriesStates {
    category: string
}


class Categories extends Component<CategoriesProps,CategoriesStates> {

    private emojis: Array<Emoji> = [];

        constructor(props:any) {
        super(props);
        this.state = {
            category: this.props.match.params.category
        };
    }

    componentDidMount() {
        this.emojis = DataService.getEmojisByCategory(this.state.category);
    }

    render() {
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
                                this.emojis.map((item: Emoji) => {
                                    return(
                                        <IonItem className="listitem" routerLink={"/detail/" + item.id}>
                                            <IonThumbnail className="emoji-img-container">
                                                <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + item.image + ".png"}></IonImg>
                                            </IonThumbnail>
                                            <IonLabel><span className="emoji-name">{decode(item.title)}</span></IonLabel>
                                        </IonItem>
                                    );
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
