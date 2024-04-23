import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  markAsCompleted(id: number): void {
    this.taskService.markTaskCompleted(id);
    const completedTask = this.tasks.find(task => task.id === id);
  if (completedTask) {
    alert(`Task "${completedTask.title}" has been marked as completed.`);
  }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
