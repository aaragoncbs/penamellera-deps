import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, Mountain, Goal } from 'lucide-react';
import { BoloPalmaIcon } from '@/components/icons/bolo-palma';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const disciplines = [
  {
    id: 'ajedrez',
    title: 'Ajedrez: Estrategia y Concentración',
    description: 'El Ajedrez goza de una sólida base en Peñamellera. Con el Club de Ajedrez Peñamellera, la disciplina no solo es un juego, sino un vehículo para el desarrollo mental y la convivencia. Consulta nuestro calendario de torneos locales, clases y la participación de nuestros talentos en ligas asturianas. El Ajedrez es la muestra de que el deporte no tiene por qué ser solo físico.',
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    imageId: 'chess',
    link: 'https://drive.google.com/drive/u/0/folders/18jKJzYi0UKQNpQj3GKD7PZu8c9b_leCb'
  },
  {
    id: 'bolo-palma',
    title: 'Bolo palma: La Tradicción que Representa a Peñamellera',
    description: 'El bolo palma es una modalidad tradicional muy arraigada en Peñamellera, donde representa parte esencial de la identidad local. Panes, capital del concejo, es considerada la capital asturiana del bolo palma y acoge competiciones de gran prestigio como el Concurso de San Cipriano, que atrae a los mejores jugadores de la comarca.',
    icon: <BoloPalmaIcon className="h-8 w-8 text-primary" />,
    imageId: 'bolo-palma'
  },
  {
    id: 'futbol',
    title: 'Fútbol: Pasión de multitudes',
    description: 'El fútbol es una de las disciplinas más populares en Peñamellera, con una fuerte presencia en la vida deportiva local. El equipo de la S.D. Peñamellera compite con orgullo en las ligas regionales, fomentando el espíritu de equipo y la competitividad sana entre los jóvenes.',
    icon: <Goal className="h-8 w-8 text-primary" />,
    imageId: 'football'
  },
  {
    id: 'montana',
    title: 'Deportes de Montaña y Tradicionales',
    description: 'Peñamellera es el entorno ideal para el deporte al aire libre. Descubre la dureza y belleza de las Carreras por Montaña, el senderismo en Picos de Europa y el uso de nuestras instalaciones como el Gimnasio y la Piscina Municipal. Hay un deporte para cada persona.',
    icon: <Mountain className="h-8 w-8 text-primary" />,
    imageId: 'mountain-running'
  },
];

export default function DisciplinesSection() {
  return (
    <section id="disciplinas" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Disciplinas Deportivas Destacadas en Peñamellera
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {disciplines.map((discipline) => {
            const image = PlaceHolderImages.find(img => img.id === discipline.imageId);
            const imageHeightClass = discipline.id === 'ajedrez' ? 'h-[28rem]' : 'h-96'; // Taller for chess
            return (
              <Card key={discipline.id} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                   {discipline.icon}
                  </div>
                  <CardTitle className="font-headline text-xl leading-tight pt-2">{discipline.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  {image && (
                     <div className={`relative ${imageHeightClass} w-full mb-4 rounded-md overflow-hidden`}>
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                  )}
                  <p className="text-muted-foreground flex-grow">{discipline.description}</p>
                  {discipline.link && (
                    <Button asChild variant="link" className="px-0 pt-4 justify-start">
                        <Link href={discipline.link} target="_blank">Ver revistas de ajedrez</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
