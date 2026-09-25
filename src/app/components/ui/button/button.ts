import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html'
})
export class Button {

  @Output() clicked = new EventEmitter<void>();

handleClick(): void {
  this.clicked.emit();
}

  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
}