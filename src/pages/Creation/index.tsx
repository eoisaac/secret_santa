import { EnvelopeSimple } from 'phosphor-react'
import { Button } from '../../components/Button'
import { CreationForm } from './components/CreationForm'

export const Creation = () => {
  return (
    <section
      className="page flex flex-col items-center justify-around border
      border-violet-400 text-center"
    >
      <h1
        className="text-2xl font-semibold text-slate-800 sm:text-4xl"
        id="creation"
      >
        Creation
      </h1>

      <div>
        <form>
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
