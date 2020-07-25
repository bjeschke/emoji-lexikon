import React, { Component,Suspense, lazy } from 'react'
import { RouteComponentProps, Link } from "react-router-dom";
import {
    IonApp,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonLabel,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon, IonFooter
} from '@ionic/react'
import { Emoji } from '../../models/emoji';
import { decode } from "he";
import '../../css/global.css';
import '../../css/category.css';
import DataService from '../../services/DataService';
import { chevronForward,chevronBack,apps, list } from 'ionicons/icons';

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

    componentWillMount() {
        this.emojis = DataService.getEmojisByCategory(this.state.category);
    }

    componentDidMount() {

    }

    render() {
        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton href="/">
                                    <IonIcon className="icon" src={chevronBack}></IonIcon>
                                    Zurück
                                </IonButton>
                            </IonButtons>
                            <IonTitle>
                                {this.state.category}
                            </IonTitle>
                            <IonButtons slot="end">
                                <Link to="/">
                                    <IonIcon className="icon" src={list}></IonIcon>
                                </Link>
                                <Link to={"/category-grind/" + this.state.category}>
                                    <IonIcon className="icon" src={apps}></IonIcon>
                                </Link>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <ul>
                            {
                                this.emojis.map((item: Emoji) => {
                                    return(
                                        <li className="listitem" >
                                            <Link to={"/detail/" + item.id}>
                                                <IonThumbnail className="emoji-img-container">
                                                    <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + item.image + ".png"}></IonImg>
                                                </IonThumbnail>
                                                <IonLabel className="emoji-label"><span className="emoji-name">{decode(item.title)}</span></IonLabel>
                                                <IonIcon className="icon" src={chevronForward}></IonIcon>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </IonContent>
                    <IonFooter>
                        <IonToolbar>
                            <IonTitle>Footer</IonTitle>
                        </IonToolbar>
                    </IonFooter>
                </IonPage>
            </IonApp>
        );
    }
}

export default Categories
