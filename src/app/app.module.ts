import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/game-area/board/board.component';
import { BarComponent } from './components/game-area/bar/bar.component';
import { DragOverDirective } from './directives/drag-over.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BarComponent,
    DragOverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
