export const Logo = () => {
  return (
    <strong className="flex items-center">
      <img
        src="/assets/images/santa_with_black_glasses.svg"
        className="h-9 w-9"
        alt="Santa Claus wearing black glasses"
        loading="lazy"
      />
      <div className="font-semibold">
        <span className="sr-only sm:not-sr-only">Santa</span>
        Secret
      </div>
    </strong>
  )
}
