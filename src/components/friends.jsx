import { useParams } from "react-router-dom";
import AvatarService from "../models/AvatarsData"
import Friend from "./friend";

export default function Freinds() {

    const data = AvatarService.getAvatar();

    return (
        <>

            {data.map((friend, index) => {
                return <Friend  friend={friend} key={index} />
            })}
        </>
    );
};