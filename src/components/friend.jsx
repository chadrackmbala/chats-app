import { NavLink } from "react-router-dom";
import AvatarService from "../models/AvatarsData";

export default function Friend({ friend, friendLink }) {

    console.log(friendLink);

    const avatarsData = AvatarService.getAvatar();
    

    return (
        <>
            <NavLink>
                <div className="friend-profil-block">
                    <div>
                        <img src={friend.avatar} alt="" className="sidebar-avatar-image" />
                    </div>
                    <div>
                        <h2>{friend.pseudo}</h2>
                    </div>
                </div>
            </NavLink>
        </>
    )
}