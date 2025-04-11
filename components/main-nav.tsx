"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, Palette, Code, Film, Download } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Accueil",
      active: pathname === "/",
    },
    {
      href: "/a-propos",
      label: "À propos",
      active: pathname === "/a-propos",
    },
    {
      href: "/projets",
      label: "Projets",
      active: pathname === "/projets",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <div className="flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Code className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">Portfolio MMI</span>
        </div>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              route.active ? "text-foreground font-semibold" : "text-foreground/60",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex ml-6">
        <Button size="sm" variant="outline" asChild>
          <Link href="#">
            <Download className="mr-2 h-4 w-4" />
            CV
          </Link>
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex items-center mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary mr-2">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Portfolio MMI</span>
          </div>
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-foreground/60 transition-colors hover:text-foreground text-lg",
                  route.active ? "text-foreground font-semibold" : "",
                )}
                onClick={() => setOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button size="sm" variant="outline" className="mt-4 w-full justify-start" asChild>
              <Link href="#" onClick={() => setOpen(false)}>
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </Link>
            </Button>
          </nav>
          <div className="mt-8 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Développement Web</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Design Graphique</span>
            </div>
            <div className="flex items-center gap-2">
              <Film className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Production Audiovisuelle</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
