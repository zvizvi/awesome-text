import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnInit {
  @Input() effect: object;


  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  getStyle(code) {
    if (!code) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustStyle(code);
  }
}
