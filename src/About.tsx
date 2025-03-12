import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] px-4 py-24 md:px-10 lg:px-20">
        <header className="mb-16 lg:flex lg:items-start lg:justify-between">
          <h1 className="mb-8 font-serif text-6xl font-bold break-keep text-neutral-800 md:text-8xl">About</h1>
          <div className="flex flex-col text-3xl lg:text-right">
            <span>확장성 및 일관성 고려</span>
            <span>문제 해결 능력</span>
            <span>협업 지향적</span>
          </div>
        </header>
        <div className="lg:flex lg:items-end">
          <img src="img-about-1.jpg" alt="" className="lg:relative lg:w-1/2" />
          <p className="py-10 text-xl lg:pb-36 lg:pl-20">
            웹 표준과 웹 접근성을 고려하여 작업하며, 각 요소의 의미에 맞는 적절한 태그를 사용하여 구조적이고 이해하기
            쉬운 마크업을 작성합니다. 또한, 유지보수성과 확장성을 높이기 위해 코드의 간결함을 유지하면서도 모듈화된
            방식으로 작업하는 것을 중요하게 생각합니다.
            <br />
            <br />
            퍼블리싱 과정에서 발생하는 문제의 원인을 파악하고, 효과적인 해결 방안을 찾아 적용하는 데 익숙합니다. 예상치
            못한 오류나 UI/UX 개선이 필요한 상황에서도 최선의 대안을 제시하며, 사용자 경험을 저해하지 않는 방향으로
            해결책을 도출하는 것을 중요하게 생각합니다.
            <br />
            <br />
            기획자, 디자이너, 개발자 등 다양한 직군의 팀원들과 원활하게 소통하며, 프로젝트가 원활하게 진행될 수 있도록
            협업하는 데 집중합니다. 요구사항을 정확히 파악하고 의견을 조율하며, 최상의 결과물을 만들기 위해 노력합니다.
          </p>
        </div>
        <img src="img-about-2.jpg" alt="" className="max-w-full lg:mx-auto lg:-mt-16 lg:w-4/5" />
      </main>
      <Footer />
    </>
  );
}

export default About;
