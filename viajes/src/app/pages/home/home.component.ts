import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Category } from '../../interfaces/category.interface';
import { ServicioService } from '../../services/servicio.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: Post[] = [];
  postId: string | null = null;
  categorias: Category[] = [];
  filtroCategoria: string = '';
  constructor(private ServicioService: ServicioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.ServicioService.getAll();
    this.categorias = this.ServicioService.getAllCategories();

    this.postId = this.route.snapshot.paramMap.get('id');
    console.log("Post ID:", this.postId);
  }

  filtrarPorCategoria(): void {
    this.posts = this.filtroCategoria ? this.ServicioService.getByCategoria(this.filtroCategoria) : this.ServicioService.getAll();
  }
}
