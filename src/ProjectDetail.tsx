import { useParams } from 'react-router';
import { projects } from './projects';
import NotFound from './NotFound.tsx';
import Header from './Header';
import Footer from './Footer';

interface Challenge {
  challenge: string;
  solution: string;
}

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const data = projects.find((project) => project.id === id);

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 lg:px-20">
        <header className="mb-16">
          <h1 className="text-6xl font-bold break-keep text-neutral-800 md:text-8xl">{data.overview.title}</h1>
        </header>
        <div className="mb-12 md:flex md:items-start">
          <p className="text-3xl break-keep max-md:mb-6 md:flex-1/2">{data.overview.description}</p>
          <div className="grid grid-cols-[auto_1fr] gap-x-10 gap-y-2 md:flex-1/2 md:pl-28">
            <span>작업기간</span>
            <span>{data.overview.duration}</span>
            <span>사용기술</span>
            <span>{data.overview.skill}</span>
          </div>
        </div>
        <h2 className="mt-10 mb-6 font-serif text-5xl font-bold text-neutral-800">Features</h2>
        <ul>
          {data.features.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="mt-2 flex items-start text-xl before:mr-1 before:flex-initial before:content-['•']"
              >
                <div className="flex-auto">{item}</div>
              </li>
            );
          })}
        </ul>
        <h2 className="mt-10 mb-6 font-serif text-5xl font-bold text-neutral-800">Challenges</h2>
        <ul>
          {data.challenges.map((item: Challenge, index: number) => {
            return (
              <li
                key={index}
                className="mt-2 flex items-start text-xl before:mr-1 before:flex-initial before:content-['•']"
              >
                <div className="flex-auto">
                  {item.challenge}
                  <div className="flex items-start before:mr-1 before:flex-initial before:content-['→']">
                    <div className="flex-auto">{item.solution}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <h2 className="mt-10 mb-6 font-serif text-5xl font-bold text-neutral-800">Next Steps</h2>
        <ul>
          {data.next.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="mt-2 flex items-start text-xl before:mr-1 before:flex-initial before:content-['•']"
              >
                <div className="flex-auto">{item}</div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetail;
