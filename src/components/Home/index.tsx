import React, { Component } from 'react'
import {
    IonApp,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRouterLink,
    IonThumbnail, IonImg, IonLabel
} from '@ionic/react'
import DataService from '../../services/DataService';
import '../../css/home.css';

class Home extends Component {

    private categories: Array<string> = [];

    componentDidMount() {
        this.categories = DataService.getCategories();
    }

    render() {
        return (
            <IonApp>
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Kategorien</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonGrid>
                            <IonRow>
                                {
                                    this.categories.map((category:string,index:number) => {
                                        return(
                                            <IonCol className="col">
                                                <IonRouterLink routerLink={"/category/" + category}>
                                                    <IonThumbnail className="emoji-img-container">
                                                        <IonImg src={require("../img/categories/category_" + category + ".png")}></IonImg>
                                                    </IonThumbnail>
                                                    <IonLabel><span className="emoji-name">{category}</span></IonLabel>
                                                </IonRouterLink>
                                            </IonCol>
                                        )
                                    })
                                }
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Home
