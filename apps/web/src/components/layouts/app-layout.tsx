import { cn } from '@/libs/cn/utils'
import * as React from 'react'

interface AppLayoutProps extends React.PropsWithChildren {}

export const AppLayout = (props: AppLayoutProps) => {
  const [isScrolling, setIsScrolling] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = () => setIsScrolling(window.pageYOffset > 0)
  }, [])

  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col overflow-x-hidden">
      <div
        className={cn('border-border fixed inset-x-0 top-0 z-50', {
          'border-b': isScrolling,
        })}
      >
        <div
          className={cn(
            'bg-background absolute inset-0 -top-8 -z-10 bg-clip-padding blur-2xl backdrop-blur-2xl backdrop-filter transition-all duration-300',
            { 'bg-opacity-30': isScrolling, 'bg-opacity-80': !isScrolling },
          )}
        />
        <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2">
          <strong className="flex items-center">
            <img
              src="images/santa_with_black_glasses.svg"
              className="h-9 w-9"
              alt="Santa Claus wearing black glasses"
              loading="lazy"
            />
            <div className="text-lg font-semibold">
              <span className="sr-only sm:not-sr-only">Santa</span>
              Secret
            </div>
          </strong>
        </header>
      </div>

      {props.children}
    </div>
  )
}
