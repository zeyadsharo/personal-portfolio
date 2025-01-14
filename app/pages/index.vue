<script setup lang="ts">
import type { HeroContent } from '~/types/content'

const heroContent: HeroContent = {
  headline: "Full Stack Developer",
  name: "Zeyad Khadeeda",
  title: "Crafting Digital Experiences with Code",
  description: "Senior Software Engineer specializing in Generative AI, full-stack development, and project management. Turning complex problems into elegant solutions.",
  links: [{
    label: 'View Projects',
    to: '/work/projects',
    icon: 'i-heroicons-rocket-launch',
    size: 'lg',
    color: 'primary'
  }, {
    label: 'Download Resume',
    to: '/resume.pdf',
    icon: 'i-heroicons-arrow-down-tray',
    size: 'lg',
    color: 'gray',
    target: '_blank'
  }]
}

// ...existing projects and testimonials code...
</script>

<template>
  <div class="space-y-24 py-8">
    <ULandingHero
      :links="heroContent.links"
      orientation="horizontal"
      class="min-h-[80vh] flex items-center"
    >
      <template #headline>
        <UBadge
          :label="heroContent.headline"
          size="lg"
          class="mb-8"
          variant="subtle"
        />
      </template>

      <template #title>
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold">
          {{ heroContent.name }}
          <br>
          <span class="text-primary">{{ heroContent.title }}</span>
        </h1>
      </template>

      <template #description>
        <p class="text-xl sm:text-2xl max-w-2xl mx-auto">
          {{ heroContent.description }}
        </p>
      </template>

      <template #default>
        <UColorModeImage
          light="/profile-light.jpg"
          dark="/profile-dark.jpg"
          alt="Zeyad Khadeeda"
          class="w-full max-w-lg rounded-2xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          loading="eager"
        />
      </template>
    </ULandingHero>

    <!-- ...existing sections code... -->
  </div>
</template>
