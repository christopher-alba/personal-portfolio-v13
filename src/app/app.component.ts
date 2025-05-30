import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CareerComponent } from './components/career/career.component';
import { ThemeService } from './services/theme.service';
import { RightDockComponent } from "./components/right-dock/right-dock.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CareerComponent, RightDockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.onInit();
  }
}
