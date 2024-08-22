import React, { useState } from 'react';
import Thumbnail from './Thumbnail';

const Slideshow = () => {
    const pages = [
        {
            id: 1,
            title: "Página de prueba",
            icon: "🏆",
            date: "4 nov 2022",
            imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
        },
        {
            id: 2,
            title: "Página de prueba",
            icon: "🏆",
            date: "4 nov 2022",
            imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
        },
        {
            id: 3,
            title: "Página de prueba",
            icon: "🏆",
            date: "4 nov 2022",
            imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
        },
        {
            id: 4,
            title: "Página de prueba",
            icon: "🏆",
            date: "4 nov 2022",
            imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
        },
        {
            id: 5,
            title: "Página de prueba",
            icon: "🏆",
            date: "4 nov 2022",
            imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
        },
        {
            id: 6,
            title: "Página de prueba",
            icon: "🏆",
            date: "4 nov 2022",
            imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
        },
        {
          id: 7,
          title: "Página de prueba",
          icon: "🏆",
          date: "4 nov 2022",
          imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
      },
      {
          id: 8,
          title: "Página de prueba",
          icon: "🏆",
          date: "4 nov 2022",
          imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
      },
      {
          id: 9,
          title: "Página de prueba",
          icon: "🏆",
          date: "4 nov 2022",
          imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
      },
      {
          id: 10,
          title: "Página de prueba",
          icon: "🏆",
          date: "4 nov 2022",
          imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
      },
      {
          id: 11,
          title: "Página de prueba",
          icon: "🏆",
          date: "4 nov 2022",
          imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
      },
      {
          id: 12,
          title: "Página de prueba",
          icon: "🏆",
          date: "4 nov 2022",
          imageUrl: "https://i.blogs.es/af261d/escape_velocity/1366_2000.jpg",
      },



        // Agrega más páginas según sea necesario
      ];

  return (
    <div className="overflow-x-scroll whitespace-nowrap py-4 w-full">


    <div className="flex space-x-4">
      {pages.map((page) => (
        <div
          key={page.id}
          className="w-48 bg-gray-800 text-white rounded-lg shadow-md"
        >
          <div className="relative h-full">
            <img
              src={page.imageUrl}
              alt={page.title}
              className="w-full h-24 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold flex items-center truncate">
                <h5>{page.title}</h5>
              </h3>
              <p className="text-gray-400 text-sm mt-2">{page.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Slideshow;

/*
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={prevPage}
        >
          Prev
        </button>
        <button
          className="bg-gray-800 text-white px-3 py-1 rounded-full focus:outline-none"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
*/