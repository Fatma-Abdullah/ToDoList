import { Component, OnInit } from '@angular/core';
import { TaskRequestModel } from 'src/app/models/tasks-request-model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  item: TaskRequestModel = { id: 0 , title: '', desc: '' };
  onClose: any;
  constructor(public bsModalRef: BsModalRef, private tasksServ: TasksService) { }

  ngOnInit() {
    console.log(this.item);
  }
  Add() {
    this.tasksServ.AddTask(this.item).subscribe(
      d => {
        this.onClose(d);
        this.bsModalRef.hide();
      }
    );
  }
  Edit() {
    this.tasksServ.EditTask(this.item).subscribe(
      d => {
        this.onClose(d);
        this.bsModalRef.hide();
      }
    );
  }

}
