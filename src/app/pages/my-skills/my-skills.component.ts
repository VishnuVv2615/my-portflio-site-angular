import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})
export class MySkillsComponent {


  languageSkills=[
    { name: "Angular", icon: "fa-brands fa-angular", path: "https://angular.dev/" },
    { name: "React", icon: "fa-brands fa-react", path: "https://react.dev/" },
    { name: "JavaScript", icon: "fa-brands fa-js", path: "https://www.javascript.com/" },
    { name: "HTML", icon: "fa-brands fa-html5", path: "https://html.com/" },
    { name: "CSS", icon: "fa-brands fa-css3", path: "https://web.dev/learn/css" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", path: "https://getbootstrap.com/" },
    { name: "Problem-Solving", icon: "fa-solid fa-pen-to-square", path: "/" },
    { name: "Teamwork", icon: "fa-solid fa-users", path: "/" },
  ]

}
