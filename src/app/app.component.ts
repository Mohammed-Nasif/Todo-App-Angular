import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	tasksList: Array<string> = [];

	updateTasksList(newTask: string) {
		// console.log(this.tasksList);
		this.tasksList.push(newTask);
	}
}
