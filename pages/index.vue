<template>
  <div class="bg-wave-sand">
    <!-- Hero Section -->
    <div class="relative min-h-[600px]">
      <img
        src="~/assets/Wave-Header.jpg"
        alt="Beautiful beach waves"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
        <div class="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6">Taste the difference</h1>
          <p class="text-xl sm:text-2xl text-white mb-8">
            Ein Ort, an dem kulinarischer Genuss, ein Blick auf das Wasser und eine stimmungsvolle Atmosphäre zu einem unvergesslichen Erlebnis verschmelzen.
          </p>
          <p class="text-2xl italic text-white mb-8">Live · Love · Wave</p>
          <button class="relative group">
            <div class="absolute inset-0 w-full h-full">
              <svg viewBox="0 0 300 80" class="w-full h-full">
                <!-- Surfboard shape -->
                <path d="M20,40 C20,15 40,5 80,5 L220,5 C260,5 280,15 280,40 C280,65 260,75 220,75 L80,75 C40,75 20,65 20,40" 
                      class="fill-wave-ocean transition-all duration-300 group-hover:fill-wave-gold" />
                <!-- Surfboard stripe -->
                <path d="M70,40 L230,40" 
                      stroke="white" stroke-width="2" stroke-opacity="0.3" />
              </svg>
            </div>
            <div class="relative px-10 py-4 text-white font-bold text-lg flex items-center justify-center space-x-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Reservieren</span>
            </div>
          </button>
          <button class="relative group">
            <div class="absolute inset-0 w-full h-full">
              <svg viewBox="0 0 300 80" class="w-full h-full">
                <!-- Surfboard shape -->
                <path d="M20,40 C20,15 40,5 80,5 L220,5 C260,5 280,15 280,40 C280,65 260,75 220,75 L80,75 C40,75 20,65 20,40" 
                      class="fill-wave-ocean transition-all duration-300 group-hover:fill-wave-gold" />
                <!-- Surfboard stripe -->
                <path d="M70,40 L230,40" 
                      stroke="white" stroke-width="2" stroke-opacity="0.3" />
              </svg>
            </div>
            <div class="relative px-10 py-4 text-white font-bold text-lg flex items-center justify-center space-x-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Zur Speisekarte</span>
            </div>
          </button>
        </div>
      </div>
      <!-- Wave transition to Specials section -->
      <div class="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-32">
          <path d="M0,120 C480,60 960,100 1440,80 L1440,120 L0,120 Z" fill="#F5E6DA"/>
          <path d="M0,120 C480,90 960,110 1440,95 L1440,120 L0,120 Z" fill="#F5E6DA" fill-opacity="0.5"/>
        </svg>
      </div>
    </div>

    <!-- Remove entire Specials Section and go straight to Lieblingsspeisen -->
    <section class="relative bg-wave-sand py-32 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <!-- Palm trees and decorative elements -->
        <div class="absolute -left-20 top-0 opacity-30">
          <svg width="200" height="300" viewBox="0 0 200 300">
            <path d="M100,280 C100,200 140,150 180,120 C140,150 100,200 100,280" fill="#2F7A4D"/>
            <path d="M100,260 C100,180 60,130 20,100 C60,130 100,180 100,260" fill="#2F7A4D"/>
          </svg>
        </div>
        <div class="absolute -right-20 top-0 opacity-30 transform scale-x-[-1]">
          <svg width="200" height="300" viewBox="0 0 200 300">
            <path d="M100,280 C100,200 140,150 180,120 C140,150 100,200 100,280" fill="#2F7A4D"/>
            <path d="M100,260 C100,180 60,130 20,100 C60,130 100,180 100,260" fill="#2F7A4D"/>
          </svg>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <div class="inline-block relative">
            <!-- New simplified burger icon -->
            <div class="relative w-24 h-24 animate-float-slow">
              <svg class="w-full h-full text-wave-gold" viewBox="0 0 100 100" fill="currentColor">
                <!-- Top bun -->
                <path d="M25,30 C25,20 35,15 50,15 C65,15 75,20 75,30 C75,35 65,38 50,38 C35,38 25,35 25,30" />
                <!-- Lettuce -->
                <path fill="#2F7A4D" d="M20,38 C20,38 35,42 50,42 C65,42 80,38 80,38 L80,48 C80,48 65,52 50,52 C35,52 20,48 20,48" />
                <!-- Patty -->
                <path d="M20,48 C20,48 35,52 50,52 C65,52 80,48 80,48 L80,58 C80,58 65,62 50,62 C35,62 20,58 20,58" />
                <!-- Bottom bun -->
                <path d="M25,70 C25,60 35,58 50,58 C65,58 75,60 75,70 C75,75 65,78 50,78 C35,78 25,75 25,70" />
              </svg>
              <div class="absolute -right-2 -top-2 w-6 h-6 bg-wave-gold rounded-full opacity-30 animate-pulse"></div>
              <div class="absolute -left-2 -bottom-2 w-4 h-4 bg-wave-gold rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
          <h2 class="text-wave-gold text-5xl font-semibold mt-6">Unsere Lieblingsspeisen</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Menu Items -->
          <div class="space-y-8">
            <!-- Menu Item 1 -->
            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-wave-gold border-opacity-20">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-wave-dark text-2xl font-bold">Texas Smash Burger</h3>
                <div class="border-b-2 border-dotted border-wave-dark flex-grow mx-4 relative top-[-4px]"></div>
                <span class="text-wave-dark text-2xl font-bold">€16.90</span>
              </div>
              <p class="text-wave-dark text-lg opacity-80 mb-4">Texas Smashed Burger mit Salat, Ofenkartoffeln und hausgemachten Dips</p>
              <div class="flex items-center space-x-2 text-wave-dark opacity-60">
                <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span class="text-sm">Chef's Special</span>
              </div>
            </div>

            <!-- Menu Item 2 -->
            <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-wave-gold border-opacity-20">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-wave-dark text-2xl font-bold">Surf 'n' Sashimi Bowl</h3>
                <div class="border-b-2 border-dotted border-wave-dark flex-grow mx-4 relative top-[-4px]"></div>
                <span class="text-wave-dark text-2xl font-bold">€18.90</span>
              </div>
              <p class="text-wave-dark text-lg opacity-80 mb-4">Tagliatelle Trüffel mit Pilzen, Sahne und Trüffelsauce</p>
              <div class="flex items-center space-x-2 text-wave-dark opacity-60">
                <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                </svg>
                <span class="text-sm">Seasonal Dish</span>
              </div>
            </div>

            <!-- Surfboard button -->
            <div class="mt-8">
              <button class="relative group">
                <div class="absolute inset-0 w-full h-full">
                  <svg viewBox="0 0 300 80" class="w-full h-full">
                    <path d="M20,40 C20,15 40,5 80,5 L220,5 C260,5 280,15 280,40 C280,65 260,75 220,75 L80,75 C40,75 20,65 20,40" 
                          class="fill-wave-ocean transition-all duration-300 group-hover:fill-wave-gold" />
                    <path d="M70,40 L230,40" 
                          stroke="white" stroke-width="2" stroke-opacity="0.3" />
                  </svg>
                </div>
                <div class="relative px-6 sm:px-10 py-4 text-white font-semibold text-base sm:text-lg flex items-center justify-center space-x-3 whitespace-nowrap">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span class="truncate">Zur Speisekarte</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Right side image -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-wave-ocean to-transparent opacity-10 rounded-3xl"></div>
            <img 
              src="~/assets/Wave_Burger3.jpg"
              alt="Delicious burger" 
              class="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <!-- Decorative dots -->
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-wave-ocean opacity-20 rounded-full"></div>
            <div class="absolute -left-4 -top-4 w-16 h-16 bg-wave-ocean opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Wave transition to Drinks section -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-48">
          <path d="M0,200 C360,140 720,180 1080,160 C1260,150 1350,170 1440,180 L1440,200 L0,200 Z" fill="#2B4D6F"/>
          <path d="M0,200 C360,160 720,190 1080,175 C1260,168 1350,185 1440,190 L1440,200 L0,200 Z" fill="#2B4D6F" fill-opacity="0.7"/>
          <g class="animate-pulse">
            <circle cx="400" cy="150" r="2" fill="white" fill-opacity="0.6"/>
            <circle cx="800" cy="140" r="2" fill="white" fill-opacity="0.6"/>
            <circle cx="1200" cy="160" r="2" fill="white" fill-opacity="0.6"/>
          </g>
        </svg>
      </div>
    </section>

    <!-- Unsere Lieblingsdrinks Section -->
    <section class="relative bg-[#2B4D6F] py-16 sm:py-32 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <!-- Bubble animations -->
        <div class="absolute inset-0">
          <div class="bubble-animation"></div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <div class="inline-block relative">
            <!-- Animated cocktail icon -->
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 animate-float-slow">
              <svg class="w-full h-full text-white" viewBox="0 0 100 100" fill="currentColor">
                <!-- Glass -->
                <path class="animate-wave" d="M30,20 L70,20 L60,80 L40,80 Z" fill="none" stroke="currentColor" stroke-width="4"/>
                <!-- Liquid -->
                <path class="animate-wave" d="M32,30 C32,30 45,35 50,35 C55,35 68,30 68,30 L62,70 L38,70 Z" fill="#4FA6B3"/>
                <!-- Straw -->
                <path d="M55,15 L65,5" stroke="currentColor" stroke-width="4"/>
                <!-- Umbrella -->
                <path class="animate-wave" d="M40,25 C40,25 45,20 50,20 C55,20 60,25 60,25" fill="none" stroke="currentColor" stroke-width="2"/>
                <!-- Bubbles -->
                <circle class="animate-splash" cx="45" cy="40" r="2"/>
                <circle class="animate-splash" cx="55" cy="50" r="2"/>
                <circle class="animate-splash" cx="50" cy="60" r="2"/>
              </svg>
              <!-- Decorative splashes -->
              <div class="absolute -right-2 -top-2 w-6 h-6 bg-white rounded-full opacity-30 animate-splash"></div>
              <div class="absolute -left-2 -bottom-2 w-4 h-4 bg-white rounded-full opacity-30 animate-splash"></div>
            </div>
          </div>
          <h2 class="text-white text-5xl font-semibold mt-6">Unsere Lieblingsdrinks</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left side image -->
          <div class="relative order-2 lg:order-1">
            <div class="absolute inset-0 bg-gradient-to-br from-wave-ocean to-transparent opacity-10 rounded-3xl"></div>
            <img 
              src="~/assets/Wave_Cocktails3.jpg"
              alt="Tropical cocktails" 
              class="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <!-- Decorative dots -->
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-20 rounded-full"></div>
            <div class="absolute -left-4 -top-4 w-16 h-16 bg-white opacity-20 rounded-full"></div>
          </div>

          <!-- Drink Items -->
          <div class="space-y-8 order-1 lg:order-2">
            <!-- Drink Item 1 -->
            <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-white border-opacity-20">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-white text-2xl font-bold">Ocean Breeze Mojito</h3>
                <div class="border-b-2 border-dotted border-white flex-grow mx-4 relative top-[-4px]"></div>
                <span class="text-white text-2xl font-bold">€9.90</span>
              </div>
              <p class="text-white text-lg opacity-80 mb-4">Frische Minze, Limette, brauner Rohrzucker mit Havana Club und Soda</p>
              <div class="flex items-center space-x-2 text-white opacity-60">
                <svg class="w-5 h-5 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                </svg>
                <span class="text-sm">Signature Cocktail</span>
              </div>
            </div>

            <!-- Drink Item 2 -->
            <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 border border-white border-opacity-20">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-white text-2xl font-bold">Sunset Paradise</h3>
                <div class="border-b-2 border-dotted border-white flex-grow mx-4 relative top-[-4px]"></div>
                <span class="text-white text-2xl font-bold">€8.90</span>
              </div>
              <p class="text-white text-lg opacity-80 mb-4">Malibu, Ananassaft, Cranberry und frische Kokosnuss</p>
              <div class="flex items-center space-x-2 text-white opacity-60">
                <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                </svg>
                <span class="text-sm">Summer Special</span>
              </div>
            </div>

            <!-- Surfboard button -->
            <div class="mt-8">
              <button class="relative group">
                <div class="absolute inset-0 w-full h-full">
                  <svg viewBox="0 0 300 80" class="w-full h-full">
                    <path d="M20,40 C20,15 40,5 80,5 L220,5 C260,5 280,15 280,40 C280,65 260,75 220,75 L80,75 C40,75 20,65 20,40" 
                          class="fill-wave-ocean transition-all duration-300 group-hover:fill-wave-gold" />
                    <path d="M70,40 L230,40" 
                          stroke="white" stroke-width="2" stroke-opacity="0.3" />
                  </svg>
                </div>
                <div class="relative px-6 sm:px-10 py-4 text-white font-semibold text-base sm:text-lg flex items-center justify-center space-x-3 whitespace-nowrap">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span class="truncate">Zur Getränkekarte</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave transition to next section -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-32">
          <path d="M0,120 C360,100 720,60 1080,80 C1260,90 1350,85 1440,80 L1440,120 L0,120 Z" fill="#F5E6DA"/>
          <path d="M0,120 C360,110 720,70 1080,90 C1260,95 1350,92 1440,90 L1440,120 L0,120 Z" fill="#F5E6DA" fill-opacity="0.5"/>
        </svg>
      </div>
    </section>

    <!-- Events & Location Section -->
    <section class="relative bg-wave-sand py-12 sm:py-16 md:py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <div class="inline-block relative">
            <!-- Animated location pin icon -->
            <div class="relative w-24 h-24 animate-float-slow">
              <svg class="w-full h-full text-wave-gold" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <!-- Main pin shape -->
                <path 
                  class="animate-pulse-slow"
                  d="M50,15 C35,15 25,25 25,40 C25,55 50,85 50,85 C50,85 75,55 75,40 C75,25 65,15 50,15"
                  stroke-width="4"
                  fill="currentColor"
                  stroke="none"
                />
                <!-- Inner circle -->
                <circle 
                  cx="50" 
                  cy="40" 
                  r="10" 
                  class="animate-ripple" 
                  fill="white" 
                  fill-opacity="0.8"
                />
                <!-- Ripple effect circles -->
                <circle 
                  cx="50" 
                  cy="40" 
                  r="8" 
                  class="animate-ripple-delay-1" 
                  fill="none" 
                  stroke="white" 
                  stroke-opacity="0.4" 
                  stroke-width="2"
                />
                <circle 
                  cx="50" 
                  cy="40" 
                  r="16" 
                  class="animate-ripple-delay-2" 
                  fill="none" 
                  stroke="white" 
                  stroke-opacity="0.2" 
                  stroke-width="2"
                />
              </svg>
              <!-- Decorative elements -->
              <div class="absolute -right-2 -top-2 w-6 h-6 bg-wave-gold rounded-full opacity-30 animate-pulse"></div>
              <div class="absolute -left-2 -bottom-2 w-4 h-4 bg-wave-gold rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
          <h2 class="text-wave-gold text-5xl font-semibold mt-6">Unsere Location</h2>
          <p class="text-wave-gold text-xl italic mt-4">Deine Events · Deine Feier · Dein Tag</p>
        </div>

        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <!-- Left content -->
          <div class="relative z-10 w-full">
            <!-- Animated palm tree icon -->
            <div class="mb-6 sm:mb-8">
              <svg class="w-12 h-12 sm:w-16 sm:h-16 text-wave-gold animate-sway" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12,2 C8,2 4,6 4,10 C4,14 8,16 12,16 M12,2 C16,2 20,6 20,10 C20,14 16,16 12,16 M12,16 L12,22" 
                      stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            
            <div class="space-y-4 sm:space-y-6 text-wave-dark">
              <p class="text-base sm:text-lg">
                Ob Geburtstage, Hochzeiten, Weihnachtsfeiern, Firmenveranstaltungen oder Kindergeburtstage – unsere Räumlichkeiten, inklusive der großzügigen Terrasse und dem einzigartigen Ausblick, bieten den perfekten Rahmen für jede Art von Feier und Zusammenkunft.
              </p>
              
              <p class="text-base sm:text-lg">
                Für kleinere Events oder Gruppenreservierungen steht Ihnen außerdem unsere "Minibar" Karaoke-Bar direkt neben der WaveCity Kitchenbar in der Hongkongstraße 4 zur Verfügung.
              </p>

              <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-wave-gold border-opacity-20">
                <p class="text-base sm:text-lg mb-2">
                  Interesse geweckt? Schreiben Sie uns eine E-Mail an:
                </p>
                <a href="mailto:info@wavecity-kitchenbar.de" 
                   class="text-wave-ocean text-lg sm:text-xl font-bold hover:text-wave-gold transition-colors duration-300 break-all sm:break-normal">
                  info@wavecity-kitchenbar.de
                </a>
                <p class="text-base sm:text-lg mt-4">
                  Wir freuen uns darauf, Ihre Feier gemeinsam mit Ihnen unvergesslich zu machen!
                </p>
              </div>

              <!-- Surfboard button -->
              <div class="mt-6 sm:mt-8">
                <button class="relative group w-full sm:w-auto">
                  <div class="absolute inset-0 w-full h-full">
                    <svg viewBox="0 0 300 80" class="w-full h-full">
                      <path d="M20,40 C20,15 40,5 80,5 L220,5 C260,5 280,15 280,40 C280,65 260,75 220,75 L80,75 C40,75 20,65 20,40" 
                            class="fill-wave-ocean transition-all duration-300 group-hover:fill-wave-gold" />
                      <path d="M70,40 L230,40" 
                            stroke="white" stroke-width="2" stroke-opacity="0.3" />
                    </svg>
                  </div>
                  <div class="relative px-6 sm:px-10 py-4 text-white font-semibold text-base sm:text-lg flex items-center justify-center space-x-3">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Event Anfragen</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Right content - Image grid with decorative elements -->
          <div class="relative w-full mt-8 lg:mt-0">
            <div class="grid grid-cols-2 gap-3 sm:gap-4">
              <div class="space-y-3 sm:space-y-4">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                   src="~/assets/Wave-Gallery1.jpg"
                    alt="Beach wedding setup" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                  src="~/assets/Wave-Gallery-2.jpg" 
                    alt="Restaurant terrace" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div class="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                  src="~/assets/Wave-Gallery-3.jpg" 
                    alt="Karaoke bar" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                  src="~/assets/Wave-Gallery-4.jpg" 
                    alt="Restaurant terrace" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 w-16 sm:w-24 h-16 sm:h-24 bg-wave-ocean opacity-20 rounded-full"></div>
            <div class="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-12 sm:w-16 h-12 sm:h-16 bg-wave-ocean opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Wave transition to next section -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-32">
          <path d="M0,120 C240,90 480,40 720,60 C960,80 1200,100 1440,90 L1440,120 L0,120 Z" fill="#F5E6DA"/>
          <path d="M0,120 C240,100 480,60 720,75 C960,90 1200,110 1440,100 L1440,120 L0,120 Z" fill="#F5E6DA" fill-opacity="0.5"/>
        </svg>
      </div>
    </section>

  </div>
