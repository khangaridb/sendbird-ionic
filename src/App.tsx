import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Home from "./Home";
import { SendBirdProvider } from "sendbird-uikit";
import Chat from "./Chat";
import { configs } from "./constants";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <SendBirdProvider appId={configs.sendBirdAppId} userId={configs.sendBirdUserId} accessToken={configs.sendBirdAccessToken}>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/chat/:channelUrl" exact>
          <Chat />
        </Route>
      </SendBirdProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
