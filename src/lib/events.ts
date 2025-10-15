import type { Event, Sport } from './definitions';

export const sports: Sport[] = ['Ajedrez', 'Bolo Palma', 'Fútbol', 'Carrera por Montaña'];

// This data will now be fetched from Firestore, this is just a backup.
export const events: Event[] = [
  {
    id: '1',
    title: 'Torneo de Ajedrez de Verano',
    sport: 'Ajedrez',
    date: new Date('2025-10-17T10:00:00'),
    description: 'Torneo abierto para todas las edades en el centro cívico de Panes. Inscripciones abiertas.',
    link: '#',
  },
  {
    id: '2',
    title: 'Concurso de San Cipriano',
    sport: 'Bolo Palma',
    date: new Date('2025-10-20T16:00:00'),
    description: 'El tradicional concurso de bolo palma que atrae a los mejores jugadores de la comarca. No te lo pierdas en la bolera municipal.',
    link: '#',
  },
  {
    id: '3',
    title: 'Media Maratón de Peñamellera',
    sport: 'Carrera por Montaña',
    date: new Date('2025-10-25T09:00:00'),
    description: 'Una de las carreras más exigentes y hermosas de Asturias. Recorre los senderos de los Picos de Europa.',
    link: '#',
  },
  {
    id: '4',
    title: 'Liga Local de Fútbol: Peñamellera vs. Cabrales',
    sport: 'Fútbol',
    date: new Date('2025-08-11T18:00:00'),
    description: 'Emocionante partido de la liga local en el campo de fútbol de Panes.',
    link: '#',
  },
  {
    id: '5',
    title: 'Clases de iniciación al Ajedrez',
    sport: 'Ajedrez',
    date: new Date('2025-09-02T17:00:00'),
    description: 'El Club de Ajedrez Peñamellera ofrece clases para principiantes todos los lunes de septiembre.',
    link: '#',
  },
    {
    id: '6',
    title: 'Torneo Infantil de Fútbol',
    sport: 'Fútbol',
    date: new Date('2025-09-21T11:00:00'),
    description: 'Torneo para categorías inferiores, promoviendo el deporte base en el concejo.',
    link: '#',
  },
];
