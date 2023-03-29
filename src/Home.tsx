import { IonButton, IonContent, IonItem, IonPage, IonLabel, IonToolbar, IonInput, IonTitle, IonHeader } from "@ionic/react";
import { useHistory } from "react-router";
import React from "react";

const Home: React.FC = () => {
  const history = useHistory();
  const [channelUrl, setChannelUrl] = React.useState<string | null>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sample app</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", height: "100%" }}>
          <IonItem style={{ width: "50%" }}>
            <IonLabel position="stacked">Channel url</IonLabel>
            <IonInput
              placeholder="Enter channel url..."
              autofocus
              onIonChange={(e) => {
                setChannelUrl(e.detail.value ?? "");
              }}
            />
          </IonItem>

          <IonButton
            style={{ marginTop: "20px" }}
            onClick={() => {
              if (!channelUrl) return;

              history.push(`/chat/${channelUrl}`);
            }}
          >
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
