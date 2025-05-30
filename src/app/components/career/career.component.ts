import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import code from './code';
import { FadeInOnViewComponent } from "../fade-in-on-view/fade-in-on-view.component";
@Component({
  selector: 'app-career',
  imports: [CommonModule, FadeInOnViewComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit {
  prevScrollPos = window.scrollY || document.documentElement.scrollTop;
  code = code;
  computedTrainLeftOffset: number =
    (window?.visualViewport?.width || 2000) * -2;
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild('parallaxDivTarget') targetDiv?: ElementRef<HTMLDivElement>;
  @ViewChild('scrollingDiv') scrollingDiv?: ElementRef<HTMLDivElement>;
  @ViewChild('parallaxDivTarget') svgRef?: ElementRef<HTMLDivElement>;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      !this.targetDiv ||
      !this.svgRef ||
      !this.scrollingDiv ||
      !window.visualViewport
    )
      return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const viewportHeight = window.innerHeight;
    const viewportTop = scrollY;
    const viewportBottom = viewportTop + viewportHeight;

    console.log(viewportBottom);

    const scrollingRect =
      this.scrollingDiv.nativeElement.getBoundingClientRect();
    const scrollingTop = scrollingRect.top + scrollY;
    const scrollingHeight = scrollingRect.height;
    const scrollingBottom = scrollingTop + scrollingHeight;

    const targetRect = this.targetDiv.nativeElement.getBoundingClientRect();
    const targetTop = targetRect.top + scrollY;
    const targetHeight = targetRect.height;

    const svgWidth = this.svgRef.nativeElement.offsetWidth;

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

  ngOnInit(): void {}
}
