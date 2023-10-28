
import instance from "../axios-instance";

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemons {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}


export async function getPokemons(): Promise<IPokemons> {
    const { data } = await instance.get<IPokemons>('');
    return data;
}