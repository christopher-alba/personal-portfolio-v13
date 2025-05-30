import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-fade-in-on-view',
  standalone: true,
  templateUrl: './fade-in-on-view.component.html',
  styleUrls: ['./fade-in-on-view.component.scss'],
})
export class FadeInOnViewComponent implements AfterViewInit {
  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;
  @Input() threshold: number = 0.9;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.wrapper.nativeElement, 'in-view');
        } else {
          this.renderer.removeClass(this.wrapper.nativeElement, 'in-view');
        }
      },
      { threshold: this.threshold  }
    );

    observer.observe(this.wrapper.nativeElement);
  }
}
