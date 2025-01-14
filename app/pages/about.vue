<script setup lang="ts">
interface Skill {
  name: string;
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'Generative AI Integration',
    description: 'Delivering AI-powered features that redefine user experiences',
    icon: 'i-heroicons-cpu-chip'
  },
  {
    name: 'Full-Stack Development',
    description: 'Crafting robust web and mobile solutions using modern technologies',
    icon: 'i-heroicons-code-bracket'
  },
  {
    name: 'Project Management',
    description: 'Leading cross-functional teams to achieve project goals',
    icon: 'i-heroicons-presentation-chart-bar'
  },
  {
    name: 'Database Development',
    description: 'Designing scalable database systems for business needs',
    icon: 'i-heroicons-circle-stack'
  }
]

const contactLinks = [
  {
    label: 'Download Resume',
    icon: 'i-heroicons-document-arrow-down',
    to: '/resume.pdf',
    target: '_blank'
  },
  {
    label: 'Contact Me',
    icon: 'i-heroicons-envelope',
    to: '/contact',
    color: 'primary'
  }
]
</script>

<template>
  <UPage>
    <UPageHeader
      headline="About Me"
      title="Senior Software Engineer & Project Manager"
      description="Turning complex problems into elegant solutions through code and innovation."
      :links="contactLinks"
    />

    <UPageBody prose>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <p class="text-lg">
            I'm Zeyad Khadeeda, a Senior Software Engineer and Project Manager specializing in Generative AI, 
            full-stack development, and cutting-edge system integrations.
          </p>
          <p class="mt-4">
            My academic foundation in Computer Science combined with real-world experience enables me to solve 
            complex problems and drive impactful results across various industries.
          </p>
        </div>
        <!-- images/profile.jpg -->
        <img 
          src="/avatar.jpg" 
          alt="Zeyad Khadeeda" 
          class="rounded-lg shadow-lg w-full h-[300px] object-cover"
        />
      </div>

      <h2 class="text-2xl font-bold mb-6">Technical Expertise</h2>
      <UCardGroup class="mb-12">
        <UCard
          v-for="skill in skills"
          :key="skill.name"
          :title="skill.name"
          :icon="skill.icon"
        >
          {{ skill.description }}
        </UCard>
      </UCardGroup>

      <UCallout 
        icon="i-heroicons-light-bulb" 
        color="primary"
        class="mt-8"
      >
        "Innovation is not just about creating something new, it's about creating something meaningful 
        that solves real problems and improves lives."
      </UCallout>
    </UPageBody>
  </UPage>
</template>
