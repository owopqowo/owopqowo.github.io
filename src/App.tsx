function App() {
  return (
    <main className="">
      <div className="relative overflow-hidden px-4 pt-[40vh] pb-[16vh]">
        <img
          src="./asterisk.svg"
          alt=""
          className="absolute top-18 right-7 w-36 animate-[spin_4s_linear_infinite] duration-200"
        />
        <h1 className="text-center text-[min(10vw,120px)] leading-[1.2] font-bold tracking-tight break-keep text-neutral-800">
          유연한 UI를 설계하는 <br />웹 퍼블리셔 <br />
          원인정 입니다.
        </h1>
        <p className="mt-8 text-center text-lg break-keep lg:text-3xl">
          일관된 코드 작성과 최적화된 구조로 <br />
          효율적인 웹 퍼블리싱을 구현합니다.
          <br />
          유지보수와 확장성을 고려한 퍼블리싱으로 <br />더 안정적인 웹 환경을 제공합니다.
        </p>
      </div>
      <hr className="border-neutral-200" />
      <div className="my-[20vh] px-4">
        <h2 className="mb-18 font-serif text-5xl text-neutral-800">About</h2>
        <div className="pt-6 pb-6 text-xl break-keep">
          퍼블리싱 가이드 수립과 디자인 일관성 유지를 통해 프로젝트의 완성도를 높입니다.
        </div>
        <div className="pt-6 pb-6 text-xl break-keep">
          디자이너, 개발자, 기획자와의 원활한 협업을 통해 더 나은 결과물을 만들어냅니다.
        </div>
        <div className="pt-6 pb-6 text-xl break-keep">
          문제 발생 시 문제의 원인을 분석하고 실현 가능한 해결 방안을 제시합니다.
        </div>
      </div>
      <hr className="border-neutral-200" />
      <div className="my-[20vh] px-4">
        <h2 className="mb-18 font-serif text-5xl text-neutral-800">Work</h2>
        <div className="mt-12">
          <img src="./img-guide.png" alt="" className="rounded-2xl" />
          <div className="mt-2 text-lg">지역화폐 이용안내</div>
        </div>
        <div className="mt-12">
          <img src="./img-refresh.png" alt="" className="rounded-2xl" />
          <div className="mt-2 text-lg">청주시 새로고침</div>
        </div>
        <div className="mt-12">
          <img src="./img-plcc.png" alt="" className="rounded-2xl" />
          <div className="mt-2 text-lg">PLCC 신청</div>
        </div>
        <div className="mt-12">
          <img src="./img-expat.png" alt="" className="rounded-2xl" />
          <div className="mt-2 text-lg">외국인 전용 카드 랜딩 페이지</div>
        </div>
      </div>
      <div className="bg-stone-800 px-4 py-[20vh] text-center">
        <div className="mb-8">
          <div className="relative mx-auto h-6 w-80 overflow-hidden text-right">
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
            className="font-serif text-[min(8.4vw,120px)] tracking-tight text-neutral-100"
          >
            owo9370@gmail.com
          </a>
        </div>
        <small className="text-sm text-neutral-100">© 2025 WonInjeong. All rights reserved</small>
      </div>
    </main>
  );
}

export default App;
