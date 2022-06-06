import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { MaterialModule } from 'src/app/Material/material/material.module';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';
import { ListadoGenericoComponent } from 'src/app/utilidades/listado-generico/listado-generico.component';
import { parsearErroresAPI } from 'src/app/utilidades/parseo/parseo';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        NgxPaginationModule,
        MatSliderModule,
        
        
      ],
      declarations: [ AppComponent,
        PokemonComponent,
        ListadoGenericoComponent,
        FilterPipe,
         ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de existir el PokemmonComponent', () =>{
    const fixture = TestBed.createComponent(PokemonComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  })



});
