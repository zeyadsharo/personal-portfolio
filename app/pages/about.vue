<script setup lang="ts">
// ...existing code...
</script>

<template>
  <UPage>
    <UPageHeader
      title="About Me"
      subtitle="My Professional Journey"
    >
      <template #default>
        <p>
          Here is an expanded biography with a focus on personal journey,
          professional background, and any relevant photos or media.
        </p>
      </template>
    </UPageHeader>

    <UPageBody>
      <section class="my-8">
        <UProse>
          <h2 class="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <!-- Alternatively, use <UCardGroup> if you prefer a card layout -->
          <ul class="list-disc ml-6 space-y-2">
            <li>Frontend Development (Nuxt 3, Vue 3)</li>
            <li>Backend Services (Node.js, Databases)</li>
            <li>Generative AI Integrations</li>
            <li>Project Management & Collaboration</li>
          </ul>
        </UProse>
      </section>
      <UCallout
        title="Stay Curious, Keep Building"
        variant="info"
        class="mt-8"
      >
        <p>
          This is my professional motto to inspire continuous innovation,
          growth, and pursuit of new solutions.
        </p>
      </UCallout>
    </UPageBody>
  </UPage>
</template>
