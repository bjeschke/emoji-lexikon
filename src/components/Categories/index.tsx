import React, { Component} from 'react'
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
import {chevronForward, chevronBack, apps, list, home, settings} from 'ionicons/icons';


interface CategoriesProps extends RouteComponentProps<{
    category: string
}> {}

interface CategoriesStates {
    category: string,
    view: string
}

class Categories extends Component<CategoriesProps,CategoriesStates> {

    private emojis: Array<Emoji> = [];

    constructor(props:any) {
        super(props);
        this.state = {
            category: this.props.match.params.category,
            view : "list"
        };
    }

    componentWillMount() {
        this.emojis = DataService.getEmojisByCategory(this.state.category);
    }

    componentDidMount() {

    }

    public changeViewToList(){
        this.setState({view: "list"});
    }

    public changeViewToGrid(){
        this.setState({view: "grid"});
    }

    backHome() {
        this.props.history.push('/');
    }

    render() {
            return (
                <IonApp>
                    <IonPage>
                        <IonHeader class="header">
                            <IonToolbar color="colorful" class="toolbar">
                                <IonButtons slot="start">
                                    <IonButton onClick={() => this.backHome()}>
                                        <IonIcon className="icon" src={chevronBack}></IonIcon>
                                        Zurück
                                    </IonButton>
                                </IonButtons>
                                <IonTitle>
                                    {this.state.category}
                                </IonTitle>
                                <IonButtons slot="end">
                                    <IonButton onClick={this.changeViewToList.bind(this)}>
                                        <IonIcon className="icon" src={list}></IonIcon>
                                    </IonButton>
                                    <IonButton onClick={this.changeViewToGrid.bind(this)}>
                                        <IonIcon className="icon" src={apps}></IonIcon>
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <ul>
                                {
                                    this.emojis.map((item: Emoji) => {
                                        if(this.state.view === "list")
                                        {
                                            return (
                                                <li className="listitem">
                                                    <Link to={"/detail/" + item.id}>
                                                        <IonThumbnail className="emoji-img-container">
                                                            <IonImg className="detail-emoji-image"
                                                                    src={"https://www.smileybedeutung.com/img/emojis/" + item.image + ".png"}></IonImg>
                                                        </IonThumbnail>
                                                        <IonLabel className="emoji-label"><span
                                                            className="emoji-name">{decode(item.title)}</span></IonLabel>
                                                        <IonIcon className="icon" src={chevronForward}></IonIcon>
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        else{
                                            return(
                                                <div className="emojibox">
                                                    <Link to={"/detail/" + item.id}>
                                                        <IonThumbnail className="emoji-img-container">
                                                            <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + item.image + ".png"}></IonImg>
                                                        </IonThumbnail>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    })
                                }
                            </ul>
                        </IonContent>
                        <IonFooter class="footer">
                            <IonToolbar color="colorful" class="toolbar">
                                <IonButtons slot="start">
                                    <IonButton>
                                        <IonIcon className="icon" src={home}></IonIcon>
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

export default Categories
