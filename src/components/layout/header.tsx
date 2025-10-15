'use client';

import Link from 'next/link';
import { Menu, Trophy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { href: '#disciplinas', label: 'Actividades' },
  { href: '/calendar', label: 'Calendario' },
  { href: '/gallery', label: 'Galería' },
  { href: '/contact', label: 'Contacto' },
];

export default function Header() {
  const isMobile = useIsMobile();

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors hover:text-foreground/80 text-foreground/60"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Trophy className="h-6 w-6" />
            <span className="sr-only">Peñamellera Deportes</span>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Trophy className="h-7 w-7" />
          <span className="font-headline font-semibold text-lg hidden sm:inline-block">
            Peñamellera Deportes
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end gap-4">
          {!isMobile && <DesktopNav />}
          {isMobile && <MobileNav />}
        </div>
      </div>
    </header>
  );
}
