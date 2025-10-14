'use client';

import { useState, useMemo } from 'react';
import type { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { events, sports } from '@/lib/events';
import type { Sport } from '@/lib/definitions';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeFilters, setActiveFilters] = useState<Sport[]>([]);

  const toggleFilter = (sport: Sport) => {
    setActiveFilters((prev) =>
      prev.includes(sport)
        ? prev.filter((s) => s !== sport)
        : [...prev, sport]
    );
  };

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const dateMatch = date
          ? event.date.toDateString() === date.toDateString()
          : true;
        const sportMatch =
          activeFilters.length > 0 ? activeFilters.includes(event.sport) : true;
        return dateMatch && sportMatch;
      })
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [date, activeFilters]);

  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
        const dateStr = event.date.toDateString();
        if (!acc[dateStr]) {
            acc[dateStr] = [];
        }
        acc[dateStr].push(event);
        return acc;
    }, {} as Record<string, typeof events>);
  }, []);

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Calendario de Eventos
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Filtra por deporte o selecciona un día para ver todos los eventos programados.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <Card>
            <CardHeader>
                <CardTitle className="font-headline">Filtrar Eventos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">Por Deporte</h3>
                    <div className="flex flex-wrap gap-2">
                        {sports.map((sport) => (
                        <Button
                            key={sport}
                            variant={activeFilters.includes(sport) ? 'default' : 'secondary'}
                            onClick={() => toggleFilter(sport)}
                            size="sm"
                        >
                            {sport}
                        </Button>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2">Por Fecha</h3>
                     <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border p-0"
                        locale={es}
                        modifiers={{
                            hasEvent: (d: Date) => eventsByDate[d.toDateString()] !== undefined
                        }}
                        modifiersStyles={{
                            hasEvent: { 
                                fontWeight: 'bold',
                                color: 'hsl(var(--primary))' 
                            }
                        }}
                      />
                 </div>
                 {activeFilters.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={() => setActiveFilters([])}>Limpiar filtros</Button>
                 )}
            </CardContent>
          </Card>
        </aside>

        <main className="w-full md:w-2/3 lg:w-3/4">
          <h2 className="font-headline text-2xl font-bold mb-4">
            Eventos para {date ? format(date, 'PPP', { locale: es }) : 'todas las fechas'}
          </h2>
          {filteredEvents.length > 0 ? (
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline">{event.title}</CardTitle>
                            <CardDescription>
                            {format(event.date, "eeee, d 'de' MMMM '·' HH:mm 'h'", { locale: es })}
                            </CardDescription>
                        </div>
                        <Badge variant="secondary">{event.sport}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                    {event.link && (
                        <Button asChild variant="link" className="px-0 pt-4">
                            <Link href={event.link}>Más información</Link>
                        </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">No hay eventos que coincidan con tu búsqueda.</p>
              <p className="text-sm text-muted-foreground/80">Prueba a cambiar la fecha o los filtros.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
