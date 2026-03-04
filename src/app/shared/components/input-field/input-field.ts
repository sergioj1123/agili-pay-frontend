import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input({ required: true }) control: FormControl = new FormControl();
  // @Input() errorMessage: string = '';

  get errorMessage(): string | null {
    if (!this.control || !this.control.errors || !this.control.touched) {
      return null;
    }

    const errorMessages: { [key: string]: string } = {
      required: 'Este campo é obrigatório.',
      email: 'Formato de e-mail inválido.',
      pattern: 'E-mail ou campo com formato incorreto.',
      minlength: `Mínimo de ${this.control.errors['minlength']?.requiredLength} caracteres.`,
      maxlength: `Máximo de ${this.control.errors['maxlength']?.requiredLength} caracteres.`,
    };

    const firstErrorKey = Object.keys(this.control.errors)[0];

    return errorMessages[firstErrorKey] || 'Campo inválido.';
  }
}
