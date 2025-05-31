import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import code from './code';
import { FadeInOnViewComponent } from '../fade-in-on-view/fade-in-on-view.component';
import { ParallaxSectionComponent } from '../parallax-section/parallax-section.component';

@Component({
  selector: 'app-career',
  imports: [CommonModule, FadeInOnViewComponent, ParallaxSectionComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit, AfterViewInit {
  prevScrollPos = window.scrollY || document.documentElement.scrollTop;
  code = code;

  computedTrainLeftOffset: number =
    (window?.visualViewport?.width || 2000) * -2;

  private targetDiv?: HTMLDivElement;
  private scrollingDiv?: HTMLDivElement;

  @ViewChild('parallaxSection') parallaxSection!: ParallaxSectionComponent;

  yearsOfExperience = '0';

  ngOnInit(): void {
    const millisecondsToHoursFactor = 1000 * 60 * 60;
    const hoursToYearsFactor = 24 * 365.25;
    const yearsOfExperience =
      (new Date().getTime() - new Date(2022, 6, 1).getTime()) /
      (millisecondsToHoursFactor * hoursToYearsFactor);

    let years = Math.floor(yearsOfExperience);
    let months = Math.ceil(12 * (yearsOfExperience - years)); // <- round here
    if (months === 12) {
      years += 1;
      months = 0;
    }
    this.yearsOfExperience = `${years} years ${
      months > 0 ? `${months} months` : ''
    }`;
  }

  ngAfterViewInit(): void {
    this.targetDiv = this.parallaxSection?.getTargetElement();
    this.scrollingDiv = this.parallaxSection?.getScrollingElement();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.targetDiv || !this.scrollingDiv || !window.visualViewport) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const viewportHeight = window.innerHeight;
    const viewportTop = scrollY;
    const viewportBottom = viewportTop + viewportHeight;

    const scrollingRect = this.scrollingDiv.getBoundingClientRect();
    const scrollingTop = scrollingRect.top + scrollY;
    const scrollingHeight = scrollingRect.height;
    const scrollingBottom = scrollingTop + scrollingHeight;

    const targetRect = this.targetDiv.getBoundingClientRect();
    const targetTop = targetRect.top + scrollY;
    const targetHeight = targetRect.height;

    const svgWidth = this.scrollingDiv.offsetWidth;

    const isTopAligned = viewportTop >= scrollingTop;
    const isBottomAligned = viewportBottom <= scrollingBottom;

    // Only calculate when element is in viewport
    if (
      (this.prevScrollPos < scrollY && isTopAligned) ||
      (this.prevScrollPos > scrollY && isBottomAligned)
    ) {
      // Scale offset based on how much of the element has scrolled through the target div
      const progressThrough =
        (scrollY + viewportHeight - targetTop) /
        (targetHeight + viewportHeight);
      const offset = progressThrough * svgWidth * 2;

      this.computedTrainLeftOffset = offset * 4 - svgWidth * 4;
    }
  }
}
