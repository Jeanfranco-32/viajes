import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ServicioService } from '../../services/servicio.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [FormsModule, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  private servicioService = inject(ServicioService);
  posts: Post[] = [];

  ngOnInit(): void {
    this.loadPost();
  }

  openClick(): void {
    this.loadPost();
  }

  private loadPost(): void {
    const id = Number(window.location.pathname.split('/').pop());
    const post = this.servicioService.getById(id);
    this.posts = post ? [post] : this.servicioService.getAll();
  }
}

