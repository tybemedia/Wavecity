<template>
  <div class="min-h-screen bg-white">
    <header class="fixed w-full bg-wave-teal z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="text-3xl font-bold text-white flex items-center">
                <img src="/images/Wave-Logo.svg" alt="Wavecity" class="h-16 w-auto" />
              </NuxtLink>
            </div>
            <div class="hidden sm:ml-10 sm:flex sm:space-x-12">
              <NuxtLink to="/locations" class="nav-link">LOCATIONS</NuxtLink>
              <NuxtLink to="/menus" class="nav-link">MENUS</NuxtLink>
              <NuxtLink to="/rewards" class="nav-link">REWARDS</NuxtLink>
              <NuxtLink to="/careers" class="nav-link">CAREERS</NuxtLink>
              <NuxtLink to="/gift-cards" class="nav-link">GIFT CARDS</NuxtLink>
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
              <li><NuxtLink to="/about" class="text-wave-teal hover:text-white transition-colors">About Wavecity</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-wave-teal hover:text-white transition-colors">Talk to Us</NuxtLink></li>
              <li><NuxtLink to="/careers" class="text-wave-teal hover:text-white transition-colors">Join the Team</NuxtLink></li>
              <li><NuxtLink to="/community" class="text-wave-teal hover:text-white transition-colors">In The Community</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/terms" class="text-wave-teal hover:text-white transition-colors">Terms & Conditions</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="text-wave-teal hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/accessibility" class="text-wave-teal hover:text-white transition-colors">Accessibility</NuxtLink></li>
              <li><NuxtLink to="/sitemap" class="text-wave-teal hover:text-white transition-colors">Sitemap</NuxtLink></li>
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
</script>

<style>
.nav-link {
  @apply inline-flex items-center px-1 pt-1 text-lg font-bold text-white hover:text-wave-gold transition-colors uppercase tracking-wider;
}
</style>
