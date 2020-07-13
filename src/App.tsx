import React, { Component } from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import {IonApp, IonContent, IonRouterOutlet} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import Detail from './components/Detail'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {DataService} from "./services/DataService";



function App() {

    const dataService = new DataService();

  return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" component={Home} exact />
            <Route path="/category/:category" component={Categories} exact />
            <Route path="/detail/:id" component={Detail} exact />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
  );
}

export default App;
