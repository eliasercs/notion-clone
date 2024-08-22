import React, {useState} from 'react';
import {HomeIcon, DocumentIcon, Bars2Icon, XMarkIcon} from '@heroicons/react/24/solid'
import SideBarButton from "./buttons"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    {
      title: "Página 1"
    },
    {
      title: "Página 2",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
    {
      title: "Página 1"
    },
  ]

  return (
    <>
      <div className="md:hidden flex justify-between items-start p-4 bg-gray-900 text-white h-16 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <span>{isOpen ? <XMarkIcon className='size-6' /> : <Bars2Icon className='size-6' />}</span>
        </button>
      </div>
      <div
        className={`fixed md:relative inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out h-full w-64 bg-gray-800 text-white flex flex-col z-40`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <h1 className="text-xl font-bold">Notion</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded">
                <HomeIcon className='size-6 mr-2' />
                Inicio
              </a>
            </li>
            <SideBarButton icon={<DocumentIcon className='size-6 mr-2' />} title="Páginas" dropdown={true} submenu={pages} />
            {/* Agrega más elementos de navegación aquí */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
