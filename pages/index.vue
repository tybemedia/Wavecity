<template>
  <div class="bg-wave-sand">
    <!-- Hero Section -->
    <div class="relative min-h-[600px]">
      <div class="absolute inset-0 image-gradient animate-on-scroll zoom-in">
        <img
          src="~/assets/Wave-Header.jpg"
          alt="Beautiful beach waves"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 flex items-center justify-center text-center">
        <div class="max-w-4xl px-4 sm:px-6 lg:px-8 animate-on-scroll">
          <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6 animate-on-scroll fade-down ease-elastic" style="text-shadow: -3px -3px 0 rgb(79,166,179), 3px -3px 0 rgb(79,166,179), -3px 3px 0 rgb(79,166,179), 3px 3px 0 rgb(79,166,179), -2px -2px 0 rgb(79,166,179), 2px -2px 0 rgb(79,166,179), -2px 2px 0 rgb(79,166,179), 2px 2px 0 rgb(79,166,179), -1px -1px 0 rgb(79,166,179), 1px -1px 0 rgb(79,166,179), -1px 1px 0 rgb(79,166,179), 1px 1px 0 rgb(79,166,179);">Taste the difference</h1>
          <p class="text-xl sm:text-2xl text-white mb-8 animate-on-scroll fade-up">
            Ein Ort, an dem kulinarischer Genuss, ein Blick auf das Wasser und eine stimmungsvolle Atmosphäre zu einem unvergesslichen Erlebnis verschmelzen.
          </p>
          <p class="text-2xl italic text-white mb-8 animate-on-scroll fade-up duration-slow">
            <span class="inline-block pr-1">Live</span>
            <span class="inline-block px-1 text-wave-ocean">•</span>
            <span class="inline-block px-1">Love</span>
            <span class="inline-block px-1 text-wave-ocean">•</span>
            <span class="inline-block pl-1">Wave</span>
          </p>
          <button class="relative group animate-on-scroll fade-up ease-bounce">
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
            <a href="https://app.resmio.com/wavecity-kitchenbar/widget" target="_blank" rel="noopener noreferrer" class="relative px-10 py-4 text-white font-bold text-lg flex items-center justify-center space-x-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Tisch reservieren</span>
            </a>
          </button>
          <button class="relative group animate-on-scroll fade-up ease-bounce">
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
            <a href="https://igetnow.com/79JM1" target="_blank" class="relative px-10 py-4 text-white font-bold text-lg flex items-center justify-center space-x-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Zur Speisekarte</span>
            </a>
          </button>
        </div>
      </div>
      <!-- Wave transition to Specials section -->
      <div class="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-32">
          <path d="M0,120 C480,60 960,100 1440,80 L1440,120 L0,120 Z" fill="#F5E6DA"/>
        </svg>
      </div>
    </div>

    <!-- Remove entire Specials Section and go straight to Lieblingsspeisen -->
    <section class="relative bg-gradient-to-b from-wave-sand to-wave-ocean/10 py-32 overflow-hidden">
      <!-- Decorative food elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Animated burger icon -->
        <div class="absolute -right-16 -top-10 w-64 h-64 text-wave-palm opacity-10 transform rotate-12 animate-sway hidden md:block">
          <img src="~/assets/burger (1).svg" alt="Burger icon" class="w-full h-full" />
        </div>
        <!-- Animated fries icon -->
        <div class="absolute left-10 top-20 w-48 h-48 text-wave-palm opacity-10 transform -rotate-12 animate-sway-delay">
          <img src="~/assets/fried-potatoes.svg" alt="Fries icon" class="w-full h-full" />
        </div>
        <!-- Animated salad icon -->
        <div class="absolute right-20 bottom-10 w-40 h-40 text-wave-palm opacity-10 transform rotate-45 animate-sway">
          <img src="~/assets/salad.svg" alt="Salad icon" class="w-full h-full" />
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="block text-wave-ocean text-lg font-semibold tracking-wider uppercase mb-3 animate-on-scroll fade-down">Unsere Spezialitäten</span>
          <h2 class="text-wave-dark text-4xl sm:text-5xl lg:text-6xl font-retro mb-4 animate-on-scroll fade-up ease-elastic">
            Lieblingsspeisen
          </h2>
          <div class="flex items-center justify-center gap-4 animate-on-scroll zoom-in">
            <div class="h-[1px] w-16 bg-wave-ocean"></div>
            <svg class="w-8 h-8 text-wave-ocean" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,3L4,9V21H20V9L12,3M12,7.5L16,10.5V17H8V10.5L12,7.5Z"/>
            </svg>
            <div class="h-[1px] w-16 bg-wave-ocean"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Menu Items -->
          <div class="space-y-8">
            <!-- Menu Item 1 -->
            <div class="bg-white rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-wave-ocean w-full mx-auto animate-on-scroll fade-left">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>Crunchy Chicken Burger</span>
                </h3>
                <span class="text-wave-ocean text-2xl font-bold">€12.90</span>
              </div>
              <p class="text-wave-dark/80 text-lg">Herzhafter Burger mit knupsrig paniertem Chicken Filet,</p>
            </div>

            <!-- Menu Item 2 -->
            <div class="bg-white rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-wave-ocean w-full mx-auto animate-on-scroll fade-right">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>Beyond Meat Burger</span>
                </h3>
                <span class="text-wave-ocean text-2xl font-bold">€12.90</span>
              </div>
              <p class="text-wave-dark/80 text-lg">Veganes Burger Patty im Brioche Brötchen</p>
            </div>

            <!-- Speisekarte Button -->
            <div class="mt-12 text-center">
              <a href="https://igetnow.com/79JM1" target="_blank" rel="noopener noreferrer" class="group w-full sm:w-auto bg-wave-ocean hover:bg-wave-dark text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 animate-on-scroll fade-up ease-bounce mx-auto">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Zur Speisekarte</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right side image -->
          <div class="relative">
            <img 
              src="~/assets/Wave_Burger3.jpg"
              alt="Delicious burger" 
              class="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-on-scroll zoom-in"
            />
            <!-- Decorative elements -->
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-wave-ocean opacity-20 rounded-full animate-pulse-slow"></div>
            <div class="absolute -left-4 -top-4 w-24 h-24 bg-wave-ocean opacity-20 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      <!-- Wave transition -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-32">
          <path 
            d="M0,120 C480,40 960,120 1440,40 L1440,120 L0,120 Z" 
            fill="#1A237E"
          />
        </svg>
      </div>
    </section>

    <!-- Unsere Lieblingsdrinks Section -->
    <section class="relative bg-gradient-to-b from-[#1A237E] to-white py-32 overflow-hidden">
      <!-- Decorative cocktail elements -->
      <div class="absolute inset-0 overflow-hidden mix-blend-soft-light">
        <!-- Animated drink glass -->
        <div class="absolute -right-16 top-20 w-48 h-48 text-white opacity-30 transform rotate-12 animate-float-slow">
          <img src="~/assets/drink.svg" alt="Drink glass icon" class="w-full h-full" />
        </div>
        <!-- Animated cheers icon -->
        <div class="absolute left-10 top-40 w-32 h-32 text-white opacity-30 transform -rotate-12 animate-float-delay">
          <img src="~/assets/cheers.svg" alt="Cheers icon" class="w-full h-full" />
        </div>
        <!-- Animated burger icon (as a backup) -->
        <div class="absolute right-20 bottom-10 w-40 h-40 text-white opacity-30 transform rotate-45 animate-float-slow">
          <img src="~/assets/burger (1) copy.svg" alt="Burger icon" class="w-full h-full" />
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="block text-[rgb(79,166,179)] text-lg font-semibold tracking-wider uppercase mb-3 animate-on-scroll fade-down">Erfrischend & Lecker</span>
          <h2 class="text-white text-4xl sm:text-5xl lg:text-6xl font-retro mb-4 drop-shadow-lg animate-on-scroll fade-up ease-elastic">
            Lieblingsdrinks
          </h2>
          <div class="flex items-center justify-center gap-4">
            <div class="h-[1px] w-16 bg-[rgb(79,166,179)]"></div>
            <svg class="w-8 h-8 text-[rgb(79,166,179)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7,3V11H17V3H7M11,13V21H13V13H11Z" />
            </svg>
            <div class="h-[1px] w-16 bg-[rgb(79,166,179)]"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Drinks Menu -->
          <div class="space-y-8">
            <!-- Drink Item 1 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-[rgb(79,166,179)] w-full mx-auto animate-on-scroll fade-left">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>TJT - Wildberry</span>
                </h3>
                <span class="text-[rgb(79,166,179)] text-2xl font-bold">€11</span>
              </div>
              <p class="text-[#1A237E]/80 text-lg">TJT Liquor (22% Vol), Wildberry, rote Früchte</p>
              <div class="flex items-center mt-3 text-[rgb(79,166,179)]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span class="ml-2 text-sm font-semibold">Summer Special</span>
              </div>
            </div>

            <!-- Drink Item 2 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-[rgb(79,166,179)] w-full mx-auto animate-on-scroll fade-right">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>Homemade Limonade</span>
                </h3>
                <span class="text-[rgb(79,166,179)] text-2xl font-bold">€6.90</span>
              </div>
              <p class="text-[#1A237E]/80 text-lg">Erfrischende hausgemachte Limonade aus Orangen, Zitronen
                und Limetten</p>
            </div>

            <!-- Getränkekarte Button -->
            <div class="mt-12 text-center">
              <a href="https://igetnow.com/79JM1" target="_blank" class="group w-full sm:w-auto bg-[rgb(79,166,179)] hover:bg-[#1A237E] text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg animate-on-scroll fade-up ease-bounce mx-auto">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Zur Getränkekarte</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Right side image grid -->
          <div class="relative grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in">
                <img 
                  src="~/assets/J68A9289.jpg"
                  alt="Tropical cocktail" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in duration-slow">
                <img 
                 src="~/assets/J68A9498.jpg"
                  alt="Refreshing drink" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in duration-fast">
                <img 
                  src="~/assets/Wave_Cocktails3.jpg"
                  alt="Signature cocktail" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in">
                <img 
                 src="~/assets/J68A9218.jpg"
                  alt="Beach cocktail" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-[#F5E6DA] opacity-20 rounded-full animate-pulse-slow"></div>
            <div class="absolute -left-4 -top-4 w-24 h-24 bg-[#1A237E] opacity-20 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      <!-- Wave transition -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-32">
          <path d="M0,120 C480,60 960,100 1440,80 L1440,120 L0,120 Z" fill="#F5E6DA"/>
        </svg>
      </div>
    </section>

    <!-- Location Section -->
    <section id="events" class="relative bg-gradient-to-b from-wave-sand to-wave-ocean/10 py-32 overflow-hidden">
      <!-- Decorative beach elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Animated palm trees -->
        <div class="absolute -right-16 -top-10 w-64 h-64 text-wave-palm opacity-10 transform rotate-12 animate-sway">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,90 L53,40 C53,40 65,38 70,25 C75,12 60,5 60,5 C60,5 55,15 50,18 C45,15 40,5 40,5 C40,5 25,12 30,25 C35,38 47,40 47,40 L50,90 Z"/>
          </svg>
        </div>
        <div class="absolute left-10 top-20 w-48 h-48 text-wave-palm opacity-10 transform -rotate-12 animate-sway-delay">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,90 L53,40 C53,40 65,38 70,25 C75,12 60,5 60,5 C60,5 55,15 50,18 C45,15 40,5 40,5 C40,5 25,12 30,25 C35,38 47,40 47,40 L50,90 Z"/>
          </svg>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Heading -->
        <div class="text-center mb-16">
          <span class="block text-wave-ocean text-lg font-semibold tracking-wider uppercase mb-3 animate-on-scroll fade-down">Dein Zuhause am Meer</span>
          <h2 class="text-wave-dark text-4xl sm:text-5xl lg:text-6xl font-retro mb-4 animate-on-scroll fade-up ease-elastic">
            Unsere Location
          </h2>
          <div class="flex items-center justify-center gap-4 animate-on-scroll zoom-in">
            <div class="h-[1px] w-16 bg-wave-ocean"></div>
            <svg class="w-8 h-8 text-wave-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div class="h-[1px] w-16 bg-wave-ocean"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Left content -->
          <div class="space-y-12">
            <!-- Welcome Section -->
            <div class="space-y-4 animate-on-scroll fade-left">
              <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold">Willkommen in der WaveCity</h3>
              <p class="text-wave-dark/80 text-lg leading-relaxed">
                Willkommen in der WaveCity – Ihrem Urlaubsparadies direkt an der Hongkongstraße. Genießen Sie bei uns nicht nur außergewöhnliche Burger und erfrischende Drinks, sondern auch einen atemberaubenden Blick auf das Wasser.
              </p>
            </div>

            <!-- Events Section -->
            <div class="space-y-4 animate-on-scroll fade-left delay-200">
              <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold font-retro">Events & Feiern</h3>
              <p class="text-wave-dark/80 text-lg leading-relaxed">
                Ob Geburtstage, Hochzeiten oder Firmenevents – unsere Location bietet den perfekten Rahmen für Ihre besonderen Momente. Mit unserer großzügigen Terrasse und dem einzigartigen Ambiente schaffen wir unvergessliche Erinnerungen.
              </p>
            </div>

            <!-- Event Button -->
            <div class="mt-12 animate-on-scroll fade-up ease-bounce">
              <a href="mailto:event@wavecity-kitchenbar.de" class="group w-full sm:w-auto bg-wave-ocean hover:bg-wave-dark text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>event@wavecity-kitchenbar.de</span>
              </a>
            </div>
          </div>

          <!-- Right side - Image grid -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in">
                  <img 
                    src="~/assets/Wave-Gallery1.jpg"
                    alt="Beach wedding setup" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in delay-200">
                  <img 
                    src="~/assets/Wave-Gallery-2.jpg"
                    alt="Restaurant terrace" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div class="space-y-4 mt-8">
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in delay-100">
                  <img 
                    src="~/assets/Wave-Gallery-3.jpg"
                    alt="Karaoke bar" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group animate-on-scroll zoom-in delay-300">
                  <img 
                    src="~/assets/Wave-Gallery-4.jpg"
                    alt="Restaurant terrace" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            <!-- Decorative elements -->
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-wave-ocean opacity-20 rounded-full animate-pulse-slow"></div>
            <div class="absolute -left-4 -top-4 w-24 h-24 bg-wave-ocean opacity-20 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import UnsplashImage from '~/components/UnsplashImage.vue'
import WavePattern from '~/components/WavePattern.vue'

// Animation logic
const isClient = ref(false)
let observer = null

onMounted(() => {
  isClient.value = true
  
  // Use Intersection Observer to handle animations
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Add or remove active class based on visibility
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active')
      } else {
        // Remove the class when scrolling back up
        entry.target.classList.remove('animate-active')
      }
    })
  }, {
    threshold: 0.15, // When element is 15% visible
    rootMargin: '0px'
  })
  
  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach(el => {
    observer.observe(el)
  })
  
  // Initial check for elements already in viewport
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect()
    const isVisible = 
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    
    if (isVisible) {
      el.classList.add('animate-active')
    }
  })
})

