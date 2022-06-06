import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonComponent} from './Pokrmon/pokemon/pokemon.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { FilterPipe } from './Pipes/filter.pipe';




import { MaterialModule} from './Material/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListadoGenericoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    NgxPaginationModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
