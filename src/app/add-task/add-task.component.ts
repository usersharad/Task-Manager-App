import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  task: Task = new Task();
  taskAdded: boolean = false;

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.taskService.addTask(this.task)) {
      this.task = new Task();
      this.taskAdded = true;
      window.alert('Task added successfully!');
    } else {
      this.taskAdded = false;
      window.alert('Task addition Failed!');
    }
  }
}
