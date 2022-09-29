import { Prediction } from "./prediction";

export class User{
   id: number;
   username: string;
   password: string;
   score: number;
   predictions: Prediction [];

   constructor(
    id: number,
    username: string,
    password: string,
    score: number,
    predictions: Prediction []
    ){
        this.id = id
        this.username = username
        this.password = password
        this.score = score
        this.predictions = predictions
    }
}