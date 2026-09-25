import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.html'
})
export class Badge {

  @Input() variant: 'success' | 'danger' | 'neutral' = 'neutral';
}
