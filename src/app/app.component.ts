import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  imports: [FormsModule] ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  message: string = "Hello from BridgeLabz ";  // Define message property
  logoPath: string = "./assets/BL_logo_square_jpg.jpg"; 
  userName: string = "";
 

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
