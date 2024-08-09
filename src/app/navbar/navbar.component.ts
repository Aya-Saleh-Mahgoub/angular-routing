import { Component, OnInit,PLATFORM_ID ,Inject, ViewChild, ElementRef, HostListener} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  @ViewChild('navScroll')nav!:ElementRef;
  @HostListener('window:scroll')animation():void{
    if(window.scrollY > 30){
      this.nav.nativeElement.classList.add('py-4');
    } else{
      this.nav.nativeElement.classList.remove('py-4');
    }
  }
}
// export class NavbarComponent implements OnInit {
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   scroll = false;
// ngOnInit(): void {
//   if (isPlatformBrowser(this.platformId)) {
//   window.addEventListener('scroll',()=>{
//     if(window.scrollY > 30){
//       this.scroll = true;
//     }else{
//       this.scroll = false;
//     }
//   })
//   }
// }
// }
