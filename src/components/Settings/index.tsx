import React, { Component } from 'react'
import {
    IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem,IonSelectOption,IonSelect,
    IonLabel, IonFooter, IonButton, IonIcon, IonButtons
} from '@ionic/react'
import DataService from '../../services/DataService';
import '../../css/home.css';
import {settings, home,star} from "ionicons/icons";
import {RouteComponentProps} from "react-router-dom";

interface CategoriesProps extends RouteComponentProps<{

}> {}

interface CategoriesStates {
    lang: string
}

class Settings extends Component<CategoriesProps,CategoriesStates> {

    private categories: Array<string> = [];

    constructor(props:any) {
        super(props);
        this.state = {
            lang : "de"
        };
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
                            <IonTitle>Settings</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonList>
                            <IonListHeader>
                                <IonLabel>
                                    Settings
                                </IonLabel>
                            </IonListHeader>

                            <IonItem>
                                <IonLabel>Select Language</IonLabel>
                                <IonSelect value="language" multiple={false} cancelText="Nah" okText="Okay!">
                                    <IonSelectOption value="de">Deutsch</IonSelectOption>
                                    <IonSelectOption value="en">English</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonList>
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

export default Settings
