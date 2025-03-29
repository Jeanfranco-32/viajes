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
  posts: Post[] = [];
  categorias: Category[] = [];
  filtroCategoria: string = '';

  constructor(private ServicioService: ServicioService) { }

  ngOnInit(): void {
    this.posts = this.ServicioService.getAll();
    this.categorias = this.ServicioService.getAllCategories();

  }

  filtrarPorCategoria(): void {
    this.posts = this.filtroCategoria ? this.ServicioService.getByCategoria(this.filtroCategoria) : this.ServicioService.getAll();
  }
}
