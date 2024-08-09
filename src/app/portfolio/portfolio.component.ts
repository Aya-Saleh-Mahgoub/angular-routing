import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TitleComponent,NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit{
  @ViewChild('modalImg', { static: false }) modalImgElement!: ElementRef<HTMLImageElement>;

  // modal
  showModal:boolean=true;
  modalImg:string='';
  srcImgs:string[]=[
    'assets/img/p1.png',
    'assets/img/p2.png',
    'assets/img/p3.png',
    'assets/img/p1.png',
    'assets/img/p2.png',
    'assets/img/p3.png',
  ]
  openModal(src: string): void {
    this.showModal=false;
    this.modalImg = src;
    setTimeout(() => {
      if (this.modalImgElement) {
        this.modalImgElement.nativeElement.src = this.modalImg;
      }
    }, 0);
  }
  closeModal():void{
    this.showModal=true;
  }
  ngAfterViewInit(): void {
    // Optional: you can also initialize the element if needed
  }

  title:string='portfolio component';
  portfolioTitleColor:string='var(--main-color) !important';
}
