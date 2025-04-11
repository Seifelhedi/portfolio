"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <section className="container py-24 sm:py-32 space-y-8 md:space-y-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <motion.div
            className="space-y-6 md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Étudiant en BUT MMI</h1>
            <p className="text-muted-foreground text-lg">
              Passionné par le multimédia et le développement web, je crée des expériences numériques innovantes qui
              allient créativité et fonctionnalité.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/projets">
                  Voir mes projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-background bg-muted md:aspect-square md:rounded-3xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Actuellement en formation BUT Métiers du Multimédia et de l'Internet, je développe des compétences
                variées dans les domaines du web, du design et de la communication digitale.
              </p>
              <p>
                Mon parcours m'a permis d'acquérir une solide expertise en développement front-end et en conception
                d'interfaces, avec une spécialisation dans les technologies modernes.
              </p>
              <p>
                Je m'efforce de créer des expériences utilisateur intuitives et performantes, en portant une attention
                particulière aux détails et à l'accessibilité.
              </p>
            </div>
            <div className="mt-6">
              <Button variant="outline" asChild>
                <Link href="/a-propos">En savoir plus</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Compétences</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Développement Web</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>HTML / CSS / JavaScript</li>
                  <li>React / Next.js</li>
                  <li>PHP / MySQL</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Design</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>UI/UX Design</li>
                  <li>Adobe Creative Suite</li>
                  <li>Figma</li>
                  <li>Motion Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 mb-12 md:flex-row">
            <h2 className="text-3xl font-bold">Mes projets récents</h2>
            <Button variant="outline" asChild>
              <Link href="/projets">Voir tous les projets</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Me contacter</h2>
            <p className="text-muted-foreground">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-muted-foreground">contact@example.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">LinkedIn</div>
                <div className="text-sm text-muted-foreground">linkedin.com/in/username</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-4">
              <Github className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium">GitHub</div>
                <div className="text-sm text-muted-foreground">github.com/username</div>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/contact">Envoyer un message</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

const projects = [
  {
    title: "Refonte de site web",
    description:
      "Projet universitaire de refonte d'un site web pour une association locale, avec amélioration de l'expérience utilisateur.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "HTML/CSS", "JavaScript", "Responsive"],
  },
  {
    title: "Application mobile",
    description:
      "Conception et prototypage d'une application mobile de suivi d'habitudes écologiques dans le cadre d'un projet.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI Design", "Figma", "Prototypage", "UX Research"],
  },
  {
    title: "Court-métrage",
    description:
      "Réalisation d'un court-métrage documentaire sur le thème de l'art urbain, incluant tournage et montage.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Réalisation", "Montage", "After Effects", "Sound Design"],
  },
  {
    title: "Campagne de communication",
    description:
      "Élaboration d'une stratégie de communication digitale pour un événement étudiant, incluant identité visuelle.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Stratégie", "Réseaux sociaux", "Graphisme", "Événementiel"],
  },
  {
    title: "Portfolio photographique",
    description:
      "Création d'une galerie en ligne pour présenter mes travaux photographiques, avec un focus sur la photographie urbaine.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Photographie", "Web Design", "JavaScript", "CSS Grid"],
  },
  {
    title: "Jeu vidéo 2D",
    description:
      "Développement d'un petit jeu de plateforme en JavaScript, avec création des assets graphiques et sonores.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "Canvas", "Game Design", "Pixel Art"],
  },
]
