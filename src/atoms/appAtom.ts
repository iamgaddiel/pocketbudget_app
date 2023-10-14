import { atom } from "recoil";
import { AppConfig } from "../@types/appConfig";






export const appConfigAtom = atom<AppConfig>({
    key: 'APP_CONFIG',
    default: {
        app_currency: '',
        app_name: 'PocketBudget',
        theme: 'light'
    }
})


// export const userAtom = atom<StoredUser>({
//     key: 'USER',
//     default: {
//         token: "",
//         record: {
//             id: "",
//             collectionId: "",
//             collectionName: "",
//             created: "",
//             updated: "",
//             username: "",
//             verified: false,
//             emailVisibility: false,
//             email: "",
//             name: "",
//             avatar: "",
//             account_type: 'host',
//             is_disabled: false,
//             report_count: 0,
//             phone: "",
//         }
//     }
// })