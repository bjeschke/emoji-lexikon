import React, { Component } from 'react'
import { RouteComponentProps } from "react-router-dom";
import {
    IonApp,
    IonButton,
    IonImg
} from '@ionic/react'
import { IonPage,IonContent } from '@ionic/react'
import Data from "../Data/whatsappsmileys_de.json"
import { Emoji } from '../../models/emoji';
import {plainToClass} from "class-transformer";
import {DataService} from "../../services/DataService";

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
                    <IonContent>
                        <h1>Kategorie {this.state.category}</h1>

                        {
                            Data.map((item: any) => {
                                if(item.category == this.state.category)
                                {
                                    return(
                                        <IonButton routerLink={"/detail/" + item.id}>{item.title}</IonButton>
                                    );
                                }
                            })
                        }

                    </IonContent>
                </IonPage>
            </IonApp>
        );
    }
}

export default Categories
