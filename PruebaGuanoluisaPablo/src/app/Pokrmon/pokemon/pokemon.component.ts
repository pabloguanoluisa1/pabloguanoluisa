import { Component, OnInit } from '@angular/core';
import { parsearErroresAPI } from 'src/app/utilidades/parseo/parseo';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { pokemonDTO } from '../DTO/PokemosDTO';
import { PokemonService } from '../Service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(
    private pokemonsServices: PokemonService
  ) { }
  
  //declaraciones

  buscar:string='';
  pokemons: pokemonDTO[];
  columnasAMostrar = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];
  page:number;
  filterpost = '';
  paginaActual = 1;
  errores: string[] = [];

  nombre:string;
  imagen:string;
  ataque:number;
  defensa:number;

  banderaNuevo:number= 0;
  banderaEditar:number= 0;

  nombreEditar:string;
  ataqueEditar:number;
  imagenEditar:string;
  defensaEditar:number;

  //inicialización

  pokemonNuevo:pokemonDTO={id:null,
    name:'',
    image:'',
    type:'',
    hp:100,
    attack:100,
    defense:100,
    idAuthor:100,
    created_at:null,
    updated_at:null,};

  pokemonAEditar:pokemonDTO={id:null,
    name:'',
    image:'',
    type:'',
    hp:100,
    attack:100,
    defense:100,
    idAuthor:100,
    created_at:null,
    updated_at:null,};



  ngOnInit(): void {
    //los div de nuevo y editar se encuentran ocultos
    this.banderaNuevo=0,
    this.banderaEditar=0;
    //obtenemos todos los pokemon del autor 1
    this.pokemonsServices.obtenerPokemons(1)
      .subscribe(pokemon => {
        this.pokemons = pokemon;
        console.log(this.pokemons);
      }, errores =>{
        this.errores = parsearErroresAPI(errores)
        
      }
    );
    
  }

  //activamos el div para el registro del nuevo pokemon
  nuevoPokemon()
  {
    this.banderaNuevo=1;
    this.banderaEditar=0;
  }

  //extraemos la información deste la tabla al div de edición y se activa el div de edición.
  editarPokemon(pokemoneditar: pokemonDTO){
    this.banderaNuevo=0;
    this.banderaEditar=1;
    this.nombreEditar= pokemoneditar.name;
    this.ataqueEditar= pokemoneditar.attack;
    this.imagenEditar= pokemoneditar.image;
    this.defensaEditar= pokemoneditar.defense;
    this.pokemonAEditar= pokemoneditar;
  }

  //elimina el pokemon selecionado de acuerdo al id
  eliminarPokemon(idPokemon:number){

    this.pokemonsServices.borrarPokemon(idPokemon)
    .subscribe(respuesta=>{
      window.alert('Eliminación Correcta')
      location.reload();
    }), errores => this.errores = parsearErroresAPI(errores);
    console.log
  }

  //Reguistramos el nuevo pokemon
  guardarNuevo(){
    this.pokemonNuevo.name= this.nombre;
    this.pokemonNuevo.image= this.imagen;
    this.pokemonNuevo.type = 'normal';
    this.pokemonNuevo.hp = 100;
    this.pokemonNuevo.attack = this.ataque;
    this.pokemonNuevo.defense = this.defensa;
    this.pokemonNuevo.idAuthor = 1;
    this.pokemonNuevo.created_at= new Date().toISOString();
    this.pokemonNuevo.created_at= new Date().toISOString();

    this.pokemonsServices.registrarPokemon(this.pokemonNuevo)
    .subscribe(respuesta => {
      console.log('registro correcto');
      window.alert('registro correcto');
      this.banderaNuevo=0;
      this.banderaEditar=0;
    }), errores => this.errores = parsearErroresAPI(errores);
  }

  //se cancela el registro nuevo o edición del pokemon
  cancelar(){
    this.banderaNuevo=0;
    this.banderaEditar=0;
  }

  //guardamos la edición del pokemon 
  guardarEdicionPokemon(){
    this.pokemonAEditar.name= this.nombreEditar;
    this.pokemonAEditar.attack= this.ataqueEditar;
    this.pokemonAEditar.image= this.imagenEditar;
    this.pokemonAEditar.defense= this.defensaEditar;

    this.pokemonsServices.editarPokemon(this.pokemonAEditar)
    .subscribe(respuesta=>{
      window.alert('edición correcta');
      this.banderaNuevo=0;
      this.banderaEditar=0;
    }), errores => this.errores = parsearErroresAPI(errores);

  }
}
