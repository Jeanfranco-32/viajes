import { Component } from '@angular/core';
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
  posts: Post[] = [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    const id = Number(window.location.pathname.split('/').pop());
    const post = this.servicioService.getById(id);
    if (post) {
      this.posts = [post];
    } else {
      this.posts = this.servicioService.getAll();
    }
  }
}

