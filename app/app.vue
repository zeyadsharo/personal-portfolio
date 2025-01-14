<script setup lang="ts">
const navigationLinks = [{
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-home'
}, {
  label: 'About',
  to: '/about',
  icon: 'i-heroicons-user'
}, {
  label: 'Work',
  to: '/work',
  icon: 'i-heroicons-briefcase',
  children: [{
    label: 'Projects',
    to: '/work/projects',
    description: 'View my featured projects and case studies'
  }, {
    label: 'Experience',
    to: '/work/experience',
    description: 'My professional experience and skills'
  }]
}, {
  label: 'Blog',
  to: '/blog',
  icon: 'i-heroicons-document-text'
}, {
  label: 'Contact',
  to: '/contact',
  icon: 'i-heroicons-envelope'
}]

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt UI Pro - Starter'
const description = 'Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UHeader :links="navigationLinks">
    <template #logo>
      <h1 class="text-xl font-bold">Portfolio</h1>
    </template>

    <template #right>
      <UColorModeButton />
      
      <UAvatar
        src="/avatar.jpg"
        alt="Profile picture"
        class="w-8 h-8"
      />

      <UButton
        to="https://github.com/yourusername"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        aria-label="GitHub Profile"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="navigationLinks" />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>
