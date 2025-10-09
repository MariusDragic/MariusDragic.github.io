

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="container-main py-6 sm:py-8 text-xs sm:text-sm text-white/70 flex flex-col items-center justify-center gap-2">
        <p className="text-center w-full">© {new Date().getFullYear()} Marius Dragic — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
