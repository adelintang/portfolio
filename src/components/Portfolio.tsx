interface Portfolio {
  picture: string
  alt: string
  urlApp: string
  name: string
  description: string
  repository: string
  techs: Techs[]
}

interface Techs {
  icon: string
  alt: string
}

const portfolios: Portfolio[] = [
  {
    picture: '/img/jadwal-plus.PNG',
    alt: 'jadwal-plus',
    urlApp: 'https://jadwalplus-client.vercel.app/',
    name: 'Jadwal Plus',
    description: 'Aplikasi untuk manajemen penjadwalan kegiatan',
    repository: 'https://github.com/mengcapstone/jadwalplus-client',
    techs: [
      { icon: '/icons/react.svg', alt: 'react-icon' },
      { icon: '/icons/redux.svg', alt: 'redux-icon' },
      { icon: '/icons/tailwindcss.svg', alt: 'tailwindcss-icon' }
    ]
  },
  {
    picture: '/img/jadwal-plus-api.PNG',
    alt: 'jadwal-plus-api',
    urlApp: 'https://jadwalplus-api-production.up.railway.app/docs/',
    name: 'Jadwal Plus API',
    description: 'Rest API untuk manajemen penjadwalan kegiatan (Jadwal Plus)',
    repository: 'https://github.com/mengcapstone/jadwalplus-api',
    techs: [
      { icon: '/icons/nodedotjs.svg', alt: 'nodedotjs-icon' },
      { icon: '/icons/express.svg', alt: 'express-icon' },
      { icon: '/icons/jsonwebtokens.svg', alt: 'jsonwebtokens-icon' },
      { icon: '/icons/mongodb.svg', alt: 'mongodb-icon' }
    ]
  },
  {
    picture: '/img/forum-app.PNG',
    alt: 'forum-app',
    urlApp: 'https://forum-app-six.vercel.app/',
    name: 'Forum App',
    description: 'Aplikasi Forum Diskusi',
    repository: 'https://github.com/adelintang/forum-app-v2',
    techs: [
      { icon: '/icons/react.svg', alt: 'react-icon' },
      { icon: '/icons/redux.svg', alt: 'redux-icon' },
      { icon: '/icons/tailwindcss.svg', alt: 'tailwindcss-icon' }
    ]
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-14 pb-10 dark:bg-dark">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <h2 className="text-lg font-semibold text-[#aaa]">#portfolio</h2>
        <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2">
          {portfolios.map((portfolio, index) => (
            <div className="bg-white dark:bg-[#14213D] shadow-md rounded-md" key={index}>
              <img src={portfolio.picture} alt={portfolio.alt} className="rounded-t-md" />
              <div className="p-4">
                <a href={portfolio.urlApp} target="_blank" rel="noopener noreferrer" className="underline">
                  <h3 className="text-lg font-semibold dark:text-white">{portfolio.name}</h3>
                </a>
                <p className="mt-3 dark:text-white">{portfolio.description}</p>
                <a href={portfolio.repository} target="_blank" rel="noopener noreferrer"
                  className="underline text-[#2F74C8]">Repository</a>
              </div>
              <div className="px-4 mb-4 flex gap-3">
                {portfolio.techs.map((tech, index) => (
                  <img src={tech.icon} alt={tech.alt} className="w-8" key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
