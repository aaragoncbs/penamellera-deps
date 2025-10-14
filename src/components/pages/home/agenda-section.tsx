import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AgendaSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Tu Agenda Deportiva de Peñamellera
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          No te pierdas ningún evento. Consulta nuestro calendario interactivo
          para saber cuándo es el próximo torneo de Ajedrez, el partido de
          fútbol o la gran carrera de montaña.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="font-bold">
            <Link href="/calendar">
              Ver Calendario de Eventos
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
