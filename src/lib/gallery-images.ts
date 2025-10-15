import data from './gallery-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const GalleryImages: ImagePlaceholder[] = data.galleryImages;
