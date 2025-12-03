'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import type { PropsSingle } from 'react-day-picker'

export const DatePicker = ({ ...props }: PropsSingle) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!props.selected}
          className="data-[empty=true]:text-muted-foreground justify-start text-left font-normal"
        >
          <CalendarIcon />
          {props.selected ? (
            format(props.selected, 'PPP')
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar {...props} />
      </PopoverContent>
    </Popover>
  )
}
