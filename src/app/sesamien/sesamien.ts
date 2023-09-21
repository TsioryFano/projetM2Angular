export class Sesamien {

    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    mentions: string[];
    created: Date;
    
    constructor(
        name: string = 'Entrer un nom ...',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokemon.com/assets',
        mentions: string[]= ['S'],
        created: Date =new Date()
    ) {
    this.hp= hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.mentions = mentions;
    this.created = created;
    }
}
 
