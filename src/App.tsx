import { Link } from 'react-router';
import { projects } from './projects';

function App() {
  return (
    <>
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
        </div>
      </main>
      <footer className="bg-stone-800 px-4 py-[20vh] text-center">
        <div className="mb-8">
          <div className="relative mx-auto h-6 w-72 overflow-hidden text-right">
            <span className="absolute top-0 right-0 animate-[across_6s_linear_infinite] text-sm text-neutral-100 opacity-0">
              편하게 연락해 주세요!
            </span>
            <span className="absolute top-0 right-0 animate-[across_6s_3s_linear_infinite] text-sm text-neutral-100 opacity-0">
              편하게 연락해 주세요!
            </span>
          </div>
          <a
            href="mailto:owo9370@gmail.com"
            target="_blank"
            className="font-serif text-3xl tracking-tight text-neutral-100"
          >
            owo9370@gmail.com
          </a>
        </div>
        <small className="text-sm text-neutral-100">© 2025 WonInjeong. All rights reserved</small>
      </footer>
    </>
  );
}

export default App;
