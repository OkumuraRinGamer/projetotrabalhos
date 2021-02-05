import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MateriaListComponent } from "./list/materia-list.component";
import { MateriaRoutingModule } from "./materia-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MateriaService } from "./materia.service";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MateriaFormComponent } from './form/materia-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MateriaListComponent, MateriaFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MateriaRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [MateriaService],
})
export class MateriaModule {}
