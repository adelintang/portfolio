interface Social {
  urlSocial: string;
  urlIcon: string;
  alt: string;
  name: string;
}

const socials: Social[] = [
  {
    urlSocial: "https://github.com/adelintang",
    urlIcon: "/icons/github.png",
    alt: "github-icon",
    name: "Github",
  },
  {
    urlSocial: "https://www.linkedin.com/in/ade-lintang-permono-2b4a0b29a/",
    urlIcon: "/icons/linkedin.png",
    alt: "linkedin-icon",
    name: "LinkedIn",
  },
  {
    urlSocial: "https://www.instagram.com/im.adelintang/",
    urlIcon: "/icons/instagram.png",
    alt: "instagram-icon",
    name: "Instagram",
  },
  {
    urlSocial:
      "https://api.whatsapp.com/send/?phone=6285290021422&text&type=phone_number&app_absent=0",
    urlIcon: "/icons/whatsapp.png",
    alt: "whatsapp-icon",
    name: "WhatsApp",
  },
];

export default function Socials() {
  return (
    <section
      id="socials"
      className="pt-14 pb-10 bg-[#EDEEF0] dark:bg-slate-800"
    >
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
        <h2 className="text-lg font-semibold text-[#aaa]">#socials</h2>
        <div className="mt-4 flex justify-center md:justify-start gap-6">
          {socials.map((social, index) => (
            <a
              href={social.urlSocial}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 justify-center items-center"
              key={index}
            >
              <img src={social.urlIcon} alt={social.alt} className="w-8" />
              <span className="text-sm dark:text-white">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
