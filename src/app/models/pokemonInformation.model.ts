export interface pokemonInformation{
    name : string;
    sprites: Artword;
}

export class Artword{
    front_default : string;

    constructor(_front_default : string){
        this.front_default = _front_default;
    }
}