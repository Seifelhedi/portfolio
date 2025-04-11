"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Mes projets</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Découvrez une sélection de mes travaux réalisés dans le cadre de mes études en BUT MMI et de mes projets
              personnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="font-bold text-xl">{project.title}</h2>
                        {project.link && (
                          <Link href={project.link} className="text-muted-foreground hover:text-foreground">
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
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
              </motion.div>
            ))}
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
      "Projet universitaire de refonte d'un site web pour une association locale, avec amélioration de l'expérience utilisateur et optimisation pour mobile.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "HTML/CSS", "JavaScript", "Responsive"],
    link: "#",
  },
  {
    title: "Application mobile",
    description:
      "Conception et prototypage d'une application mobile de suivi d'habitudes écologiques dans le cadre d'un projet de développement durable.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI Design", "Figma", "Prototypage", "UX Research"],
    link: "#",
  },
  {
    title: "Court-métrage",
    description:
      "Réalisation d'un court-métrage documentaire sur le thème de l'art urbain, incluant tournage, montage et post-production.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Réalisation", "Montage", "After Effects", "Sound Design"],
    link: "#",
  },
  {
    title: "Campagne de communication",
    description:
      "Élaboration d'une stratégie de communication digitale pour un événement étudiant, incluant identité visuelle et gestion des réseaux sociaux.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Stratégie", "Réseaux sociaux", "Graphisme", "Événementiel"],
    link: "#",
  },
  {
    title: "Portfolio photographique",
    description:
      "Création d'une galerie en ligne pour présenter mes travaux photographiques, avec un focus sur la photographie urbaine et de portrait.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Photographie", "Web Design", "JavaScript", "CSS Grid"],
    link: "#",
  },
  {
    title: "Jeu vidéo 2D",
    description:
      "Développement d'un petit jeu de plateforme en JavaScript, avec création des assets graphiques et sonores.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "Canvas", "Game Design", "Pixel Art"],
    link: "#",
  },
]
