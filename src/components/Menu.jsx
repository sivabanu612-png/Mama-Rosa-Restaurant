const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`

// SAMPLE DATA: placeholder dishes and prices
const favourites = [
  { name: 'Chicken Souvlaki', desc: 'Grilled skewers with lemon potatoes and tzatziki.', price: '$--.--', img: photo('photo-1529042410759-befb1204b468') },
  { name: 'Mama Rosa Pasta', desc: 'House pasta in a slow-simmered tomato sauce.', price: '$--.--', img: photo('photo-1621996346565-e3dbc646d9a9') },
  { name: 'Classic Steak', desc: 'Char-grilled steak with seasonal sides.', price: '$--.--', img: photo('photo-1544025162-d76694265947') },
  { name: 'Fish & Chips', desc: 'Crisp golden fish with fries and tartar sauce.', price: '$--.--', img: photo('photo-1579208575657-c595a05383b7') },
]

const categories = [
  { title: 'Souvlaki & Grill', items: ['Chicken Souvlaki', 'Pork Souvlaki', 'Classic Steak'] },
  { title: 'Pasta', items: ['Mama Rosa Pasta', 'Lasagna', 'Spaghetti & Meatballs'] },
  { title: 'Seafood', items: ['Fish & Chips', 'Grilled Calamari'] },
  { title: 'Breakfast', items: ['Classic Breakfast', 'Omelette'] },
  { title: 'Drinks & Bar', items: ['Coffee', 'Soft Drinks', 'Draft Beer'] },
]

export default function Menu({ onHome }) {
  return (
    <>
      <section className="bg-night pb-16 pt-32 text-center text-white">
        <div className="wrap">
          <p className="m-0 font-script text-4xl text-sign">Mama Rosa</p>
          <h1 className="mb-0 mt-2 font-display text-5xl font-bold sm:text-6xl">Our Menu</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">Fresh flavours and comforting favourites, made for every occasion.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <h2 className="m-0 text-center font-display text-4xl font-bold text-night">Guests&rsquo; Favourites</h2>
          <div className="mx-auto my-5 h-1 w-16 rounded bg-sign" aria-hidden="true" />

          <ul className="m-0 mt-12 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {favourites.map((dish) => (
              <li key={dish.name} className="group flex flex-col overflow-hidden rounded-3xl border-2 border-transparent bg-paper shadow-lg shadow-night/10 transition-all duration-300 hover:-translate-y-1 hover:border-sign">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={dish.img} alt={`${dish.name} served at Mama Rosa`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="m-0 font-display text-lg font-bold text-night">{dish.name}</h3>
                    <span className="text-sm font-bold text-door">{dish.price}</span>
                  </div>
                  <p className="mb-0 mt-2 flex-1 text-sm leading-relaxed">{dish.desc}</p>
                  <a href="#locations" className="btn btn-red mt-5">Order Now</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="wrap grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-3xl bg-white p-6 shadow-lg shadow-night/10">
              <h3 className="m-0 border-b-2 border-sign pb-3 font-display text-xl font-bold text-night">{c.title}</h3>
              <ul className="m-0 mt-4 list-none space-y-3 p-0">
                {c.items.map((item) => (
                  <li key={item} className="flex items-baseline justify-between gap-4">
                    <span>{item}</span>
                    <span className="text-sm font-bold text-door">$--.--</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-night/70">Sample dishes and placeholder prices.</p>
        <div className="mt-6 text-center">
          <button type="button" onClick={() => onHome('#home')} className="btn btn-outline cursor-pointer">Back to Home</button>
        </div>
      </section>
    </>
  )
}