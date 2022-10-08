import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-todoform',
	templateUrl: './todoform.component.html',
	styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
	@Output() newTaskChildEvent = new EventEmitter<string>();
	@Input() tasksList: Array<string> = [];
	sendTask(taskValue: string) {
		if (taskValue.trim() !== '' && isNaN(+taskValue)) {
			if (!this.tasksList.includes(taskValue)) {
				this.newTaskChildEvent.emit(taskValue);
				this.showToastr(taskValue);
			} else {
				this.showWarnToastr(taskValue);
			}
		}
	}
	showToastr(taskValue: string) {
		this.toastr.success(`${taskValue} Added`, 'Beat It 💪 !', {
			timeOut: 1500,
			positionClass: 'toast-top-right',
			progressBar: true,
		});
	}
	showWarnToastr(taskValue: string) {
		this.toastr.warning(`${taskValue} Is Already Added`, 'Go For Another One 🧠 !', {
			timeOut: 1500,
			positionClass: 'toast-top-right',
			progressBar: true,
		});
	}
	constructor(private toastr: ToastrService) {}
	ngOnInit(): void {}
}
