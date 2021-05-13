import firebase from 'firebase'
import { IUser } from '../contracts/IUser';

console.log(firebase);

firebase.apps.length === 0 && firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID
});
  
const db = firebase.firestore();

export const dbUtil = {
    addUser: async (user: IUser) => {
        await db.collection("users").doc(user.id).set({
            name: user.name,
            img: user.img,
            karma: 0
        })
    }
}