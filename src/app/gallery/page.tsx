'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <>
      <div className="container py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Galería de Fotos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Un vistazo a la vida deportiva y los paisajes de Peñamellera.
          </p>
        </div>

        <Dialog>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {PlaceHolderImages.map((image) => (
              <DialogTrigger asChild key={image.id}>
                <Card 
                  className="overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedImage && (
             <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="font-headline">{selectedImage.description}</DialogTitle>
                </DialogHeader>
                <div className="relative aspect-video">
                    <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description}
                    fill
                    className="object-contain"
                    />
                </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </>
  );
}
