import { CaretRight } from 'phosphor-react'
import { Button } from '../../components/Button'

export const Home = () => {
  return (
    <section
      className="page flex flex-col items-center justify-evenly
    text-center"
    >
      <div
        className="flex max-w-3xl flex-col items-center gap-4 text-slate-500
      sm:gap-8"
      >
        <h1
          className="text-2xl font-semibold text-slate-800 sm:text-4xl"
          id="home"
        >
          Planning a Secret Santa gift exchange between friends, or even
          co-workers?
        </h1>
        <p>
          Create and manage Secret Santa gift exchanges. With a few simple
          steps, you can create a group, invite participants and randomly draw
          names and send the assigned name for each participant via WhatsApp for
          an exciting and fun gift exchange!
        </p>

        <a href="#creation">
          <Button
            label="Get started"
            icon={<CaretRight weight="bold" />}
            type="button"
          />
        </a>
      </div>
      <div
        className="mt-4 h-72 w-72 overflow-hidden rounded-full
        sm:h-80 sm:w-80 md:h-[28rem] md:w-[28rem]"
      >
        <div className="relative bg-slate-100">
          <img
            src="/assets/images/snowman.svg"
            alt="3d snowman wearing a hat"
            loading="lazy"
            className="relative -bottom-8 mx-auto h-64 w-64 drop-shadow-md 
            sm:h-72 sm:w-72 md:h-96 md:w-96"
          />
        </div>
      </div>
    </section>
  )
}
