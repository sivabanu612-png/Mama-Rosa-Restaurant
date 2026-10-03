const specials = [
  { day: 'Tuesday', item: 'Lasagna Special' },
  { day: 'Wednesday', item: 'Souvlaki Special' },
  { day: 'Thursday', item: 'Steak Special' },
  { day: 'Friday', item: 'Fish & Chips' },
]

export default function Specials() {
  return (
    <section id="specials" className="bg-night py-20 text-white lg:py-28">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="m-0 font-display text-4xl font-bold sm:text-5xl">Something Special Every Day</h2>
          <div className="mx-auto my-5 h-1 w-16 rounded bg-sign" aria-hidden="true" />
          <p className="m-0 text-lg text-white/85">Discover our daily favourites and weekly specials.</p>
        </div>

        <ul className="m-0 mt-12 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {specials.map((s) => (
            <li key={s.day} className="rounded-2xl border border-sign/60 bg-charcoal p-6 text-center transition-colors hover:border-door">
              <p className="m-0 text-sm font-bold text-tan">{s.day}</p>
              <p className="mb-0 mt-2 font-display text-xl font-semibold text-white">{s.item}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a href="#locations" className="btn btn-red">See Today&rsquo;s Special</a>
        </div>
      </div>
    </section>
  )
}