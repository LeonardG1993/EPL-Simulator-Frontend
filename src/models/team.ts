export class Team{
    id: number;
    name: string;
    points: number;
    wins: number;
    draws: number;
    losses: number;
    winRate: number;
    drawRate: number;
    lossRate: number;

    constructor (
        id: number,
        name: string,
        points: number,
        wins: number,
        draws: number,
        losses: number,
        winRate: number,
        drawRate: number,
        lossRate: number
        ){
        
            this.id = id
            this.name = name
            this.points = points
            this.wins = wins
            this.draws = draws
            this.losses = losses
            this.winRate = winRate
            this.drawRate = drawRate
            this.lossRate = lossRate
    }
}