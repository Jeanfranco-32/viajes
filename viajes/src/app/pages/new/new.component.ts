import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../interfaces/category.interface';
import { ServicioService } from '../../services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  form: FormGroup;
  categorias: Category[] = []
  posts: Post[] = []

  constructor(private fb: FormBuilder, private servicoService: ServicioService, private router: Router) {
    this.categorias = this.servicoService.getAllCategories();
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      texto: ['', Validators.required],
      autor: ['', Validators.required],
      imagen: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
      categoria: ['', Validators.required],
      fecha: [new Date(), Validators.required],
    });
  }

  checkControl(controlName: string, errorName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.hasError(errorName) && control.touched;
  }

  irAHome() {
    this.router.navigate(['/home']);
  }


  onSubmit(): void {
    if (this.form.valid) {
      const nuevaPublicacion: Post = {
        ...this.form.value,
        id: Math.random(),
        categoria: this.categorias.find(cat => cat.titulo === this.form.value.categoria)!
      };

      this.servicoService.addPost(nuevaPublicacion);
      this.router.navigate(['/home']);
      this.form.reset();
    }
  }
}
