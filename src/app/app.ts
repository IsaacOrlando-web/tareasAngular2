import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarea } from './tarea/tarea.js';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarea, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea');
}
