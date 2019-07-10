import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: []
})
export class NavbarComponent implements OnInit {

	constructor(private router: Router, private service: UserService) { }

	ngOnInit() {
	}

	onLogout() {
		localStorage.removeItem('token');
		window.location.href = '';
		this.router.navigate(['/user/login'])
	}

}
