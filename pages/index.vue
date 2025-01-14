<script setup lang="ts">
// ...existing code...

const aboutContent: AboutSection = {
  headline: "About Me",
  title: "Senior Software Engineer & Project Manager",
  description: "I'm Zeyad Khadeeda, specializing in Generative AI, full-stack development, and cutting-edge system integrations. My academic foundation in Computer Science combined with real-world experience enables me to solve complex problems and drive impactful results.",
  skills: [{
    name: "Generative AI Integration",
    description: "Delivering AI-powered features that redefine user experiences",
    icon: "i-heroicons-cpu-chip"
  }, {
    name: "Full-Stack Development",
    description: "Crafting robust web and mobile solutions using modern technologies",
    icon: "i-heroicons-code-bracket"
  }, {
    name: "Project Management",
    description: "Leading cross-functional teams to achieve project goals",
    icon: "i-heroicons-presentation-chart-bar"
  }, {
    name: "Database Development",
    description: "Designing scalable database systems for business needs",
    icon: "i-heroicons-circle-stack"
  }]
}
</script>

<template>
  <div class="space-y-24 py-8">
    <!-- ...existing hero section... -->

    <ULandingSection
      :headline="aboutContent.headline"
      :title="aboutContent.title"
      :description="aboutContent.description"
      :features="aboutContent.skills"
      align="left"
      class="bg-gray-50 dark:bg-gray-900"
    >
      <template #top>
        <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900 h-32" />
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
        <div class="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-gray-950 h-32 -bottom-32" />
      </template>
    </ULandingSection>

    <!-- ...existing sections code... -->
  </div>
</template>
