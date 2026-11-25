/*
 * datos.js - Catálogo de productos de Horno de la Abuela
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas dinámicamente.
 */

const configuracion = {
  titulo: 'Horno de la Abuela',
  campoOrden: 'precio',
  etiquetaValor: 'Precio'
};

const items = [
  {
    id: 1,
    nombre: 'Pan de bono',
    categoria: 'panes',
    descripcion: 'Pan de queso y almidón, recién salido.',
    imagen: 'img/placeholder.svg',
    precio: 1500,
    peso: '60 g',
    sinAzucar: 'no'
  },
  {
    id: 2,
    nombre: 'Pan blandito',
    categoria: 'panes',
    descripcion: 'Pan suave y dulce para el desayuno.',
    imagen: 'img/placeholder.svg',
    precio: 600,
    peso: '40 g',
    sinAzucar: 'no'
  },
  {
    id: 3,
    nombre: 'Pan integral',
    categoria: 'panes',
    descripcion: 'Hecho con harina integral y semillas.',
    imagen: 'img/placeholder.svg',
    precio: 6500,
    peso: '500 g',
    sinAzucar: 'sí'
  },
  {
    id: 4,
    nombre: 'Torta de naranja',
    categoria: 'tortas',
    descripcion: 'Húmeda y con glaseado de naranja.',
    imagen: 'img/placeholder.svg',
    precio: 28000,
    peso: '1 kg',
    sinAzucar: 'no'
  },
  {
    id: 5,
    nombre: 'Torta negra',
    categoria: 'tortas',
    descripcion: 'Con frutas y vino, receta de diciembre.',
    imagen: 'img/placeholder.svg',
    precio: 45000,
    peso: '1 kg',
    sinAzucar: 'no'
  },
  {
    id: 6,
    nombre: 'Torta de zanahoria',
    categoria: 'tortas',
    descripcion: 'Con nueces y endulzada con stevia.',
    imagen: 'img/placeholder.svg',
    precio: 32000,
    peso: '1 kg',
    sinAzucar: 'sí'
  },
  {
    id: 7,
    nombre: 'Galletas de avena',
    categoria: 'galletas',
    descripcion: 'Crocantes, con avena y uvas pasas.',
    imagen: 'img/placeholder.svg',
    precio: 5000,
    peso: '200 g',
    sinAzucar: 'sí'
  },
  {
    id: 8,
    nombre: 'Polvorosas',
    categoria: 'galletas',
    descripcion: 'Galletas de mantequilla que se deshacen.',
    imagen: 'img/placeholder.svg',
    precio: 6000,
    peso: '200 g',
    sinAzucar: 'no'
  },
  {
    id: 9,
    nombre: 'Galletas de chocolate',
    categoria: 'galletas',
    descripcion: 'Con trozos de chocolate.',
    imagen: 'img/placeholder.svg',
    precio: 7000,
    peso: '200 g',
    sinAzucar: 'no'
  },
  {
    id: 10,
    nombre: 'Chocolate caliente',
    categoria: 'bebidas',
    descripcion: 'Chocolate en leche batido con molinillo.',
    imagen: 'img/placeholder.svg',
    precio: 3500,
    peso: '250 ml',
    sinAzucar: 'no'
  },
  {
    id: 11,
    nombre: 'Café con leche',
    categoria: 'bebidas',
    descripcion: 'Café de la región con leche espumada.',
    imagen: 'img/placeholder.svg',
    precio: 3000,
    peso: '250 ml',
    sinAzucar: 'no'
  },
  {
    id: 12,
    nombre: 'Té de frutos rojos',
    categoria: 'bebidas',
    descripcion: 'Infusión caliente sin azúcar.',
    imagen: 'img/placeholder.svg',
    precio: 3000,
    peso: '250 ml',
    sinAzucar: 'sí'
  }
];
