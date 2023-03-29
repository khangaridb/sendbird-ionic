import React from "react"
import Logo from "./bunny.png"
import "./customMessage.scss";
import { IonButton } from "@ionic/react";

const CustomMessage = () => {
    return (
        <div className="fcm-message-container">
            <div className="fcm-avatar-container">
                <div>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="fcm-message-body">
                <span>Clipboard Health</span>
                <div className="message-wrapper">
                    <div>
                        <div>
                            Running late for your shift? Tap to update the facility with your
                            ETA
                        </div>
                    </div>

                    <div className="input-eta-btn-container">
                        <IonButton
                            size="default"
                            shape="round"
                            expand="block"
                        >Submit</IonButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomMessage