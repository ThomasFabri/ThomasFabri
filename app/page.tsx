import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Hero />
        </div>

        <div className="absolute inset-x-0 top-[100vh] z-20">
          <About />
        </div>
      </section>
    </main>
  );
}
