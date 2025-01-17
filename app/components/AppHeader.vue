<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

const links = computed(() => [
  {
    label: "About",
    to: "#about",
    icon: "i-heroicons-user",
    active:
      activeHeadings.value.includes("about") &&
      !activeHeadings.value.includes("pricing"),
  },
  {
    label: "Projects",
    to: "#projects",
    icon: "i-heroicons-cube-transparent",
    active:
      activeHeadings.value.includes("features") &&
      !activeHeadings.value.includes("pricing"),
  },
  {
    label: "Testimonials",
    to: "#testimonials",
    icon: "i-heroicons-academic-cap",
    active: activeHeadings.value.includes("testimonials"),
  },
  {
    label: "FAQ",
    to: "#faq",
    icon: "i-heroicons-question-mark-circle",
    active: activeHeadings.value.includes("faq"),
  },
]);

nuxtApp.hooks.hookOnce("page:finish", () => {
  updateHeadings([
    document.querySelector("#about"),
    document.querySelector("#projects"),
    document.querySelector("#features"),
    document.querySelector("#testimonials"),
    document.querySelector("#faq"),
  ]);
});
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <h1 class="text-xl font-bold">{{ page.hero.name }}</h1>
      <UBadge label="Portfolio" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UColorModeButton />

      <!-- <UAvatar src="/avatar.jpg" alt="Profile picture" class="w-8 h-8" /> -->

      <UButton
        to="https://github.com/zeyadsharo"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        aria-label="GitHub Profile"
      />
      <UButton
        to="https://linkedin.com/in/yourusername"
        target="_blank"
        icon="i-simple-icons-linkedin"
        color="gray"
        variant="ghost"
        aria-label="LinkedIn Profile"
      />
      <UButton
        to="https://instagram.com/yourusername"
        target="_blank"
        icon="i-simple-icons-instagram"
        color="gray"
        variant="ghost"
        aria-label="Instagram Profile"
      />
      <UButton
        to="https://x.com/yourusername"
        target="_blank"
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
        aria-label="X Profile"
      />
      <UButton
        to="https://facebook.com/yourusername"
        target="_blank"
        icon="i-simple-icons-facebook"
        color="gray"
        variant="ghost"
        aria-label="Facebook Profile"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>
