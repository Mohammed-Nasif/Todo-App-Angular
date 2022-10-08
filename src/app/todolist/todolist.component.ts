import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-todolist',
	templateUrl: './todolist.component.html',
	styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
	@Input() tasksList: Array<string> = [];
	constructor() {}

	deleteTaskFromParent(task: string): void {
		let taskIndex = this.tasksList.indexOf(task);
		this.tasksList.splice(taskIndex, 1);
	}
	ngOnInit(): void {}
}
