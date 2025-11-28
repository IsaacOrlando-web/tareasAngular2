import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  nuevaTarea: string = '';

  tareas: Array<{ id: number, description: string }> = [];

  agregarTarea() {
    if(this.nuevaTarea.trim().length !== 0){
      const nuevaTarea = {
        id: Date.now(),
        description: this.nuevaTarea
      }
      this.tareas.push(nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(tareaId: number) {
    const index = this.tareas.findIndex(tarea => tarea.id === tareaId);
    if (index !== -1) {
      this.tareas.splice(index, 1);
    }
  }
}
