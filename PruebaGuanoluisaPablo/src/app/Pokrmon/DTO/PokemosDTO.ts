//interface para la gestion de los pokemon
export interface pokemonDTO{
    id:number;
    name:string;
    image:string;
    type:string;
    hp:number;
    attack:number;
    defense:number;
    idAuthor:number;
    created_at:string;
    updated_at:string;

}