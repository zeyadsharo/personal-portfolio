<script setup lang="ts">
import type {
  ProjectsSection
} from "~/types/content";

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());

const projectsContent = computed<ProjectsSection>(() => page.value.projects);

</script>
<template>
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
     
</template>