// Clean up observer on component unmount
onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
@font-face {
  font-family: 'RetroBeach';
  src: url('~/assets/fonts/retro-beach.regular.otf') format('opentype');
  font-weight: thin;
  font-style: normal;
}

.font-retro {
  font-family: 'RetroBeach', sans-serif;
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
  animation: wave 5s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

.animate-surf {
  animation: surf 8s linear infinite;
}

.animate-splash {
  animation: splash 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% {
    d: path("M0,120 C480,40 960,120 1440,40 L1440,120 L0,120 Z");
  }
  50% {
    d: path("M0,120 C480,120 960,40 1440,120 L1440,120 L0,120 Z");
  }
}

@keyframes wave-alt {
  0%, 100% {
    d: path("M0,120 C480,90 960,110 1440,95 L1440,120 L0,120 Z");
  }
  50% {
    d: path("M0,120 C480,110 960,90 1440,105 L1440,120 L0,120 Z");
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
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
  animation: sway 6s ease-in-out infinite;
}

@keyframes sway {
  0%, 100% { transform: rotate(12deg); }
  50% { transform: rotate(8deg); }
}

.animate-sway-delay {
  animation: sway-delay 7s ease-in-out infinite;
}

@keyframes sway-delay {
  0%, 100% { transform: rotate(-12deg); }
  50% { transform: rotate(-8deg); }
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

/* Add these new styles */
@keyframes gradient-slow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-slow {
  animation: gradient-slow 15s ease infinite;
  background-size: 200% 200%;
}

/* Grid pattern for Speisen section */
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Bubbles animation for Drinks section */
.bubbles-pattern {
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%);
  background-size: 20px 20px;
  animation: bubble-float 8s linear infinite;
}

@keyframes bubble-float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

.waves-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 C 30 0, 70 0, 100 10 C 70 20, 30 20, 0 10' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E");
  background-size: 100px 20px;
  animation: wave-move 10s linear infinite;
}

@keyframes wave-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 0;
  }
}

