import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-sidebar.component.html',
  styleUrl: './dropdown-sidebar.component.css'
})
export class DropdownSidebarComponent {
  isPopupVisible: boolean = true;

  // Método para mostrar el popup cuando se haga clic en un li
  showPopup() {
    this.isPopupVisible = true;
  }

  // Método para cerrar el popup
  closePopup() {
    this.isPopupVisible = false;
  }
}
