import { zodResolver } from '@hookform/resolvers/zod'
import { EnvelopeSimple } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import * as zod from 'zod'
import { Button } from '../../components/Button'
import { CreationForm } from './components/CreationForm'

export const Creation = () => {
  const creationFormSchema = zod.object({
    name: zod.string().min(1, 'You must add the name'),
    budget: zod.string().min(1, 'You must add the budget'),
    date: zod.string().min(1, 'You must add the date'),
    participants: zod
      .object({
        id: zod.string(),
        name: zod.string().min(1, 'You must add the name'),
        number: zod.string().min(1, 'You must add the number'),
        pair: zod.string(),
      })
      .array()
      .min(3, 'You must add at least 3 participants'),
    message: zod.string(),
  })
  const MIN_PARTICIPANTS_AMOUNT = 3

  type CreationFormData = zod.infer<typeof creationFormSchema>

  const creationForm = useForm<CreationFormData>({
    resolver: zodResolver(creationFormSchema),
    defaultValues: {
      participants: [...new Array(MIN_PARTICIPANTS_AMOUNT)].map(() => ({
        id: uuidv4(),
        name: '',
        number: '',
        pair: '',
      })),
    },
  })

  const { handleSubmit, reset, formState } = creationForm
  const { errors } = formState

  const handleCreation = (data: CreationFormData) => {
    // const secretSanta: SecretSanta = {}
    console.log(data)
    reset()
  }

  return (
    <section
      className="page flex flex-col items-stretch justify-evenly gap-4
    text-center"
    >
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
          Fill out the form below adding the name and whatsapp number of the
          participants
        </p>
      </div>

      <div
        className="flex flex-col items-stretch gap-8
      sm:flex-row sm:items-center"
      >
        <form
          onSubmit={handleSubmit(handleCreation)}
          className="mx-auto flex w-full flex-col items-center gap-4"
        >
          <FormProvider {...creationForm}>
            <CreationForm errors={errors} />
          </FormProvider>
          <Button
            label="Create"
            icon={<EnvelopeSimple weight="bold" />}
            type="submit"
          />
        </form>

        <img
          src="/assets/images/letter.svg"
          alt="3d letter"
          loading="lazy"
          className="mx-auto h-64 w-64 p-4 drop-shadow-md sm:h-72 sm:w-72 
          md:h-96 md:w-96"
        />
      </div>
    </section>
  )
}
