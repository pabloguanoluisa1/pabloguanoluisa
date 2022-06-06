import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pokemonDTO } from '../DTO/PokemosDTO';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient, 
    private router: Router
  ) { }

  //url conexion api
  apiURL = environment.apiURl+'pokemons';


  //obtener pokemons
  obtenerPokemons(idAuthor: number): Observable<pokemonDTO[]>{
    return this.httpClient.get<pokemonDTO[]>(`${this.apiURL}`+`/?idAuthor=1`);
  }

  //registrarPokemon
  registrarPokemon(pokemonNuevo: pokemonDTO)
  {
    return this.httpClient.post(`${this.apiURL}`,pokemonNuevo);
  }

  //borrar Pokemon
  borrarPokemon(id:number)
  {
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }

  //editarPokemon
  editarPokemon(pokemonEditado: pokemonDTO)
  {
    return this.httpClient.put(`${this.apiURL}/${pokemonEditado.id}`,pokemonEditado);
  }

}
