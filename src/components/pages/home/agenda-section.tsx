import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { events } from '@/lib/events';
import EventCard from '@/components/shared/event-card';

export default function AgendaSection() {
  const upcomingEvents = events
    .filter(event => event.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Tu Agenda Deportiva de Peñamellera
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          No te pierdas ningún evento. Aquí tienes un adelanto de las próximas citas deportivas.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-12">
          <Button asChild size="lg" className="font-bold">
            <Link href="/calendar">
              Ver Todos los Eventos
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
