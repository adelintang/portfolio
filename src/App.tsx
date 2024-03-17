import About from "./components/About"
import Experiences from "./components/Experiences"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Profile from "./components/Profile"
import Socials from "./components/Socials"

export default function App() {
  return (
    <>
      <header className="flex justify-between items-center px-8 lg:px-14 shadow-md dark:shadow dark:shadow-slate-700 bg-white dark:bg-dark sticky top-0">
        <Navbar />
      </header>
      <Profile />
      <About />
      <Portfolio />
      <Socials />
      <Experiences />
      <footer className="bg-dark p-4">
        <p className="text-white text-center">&copy; 2024 adelintang. All rights reserved.</p>
      </footer>
    </>
  )
}
