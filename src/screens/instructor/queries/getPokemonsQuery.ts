import { useQuery } from "@tanstack/react-query";
import { IPokemons, getPokemons } from "services/api/concrete/example.service";

export function getPokemonsQuery() {
    return useQuery<IPokemons>({ queryKey: ['pokemons'], queryFn: getPokemons });
}