export const formatDate = (date: string): string => {
  const dateFormater = new Intl.DateTimeFormat('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  return dateFormater.format(new Date(date))
}