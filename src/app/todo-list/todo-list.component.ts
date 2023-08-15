import { Component } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
  status: string;
  renaming: boolean;
  newDescription: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        description: this.newTask,
        completed: false,
        status: 'début',
        renaming: false,
        newDescription: ''
      });
      this.newTask = '';
    }
  }

  updateTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  changeTaskStatus(index: number) {
    const task = this.tasks[index];
    if (task.status === 'fin') {
      task.completed = true;
    } else {
      task.completed = false;
    }
  }

  toggleRenaming(task: Task) {
    if (task.renaming) {
      task.description = task.newDescription.trim();
    }
    task.renaming = !task.renaming;
    task.newDescription = task.description;
  }

  renameTask(task: Task) {
    if (task.renaming) {
      task.description = task.newDescription.trim();
    }
    task.renaming = !task.renaming;
    task.newDescription = task.description;
  }
}
