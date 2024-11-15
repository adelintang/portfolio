import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPrisma,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Tooltip from "./Tooltip";

export default function About() {
  return (
    <section id="about" className="pt-14 pb-10 bg-[#EDEEF0] dark:bg-slate-800">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <h2 className="text-lg font-semibold text-[#aaa]">#about</h2>
        <p className="mt-4 dark:text-white">
          Hello Everyone. Let me introduce my self, my name is{" "}
          <span className="font-semibold">Ade Lintang Permono</span>. I'am a
          Informatics college student. I'am very interesting about web dev
          technology, and I have deepfull knowladge about
          <span className="ml-1 font-semibold text-[#F0DB4F]">
            javascript
          </span>{" "}
          and <span className="font-semibold text-[#3178c6]">typescript</span>.
          If you interesting, contact me.
        </p>
        <h2 className="text-lg font-semibold text-[#aaa] my-4">#skills</h2>
        <div className="flex gap-4 items-center">
          <Tooltip title="Javascript">
            <SiJavascript className="text-2xl text-[#F0DB4F] cursor-pointer" />
          </Tooltip>
          <Tooltip title="Typescript">
            <SiTypescript className="text-2xl text-[#3178c6] cursor-pointer" />
          </Tooltip>
          <Tooltip title="NodeJS">
            <FaNodeJs className="text-2xl text-[#3C873A] cursor-pointer" />
          </Tooltip>
          <Tooltip title="TailwindCSS">
            <SiTailwindcss className="text-3xl text-[#06B6D4] cursor-pointer" />
          </Tooltip>
          <Tooltip title="ReactJS">
            <FaReact className="text-3xl text-[#61DBFB] cursor-pointer" />
          </Tooltip>
          <Tooltip title="Redux">
            <SiRedux className="text-2xl text-[#764abc] cursor-pointer" />
          </Tooltip>
          <Tooltip title="Express">
            <img src="/icons/express.svg" alt="express-icon" className="w-8 cursor-pointer" />
          </Tooltip>
          <Tooltip title="Prisma">
            <SiPrisma className="text-2xl cursor-pointer" />
          </Tooltip>
          <Tooltip title="MongoDB">
            <SiMongodb className="text-2xl text-[#4DB33D] cursor-pointer" />
          </Tooltip>
          <Tooltip title="MySQL">
            <SiMysql className="text-3xl text-[#00758F] cursor-pointer" />
          </Tooltip>
          <Tooltip title="PostgreSQL">
            <BiLogoPostgresql className="text-2xl text-[#0064a5] cursor-pointer" />
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
