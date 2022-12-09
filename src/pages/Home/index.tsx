export const Home = () => {
  return (
    <section
      className="page flex flex-col items-center justify-around
      text-center"
    >
      <div
        className="flex max-w-3xl flex-col items-center gap-4 
      text-slate-500"
      >
        <h1
          className=" text-2xl font-semibold text-slate-800 sm:text-4xl"
          id="home"
        >
          Planning a Secret Santa gift exchange between friends, or even
          co-workers?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aperiam expedita laboriosam repellendus qui. Adipisci perferendis
          dolores, nostrum placeat iure fugit quos natus laboriosam ratione
          autem dignissimos accusamus ipsum magnam!
        </p>
      </div>
      <img
        src="/assets/images/snowman.svg"
        alt=""
        loading="lazy"
        className="h-96 w-96"
      />
    </section>
  )
}
