interface FormatCurrencyProps {
  language: 'pt-BR' | 'en-US'
  currency: 'BRL' | 'USD'
  value: number
}

export const formatCurrency = ({
  language,
  currency,
  value,
}: FormatCurrencyProps) => {
  return new Intl.NumberFormat(language, {
    currency,
    style: 'currency',
  }).format(value)
}
