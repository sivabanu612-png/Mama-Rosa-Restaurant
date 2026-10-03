import { LuUtensils, LuHeart, LuMapPin } from 'react-icons/lu'
import diningRoomPhoto from '../assets/mama rosa .png'

const perks = [
  { Icon: LuUtensils, title: 'Fresh & Comforting Food', text: 'Familiar flavours made for every occasion.' },
  { Icon: LuHeart, title: 'Warm Hospitality', text: 'Friendly service and a welcoming atmosphere.' },
  { Icon: LuMapPin, title: 'Convenient Locations', text: 'Easy dining across the Greater Toronto Area.' },
]

export default function About({ onMenu }) {
  return (
    <>
      {/* Welcome block: photo on the left, words on the right */}
      <section id="about" className="bg-paper py-20 lg:py-28">
        <div className="wrap grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <img
            src={diningRoomPhoto}
            alt="Warm, inviting dining room at Mama Rosa"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />

          <div>
            <p className="m-0 text-sm font-bold tracking-[0.2em] text-sign">WELCOME TO MAMA ROSA</p>
            <div className="my-5 h-1 w-16 rounded bg-sign" aria-hidden="true" />
            <h2 className="m-0 font-display text-4xl font-bold text-night sm:text-5xl">Made for Good Moments</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed">
              Mama Rosa brings together comforting food, friendly service and a relaxed dining experience.
              Whether you are joining us for breakfast, lunch, dinner or a casual drink, there is always a
              place at our table.
            </p>
         <button type="button" onClick={onMenu} className="btn btn-red mt-8 cursor-pointer">Discover Mama Rosa</button>
          </div>
        </div>
      </section>

      {/* Three short reasons to visit */}
      <section className="bg-white py-20 lg:py-24">
        <ul className="wrap m-0 grid list-none gap-12 md:grid-cols-3">
          {perks.map(({ Icon, title, text }) => (
            <li key={title} className="text-center">
              <Icon className="mx-auto text-sign" size={40} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mb-0 mt-5 font-display text-xl font-bold text-night">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs">{text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}