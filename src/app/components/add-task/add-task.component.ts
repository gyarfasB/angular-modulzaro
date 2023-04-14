import { Component, Output , EventEmitter} from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Task} from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  time!: string;
  weekday!: string;
  locationtext!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
  .onToggle()
  .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
     if(!this.text) {
      alert('Kérem töltse ki a mezőt!')
      return;
     }
     const newTask = {
      text: this.text,
      day: this.day,
      time: this.time,
      weekday: this.weekday,
      locationtext: this.locationtext,
      reminder: this.reminder,
     };
     
     this.onAddTask.emit(newTask); //az új objektum

     this.text = '';
     this.day = '';
     this.time = '';
     this.weekday = '';
     this.locationtext = '';
     this.reminder = false;
  }
}
