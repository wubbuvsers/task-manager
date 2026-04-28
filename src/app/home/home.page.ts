import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class HomePage {
  constructor(private toastController: ToastController, private alertController: AlertController) {}
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }


  newTask: string = '';
  tasks: { text: string; done: boolean }[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        text: this.newTask,
        done: false
      });

      this.newTask = '';
      this.showToast('Task added');
    }
  }

  async deleteTask(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Delete this task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.tasks.splice(index, 1);
            this.showToast('Task deleted'); // ✅ TOAST HERE
          }
        }
      ]
    });

    await alert.present();
  }

  editTask(index: number) {
    const updatedTask = prompt(
      "Edit your task:",
      this.tasks[index].text
    );

    if (updatedTask !== null && updatedTask.trim() !== '') {
      this.tasks[index].text = updatedTask.trim();
      this.showToast('Task updated');
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
