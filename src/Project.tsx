import { Link } from 'react-router';
import { projects } from './projects';
import Header from './Header';
import Footer from './Footer';

function Project() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-20">
        <header className="mb-16">
          <h1 className="font-serif text-6xl font-bold break-keep text-neutral-800 md:text-8xl">Project</h1>
        </header>
        <div>
          {projects.map((item) => {
            return (
              <Link to={`/project/${item.id}`} key={item.id}>
                {item.thumbnail.image && <img src={item.thumbnail.image} alt="" />}
                <span>{item.thumbnail.title}</span>
              </Link>
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
