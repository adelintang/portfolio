export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-14 pb-10 dark:bg-dark">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <h2 className="text-lg font-semibold text-[#aaa]">#portfolio</h2>
        <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-white dark:bg-[#14213D] shadow-md rounded-md">
            <img src="/img/jadwal-plus.PNG" alt="jadwal-plus" className="rounded-t-md" />
            <div className="p-4">
              <a href="https://jadwalplus-client.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">
                <h3 className="text-lg font-semibold dark:text-white">Jadwal Plus</h3>
              </a>
              <p className="mt-3 dark:text-white">Aplikasi untuk manajemen penjadwalan kegiatan</p>
              <a href="https://github.com/mengcapstone/jadwalplus-client" target="_blank" rel="noopener noreferrer"
                className="underline text-[#2F74C8]">Repository</a>
            </div>
            <div className="px-4 mb-4 flex gap-3">
              <img src="/icons/react.svg" alt="react-icon" className="w-8" />
              <img src="/icons/redux.svg" alt="redux-icon" className="w-8" />
              <img src="/icons/tailwindcss.svg" alt="tailwindcss-icon" className="w-8" />
            </div>
          </div>
          <div className="bg-white dark:bg-[#14213D] shadow-md rounded-md">
            <img src="/img/jadwal-plus-api.PNG" alt="jadwal-plus-api" className="rounded-t-md" />
            <div className="p-4">
              <a href="https://jadwalplus-api-production.up.railway.app/docs/" target="_blank" rel="noopener noreferrer"
                className="underline">
                <h3 className="text-lg font-semibold dark:text-white">Jadwal Plus API</h3>
              </a>
              <p className="mt-3 dark:text-white">Rest API untuk manajemen penjadwalan kegiatan (Jadwal Plus)</p>
              <a href="https://github.com/mengcapstone/jadwalplus-api" target="_blank" rel="noopener noreferrer"
                className="underline text-[#2F74C8]">Repository</a>
            </div>
            <div className="px-4 mb-4 flex gap-3">
              <img src="/icons/nodedotjs.svg" alt="nodedotjs-icon" className="w-8" />
              <img src="/icons/express.svg" alt="express-icon" className="w-8" />
              <img src="/icons/jsonwebtokens.svg" alt="jsonwebtokens-icon" className="w-8" />
              <img src="/icons/mongodb.svg" alt="mongodb-icon" className="w-8" />
            </div>
          </div>
          <div className="bg-white dark:bg-[#14213D] shadow-md rounded-md">
            <img src="/img/forum-app.PNG" alt="forum-app" className="rounded-t-md" />
            <div className="p-4">
              <a href="https://forum-app-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">
                <h3 className="text-lg font-semibold dark:text-white">Forum App</h3>
              </a>
              <p className="mt-3 dark:text-white">Aplikasi Forum Diskusi</p>
              <a href="https://github.com/adelintang/forum-app-v2" target="_blank" rel="noopener noreferrer"
                className="underline text-[#2F74C8]">Repository</a>
            </div>
            <div className="px-4 mb-4 flex gap-3">
              <img src="/icons/react.svg" alt="react-icon" className="w-8" />
              <img src="/icons/redux.svg" alt="redux-icon" className="w-8" />
              <img src="/icons/tailwindcss.svg" alt="tailwindcss-icon" className="w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
