import { Component, OnChanges, OnInit } from '@angular/core';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-right-dock',
  templateUrl: './right-dock.component.html',
  styleUrls: ['./right-dock.component.scss'],
  standalone: true,
})
export class RightDockComponent implements OnInit {
  currentTheme?: Theme = undefined;
  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.theme$.subscribe(() => {
      this.currentTheme = this.themeService.currentTheme;
    });
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
