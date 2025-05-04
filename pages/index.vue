<template>
  <div class="bg-wave-sand">
    <!-- Hero Section -->
    <div class="relative min-h-[600px]">
      <UnsplashImage
        url="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1715&auto=format&fit=crop"
        alt="Beautiful beach waves"
        className="absolute inset-0 w-full h-full object-cover"
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
              <span>Find a Location</span>
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
            <!-- Animated burger icon -->
            <div class="relative w-24 h-24 animate-float-slow">
              <svg class="w-full h-full text-wave-gold" viewBox="0 0 100 100" fill="currentColor">
                <!-- Top bun -->
                <path class="animate-wave" d="M20,35 C20,25 30,15 50,15 C70,15 80,25 80,35 C80,45 70,45 50,45 C30,45 20,45 20,35" />
                <!-- Lettuce -->
                <path class="animate-wave" fill="#2F7A4D" d="M15,45 C15,45 25,42 35,44 C45,46 55,43 65,45 C75,47 85,45 85,45 L85,50 L15,50" />
                <!-- Patty -->
                <path d="M15,50 C15,50 30,55 50,55 C70,55 85,50 85,50 L85,60 C85,60 70,65 50,65 C30,65 15,60 15,60" />
                <!-- Bottom bun -->
                <path class="animate-wave" d="M20,75 C20,65 30,60 50,60 C70,60 80,65 80,75 C80,85 70,85 50,85 C30,85 20,85 20,75" />
              </svg>
              <!-- Decorative splashes -->
              <div class="absolute -right-2 -top-2 w-6 h-6 bg-wave-gold rounded-full opacity-30 animate-splash"></div>
              <div class="absolute -left-2 -bottom-2 w-4 h-4 bg-wave-gold rounded-full opacity-30 animate-splash"></div>
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
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2069&auto=format&fit=crop"
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
              src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop"
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
            <!-- Animated surfboard icon -->
            <div class="relative w-24 h-24 animate-surf">
              <svg class="w-full h-full text-wave-gold" viewBox="0 0 100 100" fill="currentColor">
                <path d="M20,50 C20,30 30,20 50,20 C70,20 80,30 80,50 C80,70 70,80 50,80 C30,80 20,70 20,50" />
                <!-- Stripe -->
                <path d="M35,50 L65,50" stroke="white" stroke-width="4"/>
                <!-- Wave decoration -->
                <path class="animate-wave" d="M25,45 C35,42 45,48 55,45 C65,42 75,48 85,45" fill="none" stroke="white" stroke-width="2"/>
              </svg>
              <!-- Water splash effect -->
              <div class="absolute -right-2 -top-2 w-6 h-6 bg-wave-ocean rounded-full opacity-30 animate-splash"></div>
              <div class="absolute -left-2 -bottom-2 w-4 h-4 bg-wave-ocean rounded-full opacity-30 animate-splash"></div>
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
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                    alt="Beach wedding setup" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1533174077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant terrace" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div class="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=1935&auto=format&fit=crop"
                    alt="Karaoke bar" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
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

    <!-- Instagram Feed Section -->
    <section class="relative bg-wave-sand py-16">
      <WavePattern position="top" color="#4FD1C5" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-wave-dark text-center mb-12">Follow Us on Instagram</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-lg">
            <UnsplashImage
              url="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
              alt="Beautiful beach sunset"
              className="w-full h-full object-cover"
            />
          </div>
          <div class="aspect-square rounded-2xl overflow-hidden shadow-lg">
            <UnsplashImage
              url="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop"
              alt="Beachside dining"
              className="w-full h-full object-cover"
            />
          </div>
          <div class="aspect-square rounded-2xl overflow-hidden shadow-lg">
            <UnsplashImage
              url="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2073&auto=format&fit=crop"
              alt="Ocean waves"
              className="w-full h-full object-cover"
            />
          </div>
          <div class="aspect-square rounded-2xl overflow-hidden shadow-lg">
            <UnsplashImage
              url="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
              alt="Food plating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <WavePattern position="bottom" color="#4FD1C5" />
      <!-- Wave transition to footer -->
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
</style> 