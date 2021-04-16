import { storage } from "firebase-functions";

export const onFileChange = storage.object().onChange(event => {
    console.log(event);
   return;
});