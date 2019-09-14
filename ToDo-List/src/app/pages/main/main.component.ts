import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tasks: any = [];
  bsModalRef: BsModalRef;

  constructor(private tasksServ: TasksService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAllTasks();
  }
  getAllTasks() {
    this.tasksServ.getAll().subscribe(d => {
      this.tasks = d;
      console.log(this.tasks);
    });
  }
  Add() {
    this.bsModalRef = this.modalService.show(AddEditTaskComponent);
    this.bsModalRef.content.onClose = (added) => {
      if (added) {
        this.getAllTasks();
      }
    };
  }
  Edit(item) {
    this.bsModalRef = this.modalService.show(AddEditTaskComponent, { initialState: {item} });
    console.log(item);
    this.bsModalRef.content.onClose = (updated) => {
      if (updated) {
        this.getAllTasks();
      }
    };
  }
  Delete(id) {
    const confirmDelete = confirm('Are you sure, you want to delete it ?');

    if (confirmDelete) {
      this.tasksServ.DeleteTask(id).subscribe(
        d => { this.getAllTasks(); }
      );
    } else { console.log(confirmDelete); }
  }

}
