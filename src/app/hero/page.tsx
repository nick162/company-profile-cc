import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="hero min-h-[100vh] flex items-center bg-[url('/flip-kopi.png')]  bg-no-repeat bg-contain md:bg-cover bg-center"
      id="home"
    >
      <main className="content text-white md:mb-20 mb-44 md:mt-[-100px]">
        {/* <img src="/flip-kopi.png" alt="" /> */}
        <h1 className="font-bold text-1xl md:text-3xl">
          Mari Nikmati Secangkir Kopi Bersama{" "}
          <span className="text-[#b6895b] text-1xl md:text-4xl">
            Selingkuhan
          </span>
        </h1>

        <p className="py-8 font-bold text-4lg">
          Masa-masa indah bersama mantan akan terbawa dalam memori kehidupan
          yang terus berjalan, jadikan dia batu pijakan untuk kesuksesan anda.
        </p>
        <Link href="/menu" className="cta">
          Beli Sekarang
        </Link>
      </main>
    </section>
  );
};

export default Hero;
