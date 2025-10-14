export type Sport = 'Ajedrez' | 'Bolo Palma' | 'Fútbol' | 'Carrera por Montaña' | 'Otro';

export type Event = {
  id: string;
  title: string;
  sport: Sport;
  date: Date;
  description: string;
  link?: string;
};
