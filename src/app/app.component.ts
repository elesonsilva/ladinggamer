import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from "./components/topo/topo.component";
import { PagePrincipalComponent } from "./components/page-principal/page-principal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TopoComponent, PagePrincipalComponent]
})
export class AppComponent {
  title = 'JoyGamer';
}
