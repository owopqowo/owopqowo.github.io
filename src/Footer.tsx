function Footer() {
  return (
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
  );
}

export default Footer;
