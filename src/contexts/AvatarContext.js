import { createContext } from "react";
import { cr7, rihanna, everest } from "../images/image-index";

class AvatarService {
    static getAvatar() {
        const AvatarsData = createContext([
            {
                id: 1,
                avatar: cr7,
                pseudo: "CR7",
            },
            {
                id: 2,
                avatar: rihanna,
                pseudo: "Rihanna",
            },
            {
                id: 3,
                avatar: everest,
                pseudo: "Mont-Everest",
            },
        ])
        return AvatarsData;
    };
};

export default AvatarService;