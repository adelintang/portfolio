export default function Profile() {
  return (
    <section className="dark:bg-dark">
      <div className="py-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex flex-col justify-center items-center lg:flex-row gap-2">
        <div>
          <p className="text-[#2F74C8] text-lg font-semibold">Hello Everyone</p>
          <p className="text-2xl font-semibold dark:text-white">
            Ade Lintang Permono
          </p>
          <p className="dark:text-white">
            Backend Engineer | Informatics Engineering Student College
          </p>
        </div>
        <img
          src="/img/adelintang.png"
          alt="adelintang"
          className="w-[400px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
