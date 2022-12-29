import Link from "next/link"

const data = [
  {
    name: '_hello',
    url: '/',
  },
  {
    name: '_about-me',
    url: '/about-me',
  },
  {
    name: '_projects',
    url: '/projects',
  },
  {
    name: '_contact-me',
    url: '/contact-me',
  },
]

export default function navbar() {
  return (
    <header>
      <div className='navcenter'>
        <p className='nav-name'>s-amandeep</p>
        {data.map((item, index) => {
          const { name, url } = item
          return (
            <>
              <div className='nav-line' />
              <Link href={url} className={`nav-${name.split('_')[1]} nav-item`}>
                <p>{name}</p>
              </Link>
            </>
          )
        })}
        <div className="nav-line bh-cm"></div>
      </div>
    </header>
  )
}
