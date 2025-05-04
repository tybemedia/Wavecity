<template>
  <div class="min-h-screen bg-white">
    <header class="fixed w-full z-50 backdrop-blur-sm bg-white bg-opacity-95 shadow-lg transition-all duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-3xl font-bold text-wave-dark flex items-center">
                <img src="/images/Wave-Logo.svg" alt="Wavecity" class="h-16 w-auto" />
              </NuxtLink>
            </div>
            <div class="hidden sm:ml-10 sm:flex sm:space-x-12">

            </div>
          </div>
          <div class="flex items-center">
            <button class="hidden sm:block bg-wave-gold text-wave-dark px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors">
              ORDER ONLINE
            </button>
            <MobileMenu class="sm:hidden" />
          </div>
        </div>
      </nav>
    </header>

    <main class="pt-20">
      <NuxtPage />
    </main>

    <footer class="bg-wave-dark text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-wave-teal hover:text-white transition-colors">Facebook</a>
              <a href="#" class="text-wave-teal hover:text-white transition-colors">Twitter</a>
              <a href="#" class="text-wave-teal hover:text-white transition-colors">Instagram</a>
              <a href="#" class="text-wave-teal hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">About</h3>
            <ul class="space-y-2">
            
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
            <form class="mt-4">
              <input type="email" placeholder="Enter your email" class="w-full px-3 py-2 bg-wave-dark border border-wave-teal text-white rounded-md focus:outline-none focus:ring-2 focus:ring-wave-teal">
              <button type="submit" class="mt-2 w-full bg-wave-teal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-wave-teal text-center">
          <p class="text-wave-teal">&copy; {{ new Date().getFullYear() }} Wavecity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import MobileMenu from '~/components/MobileMenu.vue'
import { onMounted, onUnmounted } from 'vue'

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
.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-lg font-bold text-white hover:text-wave-gold transition-colors uppercase tracking-wider;
}

/* Add these styles to handle scroll behavior */
.header-scroll {
  @apply shadow-lg bg-white bg-opacity-95;
}

/* Optional: Add smooth transition for background color change on scroll */
header {
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
</style>