/* Palm pattern for Location section */
.palm-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 C 30 30 40 40 50 45 C 40 40 30 30 30 10' fill='%232F7A4D'/%3E%3C/svg%3E");
  background-size: 60px 60px;
  animation: palm-sway 8s ease-in-out infinite;
}

@keyframes palm-sway {
  0%, 100% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(1deg);
  }
}

.dots-pattern {
  background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: dots-float 20s linear infinite;
}

@keyframes dots-float {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}

@keyframes wave-slow {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-2%) translateY(-15%);
  }
}

@keyframes wave-slower {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(2%) translateY(-10%);
  }
}

.animate-wave-slow {
  animation: wave-slow 8s ease-in-out infinite;
}

.animate-wave-slower {
  animation: wave-slower 10s ease-in-out infinite;
}

.wave-container {
  animation: float 8s ease-in-out infinite;
}

.font-display {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em;
}

h2 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Add these new animations if not already present */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) rotate(12deg); }
  50% { transform: translate(0, -10px) rotate(15deg); }
}

@keyframes float-delay {
  0%, 100% { transform: translate(0, 0) rotate(-12deg); }
  50% { transform: translate(0, -15px) rotate(-15deg); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 10s ease-in-out infinite;
}

/* Scroll Animations - Base */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  will-change: opacity, transform;
}

