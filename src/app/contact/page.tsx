import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Contacta con Nosotros
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ¿Organizas un evento deportivo en Peñamellera? ¿Tienes un club que te
          gustaría dar a conocer? Rellena el siguiente formulario y nos
          pondremos en contacto contigo.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
