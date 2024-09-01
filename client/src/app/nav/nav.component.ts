import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  model: any = {};
  loggedIn: boolean = false;
  accountService = inject(AccountService);

  login() {
    console.log('in login', this.model);

    this.accountService.login(this.model).subscribe({
      error: (error) => {
        console.log('error occurred', error);
      },
      next: (resp) => {
        console.log('api response', resp);
        this.loggedIn = true;
      },
    });
  }

  logout() {
    this.accountService.logout();
  }
}
