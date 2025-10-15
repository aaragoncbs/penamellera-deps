'use client';

import type { Event } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
            <CardDescription>
              {format(event.date, "eeee, d 'de' MMMM", { locale: es })}
            </CardDescription>
          </div>
          <Badge variant="secondary">{event.sport}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-muted-foreground flex-grow">{event.description}</p>
        <Button asChild variant="link" className="px-0 pt-4 justify-start">
          <Link href={`/calendar?date=${event.date.toISOString().split('T')[0]}`}>Saber más</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
