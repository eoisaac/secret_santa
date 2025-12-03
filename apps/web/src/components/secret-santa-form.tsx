import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/utils/cn/utils'
import { formatCurrency } from '@/utils/format'
import { zodResolver } from '@hookform/resolvers/zod'
import { trpc } from '@repo/trpc/client'
import { LoaderIcon, PlusIcon, XIcon } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

// @todo: create a shared file for zod schemas between web and server
const secretSantaFormValues = z.object({
  eventName: z.string().min(1, 'Event name is required'),
  budget: z
    .array(z.number().min(0, 'Budget values cannot be negative'))
    .length(2, 'Budget must have min and max values'),
  date: z.date(),
  message: z.string().optional(),
  participants: z
    .array(
      z.object({
        name: z.string().min(1, 'Name is required'),
        phone: z.string().min(1, 'Phone is required'),
      }),
    )
    .min(2, 'Add at least two participants'),
})
export type SecretSantaFormValues = z.infer<typeof secretSantaFormValues>

export const SecretSantaForm = () => {
  const { isPending, mutateAsync } =
    trpc.secretSanta.createSecretSanta.useMutation()

  const form = useForm<SecretSantaFormValues>({
    resolver: zodResolver(secretSantaFormValues),
    defaultValues: {
      eventName: '',
      budget: [0, 100],
      date: new Date(),
      message: '',
      participants: [{ name: '', phone: '' }],
    },
  })
  const formErrors = form.formState.errors

  console.log('Form Errors:', formErrors)

  const handleFormSubmit = async (values: SecretSantaFormValues) =>
    await mutateAsync(values)

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-stretch flex-1"
        onSubmit={form.handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col gap-4 h-full md:h-auto flex-1 max-h-112 ">
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Holiday Party" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => {
              const minFormatted = formatCurrency(field.value?.[0], 'pt-BR', {
                currency: 'BRL',
              })
              const maxFormatted = formatCurrency(field.value?.[1], 'pt-BR', {
                currency: 'BRL',
              })
              const formatted =
                field.value?.[0] === field.value?.[1]
                  ? minFormatted
                  : `${minFormatted} - ${maxFormatted}`
              return (
                <FormItem>
                  <FormLabel>Budget</FormLabel>

                  <FormDescription>
                    <span>Set the budget range </span>
                    <span className="font-medium tabular-nums">
                      ({formatted})
                    </span>
                  </FormDescription>

                  <FormControl>
                    <Slider
                      min={0}
                      max={1000}
                      step={10}
                      value={field.value}
                      onValueChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Date</FormLabel>
                <FormControl>
                  <DatePicker
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="hidden md:flex md:mt-auto"
            disabled={isPending}
          >
            {isPending && <LoaderIcon className={cn('animate-spin text-lg')} />}
            <span>{isPending ? 'Sending...' : 'Send'}</span>
          </Button>
        </div>
        <div className="flex flex-col gap-4 h-full md:h-auto flex-1 max-h-112 overflow-y-auto relative">
          <FormField
            control={form.control}
            name="participants"
            render={() => {
              const { fields, append, remove } = useFieldArray({
                name: 'participants',
                control: form.control,
              })
              return (
                <FormItem>
                  <div className="sticky top-0 bg-background pb-1">
                    <FormLabel>
                      <span>{fields.length} Participants</span>
                    </FormLabel>
                    <FormDescription>
                      {formErrors?.participants?.root?.message && (
                        <span className="text-destructive">
                          {formErrors?.participants?.root?.message}
                        </span>
                      )}
                    </FormDescription>
                  </div>

                  <ul className="flex flex-col gap-4 p-1">
                    {fields.map((field, index) => {
                      const isLast = index === fields.length - 1

                      const handleRemove = () => remove(index)
                      const handleAppend = () => append({ name: '', phone: '' })

                      return (
                        <li key={field.id} className="flex gap-2 items-start">
                          <FormField
                            control={form.control}
                            name={`participants.${index}.name`}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={`participants.${index}.phone`}
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Phone</FormLabel>
                                <div className="flex gap-2 items-center">
                                  <FormControl>
                                    <Input
                                      placeholder="(00) 00000-0000"
                                      {...field}
                                    />
                                  </FormControl>
                                  <Button
                                    size="icon"
                                    type="button"
                                    onClick={
                                      isLast ? handleAppend : handleRemove
                                    }
                                    disabled={isPending}
                                  >
                                    {isLast ? <PlusIcon /> : <XIcon />}
                                  </Button>
                                </div>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </FormItem>
              )
            }}
          />
        </div>

        <Button type="submit" className="md:hidden flex" disabled={isPending}>
          {isPending && <LoaderIcon className={cn('animate-spin text-lg')} />}
          <span>{isPending ? 'Sending...' : 'Send'}</span>
        </Button>
      </form>
    </Form>
  )
}
