import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  post: string[] = []
  categories: string[] = ['Playa', 'Montaña', 'Ciudad', 'Rural', 'Festivales'];
  private httpClient = inject(HttpClient);

  getAll(post: string) {
    return lastValueFrom(this.httpClient.get<Post[]>(`${this.post}`));
  }

  getByCategory(category: string) {
    return lastValueFrom(this.httpClient.get<Category[]>(`${this.categories} ${category}`));
  }




}
