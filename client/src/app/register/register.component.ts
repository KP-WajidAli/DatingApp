import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  model: any = {};
  private accountService = inject(AccountService);
  onCancel = output<boolean>();

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response: any) => {
        console.log(response);
        this.cancel();
      },
      error: (errMsg) => {
        console.log(errMsg);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }

  cancel() {
    this.onCancel.emit(false);
  }
}
