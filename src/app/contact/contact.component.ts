import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TitleComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title:string='contact component';
  contactTitleColor:string='var(--main-color) !important';
  userName:string='';
  userEmail:string='';
  userAge:string='';
  userPassword:string='';
}
