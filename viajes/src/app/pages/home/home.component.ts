import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Category } from '../../interfaces/category.interface';
import { ServicioService } from '../../services/servicio.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private servicioService = inject(ServicioService);

  posts: Post[] = [];
  categorias: Category[] = [];
  filtroCategoria: string = '';

  ngOnInit(): void {
    this.posts = this.servicioService.getAll();
    this.categorias = this.servicioService.getAllCategories();
  }

  filtrarPorCategoria(): void {
    this.posts = this.filtroCategoria
      ? this.servicioService.getByCategoria(this.filtroCategoria)
      : this.servicioService.getAll();
  }
}
