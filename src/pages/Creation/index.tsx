import { EnvelopeSimple } from 'phosphor-react'
import { Button } from '../../components/Button'
import { CreationForm } from './components/CreationForm'

export const Creation = () => {
  return (
    <section className="page flex flex-col items-stretch gap-4 text-center">
      <div
        className="mx-auto flex max-w-3xl flex-col items-center gap-4
      text-slate-500 sm:gap-8"
      >
        <h1
          className="text-2xl font-semibold text-slate-800 sm:text-4xl"
          id="creation"
        >
          Creation
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aperiam expedita laboriosam repellendus qui. Adipisci perferendis
          dolores.
        </p>
      </div>

      <div>
        <form className="mx-auto flex max-w-lg flex-col items-center gap-4">
          <CreationForm />
          <Button
            label="Create"
            icon={<EnvelopeSimple weight="bold" />}
            type="submit"
          />
        </form>
      </div>
    </section>
  )
}
