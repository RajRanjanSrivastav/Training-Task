import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalenderEventComponent } from "./calender-event/calender-event.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalenderEventComponent]
})
export class AppComponent {
  title = 'eventCalender';
}