.animate-active {
  opacity: 1;
  transform: translateY(0);
}

/* Add fade variants */
.fade-up.animate-on-scroll {
  transform: translateY(40px);
}

.fade-down.animate-on-scroll {
  transform: translateY(-40px);
}

.fade-left.animate-on-scroll {
  transform: translateX(-40px);
}

.fade-right.animate-on-scroll {
  transform: translateX(40px);
}

.fade-up.animate-active,
.fade-down.animate-active,
.fade-left.animate-active,
.fade-right.animate-active {
  transform: translate(0);
}

/* Zoom variants */
.zoom-in.animate-on-scroll {
  transform: scale(0.8);
}

.zoom-out.animate-on-scroll {
  transform: scale(1.2);
}

.zoom-in.animate-active,
.zoom-out.animate-active {
  transform: scale(1);
}

/* Flip animations */
.flip-x.animate-on-scroll {
  transform: rotateX(90deg);
}

.flip-y.animate-on-scroll {
  transform: rotateY(90deg);
}

.flip-x.animate-active,
.flip-y.animate-active {
  transform: rotate(0);
}

/* Rotation */
.rotate-cw.animate-on-scroll {
  transform: rotate(-15deg);
}

.rotate-ccw.animate-on-scroll {
  transform: rotate(15deg);
}

