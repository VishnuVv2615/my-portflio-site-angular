import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    Aos.init({
      duration:800,
      easing:'ease-in-out'
    });
  }
}
