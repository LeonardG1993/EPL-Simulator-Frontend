import { Team } from "./team";
import { User } from "./user";

export class Prediction{
    id: number;
    first: Team;
    second: Team;
    third: Team;
    fourth: Team;
    user: User;

    constructor(
        id: number,
    first: Team,
    second: Team,
    third: Team,
    fourth: Team,
    user: User
    ){
        this.id = id
        this.first = first
        this.second = second
        this.third = third
        this.fourth = fourth
        this.user = user
    }
}