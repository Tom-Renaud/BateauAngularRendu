import { Produit } from '../models/Produit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {
  produits: Produit[] = [
    {
      category: 1,
      id: 6,
      comments: '',
      discount: 5,
      unit: 'kg',
      sale: true,
      name: 'Moules de pêche',
      availability: true,
      price: 7,
      owner: 'tig'
    },
    {
      owner: 'tig',
      discount: 0,
      availability: true,
      sale: false,
      unit: '2 filets',
      price: 7,
      comments: 'environ 300g',
      category: 0,
      name: 'Filet Bar de ligne',
      id: 1
    },
    {
      sale: false,
      owner: 'tig',
      discount: 0,
      availability: false,
      category: 2,
      id: 9,
      unit: 'kg',
      name: 'Araignées',
      comments: 'Hors saison, pêche aux casiers',
      price: 7
    },
    {
      comments: 'Hors saison, pêche à l\'épuisette',
      id: 10,
      price: 8,
      sale: false,
      availability: false,
      category: 1,
      owner: 'tig',
      discount: 0,
      unit: '100g',
      name: 'Bouquets cuits'
    },
    {
      category: 1,
      owner: 'tig',
      price: 9.5,
      name: 'Huitres N°2 St Vaast',
      availability: true,
      sale: false,
      unit: 'Dz',
      comments: '',
      id: 7,
      discount: 0
    },
    {
      name: 'Bar de ligne portion',
      unit: 'pièce',
      owner: 'tig',
      discount: 0,
      category: 0,
      id: 2,
      price: 10,
      sale: false,
      availability: true,
      comments: 'Environ 550-700g la pièce'
    },
    {
      comments: 'Pêche à la corde',
      unit: 'kg',
      owner: 'tig',
      sale: false,
      name: 'Aile de raie',
      discount: 0,
      category: 0,
      price: 10,
      availability: true,
      id: 12
    },
    {
      owner: 'tig',
      id: 13,
      discount: 0,
      price: 12,
      sale: false,
      name: 'Huîtres N°2 OR St Vaast',
      unit: 'Dz',
      category: 1,
      availability: true,
      comments: 'Médaille d\'or Salon Agriculture'
    },
    {
      availability: true,
      name: 'Lieu jaune de ligne',
      discount: 0,
      comments: 'Environ 550-700g la portion',
      category: 0,
      sale: false,
      price: 12,
      owner: 'tig',
      unit: 'kg',
      id: 4
    },
    {
      unit: 'kg',
      discount: 0,
      comments: 'Pêche à la corde',
      id: 5,
      name: 'Filet Julienne',
      category: 0,
      owner: 'tig',
      sale: false,
      price: 19,
      availability: false
    },
    {
      sale: false,
      category: 1,
      unit: '2 Dz',
      price: 19,
      owner: 'tig',
      availability: true,
      id: 16,
      comments: '',
      name: 'Huîtres N°2 St Vaast',
      discount: 0
    },
    {
      owner: 'tig',
      comments: 'Médaille d\'or salon agriculture',
      name: 'Huîtres N°2 OR St Vaast',
      category: 1,
      availability: true,
      discount: 0,
      price: 24,
      unit: '2 Dz',
      id: 14,
      sale: false
    },
    {
      sale: false,
      id: 3,
      owner: 'tig',
      discount: 0,
      price: 30,
      comments: 'Plus de 1.5kg le poisson',
      name: 'Bar de ligne',
      category: 0,
      availability: true,
      unit: 'kg'
    },
    {
      name: 'Huitres N°2 St Vaast',
      price: 38,
      owner: 'tig',
      discount: 0,
      id: 8,
      availability: true,
      unit: '4 Dz',
      sale: false,
      category: 1,
      comments: ''
    },
    {
      availability: true,
      category: 1,
      owner: 'tig',
      name: 'Huîtres N°2 OR St Vaast',
      unit: '4 Dz',
      discount: 0,
      sale: false,
      price: 48,
      comments: 'Médaille d\'or salon agriculture',
      id: 15
    }
  ];
}
