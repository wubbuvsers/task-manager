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
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
