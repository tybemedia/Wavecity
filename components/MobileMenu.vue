<template>
  <div>
    <button
      @click="isOpen = !isOpen"
      class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-wave-gold hover:bg-wave-dark focus:outline-none"
    >
      <span class="sr-only">Open main menu</span>
      <div class="relative w-6 h-6">
        <div
          :class="[
            'absolute w-6 h-0.5 bg-current transform transition-all duration-300',
            isOpen ? 'rotate-45 translate-y-0 top-3' : 'top-2'
          ]"
        ></div>
        <div
          :class="[
            'absolute w-6 h-0.5 bg-current top-3 transition-opacity duration-300',
            isOpen ? 'opacity-0' : 'opacity-100'
          ]"
        ></div>
        <div
          :class="[
            'absolute w-6 h-0.5 bg-current transform transition-all duration-300',
            isOpen ? '-rotate-45 translate-y-0 top-3' : 'top-4'
          ]"
        ></div>
      </div>
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-lg bg-wave-dark divide-y divide-wave-teal">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <NuxtLink to="/" class="text-2xl font-bold text-white flex items-center" @click="isOpen = false">
                  <img src="/images/wave-icon.svg" alt="Wave icon" class="h-8 w-8 mr-2" />
                  Wavecity
                </NuxtLink>
              </div>
              <div class="-mr-2">
                <button
                  @click="isOpen = false"
                  class="rounded-md p-2 inline-flex items-center justify-center text-wave-teal hover:text-white hover:bg-wave-teal focus:outline-none"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-4">
                <NuxtLink
                  v-for="item in menuItems"
                  :key="item.name"
                  :to="item.href"
                  class="text-base font-bold text-wave-teal hover:text-white uppercase tracking-wider"
                  @click="isOpen = false"
                >
                  {{ item.name }}
                </NuxtLink>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <button
              class="relative group w-full"
              @click="isOpen = false"
            >
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Order Online</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { name: 'Speisekarte', href: '/speisekarte' },
  { name: 'Online Bestellen', href: '/online-bestellen' },
  { name: 'Tisch reservieren', href: '/reservieren' },
  { name: 'Events', href: '/events' },
]
</script> 