import { Component } from '@angular/core';
import { DropdownSidebarComponent } from '../dropdown-sidebar/dropdown-sidebar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DropdownSidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
