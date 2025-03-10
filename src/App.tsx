import { Link } from 'react-router';

function App() {
  return (
    <>
      <main className="mx-auto max-w-[1400px] px-4 md:px-10 lg:px-20">
        <div className="relative grid min-h-dvh grid-rows-[1fr_auto_auto] pb-6 md:grid-cols-[1fr_auto]">
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
          <div className="before:bg-primary relative overflow-hidden rounded-3xl border-1 border-stone-300 px-6 py-12 before:absolute before:top-[-35%] before:left-[10%] before:-z-1 before:w-[110%] before:rotate-60 before:rounded-3xl before:pt-[110%]">
            <div className="relative mx-auto aspect-9/16 w-2/5 overflow-hidden rounded-2xl border-4 border-neutral-800">
              <img src="img-1.jpg" alt="" className="absolute top-0 left-0" />
            </div>
            <div className="mt-12 text-xl font-bold">지역화폐 이용안내</div>
            <div className="mt-2 min-h-14 text-lg break-keep">
              쉽게 정보를 파악할 수 있도록 구조화된 이용안내 페이지
            </div>
            <Link to="/project" className="mt-3 inline-block border-b-1">
              More
            </Link>
          </div>
          <div className="before:bg-primary relative overflow-hidden rounded-3xl border-1 border-stone-300 px-6 py-12 before:absolute before:top-[-35%] before:left-0 before:-z-1 before:w-[110%] before:rotate-40 before:rounded-3xl before:pt-[110%]">
            <div className="relative mx-auto aspect-9/16 w-2/5 overflow-hidden rounded-2xl border-4 border-neutral-800">
              <img src="img-2.jpg" alt="" className="absolute top-0 left-0" />
            </div>
            <div className="mt-12 text-xl font-bold">청주시 새로고침</div>
            <div className="mt-2 min-h-14 text-lg break-keep">사용자의 레벨에 따라 변화하는 애니메이션 구현</div>
            <Link to="/project" className="mt-3 inline-block border-b-1">
              More
            </Link>
          </div>
          <div className="before:bg-primary relative overflow-hidden rounded-3xl border-1 border-stone-300 px-6 py-12 before:absolute before:top-[-35%] before:-left-1/12 before:-z-1 before:w-[110%] before:rotate-10 before:rounded-3xl before:pt-[110%]">
            <div className="relative mx-auto aspect-9/16 w-2/5 overflow-hidden rounded-2xl border-4 border-neutral-800">
              <img src="/img-3.jpeg" alt="" className="absolute top-0 left-0" />
            </div>
            <div className="mt-12 text-xl font-bold">PLCC 신청</div>
            <div className="mt-2 min-h-14 text-lg break-keep">
              디자인 시스템을 적용해 일관된 UI/UX를 구현한 카드 신청 페이지
            </div>
            <Link to="/project" className="mt-3 inline-block border-b-1">
              More
            </Link>
          </div>
          <div className="before:bg-primary relative overflow-hidden rounded-3xl border-1 border-stone-300 px-6 py-12 before:absolute before:top-[-35%] before:-left-2/12 before:-z-1 before:w-[110%] before:-rotate-70 before:rounded-3xl before:pt-[110%]">
            <div className="relative mx-auto aspect-9/16 w-2/5 overflow-hidden rounded-2xl border-4 border-neutral-800">
              <img src="/img-4.jpeg" alt="" className="absolute bottom-0 left-0" />
            </div>
            <div className="mt-12 text-xl font-bold">외국인 전용 카드 랜딩 페이지</div>
            <div className="mt-2 min-h-14 text-lg break-keep">
              CSS 애니메이션으로 시각적 요소를 강조한 카드 소개 페이지
            </div>
            <Link to="/project" className="mt-3 inline-block border-b-1">
              More
            </Link>
          </div>
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
