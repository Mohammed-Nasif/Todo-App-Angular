import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-taskitem',
	templateUrl: './taskitem.component.html',
	styleUrls: ['./taskitem.component.css'],
})
export class TaskitemComponent implements OnInit {
	@Input() task: string = '';
	@Output() delete = new EventEmitter<string>();
	@Output() completeFlag = new EventEmitter<boolean>();
	deleteIcon = faTrash;
	isCompleted: boolean = false;

	completeToggle() {
		this.isCompleted = this.isCompleted ? false : true;
		this.completeFlag.emit(this.isCompleted);
		// console.log(this.isCompleted)
		// console.log("Complete Btn Clicked")
	}
	deleteTask() {
		this.delete.emit(this.task);
	}
	showToastr() {
		// console.log('delete toastr');
		this.toastr.info(`${this.task} Deleted`, 'Well Done !', {
			timeOut: 1000,
			positionClass: 'toast-top-right',
			progressBar: true,
		});
	}
	constructor(private toastr: ToastrService) {}

	ngOnInit() {}
}
