import { HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { GiMapleLeaf } from 'react-icons/gi'

const ctaImage =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80'

// Put your real online ordering link here (Uber Eats, DoorDash, your own site, etc.)
const ORDER_URL = 'https://www.ubereats.com'

// SAMPLE DATA: replace with the verified address and hours.
// mapQuery is what Google Maps searches for. Use the full street address when you have it.
const location = {
  city: 'Toronto',
  area: 'Roncesvalles',
  address: 'Address to be confirmed',
  hours: 'Hours to be confirmed',
  mapQuery: 'Mama Rosa Restaurant & Bar Roncesvalles Toronto',
  orderUrl: ORDER_URL,
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

// A simple map-style grid, so no real map service is needed
const mapGrid = {
  backgroundImage:
    'linear-gradient(#0A0A0A14 1px, transparent 1px), linear-gradient(90deg, #0A0A0A14 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const socialClass =
  'flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-sign hover:bg-sign'

export default function Contact({ onMenu, onHome }) {
  // Menu opens with the cooking animation, everything else scrolls on the home page
  const handleLink = (e, link) => {
    e.preventDefault()
    if (link.label === 'Menu') onMenu()
    else onHome(link.href)
  }

  return (
    <>
      {/* Location */}
      <section id="locations" className="bg-paper py-20 lg:py-28">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="m-0 font-display text-4xl font-bold text-night sm:text-5xl">Find Your Mama Rosa</h2>
            <div className="mx-auto my-5 h-1 w-16 rounded bg-sign" aria-hidden="true" />
          </div>

          {/* One card, centred */}
          <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg shadow-night/10">
            <div className="flex h-40 items-center justify-center bg-night/5" style={mapGrid} aria-hidden="true">
              <HiLocationMarker className="text-sign" size={52} />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="m-0 font-display text-xl font-bold text-night">
                {location.city} &mdash; {location.area}
              </h3>
              <p className="mb-0 mt-3 flex items-center gap-2 text-sm">
                <HiLocationMarker className="text-sign" aria-hidden="true" />
                {location.address}
              </p>
              <p className="mb-0 mt-1 flex items-center gap-2 text-sm">
                <HiClock className="text-sign" aria-hidden="true" />
                {location.hours}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {/* Opens Google Maps in a new tab */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline sm:flex-1"
                >
                  Get Directions
                </a>
                {/* Opens the online ordering page in a new tab */}
                <a
                  href={location.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-red sm:flex-1"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="relative overflow-hidden py-28 text-center text-white lg:py-40">
        <img
          src={ctaImage}
          alt="Cosy Mama Rosa dining room ready for guests"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-night/75" aria-hidden="true" />

        <div className="wrap relative">
          <h2 className="m-0 font-display text-4xl font-bold sm:text-6xl">Your Table Is Waiting</h2>
          <p className="mb-0 mt-4 text-xl text-white/90">Come hungry. Leave happy.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" onClick={onMenu} className="btn btn-red cursor-pointer">View Menu</button>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">Order Online</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t-4 border-sign bg-night text-white">
        <div className="wrap grid gap-10 py-14 md:grid-cols-3">
          <div>
            <a
              href="#home"
              onClick={(e) => handleLink(e, quickLinks[0])}
              className="inline-flex items-center gap-2 no-underline"
              aria-label="Mama Rosa home"
            >
              <GiMapleLeaf className="text-sign" size={26} aria-hidden="true" />
              <span className="font-script text-3xl font-bold italic leading-none text-sign">Mama Rosa</span>
            </a>
            <p className="mb-0 mt-2 text-sm font-bold text-white">Restaurant &amp; Bar</p>
            <p className="mb-0 mt-1 text-sm font-bold text-white/80">On Roncesvalles</p>
            <p className="mb-0 mt-4 max-w-xs text-white/85">Good Food. Good People. Feel at Home.</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="m-0 list-none space-y-2 p-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link)}
                    className="text-white no-underline hover:text-sign"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4 md:justify-end">
            <a href="https://instagram.com" aria-label="Mama Rosa on Instagram" className={socialClass}><FaInstagram size={20} /></a>
            <a href="https://facebook.com" aria-label="Mama Rosa on Facebook" className={socialClass}><FaFacebookF size={18} /></a>
          </div>
        </div>

        <p className="m-0 border-t border-white/15 py-5 text-center text-sm text-white/75">
          &copy; 2026 Mama Rosa Restaurant &amp; Bar
        </p>
      </footer>
    </>
  )
}