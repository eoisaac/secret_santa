import { trpc } from '@repo/trpc/client'
import React from 'react'

export const App = () => {
  const [secretSanta, setSecretSanta] = React.useState<any>(null)

  const { mutateAsync } = trpc.secretSanta.createSecretSanta.useMutation()

  const handleCreateSecretSanta = async () => {
    const response = await mutateAsync({
      eventName: 'Office Secret Santa',
      minBudget: 10,
      maxBudget: 50,
      date: new Date('2024-12-20'),
      message: 'Happy Holidays!',
      participants: [
        { name: 'Alice', phone: '123-456-7890' },
        { name: 'Bob', phone: '987-654-3210' },
      ],
    })
    setSecretSanta(response)
  }

  return (
    <>
      <div>Hello, Secret Santa!</div>

      {secretSanta && (
        <div>
          <h2>Secret Santa Event Created:</h2>
          <pre>{JSON.stringify(secretSanta, null, 2)}</pre>
        </div>
      )}

      <button onClick={handleCreateSecretSanta}>
        Create Secret Santa Event
      </button>
    </>
  )
}
