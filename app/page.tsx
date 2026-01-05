import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

export default function ProlientoHomepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="bg-blue-700 text-white text-center py-2 text-sm font-medium">
        ¡ENVÍOS A TODO EL PAIS! 🚀
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-blue-600"></div>
              <div className="w-4 h-4 bg-blue-600"></div>
            </div>
            <span className="text-3xl font-bold text-blue-500">Prolienzo</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
              Cuadros personalizados
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Cuadros decorativos
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Ayuda
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <User className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Product Grid - Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 5 - Cuadros Medianos */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-xl w-full h-3/4 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-32 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg shadow-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                CUADROS<br />MEDIANOS
              </h3>
            </div>
          </div>

          {/* Card 6 - Cuadros Pequeños */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2">
                  <div className="w-12 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded shadow-lg"></div>
                  <div className="w-12 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded shadow-lg"></div>
                  <div className="w-12 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded shadow-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                CUADROS<br />PEQUEÑOS
              </h3>
            </div>
          </div>

          {/* Card 7 - Cuadros Modernos */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-xl w-full h-3/4 flex items-center justify-center p-4">
                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-yellow-400 opacity-50 rounded-bl-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                CUADROS<br />MODERNOS
              </h3>
            </div>
          </div>

          {/* Card 8 - Cuadros Personalizados */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-xl w-full h-3/4 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">TU</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                CUADROS<br />PERSONALIZADOS
              </h3>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg">
            EXPLORAR MÁS
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 text-center mb-8 sm:mb-12 lg:mb-16">
          CUADROS PERSONALIZADOS
        </h1>

        {/* Product Grid - First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Card 1 - Cuadros Grandes */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-xl w-full h-3/4 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-40 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg"></div>
                </div>
              </div>
              {/* Plant decoration */}
              <div className="absolute bottom-4 left-4 w-16 h-24 bg-green-600 opacity-20 rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                CUADROS<br />GRANDES
              </h3>
            </div>
          </div>

          {/* Card 2 - Sets de Cuadros */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <div className="absolute top-8 left-8 w-20 h-16 bg-blue-400 rounded shadow-lg"></div>
                <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-200 rounded shadow-lg"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                SETS DE<br />CUADROS
              </h3>
            </div>
          </div>

          {/* Card 3 - Collages */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-xl w-full h-3/4 flex items-center justify-center p-4">
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded"></div>
                  <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded"></div>
                  <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded"></div>
                  <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded"></div>
                </div>
              </div>
              {/* Plant decoration */}
              <div className="absolute bottom-4 left-4 w-12 h-20 bg-green-600 opacity-20"></div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2">
                COLLAGES
              </h3>
            </div>
          </div>

          {/* Card 4 - Cuadros Grandes para Familias */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-xl w-full h-3/4 flex items-center justify-center relative">
                <div className="absolute top-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-1 text-sm font-bold rounded">
                  MAMA
                </div>
                <div className="w-32 h-40 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg shadow-lg"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center leading-tight px-2">
                CUADROS<br />GRANDES PARA<br />FAMILIAS
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}