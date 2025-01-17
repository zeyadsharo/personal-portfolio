<script setup lang="ts">
import type {
  AboutSection,
  HeroContent,
  ProjectsSection,
  TestimonialsSection,
} from "~/types/content";

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());


const heroContent = computed<HeroContent>(() => page.value.hero);
const aboutContent = computed<AboutSection>(() => page.value.about);
const projectsContent = computed<ProjectsSection>(() => page.value.projects);
const testimonialsContent = computed<TestimonialsSection>(() => page.value.testimonials);
</script>

<template>
  <div class="">
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
          <br />
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
          light="/profile.jpeg"
          dark="/profile.jpeg"
          alt="Zeyad Khadeeda"
          class="w-full max-w-lg rounded-2xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          loading="eager"
        />
      </template>
    </ULandingHero>
    <ULandingSection
    id="about"
      :headline="aboutContent.headline"
      :title="aboutContent.title"
      :description="aboutContent.description"
      :features="aboutContent.skills"
      align="left"
      class="bg-gray-50 dark:bg-gray-900"
    >
      <template #top>
        <div
          class="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900 h-32"
        />
      </template>

      <div class="relative">
        <UColorModeImage
          light="/about-light.jpg"
          dark="/about-dark.jpg"
          alt="About section image"
          class="w-full max-w-xl rounded-xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-800"
          loading="lazy"
        />
      </div>

      <template #links>
        <UButton
          to="/about"
          color="gray"
          variant="ghost"
          trailing-icon="i-heroicons-arrow-right"
          size="lg"
        >
          Learn More About Me
        </UButton>
      </template>

      <template #bottom>
        <div
          class="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-gray-950 h-32 -bottom-32"
        />
      </template>
    </ULandingSection> 

    <ULandingSection
        id='projects'
      :headline="projectsContent.headline"
      :title="projectsContent.title"
      :description="projectsContent.description"
      class="bg-gray-50 dark:bg-gray-900"
    >
      <ULandingGrid>
        <ULandingCard
          v-for="project in projectsContent.projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :to="project.link"
          :color="project.color"
          :class="project.class"
          orientation="horizontal"
        >
          <template #default>
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </template>

          <template #description>
            <div class="space-y-4">
              <p>{{ project.description }}</p>
              <div class="flex gap-2 flex-wrap">
                <UBadge
                  v-for="tech in project.tech"
                  :key="tech"
                  :label="tech"
                  size="sm"
                  color="gray"
                />
              </div>
            </div>
          </template>
        </ULandingCard>
      </ULandingGrid>
    </ULandingSection>
    <ULandingSection
      id="testimonials"
      :headline="testimonialsContent.headline"
      :title="testimonialsContent.title"
      :description="testimonialsContent.description"
    >
      <UPageColumns>
        <div
          v-for="(testimonial, index) in testimonialsContent.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial
            :quote="testimonial.quote"
            :author="testimonial.author"
            :icon="testimonial.icon"
            card
          />
        </div>
      </UPageColumns>
    </ULandingSection>
  </div>
</template>
