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
              :target="item.href.startsWith('http') ? '_blank' : undefined"
              :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="text-[rgb(79,166,179)] hover:text-wave-dark font-semibold transition-colors duration-300"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex items-center space-x-4">
            <button 
              @click="isMenuOpen = true" 
              class="md:hidden text-[rgb(79,166,179)] hover:text-wave-dark p-2 rounded-lg border border-gray-200 hover:border-[rgb(79,166,179)] transition-all duration-300"
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
                :target="item.href.startsWith('http') ? '_blank' : undefined"
                :rel="item.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                :style="{ transitionDelay: `${index * 100}ms` }"
                class="text-3xl font-retro text-[rgb(79,166,179)] hover:text-wave-dark transition-colors duration-300"
                @click="isMenuOpen = false"
              >
                {{ item.name }}
              </NuxtLink>
            </transition-group>
          </div>
        </div>
      </div>
    </transition>

    <main class="pt-20">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
import Footer from '~/components/Footer.vue'

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Speisekarte', href: 'https://igetnow.com/79JM1' },
  { name: 'Tisch reservieren', href: 'https://www.opentable.de/r/wavecity-kitchen-and-bar-hamburg' },
  { name: 'Online bestellen', href: 'https://igetnow.com/79JM1' },
  { name: 'Events', href: '/#events' },
  { name: 'Kontakt', href: '/#kontakt' },
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
