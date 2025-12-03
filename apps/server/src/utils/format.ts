// @todo: create utility package and move this there
export const formatCurrency = (
  value: number = 0,
  locale: string,
  options: Intl.NumberFormatOptions = {},
): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    ...options,
  }).format(value ?? 0)

export const formatDate = (
  date: Date | string | number,
  locale: string,
  options: Intl.DateTimeFormatOptions = {},
): string =>
  new Intl.DateTimeFormat(locale, {
    ...options,
  }).format(new Date(date))
