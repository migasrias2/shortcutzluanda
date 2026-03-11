import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main className="px-6 pb-16 pt-28 md:px-12">
        <section className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">About Us</h1>

          <p className="mb-6 text-base leading-relaxed text-white/90 md:text-lg">
            Shortcutz Luanda was a pioneer in the organization of a voting session of the brand in
            an African city. The first session of the International Audience Awards, in 2019, took
            place with the support of the Embassy of the Netherlands, ZapCinemas and members of
            youth associations. These sessions are an opportunity to vote for the favourite film of
            the 7 best short films selected by the public, press, partners in Luanda and cinema
            enthusiasts, which has gradually grown in the last four years in terms of audience,
            credibility, partnerships and portfolios.
          </p>

          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            In non-obvious places advertised on our social networks, the free screenings of the
            Shortcutz Luanda sessions take place in unconventional public places, but also in the
            main commercial cinemas in our city. In Angola we started in Luanda at Zap Cinemas,
            went down to the seafront at the old open-air BBB Lounge and last year went up to
            CINEMAX at Shopping Fortaleza.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shortcutz Luanda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
