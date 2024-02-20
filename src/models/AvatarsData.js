import { cr7, rihanna, everest } from "../images/image-index";

class AvatarService {
    static getAvatar() {
        const AvatarsData = [
            {
                id: 1,
                avatar: cr7,
                pseudo: "CR7",
            },
            {
                id: 2,
                avatar: rihanna,
                pseudo: "Joe",
            },
            {
                id: 3,
                avatar: everest,
                pseudo: "Richard",
            },
        ]
        return AvatarsData;
    };
};

export default AvatarService;

// const AvatarsData = [
//     {
//         id: 1,
//         avatar: cr7,
//         pseudo: "CR7",
//     },
//     {
//         id: 2,
//         avatar: rihanna,
//         pseudo: "Rihanna",
//     },
//     {
//         id: 3,
//         avatar: everest,
//         pseudo: "Mont-Everest",
//     },
// ]

// export default AvatarsData;