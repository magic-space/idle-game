import id from "./resEnum.js"

const addictionData =
[
    // *** Start of Internet Tab *** //

    [
        {
            id: 0,
            name: "coolmathgames",
            purchaseText: "",
            text: "Visit coolmathgames.com",
            cooldown: 5*1000,
            resIds: [id.HAP],
            deltas: [5],
            isUnlocked: true,
            unlockCost: [0]
        },
        {
            id: 1,
            name: "facebook",
            purchaseText: "Make a Facebook account",
            text: "Look at Facebook memes",
            cooldown: 2*1000,
            resIds: [id.HAP],
            deltas: [4],
            isUnlocked: false,
            unlockCost: [50]
        },
        {
            id: 2,
            name: "reddit",
            purchaseText: "",
            text: "Read Reddit threads",
            cooldown: 10*1000,
            resIds: [id.HAP, id.TECH],
            deltas: [20, .5],
            isUnlocked: false,
            unlockCost: [1000]
        },
        {
            id: 3,
            name: "4chan",
            purchaseText: "",
            text: "Look at traps on 4chan",
            cooldown: 30*1000,
            resIds: [id.HAP, id.TECH],
            deltas: [100, 1],
            isUnlocked: false,
            unlockCost: [10000, 100, 0, 50]
        },
        {
            id: 4,
            name: "conspiracytheories",
            purchaseText: "",
            text: "Listen to Alex Jones",
            cooldown: 60*1000,
            resIds: [id.HAP],
            deltas: [1000],
            isUnlocked: false,
            unlockCost: [200000, 0, 0, 100]
        }
    ],

    // *** Start of Food Tab *** //

    [
        {
            id: 0,
            name: "cookie",
            purchaseText: "",
            text: "Put your hand in the cookie jar",
            cooldown: 10*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [5, 10],
            isUnlocked: false,
            unlockCost: [200]
        },
        {
            id: 1,
            name: "icecream",
            purchaseText: "",
            text: "Eat some icecream",
            cooldown: 20*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [10, 40],
            isUnlocked: false,
            unlockCost: [1000, 200]
        },
        {
            id: 2,
            name: "mcronalds-eat",
            purchaseText: "",
            text: "Eat at McRonalds",
            cooldown:2*60*1000,
            resIds: [id.HAP, id.FAT],
            deltas: [500, 1000],
            isUnlocked: false,
            unlockCost: [20000, 1000]
        }
    ],

    // *** Start of Money Tab *** //

    [
        {
            id: 0,
            name: "mcronalds-work",
            purchaseText: "",
            text: "Flip burgers",
            cooldown: 8*1000,
            resIds: [id.MONEY],
            deltas: [10],
            isUnlocked: false,
            unlockCost: [20000]
        },
        {
            id: 1,
            name: "pizzadelivery",
            purchaseText: "",
            text: "Deliver some pizza",
            cooldown: 30*1000,
            resIds: [id.MONEY],
            deltas: [80],
            isUnlocked: false,
            unlockCost: [400000]
        }
    ]
]
export default addictionData
