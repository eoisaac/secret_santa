export const formatCurrency = (
  value: number = 0,
  locale: string,
  options: Intl.NumberFormatOptions = {},
): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    ...options,
  }).format(value ?? 0)
