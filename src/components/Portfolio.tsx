import React from "react"
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Tooltip from "./Tooltip";

interface Portfolio {
  picture: string
  alt: string
  urlApp: string
  name: string
  description: string
  repository: string
  techs: Techs[]
  category: Category
}

interface Techs {
  icon: string | React.ReactNode
  tooltipTilte: string
}

type Category = 'Front-End' | 'Back-End'

const Javascript = <SiJavascript className="text-2xl text-[#F0DB4F] cursor-pointer" />
const ReactJS = <FaReact className="text-3xl text-[#61DBFB] cursor-pointer" />
const Redux = <SiRedux className="text-2xl text-[#764abc] cursor-pointer" />
const TailwindCSS = <SiTailwindcss className="text-3xl text-[#06B6D4] cursor-pointer" />
const NodeJS = <FaNodeJs className="text-2xl text-[#3C873A] cursor-pointer" />
const ExpressJS = <img src="/icons/express.svg" alt="express-icon" className="w-8 cursor-pointer" />
const MongoDB = <SiMongodb className="text-2xl text-[#4DB33D] cursor-pointer" />
const Typescript = <SiTypescript className="text-2xl text-[#3178c6] cursor-pointer" />
const Prisma = <SiPrisma className="text-2xl cursor-pointer" />
const PostgreSQL = <BiLogoPostgresql className="text-2xl text-[#0064a5] cursor-pointer" />

const portfolios: Portfolio[] = [
  {
    picture: '/img/jadwal-plus.PNG',
    alt: 'jadwal-plus',
    urlApp: 'https://jadwalplus-client.vercel.app/',
    name: 'Jadwal Plus',
    description: 'Aplikasi untuk manajemen penjadwalan kegiatan',
    repository: 'https://github.com/mengcapstone/jadwalplus-client',
    techs: [
      { icon: Javascript, tooltipTilte: "Javascript" },
      { icon: ReactJS, tooltipTilte: "ReactJS" },
      { icon: Redux, tooltipTilte: "Redux" },
      { icon: TailwindCSS, tooltipTilte: "TailwindCSS" }
    ],
    category: 'Front-End'
  },
  {
    picture: '/img/jadwal-plus-api.PNG',
    alt: 'jadwal-plus-api',
    urlApp: 'https://api-jadwalplus-production.vercel.app/',
    name: 'Jadwal Plus API',
    description: 'Rest API untuk manajemen penjadwalan kegiatan (Jadwal Plus)',
    repository: 'https://github.com/adelintang/jadwalplus-api',
    techs: [
      { icon: Javascript, tooltipTilte: 'Javascript' },
      { icon: NodeJS, tooltipTilte: 'NodeJS' },
      { icon: ExpressJS, tooltipTilte: 'Express' },
      { icon: MongoDB, tooltipTilte: 'MongoDB' }
    ],
    category: 'Back-End'
  },
  {
    picture: '/img/forum-app.PNG',
    alt: 'forum-app',
    urlApp: 'https://forum-app-six.vercel.app/',
    name: 'Forum App',
    description: 'Aplikasi Forum Diskusi',
    repository: 'https://github.com/adelintang/forum-app-v2',
    techs: [
      { icon: Javascript, tooltipTilte: "Javascript" },
      { icon: ReactJS, tooltipTilte: "ReactJS" },
      { icon: Redux, tooltipTilte: "Redux" },
      { icon: TailwindCSS, tooltipTilte: "TailwindCSS" }
    ],
    category: 'Front-End'
  },
  {
    picture: '/img/post-it.PNG',
    alt: 'post-it-api',
    urlApp: 'https://api-post-it.vercel.app/docs/',
    name: 'Post It API',
    description: 'Rest API Post It, mini sosial media',
    repository: 'https://github.com/adelintang/post-it',
    techs: [
      { icon: Typescript, tooltipTilte: 'Typescript' },
      { icon: NodeJS, tooltipTilte: 'NodeJS' },
      { icon: ExpressJS, tooltipTilte: 'Express' },
      { icon: Prisma, tooltipTilte: 'Prisma' },
      { icon: PostgreSQL, tooltipTilte: 'PostgreSQL' }
    ],
    category: 'Back-End'
  }
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
                <p className="text-[#A9A9A9]">#{portfolio.category}</p>
              </div>
              <div className="px-4 mb-4 flex gap-3">
                {portfolio.techs.map((tech, index) => (
                  <Tooltip title={tech.tooltipTilte} key={index}>
                    {tech.icon}
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
