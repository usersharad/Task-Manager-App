import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];
  private lastId = 0;

  constructor() {}

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): boolean {
    if (task.title && task.description) {
      task.id = ++this.lastId;
      this.tasks.push(task);
      return true;
    }
    return false;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  markTaskCompleted(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = true;
    }
  }
}