</template>

<script setup>
import UnsplashImage from '~/components/UnsplashImage.vue'
import WavePattern from '~/components/WavePattern.vue'
</script>

<style scoped>
@font-face {
  font-family: 'RetroBeach';
  src: url('~/assets/fonts/retro-beach.regular.otf') format('opentype');
  font-weight: thin;
  font-style: normal;
}

.font-italic {
  font-style: italic;
}

/* Apply RetroBeach font to headings */
h1, h2, h3 {
  font-family: 'RetroBeach', sans-serif;
}

/* Surf-themed animations */
.animate-wave {
  animation: wave 3s ease-in-out infinite;
  transform-origin: center;
}

.animate-float-slow {
  animation: float 6s ease-in-out infinite;
}

.animate-surf {
  animation: surf 8s linear infinite;
}

.animate-splash {
  animation: splash 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes surf {
  0% {
    transform: translateX(-100%) rotate(-2deg);
  }
  50% {
    transform: translateX(0) rotate(2deg);
  }
  100% {
    transform: translateX(100%) rotate(-2deg);
  }
}

@keyframes splash {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.sun-icon {
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bubble-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%);
  animation: bubbles 8s ease-in-out infinite;
}

@keyframes bubbles {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-30px) scale(1.1);
    opacity: 0.8;
  }
}

.animate-sway {
  animation: sway 3s ease-in-out infinite;
  transform-origin: bottom;
}

@keyframes sway {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
}

/* Add these new animations */
.animate-ripple {
  animation: ripple 2s ease-out infinite;
}

.animate-ripple-delay-1 {
  animation: ripple 2s ease-out infinite;
  animation-delay: 0.5s;
}

.animate-ripple-delay-2 {
  animation: ripple 2s ease-out infinite;
  animation-delay: 1s;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulseSlow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style> 