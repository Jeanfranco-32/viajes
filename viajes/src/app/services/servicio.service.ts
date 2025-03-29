import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { Post } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  post: string[] = []
  private categorias: Category[] = [
    { id: 1, titulo: 'Viaje a la Playa', },
    { id: 2, titulo: 'Montaña' },
    { id: 3, titulo: 'Ciudad' },
    { id: 4, titulo: 'Rural' },
    { id: 5, titulo: 'Festivales' },
  ];

  constructor() {
    this.loadPostsFromStorage();
  }

  private loadPostsFromStorage() {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    }
  }

  private savePostsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  private posts: Post[] = [
    {
      id: 1,
      titulo: 'Descubre el Paraíso en las Playas de Mallorca 🏝️☀️',
      texto: 'Mallorca, la joya del Mediterráneo, es un destino soñado para quienes buscan sol, mar y arena dorada. Con más de 300 playas y calas escondidas, esta isla balear ofrece paisajes espectaculares, aguas cristalinas y una atmósfera que invita al descanso y la aventura.',
      autor: 'Mario Girón',
      imagen: 'https://estaticos-cdn.prensaiberica.es/clip/8ef2b759-a05e-497c-bec5-a10522b83fc2_source-aspect-ratio_default_0.jpg',
      fecha: '2025-05-05',
      categoria: this.categorias[0]
    },
    {
      id: 2,
      titulo: 'Explora la Magia de los Alpes: Un Viaje Inolvidable',
      texto: 'Los Alpes son un destino de ensueño para los amantes de la naturaleza, la aventura y la tranquilidad. Este majestuoso sistema montañoso, que se extiende por ocho países europeos, ofrece paisajes impresionantes en cualquier época del año. Desde sus picos nevados hasta sus verdes praderas alpinas, viajar a los Alpes es una experiencia única que combina belleza, cultura y emoción.',
      autor: 'jean franco',
      imagen: 'https://viajes.nationalgeographic.com.es/medio/2020/12/21/el-por-que-de-su-belleza_15afcfe3_1278x821.jpg',
      fecha: '2025-07-17',
      categoria: this.categorias[1]
    },
    {
      id: 3,
      titulo: 'París: La Ciudad del Amor y la Elegancia 🇫🇷✨',
      texto: 'París, la capital de Francia, es un destino que enamora a cada visitante con su historia, arte, cultura y gastronomía inigualable. Conocida como la "Ciudad de la Luz", cada rincón de París desprende magia, desde sus majestuosos monumentos hasta sus encantadoras calles adoquinadas.',
      autor: 'Dani Sanguino',
      imagen: 'https://www.journeygourmet.com/continentes/Europa/Francia/Isla_de_Francia/Par%C3%ADs/imagenBig.jpg',
      fecha: '2025-12-27',
      categoria: this.categorias[2]
    },
    {
      id: 4,
      titulo: 'Descubre el Encanto Rural de Madrid 🌿🏡',
      texto: 'Más allá del bullicio de la ciudad, la Comunidad de Madrid esconde un paraíso rural lleno de encanto, historia y naturaleza. Pueblos con arquitectura medieval, paisajes montañosos, campos de viñedos y una gastronomía tradicional hacen de esta región el destino perfecto para desconectar y disfrutar de la tranquilidad.',
      autor: 'juanan',
      imagen: 'https://img.huffingtonpost.es/files/image_1200_720/uploads/2023/09/25/buitrago-de-lozoya-madrid.jpeg',
      fecha: '2025-08-18',
      categoria: this.categorias[3]
    },
    {
      id: 5,
      titulo: 'Vive la Magia del Carnaval de Brasil 🎭🇧🇷🎶',
      texto: 'El Carnaval de Brasil es una de las fiestas más vibrantes y espectaculares del mundo, donde la música, la danza y la alegría se fusionan en un espectáculo sin igual. Durante varios días, las calles de ciudades como Río de Janeiro, São Paulo, Salvador y Recife se llenan de coloridos desfiles, ritmos contagiosos y miles de personas celebrando con energía inagotable.',
      autor: 'gian carlos',
      imagen: 'https://images.squarespace-cdn.com/content/v1/5c1b9b60b10598f4780de648/4abc564d-b00f-4ad4-9bf4-27547d48cedf/shutterstock_201180134.jpg',
      fecha: '2025-11-17',
      categoria: this.categorias[4]
    }

  ];


  getAll(): Post[] {
    return this.posts;
  }

  getByCategoria(cat: string): Post[] {
    return this.posts.filter(post => post.categoria.titulo === cat);
  }

  getById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  addPost(post: Post): void {
    this.posts.push(post)
    this.savePostsToLocalStorage();
  }

  getAllCategories(): Category[] {
    return this.categorias;
  }

}

