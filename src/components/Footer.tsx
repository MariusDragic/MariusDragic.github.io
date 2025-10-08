

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="container-main py-6 sm:py-8 text-xs sm:text-sm text-white/70 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 flex-wrap">
        <p className="text-center sm:text-left w-full sm:w-auto">© {new Date().getFullYear()} Marius Dragic — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
