import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	tasksList: Array<string> = [];

	updateTasksList(newTask: string) {
		if(newTask.trim() !== "" && isNaN(+newTask)){
			this.tasksList.push(newTask);
		}
		// console.log(this.tasksList);
	}
}
