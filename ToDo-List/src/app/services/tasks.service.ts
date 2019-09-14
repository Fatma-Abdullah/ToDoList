import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { TaskRequestModel } from '../models/tasks-request-model';

/* l decorator da design pattern esmo singleTone ..ana kda b2olo en l service de ht intialize mara wa7da
bs f l project kolo w m4 m7tageet enna n3rfa f ay module tany(m4 m7tagen no7tha f l providers f l app module) */
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  getAll() {
    // this.http.get(environment.apiUrl + '/tasks');
    return this.http.get('http://localhost:3000/tasks');
  }
  AddTask(body: TaskRequestModel) {
    return this.http.post('http://localhost:3000/tasks', body);
  }
  EditTask(body: TaskRequestModel) {
    return this.http.put('http://localhost:3000/tasks/' + body.id , body);
  }
  DeleteTask(id) {
    return this.http.delete('http://localhost:3000/tasks/' + id);
  }
}
