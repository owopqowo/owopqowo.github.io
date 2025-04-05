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
        <div className="my-[20vh] grid gap-6 md:grid-cols-2">
          {projects.map((item) => {
            return (
              <div className="relative rounded-2xl bg-[rgba(0,0,0,0.08)] px-6 py-12 md:rounded-4xl" key={item.id}>
                <div className="text-4xl font-bold">{item.thumbnail.title}</div>
                <div className="mt-4 min-h-14 text-lg break-keep">{item.thumbnail.description}</div>
                <Link to={`/project/${item.id}`} className="mt-3 inline-block border-b-1">
                  More
                </Link>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Project;
