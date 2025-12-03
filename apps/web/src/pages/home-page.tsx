import { SecretSantaForm } from '@/components/secret-santa-form'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export const HomePage = () => {
  const formSectionRef = React.useRef<HTMLDivElement>(null)

  const currentYear = new Date().getFullYear()

  const handleScrollToForm = () =>
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <section className="page-wrapper min-h-screen">
        <div className="z-10 flex flex-1 flex-col items-center justify-center gap-10">
          <div className="mt-10 space-y-4 text-center">
            <h2 className="text-primary text-4xl font-bold">
              Planning a Secret Santa gift exchange between friends, or even
              co-workers?
            </h2>
            <p className="text-lg">
              Create and manage Secret Santa gift exchanges. With a few simple
              steps, you can create a group, invite participants and randomly
              draw names and send the assigned name for each participant via
              WhatsApp for an exciting and fun gift exchange!
            </p>
          </div>
          <img
            src="/images/snowman.svg"
            alt="3d snowman wearing a hat"
            loading="lazy"
            className="max-w-60 drop-shadow-2xl md:max-w-96"
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button className="mx-auto" onClick={handleScrollToForm}>
              Create your Secret Santa now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground animate-bounce"
            onClick={handleScrollToForm}
          >
            <ChevronDown className="size-6" />
          </Button>
        </div>
      </section>
      <section
        ref={formSectionRef}
        className="page-wrapper min-h-screen gap-8 pt-24"
      >
        <h2 className="text-center text-4xl font-bold">
          Create your Secret Santa Event
        </h2>
        <p className="text-muted-foreground mx-auto mt-2 mb-10 max-w-2xl text-center">
          Fill out the form below adding the name and WhatsApp number of the
          participants. Don&apos;t forget to add your name and number in the
          participants list!
        </p>

        <SecretSantaForm />
      </section>

      <div className="bg-secondary">
        <footer className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <div className="flex w-full flex-wrap items-center justify-between text-sm">
            <div className="text-secondary-foreground mx-auto">
              <span>&copy;{currentYear} </span>
              <span className="text-primary font-medium">SecretSanta. </span>
              <span>Todos os direitos reservados.</span>
            </div>

            <div className="text-secondary-foreground mx-auto">
              <span>Feito com ❤️ por </span>

              <a
                href="https://github.com/eoisaac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                @eoisaac
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
