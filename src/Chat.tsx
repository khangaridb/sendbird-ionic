import React from "react";
import { useParams } from "react-router";
import "sendbird-uikit/dist/index.css";
import { IonButtons, IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Channel, RenderCustomMessageProps } from "sendbird-uikit";
import CustomMessage from "./CustomMessage";

export const Chat = () => {
  const { channelUrl } = useParams<{ channelUrl: string }>();

  const header = () => (
    <div className="sendbird-custom-chat-header">
      <div className="header-title">Chat header</div>
      <div className="header-description">Chat description</div>
    </div>
  );

  return (
    <IonPage>
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref={"/"} mode="ios" />
          </IonButtons>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          className="chat-container"
          style={{
            height: "100%",
            margin: "auto",
          }}
        >
          <Channel
            channelUrl={channelUrl}
            renderChatHeader={header}
            renderCustomMessage={(message: any) => {
              if (message.customType === "INPUT_ETA") {
                return () => <CustomMessage />;
              }

              return null as unknown as RenderCustomMessageProps;
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
