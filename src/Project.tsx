import { Link } from 'react-router';
import { projects } from './projects';
import Header from './Header';
import Footer from './Footer';

function Project() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 lg:px-20">
        <header className="mb-16">
          <h1 className="font-serif text-6xl font-bold break-keep text-neutral-800 md:text-8xl">Project</h1>
        </header>
        <p className="break-kee mb-12 text-3xl">
          각 프로젝트에서 직면한 문제와 그에 대한 해결책을 다뤘습니다.
          <br />
          구현한 기능과 함께 살펴보세요.
        </p>
        <div className="my-[20vh] grid gap-10 md:grid-cols-2">
          {projects.map((item) => {
            return (
              <div className="relative rounded-2xl bg-stone-300 px-6 py-12 md:rounded-4xl" key={item.id}>
                <div className="relative mx-auto w-2/5 before:absolute before:top-1/2 before:left-1/2 before:aspect-square before:w-[200%] before:-translate-1/2 before:bg-radial">
                  <div className="relative aspect-9/16 overflow-hidden rounded-lg md:rounded-2xl">
                    {item.thumbnail.image && (
                      <img src={item.thumbnail.image} alt="" className="absolute top-0 left-0" />
                    )}
                  </div>
                </div>
                <div className="mt-12 text-xl font-bold">{item.thumbnail.title}</div>
                <div className="mt-2 min-h-14 text-lg break-keep">{item.thumbnail.description}</div>
                <Link to={`/project/${item.id}`} className="mt-3 inline-block border-b-1">
                  More
                </Link>
              </div>
            );
          })}
          <div></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Project;
