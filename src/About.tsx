import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-20">
        <header className="mb-16">
          <h1 className="font-serif text-6xl font-bold break-keep text-neutral-800 md:text-8xl">About</h1>
        </header>
      </main>
      <Footer />
    </>
  );
}

export default About;
