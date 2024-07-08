import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen= false;

  navLinks=[
    {name:'Home',path:'',id:'/'},
    {name:'About',path:'/about',id:'about'},
    {name:'My Skills',path:'/myskills',id:'my-skills'},
    {name:'Projects',path:'/projects',id:'projects'},
    {name:'Contact',path:'/contact',id:'contact'},
  ]

  constructor(private route:Router){}
  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen=false;
  }


  handleClick(path:string):void{
    this.scrollToSection(path);
    this.closeMenu();

  }

  scrollToSection(path:string):void{
    const link=this.navLinks.find(item=>item.path===path);
    if(link)
    {
      const element=document.getElementById(link.id);
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
    }
  }
}
