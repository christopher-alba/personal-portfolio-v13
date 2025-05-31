import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallax-section',
  templateUrl: './parallax-section.component.html',
  styleUrls: ['./parallax-section.component.scss'],
})
export class ParallaxSectionComponent {
  @ViewChild('parallaxDivTarget') targetDiv?: ElementRef<HTMLDivElement>;
  @ViewChild('scrollingDiv') scrollingDiv?: ElementRef<HTMLDivElement>;

  // Optionally expose it via a getter
  getScrollingElement(): HTMLDivElement | undefined {
    if (this.scrollingDiv) return this.scrollingDiv.nativeElement;
    return undefined;
  }

  getTargetElement(): HTMLDivElement | undefined {
    if (this.targetDiv) return this.targetDiv.nativeElement;
    return undefined;
  }
}
