import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const height = footer.offsetHeight;
        setFooterHeight(height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <main className="flex-grow">
        {/* Your page content goes here */}
      </main>
      <footer className={`bg-yellow-300 flex items-center mt-auto relative mb-${footerHeight * -1 + 4}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-24 gap-[10vw]">
            <p className="text-black">Copyright Deckenbau GmbH</p>
            <NavLink to="/impressum" className="text-gray-600 font-bold">
              Impressum
            </NavLink>
            <NavLink to="/datenschutz" className="text-gray-600 font-bold">
              Datenschutz
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
