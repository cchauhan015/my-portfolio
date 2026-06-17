export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            Dev<span className="text-primary">Portfolio</span>
          </a>
        </div>
        <p className="text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} All rights reserved. Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
}
