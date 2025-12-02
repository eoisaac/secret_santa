interface RootLayoutProps extends React.PropsWithChildren {}

export const RootLayout = (props: RootLayoutProps) => {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col">
      {props.children}
    </div>
  )
}
