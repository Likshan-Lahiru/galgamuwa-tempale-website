import  {  useState } from 'react';
import { MenuIcon, X as XIcon, SearchIcon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    scrollY
  } = useScroll();
  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 50);
  });
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };
  const navItems = [{
    label: 'HOME',
    sectionId: 'home'
  }, {
    label: 'INFORMATION',
    sectionId: 'about'
  }, {
    label: 'ANNUAL EVENTS',
    sectionId: 'annual-events'
  }, {
    label: 'GALLERY',
    sectionId: 'social'
  }, {
    label: 'DONATION / CONTACT',
    sectionId: 'contact'
  }];
  return <motion.header className="sticky top-0 z-50 bg-white" initial={{
    borderRadius: 0
  }} animate={{
    borderRadius: isScrolled ? '0 0 24px 24px' : 0,
    boxShadow: isScrolled ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none'
  }} transition={{
    duration: 0.3,
    ease: 'easeInOut'
  }}>
      <motion.div className="container mx-auto px-4" animate={{
      paddingTop: isScrolled ? '0.5rem' : '0.25rem',
      paddingBottom: isScrolled ? '0.5rem' : '0.25rem'
    }} transition={{
      duration: 0.3
    }}>
        <div className="flex justify-between items-center">
          <motion.div className="flex items-center" animate={{
          scale: isScrolled ? 0.95 : 1
        }} transition={{
          duration: 0.3
        }}>
            <img src="/image-11.png" alt="Gangaramaya Temple Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            <div className="ml-2 md:ml-4 hidden md:block">
              <motion.h1 className="text-amber-700 text-lg md:text-xl lg:text-2xl font-bold tracking-wide" animate={{
              fontSize: isScrolled ? '1rem' : '1.25rem'
            }} transition={{
              duration: 0.3
            }}>
                ශ්‍රී උපතිස්සාරාමය
              </motion.h1>
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map(item => <motion.button key={item.label} onClick={() => scrollToSection(item.sectionId)} className="text-gray-700 hover:text-amber-700 transition-colors text-sm lg:text-base" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
                {item.label}
              </motion.button>)}
            <motion.button className="text-gray-700 hover:text-amber-700 transition-colors" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <SearchIcon size={18} />
            </motion.button>
          </nav>
          <motion.button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{
          scale: 0.95
        }}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
      </motion.div>
      <motion.div initial={{
      height: 0,
      opacity: 0
    }} animate={{
      height: isMenuOpen ? 'auto' : 0,
      opacity: isMenuOpen ? 1 : 0
    }} transition={{
      duration: 0.3,
      ease: 'easeInOut'
    }} className="md:hidden overflow-hidden bg-white">
        <div className="px-4 py-2">
          <nav className="flex flex-col space-y-3">
            {navItems.map(item => <button key={item.label} onClick={() => scrollToSection(item.sectionId)} className="text-left text-gray-700 hover:text-amber-700 transition-colors py-1">
                {item.label}
              </button>)}
            <div className="flex justify-end">

            </div>
          </nav>
        </div>
      </motion.div>
    </motion.header>;
};
export default Header;