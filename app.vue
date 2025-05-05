<template>
  <div class="min-h-screen bg-white">
    <header class="fixed w-full z-50 transition-all duration-300">
      <nav class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div class="flex justify-between h-20 items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-3xl font-bold text-wave-dark flex items-center">
              <img src="/images/Wave-Logo.svg" alt="Wavecity" class="h-16 w-auto" />
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.name"
              :to="item.href"
              class="text-[rgb(79,166,179)] hover:text-wave-dark font-semibold transition-colors duration-300"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Order Button & Mobile Menu -->
          <div class="flex items-center space-x-4">
            <button class="hidden md:flex items-center px-6 py-2 bg-[rgb(79,166,179)] text-white font-bold rounded-full hover:bg-wave-dark transition-all duration-300 transform hover:scale-105">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              ORDER ONLINE
            </button>
            <!-- Mobile menu button -->
            <button 
              @click="isMenuOpen = true" 
              class="md:hidden text-[rgb(79,166,179)] hover:text-wave-dark"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Full-screen menu overlay -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-white">
        <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <!-- Menu header -->
          <div class="flex justify-between items-center h-20">
            <NuxtLink 
              to="/" 
              class="text-3xl font-bold text-wave-dark flex items-center"
              @click="isMenuOpen = false"
            >
              <img src="/images/Wave-Logo.svg" alt="Wavecity" class="h-16 w-auto" />
            </NuxtLink>
            <button 
              @click="isMenuOpen = false"
              class="text-[rgb(79,166,179)] hover:text-wave-dark transition-colors duration-300"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Menu items -->
          <div class="flex-grow flex flex-col justify-center items-center space-y-8">
            <transition-group
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-4"
            >
              <NuxtLink
                v-for="(item, index) in menuItems"
                :key="item.name"
                :to="item.href"
                :style="{ transitionDelay: `${index * 100}ms` }"
                class="text-3xl font-retro text-[rgb(79,166,179)] hover:text-wave-dark transition-colors duration-300"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </transition-group>
          </div>

          <!-- Menu footer -->
          <div class="py-8 flex justify-center">
            <button 
              class="bg-[rgb(79,166,179)] text-white font-bold rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 hover:bg-wave-dark"
              @click="isMenuOpen = false"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>ORDER ONLINE</span>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <main class="pt-20">
      <NuxtPage />
    </main>

    <footer class="bg-wave-dark text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <!-- Logo and Address -->
          <div class="flex flex-col items-center md:items-start">
            <img src="/images/Wave-Logo.svg" alt="Wavecity" class="h-12 w-auto mb-4" />
            <address class="text-sm not-italic text-gray-300 text-center md:text-left">
              WaveCity Kitchen & Bar<br />
              Hongkongstraße 4<br />
              20457 Hamburg
            </address>
          </div>

          <!-- Legal Links -->
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <NuxtLink 
              to="/impressum" 
              class="text-sm text-gray-300 hover:text-wave-gold transition-colors"
            >
              Impressum
            </NuxtLink>
            <NuxtLink 
              to="/datenschutz" 
              class="text-sm text-gray-300 hover:text-wave-gold transition-colors"
            >
              Datenschutz
            </NuxtLink>
            <NuxtLink 
              to="/agb" 
              class="text-sm text-gray-300 hover:text-wave-gold transition-colors"
            >
              AGB
            </NuxtLink>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-wave-gold transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-wave-gold transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} WaveCity. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Speisekarte', href: '/speisekarte' },
  { name: 'Online Bestellen', href: '/online-bestellen' },
  { name: 'Tisch reservieren', href: '/reservieren' },
  { name: 'Events', href: '/events' }
]

// Add scroll behavior
const handleScroll = () => {
  const header = document.querySelector('header')
  if (window.scrollY > 0) {
    header.classList.add('header-scroll')
  } else {
    header.classList.remove('header-scroll')
  }
}

// Add scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Gradient animation */
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
  background-size: 200% 100%;
}

/* Wave pattern animation */
.wave-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 C 30 0, 70 0, 100 10 C 70 20, 30 20, 0 10' fill='none' stroke='%234FA6B3' stroke-width='0.5'/%3E%3C/svg%3E");
  background-size: 100px 20px;
  animation: wave 10s linear infinite;
}

@keyframes wave {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 0;
  }
}

/* Header scroll state */
.header-scroll {
  @apply shadow-lg;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}

header {
  transition: all 0.3s ease-in-out;
}

/* Gradient overlay */
.bg-gradient-overlay {
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.9),
    rgba(245, 230, 218, 0.8),
    rgba(79, 166, 179, 0.1)
  );
}

.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-lg font-bold text-white hover:text-wave-gold transition-colors uppercase tracking-wider;
}

/* Prevent body scroll when menu is open */
body.menu-open {
  overflow: hidden;
}

/* Add subtle texture to the header and menu */
.bg-texture {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627,0.632 C50.131,0.632 46.474,4.289 46.474,8.785 C46.474,13.281 50.131,16.938 54.627,16.938 C59.123,16.938 62.78,13.281 62.78,8.785 C62.78,4.289 59.123,0.632 54.627,0.632 Z' fill='rgba(79, 166, 179, 0.05)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
</style>
