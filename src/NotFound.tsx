import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-dvh max-w-[1400px] flex-col items-center justify-center p-4 md:p-10 lg:p-20">
        <h1 className="font-serif text-6xl font-bold break-keep text-neutral-800 md:text-8xl">404</h1>
        <p className="mt-16 text-center text-3xl break-keep">
          여긴 비어 있는 공간이에요. <br />
          필요한 정보를 다시 찾아볼까요?
        </p>
        <div className="mt-10 flex">
          <Link to="/" className="mx-3 inline-block border-b-1">
            Home
          </Link>
          <Link to="/about" className="mx-3 inline-block border-b-1">
            About
          </Link>
          <Link to="/project" className="mx-3 inline-block border-b-1">
            Project
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
