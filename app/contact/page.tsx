"use client"

import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Me contacter</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter, je
              serai ravi d'échanger avec vous.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Informations de contact</h2>
                    <p className="text-muted-foreground">
                      Voici différentes façons de me contacter ou de suivre mon travail.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">prenom.nom@etudiant.univ-xyz.fr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">Localisation</h3>
                        <p className="text-sm text-muted-foreground">[Ville], France</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Linkedin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/votre-nom</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Github className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="font-medium">GitHub</h3>
                        <p className="text-sm text-muted-foreground">github.com/votre-nom</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" placeholder="Sujet de votre message" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Détaillez votre demande ici..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      Envoyer
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
