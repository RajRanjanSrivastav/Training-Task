import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calender-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calender-event.component.html',
  styleUrl: './calender-event.component.css',
})
export class CalenderEventComponent {
  trackEvent:any;
  taskName:any;

  track(event: MouseEvent): void {
    this.trackEvent = event;
  }


  onSubmit(form: any) {
    this.taskName = form.value.task;
    this.changeContent(this.trackEvent!);
    form.reset();
  }

  changeContent(theEvent:any)
  {
    const td = theEvent.target as HTMLTableCellElement;
    td.innerText = this.taskName;
  }
}
