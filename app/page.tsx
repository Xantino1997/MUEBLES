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
            <span className="text-3xl font-bold text-blue-500">TU MARCA ACA COMO PROLIENZO</span>
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
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                {/* Wall with frame */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2/5 h-2/5 bg-white shadow-2xl p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop" 
                    alt="Cuadro Mediano"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Console table */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/5 h-1/5 bg-gradient-to-b from-amber-700 to-amber-800 rounded shadow-xl">
                  {/* Table legs */}
                  <div className="absolute -bottom-8 left-4 w-1 h-8 bg-amber-900"></div>
                  <div className="absolute -bottom-8 right-4 w-1 h-8 bg-amber-900"></div>
                </div>
                {/* Decorative vase */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-teal-400 to-teal-600 rounded-t-full"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
                CUADROS MEDIANOS
              </h3>
            </div>
          </div>

          {/* Card 6 - Cuadros Pequeños */}
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                {/* Gallery wall with small frames */}
                <div className="absolute top-8 left-8 w-16 h-20 bg-white shadow-lg p-1 transform -rotate-3">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160&h=200&fit=crop" alt="Pequeño 1" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white shadow-lg p-1 rotate-2">
                  <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=160&h=200&fit=crop" alt="Pequeño 2" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute top-8 right-8 w-16 h-20 bg-white shadow-lg p-1 transform rotate-3">
                  <img src="https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=160&h=200&fit=crop" alt="Pequeño 3" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute top-32 left-1/4 w-16 h-20 bg-white shadow-lg p-1 transform -rotate-2">
                  <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=160&h=200&fit=crop" alt="Pequeño 4" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute top-32 right-1/4 w-16 h-20 bg-white shadow-lg p-1 transform rotate-1">
                  <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=160&h=200&fit=crop" alt="Pequeño 5" className="w-full h-full object-cover"/>
                </div>
                {/* Shelf */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-gray-700 rounded shadow-xl"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
                CUADROS PEQUEÑOS
              </h3>
            </div>
          </div>

          {/* Card 7 - Cuadros Modernos */}
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Modern sofa */}
                <div className="absolute bottom-0 w-4/5 h-2/5 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-2xl shadow-2xl">
                  {/* Sofa arm */}
                  <div className="absolute -left-2 top-2 w-4 h-3/4 bg-slate-700 rounded-l-lg"></div>
                  <div className="absolute -right-2 top-2 w-4 h-3/4 bg-slate-700 rounded-r-lg"></div>
                </div>
                {/* Modern abstract frame */}
                <div className="absolute top-8 w-2/5 h-2/5 bg-white shadow-2xl p-2 transform -rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=500&fit=crop" 
                    alt="Arte Moderno"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Modern lamp */}
                <div className="absolute bottom-0 right-8 w-2 h-20 bg-gray-800">
                  <div className="absolute -top-6 -left-4 w-10 h-6 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
                CUADROS MODERNOS
              </h3>
            </div>
          </div>

          {/* Card 8 - Cuadros Personalizados */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
            <div className="aspect-square bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Cozy chair */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2/5 h-2/5">
                  <div className="w-full h-full bg-gradient-to-br from-rose-400 to-rose-500 rounded-t-3xl relative shadow-xl">
                    {/* Chair back */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4/5 h-12 bg-rose-500 rounded-t-3xl"></div>
                  </div>
                  {/* Chair legs */}
                  <div className="absolute -bottom-6 left-2 w-1 h-6 bg-gray-800"></div>
                  <div className="absolute -bottom-6 right-2 w-1 h-6 bg-gray-800"></div>
                </div>
                {/* Personalized frame with "TU" */}
                <div className="absolute top-8 w-2/5 h-2/5 bg-white shadow-2xl p-2 transform rotate-1">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center rounded">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-rose-500 text-3xl font-bold">TU</span>
                    </div>
                  </div>
                </div>
                {/* Decorative plant */}
                <div className="absolute bottom-0 right-6 w-8 h-16">
                  <div className="absolute bottom-0 w-8 h-12 bg-green-700 rounded-full"></div>
                  <div className="absolute bottom-2 w-5 h-10 bg-green-600 rounded-full left-1"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-40 transition">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
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
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center p-8">
              {/* Sofa mockup */}
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Sofa */}
                <div className="absolute bottom-0 w-4/5 h-2/5 bg-gradient-to-b from-gray-600 to-gray-700 rounded-t-3xl shadow-2xl">
                  {/* Sofa cushions */}
                  <div className="flex justify-around items-end h-full px-4 pb-2">
                    <div className="w-1/3 h-3/4 bg-gray-500 rounded-t-lg"></div>
                    <div className="w-1/3 h-3/4 bg-gray-500 rounded-t-lg"></div>
                  </div>
                </div>
                {/* Frame on wall */}
                <div className="absolute top-8 w-1/2 h-2/5 bg-white shadow-2xl p-2 transform -rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=500&fit=crop" 
                    alt="Cuadro Grande"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Plant */}
                <div className="absolute bottom-0 left-2 w-12 h-24">
                  <div className="absolute bottom-0 w-12 h-16 bg-green-700 rounded-full"></div>
                  <div className="absolute bottom-4 w-8 h-20 bg-green-600 rounded-full left-2"></div>
                  <div className="absolute bottom-0 w-10 h-4 bg-gray-800 rounded-t-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
                CUADROS GRANDES
              </h3>
            </div>
          </div>

          {/* Card 2 - Sets de Cuadros */}
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                {/* Chair mockup */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1/3 h-2/5">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-500 rounded-t-full relative">
                    {/* Chair back */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-purple-500 rounded-t-full"></div>
                  </div>
                  {/* Chair legs */}
                  <div className="absolute -bottom-8 left-2 w-1 h-8 bg-gray-800"></div>
                  <div className="absolute -bottom-8 right-2 w-1 h-8 bg-gray-800"></div>
                </div>
                {/* Frames on wall */}
                <div className="absolute top-8 left-8 w-20 h-16 bg-white shadow-lg p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=160&fit=crop" 
                    alt="Cuadro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-12 right-8 w-16 h-16 bg-white shadow-lg p-1 transform rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=160&h=160&fit=crop" 
                    alt="Cuadro"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Side table */}
                <div className="absolute bottom-8 right-8 w-12 h-16">
                  <div className="absolute bottom-0 w-full h-3 bg-gray-800 rounded"></div>
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-700"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
                SETS DE CUADROS
              </h3>
            </div>
          </div>

          {/* Card 3 - Collages */}
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Sofa mockup */}
                <div className="absolute bottom-0 w-4/5 h-2/5 bg-gradient-to-b from-teal-600 to-teal-700 rounded-t-3xl shadow-2xl">
                  <div className="flex justify-around items-end h-full px-4 pb-2">
                    <div className="w-1/3 h-3/4 bg-teal-500 rounded-t-lg"></div>
                    <div className="w-1/3 h-3/4 bg-teal-500 rounded-t-lg"></div>
                  </div>
                </div>
                {/* Collage frame on wall */}
                <div className="absolute top-8 w-1/2 h-2/5 bg-white shadow-2xl p-2">
                  <div className="grid grid-cols-2 gap-1 w-full h-full">
                    <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop" alt="Foto 1" className="w-full h-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=200&h=200&fit=crop" alt="Foto 2" className="w-full h-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Foto 3" className="w-full h-full object-cover"/>
                    <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop" alt="Foto 4" className="w-full h-full object-cover"/>
                  </div>
                </div>
                {/* Pillow decoration */}
                <div className="absolute bottom-12 right-8 w-12 h-8 bg-yellow-500 rounded-full transform rotate-12"></div>
                {/* Plant */}
                <div className="absolute bottom-0 left-4 w-10 h-20">
                  <div className="absolute bottom-0 w-10 h-14 bg-green-700 rounded-full"></div>
                  <div className="absolute bottom-2 w-6 h-16 bg-green-600 rounded-full left-2"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center px-2 drop-shadow-lg">
                COLLAGES
              </h3>
            </div>
          </div>

          {/* Card 4 - Cuadros Grandes para Familias */}
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center p-8">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Sofa mockup */}
                <div className="absolute bottom-0 w-4/5 h-2/5 bg-gradient-to-b from-gray-500 to-gray-600 rounded-t-3xl shadow-2xl">
                  <div className="flex justify-around items-end h-full px-4 pb-2">
                    <div className="w-1/3 h-3/4 bg-gray-400 rounded-t-lg"></div>
                    <div className="w-1/3 h-3/4 bg-gray-400 rounded-t-lg"></div>
                  </div>
                </div>
                {/* Frame with MAMA tag */}
                <div className="absolute top-8 w-1/2 h-2/5 bg-white shadow-2xl p-2 transform rotate-1">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-3 py-1 text-xs font-bold rounded shadow-lg z-10">
                    MAMA
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&h=500&fit=crop" 
                    alt="Familia"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-12 left-12 w-10 h-6 bg-amber-500 rounded transform -rotate-12"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
              <h3 className="text-white text-xl sm:text-2xl font-bold text-center leading-tight px-2 drop-shadow-lg">
                CUADROS GRANDES<br/>PARA FAMILIAS
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
