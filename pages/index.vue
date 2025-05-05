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
        </svg>
      </div>
    </div>

    <!-- Remove entire Specials Section and go straight to Lieblingsspeisen -->
    <section class="relative bg-gradient-to-b from-wave-sand to-wave-ocean/10 py-32 overflow-hidden">
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

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="block text-wave-ocean text-lg font-semibold tracking-wider uppercase mb-3">Unsere Spezialitäten</span>
          <h2 class="text-wave-dark text-4xl sm:text-5xl lg:text-6xl font-retro mb-4">
            Lieblingsspeisen
          </h2>
          <div class="flex items-center justify-center gap-4">
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
            <div class="bg-white rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-wave-ocean">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>Crunchy Chicken Burger</span>
                  <span class="ml-2">🌊</span>
                </h3>
                <span class="text-wave-ocean text-2xl font-bold">€12.90</span>
              </div>
              <p class="text-wave-dark/80 text-lg">Herzhafter Burger mit knupsrig paniertem Chicken Filet,</p>
            </div>

            <!-- Menu Item 2 -->
            <div class="bg-white rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-wave-ocean">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>Beyond Meat Burger</span>
                  <span class="ml-2">🦐</span>
                </h3>
                <span class="text-wave-ocean text-2xl font-bold">€12.90</span>
              </div>
              <p class="text-wave-dark/80 text-lg">Veganes Burger Patty im Brioche Brötchen</p>
            </div>


            <!-- Speisekarte Button -->
            <div class="mt-12">
              <button class="group w-full sm:w-auto bg-wave-ocean hover:bg-wave-dark text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <span class="text-xl">🏄‍♂️</span>
                <span>Zur Speisekarte</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Right side image -->
          <div class="relative">
            <img 
              src="~/assets/Wave_Burger3.jpg"
              alt="Delicious burger" 
              class="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
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
        <!-- Animated cocktail glasses -->
        <div class="absolute -right-16 top-20 w-48 h-48 text-white opacity-30 transform rotate-12 animate-float-slow">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7,3V11H17V3H7M11,13V21H13V13H11Z" />
          </svg>
        </div>
        <div class="absolute left-10 top-40 w-32 h-32 text-white opacity-30 transform -rotate-12 animate-float-delay">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7,3V11H17V3H7M11,13V21H13V13H11Z" />
          </svg>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16">
          <span class="block text-[rgb(79,166,179)] text-lg font-semibold tracking-wider uppercase mb-3">Erfrischend & Lecker</span>
          <h2 class="text-white text-4xl sm:text-5xl lg:text-6xl font-retro mb-4 drop-shadow-lg">
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
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-[rgb(79,166,179)]">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>TJT - Wildberry</span>
                  <span class="ml-2">🌅</span>
                </h3>
                <span class="text-[rgb(79,166,179)] text-2xl font-bold">€11</span>
              </div>
              <p class="text-[#1A237E]/80 text-lg">TJT Liquor (22% Vol), Wildberry, rote Früchte</p>
              <div class="flex items-center mt-3 text-[rgb(79,166,179)]">
                <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                </svg>
                <span class="ml-2 text-sm font-semibold">Summer Special</span>
              </div>
            </div>

            <!-- Drink Item 2 -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl border-b-4 border-[rgb(79,166,179)]">
              <div class="flex items-baseline justify-between mb-4">
                <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold flex items-center">
                  <span>Homemade Limonade</span>
                  <span class="ml-2">🌊</span>
                </h3>
                <span class="text-[rgb(79,166,179)] text-2xl font-bold">€6.90</span>
              </div>
              <p class="text-[#1A237E]/80 text-lg">Erfrischende hausgemachte Limonade aus Orangen, Zitronen
                und Limetten</p>
            </div>


            <!-- Getränkekarte Button -->
            <div class="mt-12">
              <button class="group w-full sm:w-auto bg-[rgb(79,166,179)] hover:bg-[#1A237E] text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg">
                <span class="text-xl">🍹</span>
                <span>Zur Getränkekarte</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Right side image grid -->
          <div class="relative grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                <img 
                  src="~/assets/Wave_Cocktails3.jpg"
                  alt="Tropical cocktail" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                <img 
                 src="~/assets/Wave_Cocktails3.jpg"
                  alt="Refreshing drink" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                <img 
                  src="~/assets/Wave_Cocktails3.jpg"
                  alt="Signature cocktail" 
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1A237E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                <img 
                 src="~/assets/Wave_Cocktails3.jpg"
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
    <section class="relative bg-gradient-to-b from-wave-sand to-wave-ocean/10 py-32 overflow-hidden">
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
          <span class="block text-wave-ocean text-lg font-semibold tracking-wider uppercase mb-3">Dein Zuhause am Meer</span>
          <h2 class="text-wave-dark text-4xl sm:text-5xl lg:text-6xl font-retro mb-4">
            Unsere Location
          </h2>
          <div class="flex items-center justify-center gap-4">
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
            <div class="space-y-4">
              <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold">Willkommen in der WaveCity</h3>
              <p class="text-wave-dark/80 text-lg leading-relaxed">
                Willkommen in der WaveCity – Ihrem Urlaubsparadies direkt an der Hongkongstraße. Genießen Sie bei uns nicht nur außergewöhnliche Burger und erfrischende Drinks, sondern auch einen atemberaubenden Blick auf das Wasser.
              </p>
            </div>

            <!-- Events Section -->
            <div class="space-y-4">
              <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold">Events & Feiern</h3>
              <p class="text-wave-dark/80 text-lg leading-relaxed">
                Ob Geburtstage, Hochzeiten oder Firmenevents – unsere Location bietet den perfekten Rahmen für Ihre besonderen Momente. Mit unserer großzügigen Terrasse und dem einzigartigen Ambiente schaffen wir unvergessliche Erinnerungen.
              </p>
            </div>

            <!-- Minibar Section -->
            <div class="space-y-4">
              <h3 class="text-[rgb(79,166,179)] text-2xl font-semibold">Minibar & Karaoke</h3>
              <p class="text-wave-dark/80 text-lg leading-relaxed">
                Entdecken Sie unsere "Minibar" – die Karaoke-Bar direkt neben der WaveCity Kitchenbar. Der perfekte Ort für kleinere Gruppen und besondere Anlässe mit Entertainment-Faktor.
              </p>
            </div>

            <!-- Event Button -->
            <div class="mt-12">
              <button class="group w-full sm:w-auto bg-wave-ocean hover:bg-wave-dark text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Event Anfragen</span>
              </button>
            </div>
          </div>

          <!-- Right side - Image grid -->
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                  <img 
                    src="~/assets/Wave-Gallery1.jpg"
                    alt="Beach wedding setup" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                  <img 
                    src="~/assets/Wave-Gallery-2.jpg"
                    alt="Restaurant terrace" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div class="space-y-4 mt-8">
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
                  <img 
                    src="~/assets/Wave-Gallery-3.jpg"
                    alt="Karaoke bar" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-wave-ocean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="relative rounded-2xl overflow-hidden aspect-square shadow-xl group">
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
</style> 