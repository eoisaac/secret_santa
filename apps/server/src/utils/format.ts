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

export const formatWhatsAppPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const withoutCountryCode = cleaned.startsWith('55')
    ? cleaned.slice(2)
    : cleaned

  const normalized =
    withoutCountryCode.length === 11 && withoutCountryCode[2] === '9'
      ? withoutCountryCode.slice(0, 2) + withoutCountryCode.slice(3)
      : withoutCountryCode
  return `55${normalized}@c.us`
}
