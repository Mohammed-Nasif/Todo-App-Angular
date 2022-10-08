import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TaskitemComponent } from './taskitem/taskitem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent, TodoformComponent, TodolistComponent, TaskitemComponent],
	imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule, BrowserAnimationsModule, ToastrModule.forRoot(
		{
			timeOut: 1000,
			progressBar: true,
			// preventDuplicates: true,
		}
	)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
