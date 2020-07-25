import React, { Component } from 'react'
import { RouteComponentProps, Link } from "react-router-dom";
import {
    IonApp,
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon, IonFooter
} from '@ionic/react'
import { Emoji } from '../../models/emoji';
import '../../css/global.css';
import '../../css/category.css';
import DataService from '../../services/DataService';
import { chevronBack,apps, list } from 'ionicons/icons';

interface GrindProps extends RouteComponentProps<{
    category: string
}> {}

interface GrindStates {
    category: string,
    loading: boolean

}

class Grind extends Component<GrindProps,GrindStates> {

    private emojis: Array<Emoji> = [];

    constructor(props:any) {
        super(props);
        this.state = {
            category: this.props.match.params.category,
            loading: true
        };
    }

    componentWillMount() {
        this.setState({loading: true});
    }

    componentDidMount() {
        this.emojis = DataService.getEmojisByCategory(this.state.category);
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading === true) return (<div>Läd</div>);

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
                                <Link to={"/category/" + this.state.category}>
                                    <IonIcon className="icon" src={list}></IonIcon>
                                </Link>
                                <Link to={"/category-grind/" + this.state.category}>
                                    <IonIcon className="icon" src={apps}></IonIcon>
                                </Link>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>

                            {
                                this.emojis.map((item: Emoji) => {
                                    return(
                                        <div className="emojibox">
                                            <Link to={"/detail/" + item.id}>
                                                <IonThumbnail className="emoji-img-container">
                                                    <IonImg className="detail-emoji-image" src={"https://www.smileybedeutung.com/img/emojis/" + item.image + ".png"}></IonImg>
                                                </IonThumbnail>
                                            </Link>
                                        </div>
                                    );
                                })
                            }

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

export default Grind
