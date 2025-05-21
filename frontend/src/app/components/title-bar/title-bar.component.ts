import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-title-bar',
  imports: [NavigationComponent],
  templateUrl: './title-bar.component.html',
  standalone: true,
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {

}
