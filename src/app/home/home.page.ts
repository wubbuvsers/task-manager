import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class HomePage {
  constructor() {}
  newTask: string = '';
  tasks: { text: string; done: boolean }[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        text: this.newTask,
        done: false
      });

      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number) {
    const updatedTask = prompt(
      "Edit your task:",
      this.tasks[index].text
    );

    if (updatedTask !== null && updatedTask.trim() !== '') {
      this.tasks[index].text = updatedTask.trim();
    }
  } 

  language: string = 'en';

  texts: any = {
    en: {
      title: 'Task Manager',
      placeholder: 'Enter a task',
      add: 'Add Task',
      edit: 'Edit',
      delete: 'Delete'
    },
    es: {
      title: 'Gestor de Tareas',
      placeholder: 'Escribe una tarea',
      add: 'Agregar Tarea',
      edit: 'Editar',
      delete: 'Eliminar'
    }
  };

  switchLanguage(lang: string) {
    this.language = lang;
  }
}
