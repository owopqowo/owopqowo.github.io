import { Link } from 'react-router';
import { projects } from './projects';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-20">
        <div className="relative grid min-h-[60dvh] grid-rows-[1fr_auto_auto] pt-80 pb-6 md:grid-cols-[1fr_auto]">
          <img
            src="./asterisk.svg"
            alt=""
            className="absolute top-18 right-7 w-36 animate-[spin_4s_linear_infinite] duration-200"
          />
          <h1 className="row-start-2 font-serif text-[min(18vw,210px)] leading-none font-bold tracking-tight break-keep text-neutral-800 md:col-start-1 md:col-end-3 md:row-start-3 md:mt-[max(-17vw,-180px)]">
            Web <br />
            Publisher
          </h1>
          <p className="row-start-3 mt-4 md:col-start-2 md:row-start-2">
            <span className="block text-lg">
              유연한 UI를 설계하는 <br />웹 퍼블리셔 원인정 입니다.
            </span>
            <Link to="/about" className="mt-3 inline-block border-b-1">
              About
            </Link>
          </p>
        </div>
        <div className="my-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          {projects.map((item, index) => {
            let extraClass = '';
            switch (index) {
              case 0:
                extraClass = 'lg:col-span-2 lg:col-start-2 lg:row-start-1';
                break;
              case 1:
                extraClass = 'lg:col-start-1 lg:row-start-1 lg:row-span-1';
                break;
              case 2:
                extraClass = 'lg:col-start-1 lg:col-end-3';
                break;
              default:
                extraClass = '';
            }
            return (
              <div
                className={`group/box flex flex-col items-start overflow-hidden rounded-2xl bg-[rgba(0,0,0,0.08)] px-6 py-8 md:rounded-4xl ${extraClass}`}
                key={item.id}
              >
                {index === 0 && (
                  <div className="-mx-8 -mt-10 lg:-mt-20 lg:-mb-14">
                    <img src="/img-design-system.png" alt="" />
                  </div>
                )}
                <div className="pb- text-4xl font-bold break-keep">{item.thumbnail.title}</div>
                <div className="mt-4 text-lg break-keep">{item.thumbnail.description}</div>
                <Link to={`/project/${item.id}`} className="mt-3 inline-block border-b-1">
                  More
                </Link>

                {index === 1 && (
                  <div className="relative left-1/2 mt-auto -mb-8 w-96 max-w-[130%] -translate-x-1/2">
                    <img src="/img-guide.png" alt="" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