.rotate-cw.animate-active,
.rotate-ccw.animate-active {
  transform: rotate(0);
}

/* Apply specific animation types to different elements */
h1.animate-on-scroll, 
h2.animate-on-scroll { 
  transform: translateY(-30px);
  transition-delay: 0.2s; 
}

p.animate-on-scroll { 
  transform: translateY(30px);
  transition-delay: 0.3s; 
}

button.animate-on-scroll { 
  transform: translateY(20px) scale(0.95);
  transition-delay: 0.4s; 
}

img.animate-on-scroll {
  transform: scale(0.9);
  transition-delay: 0.1s;
}

/* Staggered delays for grid children */
.grid > div:nth-child(1) .animate-on-scroll { transition-delay: 0.1s; }
.grid > div:nth-child(2) .animate-on-scroll { transition-delay: 0.2s; }
.grid > div:nth-child(3) .animate-on-scroll { transition-delay: 0.3s; }
.grid > div:nth-child(4) .animate-on-scroll { transition-delay: 0.4s; }

/* Menu item animations */
.rounded-xl.animate-on-scroll:nth-child(odd) {
  transform: translateX(-30px) translateY(10px);
}

.rounded-xl.animate-on-scroll:nth-child(even) {
  transform: translateX(30px) translateY(10px);
}

