const experiences = [
  {
    name: 'Front End & Back End Student di Dicoding Indonesia',
    company: 'Dicoding Indonesia',
    status: 'Magang',
    periode: 'Agu 2023 - Des 2023',
    program: 'Program SIB Dicoding Cycle 5 X Kampus Merdeka'
  },
  {
    name: 'Frontend & Backend Developer',
    company: 'Solo Technopark',
    status: 'Magang',
    periode: 'Feb 2024 - Present',
    program: 'Magang Divisi IT Solo Technopark'
  }
]

export default function Experiences() {
  return (
    <section id="experiences" className="pt-14 pb-10 bg-white dark:bg-slate-800">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <h2 className="text-lg font-semibold text-[#aaa] mb-2">#experiences</h2>
        {
          experiences.map((experience) => (
            <div className="mb-2.5">
              <h3 className="text-lg font-semibold">{experience.name}</h3>
              <p className="mt-1 text-sm">{experience.company} - {experience.status}</p>
              <p className="text-sm text-[#aaa]">{experience.periode}</p>
              <p className="mt-1">{experience.program}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
