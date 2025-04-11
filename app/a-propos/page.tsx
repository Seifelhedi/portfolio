"use client"

import { PageTransition } from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h1 className="text-3xl font-bold mb-6">À propos de moi</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Actuellement étudiant en BUT Métiers du Multimédia et de l'Internet (MMI), je me forme aux différents
                aspects de la création numérique et du développement web.
              </p>
              <p>
                Mon parcours m'a permis d'acquérir des compétences variées allant du design graphique à la
                programmation, en passant par la communication digitale et l'audiovisuel.
              </p>
              <p>
                Je suis particulièrement intéressé par [spécialisation/domaine d'intérêt] et j'aspire à devenir un
                professionnel polyvalent capable de répondre aux défis du numérique.
              </p>
              <p>
                En dehors de mes études, je m'investis dans des projets personnels qui me permettent d'approfondir mes
                connaissances et d'explorer de nouvelles technologies.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Compétences</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Développement Web</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>HTML / CSS / JavaScript</li>
                  <li>React / Next.js</li>
                  <li>PHP / MySQL</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Design</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>UI/UX Design</li>
                  <li>Adobe Creative Suite</li>
                  <li>Figma</li>
                  <li>Motion Design</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Audiovisuel</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Montage vidéo</li>
                  <li>Photographie</li>
                  <li>Animation</li>
                  <li>Prise de son</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Communication</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Stratégie digitale</li>
                  <li>Réseaux sociaux</li>
                  <li>Rédaction web</li>
                  <li>SEO</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-bold pt-4">Formation</h2>
            <div className="space-y-4">
              <div className="border-l-2 pl-4 py-2">
                <h3 className="font-medium">BUT Métiers du Multimédia et de l'Internet</h3>
                <p className="text-sm text-muted-foreground">IUT de [Ville] • 2022 - Présent</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Formation pluridisciplinaire couvrant le développement web, le design, l'audiovisuel et la
                  communication digitale.
                </p>
              </div>
              <div className="border-l-2 pl-4 py-2">
                <h3 className="font-medium">Baccalauréat [Spécialité]</h3>
                <p className="text-sm text-muted-foreground">Lycée [Nom] • 2019 - 2022</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Spécialités : [Spécialité 1], [Spécialité 2], [Spécialité 3]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
