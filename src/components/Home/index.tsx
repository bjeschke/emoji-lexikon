import React, { Component } from 'react'
import {
    IonApp,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRouterLink,
    IonThumbnail, IonImg, IonLabel, IonFooter, IonButton, IonIcon, IonButtons
} from '@ionic/react'
import DataService from '../../services/DataService';
import '../../css/home.css';
import {settings, home,star} from "ionicons/icons";
import {RouteComponentProps} from "react-router-dom";

interface CategoriesProps extends RouteComponentProps<{

}> {}

interface CategoriesStates {

}

class Home extends Component<CategoriesProps,CategoriesStates> {

    private categories: Array<string> = [];

    componentDidMount() {
        this.categories = DataService.getCategories();
    }

    public goToCategoryView(category: string){
        this.props.history.push('/category/' + category);
    }

    render() {

        return (
            <IonApp>
                <IonPage>
                    <IonHeader class="header">
                        <IonToolbar color="colorful" class="toolbar">
                            <IonTitle>Emoji Lexikon</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {
                            this.categories.map((category:string, index:number) => {
                                return(
                                    <div className="col" key={index} onClick={() => this.goToCategoryView(category)}>
                                        <IonThumbnail className="emoji-img-container">
                                            <IonImg src={require("../img/categories/category_" + category + ".png")}></IonImg>
                                        </IonThumbnail>
                                        <IonLabel class="label"><span className="emoji-name">{category}</span></IonLabel>
                                    </div>
                                )
                            })
                        }
                    </IonContent>
                    <IonFooter class="footer">
                        <IonToolbar color="colorful" class="toolbar">
                            <IonButtons slot="start" class="footertabs">
                                <IonButton>
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

export default Home
