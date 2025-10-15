import Image from 'next/image';
import Link from 'next/link';
import { GalleryImages } from '@/lib/gallery-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function GallerySection() {
  // Seleccionamos un subconjunto de imágenes para la vista previa
  const previewImages = GalleryImages.slice(0, 4);

  return (
    <section id="gallery-preview" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Nuestra Galería
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Imágenes que capturan el espíritu deportivo de Peñamellera.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {previewImages.map((image) => (
            <Link href="/gallery" key={image.id}>
              <Card className="overflow-hidden cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-bold">
            <Link href="/gallery">
              Ver Galería Completa
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
