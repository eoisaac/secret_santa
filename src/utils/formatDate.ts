interface FormatDateProps {
  date: Date
  locale: 'pt-BR' | 'en-US'
}

export const formatDate = ({ date, locale }: FormatDateProps) => {
  return new Intl.DateTimeFormat(locale, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
