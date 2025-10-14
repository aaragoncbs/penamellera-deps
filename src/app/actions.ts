'use server';

import { z } from 'zod';

const activitySchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres.'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres.'),
  sport: z.enum(['Ajedrez', 'Bolo Palma', 'Fútbol', 'Carrera por Montaña', 'Otro']),
  eventDate: z.string().optional(),
  link: z.string().url('Por favor, introduce una URL válida.').optional().or(z.literal('')),
});

export type FormState = {
  message: string;
  errors?: {
    title?: string[];
    description?: string[];
    sport?: string[];
    eventDate?: string[];
    link?: string[];
  };
  success: boolean;
};

export async function submitActivity(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = activitySchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    sport: formData.get('sport'),
    eventDate: formData.get('eventDate'),
    link: formData.get('link'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores del formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  // Here you would typically save the data to a database.
  // For this example, we'll just log it to the console.
  console.log('Nueva actividad enviada:');
  console.log(validatedFields.data);

  return {
    message: '¡Gracias! Tu actividad ha sido enviada para revisión.',
    success: true,
  };
}
