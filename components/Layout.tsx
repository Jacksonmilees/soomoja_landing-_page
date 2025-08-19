import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Logo: React.FC = () => {
    const { theme } = useTheme();
    
    return (
        <div className="flex items-center gap-2">
            <img 
                src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'} 
                alt="Soomoja" 
                className="h-8 w-auto"
            />
        </div>
    );
};


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/#solutions' },
  { name: 'Learn', path: '/#learn' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
        e.preventDefault();
        const elementId = path.substring(2);
        setIsMenuOpen(false);
        if (location.pathname === '/') {
            document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/', { state: { scrollTo: elementId } });
        }
    } else {
        setIsMenuOpen(false);
    }
  };


  const NavLinksComponent: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => (
         <a
            key={link.name}
            href={link.path}
            onClick={(e) => handleNavClick(e, link.path)}
            className={`${isMobile ? "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"} ${location.pathname === link.path && !link.path.includes('#') ? 'text-[#00d4aa]' : ''}`}
          >
            {link.name}
        </a>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/30 backdrop-blur-lg border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
            <Link to="/" onClick={(e) => handleNavClick(e as any, '/')}>
                <Logo />
            </Link>
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-1">
              <NavLinksComponent />
            </div>
            <div className="ml-6 flex items-center space-x-3">
              <button onClick={toggleTheme} className="h-10 w-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full bg-gray-200/50 dark:bg-white/10 transition-colors" aria-label="Toggle theme">
                 {theme === 'dark' ? <i className="fas fa-sun text-lg"></i> : <i className="fas fa-moon text-lg"></i>}
              </button>
              <Link to="#" className="px-4 py-2 bg-[#00d4aa] text-black font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Your Insights
              </Link>
              <Link to="/wait-list" className="px-4 py-2 border border-black/20 dark:border-white/40 text-gray-800 dark:text-white font-semibold rounded-lg text-sm hover:bg-black/10 dark:hover:bg-white/10 transition-colors whitespace-nowrap">
                Join Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <i className="fas fa-bars text-2xl"></i>
              ) : (
                <i className="fas fa-times text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinksComponent isMobile />
            <div className="border-t border-black/10 dark:border-white/10 my-2"></div>
            <div className="flex items-center justify-center py-2">
              <button onClick={toggleTheme} className="h-10 w-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full bg-gray-200/50 dark:bg-white/10 transition-colors" aria-label="Toggle theme">
                {theme === 'dark' ? <i className="fas fa-sun text-lg"></i> : <i className="fas fa-moon text-lg"></i>}
              </button>
            </div>
             <Link to="/wait-list" className="block text-center w-full px-5 py-2 border border-black/20 dark:border-white/40 text-gray-800 dark:text-white font-semibold rounded-md text-sm hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                Join Us
              </Link>
               <Link to="#" className="block text-center w-full mt-2 px-5 py-2 bg-[#00d4aa] text-black font-semibold rounded-md text-sm hover:opacity-90 transition-opacity">
                Your Insights
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};


const Footer: React.FC = () => {
    const footerLinks = {
        Platform: [
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/#solutions' },
            { name: 'Learn', path: '/#learn' },
            { name: 'Contact', path: '/contact' },
        ],
        Resources: [
            { name: 'Documentation', path: '#' },
            { name: 'API Reference', path: '#' },
            { name: 'Blog', path: '/blog' },
            { name: 'Help Center', path: '#' },
        ],
        Company: [
            { name: 'About Us', path: '#' },
            { name: 'Careers', path: '#' },
            { name: 'Press Kit', path: '#' },
            { name: 'Partners', path: '#' },
        ],
        Legal: [
            { name: 'Privacy Policy', path: '/privacy-policy' },
            { name: 'Terms of Service', path: '#' },
            { name: 'Cookie Settings', path: '#' },
            { name: 'Security', path: '#' },
        ]
    };

    const socialLinks = [
        { name: 'Twitter', icon: 'fab fa-twitter', path: '#' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', path: '#' },
        { name: 'GitHub', icon: 'fab fa-github', path: '#' },
        { name: 'Discord', icon: 'fab fa-discord', path: '#' },
    ];

    return (
        <footer className="bg-gray-100 dark:bg-[#050505] border-t border-black/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#00d4aa]">Soomoja</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-sm">Empowering seamless shopping experiences worldwide with AI-driven innovation.</p>
                        <div className="flex gap-4">
                            <div className="text-center border dark:border-white/20 border-gray-300 rounded-lg px-4 py-2">
                                <p className="font-bold text-lg text-gray-900 dark:text-white">1M+</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">USERS</p>
                            </div>
                            <div className="text-center border dark:border-white/20 border-gray-300 rounded-lg px-4 py-2">
                                <p className="font-bold text-lg text-gray-900 dark:text-white">50+</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">COUNTRIES</p>
                            </div>
                            <div className="text-center border dark:border-white/20 border-gray-300 rounded-lg px-4 py-2">
                                <p className="font-bold text-lg text-gray-900 dark:text-white">99.9%</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">UPTIME</p>
                            </div>
                        </div>
                    </div>
                    <div className="dark:bg-white/5 bg-gray-200/50 p-8 rounded-2xl border dark:border-white/10 border-gray-300/50">
                        <div className="flex items-start gap-4">
                             <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-[#00d4aa]/20 text-[#00d4aa]">
                                <i className="fas fa-envelope text-2xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#00d4aa]">Stay in the Loop</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Get exclusive updates, AI insights, and early access to new features.</p>
                            </div>
                        </div>
                        <form className="mt-6 flex gap-3">
                            <input type="email" placeholder="Enter your email" className="w-full bg-gray-200 dark:bg-black/20 border border-gray-400/50 dark:border-white/20 rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]" />
                            <button type="submit" className="px-5 py-2.5 bg-[#00d4aa] text-black font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                                Subscribe <i className="fas fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="my-12 border-gray-400/30 dark:border-white/10" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-[#00d4aa]">{title}</h3>
                            <ul className="mt-4 space-y-3">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <hr className="my-12 border-gray-400/30 dark:border-white/10" />

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="font-semibold text-[#00d4aa]">Connect With Us</h3>
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map(social => (
                                <a key={social.name} href={social.path} className="h-10 w-10 flex items-center justify-center border dark:border-white/20 border-gray-300 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                     <div className="text-left md:text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">&copy; 2025 Soomoja. All rights reserved.</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Designed with <i className="fas fa-heart text-red-500"></i> for a smarter shopping future.</p>
                        <div className="inline-block mt-4 border dark:border-white/20 border-gray-300 rounded-full px-4 py-1.5">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">All systems operational</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};


const Particles: React.FC = () => {
  const particles = Array.from({ length: 30 });
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {particles.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${Math.random() * 10 + 5}s`,
        };
        return (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-[#00d4aa] to-[#7209b7] rounded-full animate-float opacity-50"
            style={style}
          ></div>
        );
      })}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      {theme === 'dark' && <Particles />}
      <div className="absolute top-0 left-0 w-full h-screen bg-cover bg-center -z-20" style={{backgroundImage: "url('/bg.jpg')"}}></div>
      <div className="absolute inset-0 bg-gray-50/80 dark:bg-black/80 -z-10"></div>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;