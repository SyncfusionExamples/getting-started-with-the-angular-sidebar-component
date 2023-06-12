import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public toggleSidebar: boolean=true;

  public listFields = { id:"id", text: "text"}

  public listData: object = [
    { id: "1", text: "JavaScript", 
        description: "JavaScript (JS) is an interpreted computer programming language. " +
        "It was originally implemented as part of web browsers so that client-side scripts" + 
        "could interact with the user, control the browser, communicate asynchronously, and" +
        "alter the document content that was displayed. However, it has recently" +
        "become common in both game development and the creation of desktop applications." },
    { id: "2", text: "TypeScript", 
        description: "It is a typed superset of JavaScript that compiles to plain JavaScript." + 
        "TypeScript is an open-source, object-oriented programing language. It contains all elements of JavaScript" + 
        "It is a language designed for large-scale JavaScript application development, which can be executed on any" + 
        "browser, any Host, and any Operating System. TypeScript is a language as well as a set of tools." +
        " TypeScript is the ES6 version of JavaScript with some additional features." },
    { id: "3", text: "Angular", 
        description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript." +
        " Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript" +
        " libraries that you import into your applications." },
    { id: "4", text: "React",
        description: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces." +
        " It lets you compose complex UIs from small and isolated pieces of code called “components”." +
        " It can also render on the server using Node." },
    { id: "5", text: "Vue", 
        description: "A progressive framework for building user interfaces. It is incrementally adoptable." +
        " The core library is focused on the view layer only and is easy to pick up and integrate with other" +
        " libraries or existing projects. On the other hand, Vue is also perfectly capable of powering" +
        " sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries." }
  ]

  public menuBtnClk(){
    this.toggleSidebar = !this.toggleSidebar;
  }

  public onSelect(args:any){
    let mainContent = document.getElementsByClassName("main-content")[0];
    if(mainContent){
      mainContent.innerHTML = args.data.description;
    }
  }
}
