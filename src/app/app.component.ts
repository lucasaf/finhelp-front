import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'finhelp-front';
	userDetails;
	constructor(private router: Router, private service: UserService) { }

	ngOnInit() {
		this.service.getUserProfile().subscribe(
			res => {
				this.userDetails = res;
			},
			err => {
				console.log(err);
			}
		)
	}
}
