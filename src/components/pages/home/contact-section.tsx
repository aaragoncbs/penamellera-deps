import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-card">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Añade tu Actividad
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          ¿Quieres añadir tu actividad o club al portfolio? ¡Contáctanos!
        </p>
        <div className="mt-6 space-y-2 text-muted-foreground">
            <p>Email: <a href="mailto:contacto@deportepenamellera.es" className="text-primary hover:underline">contacto@deportepenamellera.es</a></p>
            <p>Teléfono: <a href="tel:+34000000000" className="text-primary hover:underline">985 XXX XXX</a></p>
        </div>
        <div className="mt-8">
            <Button asChild size="lg" variant="outline">
                <Link href="/contact">O envía tu propuesta aquí</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
