import React from 'react'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import Detail from './components/Detail'
import Settings from './components/Settings'
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

function App() {

  return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" language="de" component={Home} exact />
            <Route path="/category/:category" component={Categories} exact />
            <Route path="/detail/:id" component={Detail} exact />
            <Route path="/settings" component={Settings} exact />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
  );
}

export default App;
