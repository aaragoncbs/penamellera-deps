import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-landscape');

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Peñamellera: El Corazón Deportivo de Asturias
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
          Explora la pasión, la tradición y el dinamismo de los deportes en el
          Concejo de Peñamellera, puerta de los Picos de Europa.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="#disciplinas">
              Ver Actividades Destacadas
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
