import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-todoform',
	templateUrl: './todoform.component.html',
	styleUrls: ['./todoform.component.css'],
})
export class TodoformComponent implements OnInit {
	@Output() newTaskChildEvent = new EventEmitter<string>();
	sendTask(taskValue: string) {
		// console.log(taskValue);
		this.newTaskChildEvent.emit(taskValue);
	}
	showToastr() {
		this.toastr.success('Task Added', 'Beat It 💪 !', {
			timeOut: 1500,
			positionClass: 'toast-top-right',
			progressBar: true,
		});
	}
	constructor(private toastr: ToastrService) {}
	ngOnInit(): void {}
}
