import { SiTypescript } from 'react-icons/si'

export default function About() {
  return (
    <section id="about" className="pt-14 pb-10 bg-[#EDEEF0] dark:bg-slate-800">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <h2 className="text-lg font-semibold text-[#aaa]">#about</h2>
        <p className="mt-4 dark:text-white">
          Saya adalah seorang mahasiswa Informatika dan sekarang tinggal di kota Surakarta, saya menekuni bidang Web Development semenjak kuliah.
          Saya mempunyai beberapa keahlian seperti Javascript, React, NodeJS, Express.
          Dan sekarang saya sedang memperdalam Typescript.
        </p>
        <h2 className="text-lg font-semibold text-[#aaa] my-4">#skills</h2>
        <div className="flex gap-3 items-center">
          <img src="/icons/react.svg" alt="react-icon" className="w-8" />
          <img src="/icons/tailwindcss.svg" alt="tailwindcss-icon" className="w-8" />
          <img src="/icons/nodedotjs.svg" alt="nodedotjs-icon" className="w-8" />
          <img src="/icons/express.svg" alt="express-icon" className="w-8" />
          <img src="/icons/mongodb.svg" alt="mongodb-icon" className="w-8" />
          <SiTypescript className="text-2xl" />
        </div>
      </div>
    </section>
  )
}
