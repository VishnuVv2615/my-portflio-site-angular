import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
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

  scrollToSection(section:string):void{
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }
}
