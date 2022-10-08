import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-todolist',
	templateUrl: './todolist.component.html',
	styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
	@Input() tasksList: Array<string> = [];
	@Input() tasksLength: number = 0;
	currentTasks: number = this.tasksLength;
	constructor() {}
	updateCurrentItems(isCompleted: boolean): void {
		// console.log(this.tasksList.length);
		// console.log(this.tasksLength);
		this.tasksLength = isCompleted ? this.tasksLength - 1 : this.tasksLength + 1;
	}
	deleteTaskFromParent(task: string): void {
		let taskIndex = this.tasksList.indexOf(task);
		this.tasksList.splice(taskIndex, 1);
	}
	ngOnInit(): void {}
}
