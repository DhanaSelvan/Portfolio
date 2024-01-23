import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toHome(){
    document.getElementById("Home") ?.scrollIntoView();
  }
  toAbout(){
    document.getElementById("About") ?.scrollIntoView();
  }
  toSkills(){
    document.getElementById("Skills") ?.scrollIntoView();
  }
  toProject(){
    document.getElementById("Project") ?.scrollIntoView();
  }
  toContact(){
    document.getElementById("Contact") ?.scrollIntoView();
  }
}
