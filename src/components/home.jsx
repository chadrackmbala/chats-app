import AvatarService from "../models/AvatarsData";
import Editor from "./editor";
import { useState, useContext } from "react";

export default function Home() {

    const [message, setMessage] = useState("");
    
    const avatarContext = useContext(AvatarService.getAvatar());
    console.log(message);

    const handleSubmit = (message) => {
        setMessage(message);
    };

    return (
        <>
            <div className="home">
                <h1>Home</h1>
                {/* <h1>{avatarContext.pseudo}</h1> */}
                <p>{message}</p>
                <Editor onSubmit={handleSubmit} />
            </div>
        </>
    );
};