/* Different durations */
.duration-fast.animate-on-scroll {
  transition-duration: 0.5s;
}

.duration-slow.animate-on-scroll {
  transition-duration: 1.2s;
}

/* Different timing functions */
.ease-bounce.animate-on-scroll {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.ease-elastic.animate-on-scroll {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Add hardware acceleration to improve animation performance */
.animate-on-scroll,
.animate-active {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* Ensure animations don't interfere with other transitions */
.animate-on-scroll {
  isolation: isolate;
}

/* Prevent flickering on some browsers */
.animate-on-scroll * {
  backface-visibility: hidden;
}

/* Ensure stacking context is preserved */
.animate-on-scroll.animate-active {
  z-index: 1;
}

/* Add some perspective for 3D animations */
.flip-x.animate-on-scroll,
.flip-y.animate-on-scroll {
  perspective: 1000px;
}

/* Add some animation delay variations for a more natural feel */
.delay-100 { transition-delay: 0.1s !important; }
.delay-200 { transition-delay: 0.2s !important; }
.delay-300 { transition-delay: 0.3s !important; }
.delay-400 { transition-delay: 0.4s !important; }
.delay-500 { transition-delay: 0.5s !important; }

/* Additional fixes for centering and layouts */
.grid {
  display: grid;
  justify-items: center;
}

@media (min-width: 1024px) {
  .grid {
    justify-items: start;
  }
}

.rounded-xl {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.animate-on-scroll.animate-active {
  transform: none !important;
}

.fade-left.animate-active {
  transform: translateX(0) !important;
}

.fade-right.animate-active {
  transform: translateX(0) !important;
}

.zoom-in.animate-active {
  transform: scale(1) !important;
}

.fade-up.animate-active {
  transform: translateY(0) !important;
}

.fade-down.animate-active {
  transform: translateY(0) !important;
}

/* More specific fix for cards */
.space-y-8 > .rounded-xl {
  margin-left: auto !important;
  margin-right: auto !important;
  display: block;
  width: 100%;
  max-width: 100%;
}

/* Fix for buttons */
.mt-12 button {
  margin-left: auto;
  margin-right: auto;
}

/* For mobile centering */
@media (max-width: 640px) {
  .mt-12 {
    display: flex;
    justify-content: center;
  }
}

/* Add this to your existing styles */
.image-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.3));
  z-index: 1;
}

.image-gradient img {
  position: relative;
  z-index: 0;
}
</style> 