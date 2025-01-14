<script setup lang="ts">
import type {
  AboutSection,
  HeroContent,
  ProjectsSection,
  TestimonialsSection,
} from "~/types/content";

const projectsContent: ProjectsSection = {
  headline: "Featured Work",
  title: "Recent Projects",
  description:
    "Explore some of my latest projects showcasing expertise in full-stack development, AI integration, and innovative solutions.",
  projects: [
    {
      title: "AI-Powered Recruitment Platform",
      description:
        "A modern recruitment system with AI-driven candidate matching and automated screening processes.",
      image: "/projects/recruitment-app.jpg",
      tech: ["Vue.js", "Node.js", "OpenAI"],
      color: "primary",
      link: "/work/projects/recruitment",
      class: "col-span-6 lg:col-span-8 row-span-2",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Real-time analytics and inventory management system for online stores.",
      image: "/projects/dashboard.jpg",
      tech: ["Nuxt 3", "MongoDB", "TailwindCSS"],
      color: "gray",
      link: "/work/projects/dashboard",
      class: "col-span-6 lg:col-span-4 row-span-3",
    },
    {
      title: "Mobile Payment App",
      description:
        "Secure and user-friendly payment solution with blockchain integration.",
      image: "/projects/payment-app.jpg",
      tech: ["React Native", "Ethereum", "Node.js"],
      link: "/work/projects/payment",
      class: "col-span-6 row-span-2",
    },
  ],
};
const heroContent: HeroContent = {
  headline: "Full Stack Developer",
  name: "Zeyad Khadeeda",
  title: "Crafting Digital Experiences with Code",
  description:
    "Senior Software Engineer specializing in Generative AI, full-stack development, and project management. Turning complex problems into elegant solutions.",
  links: [
    {
      label: "View Projects",
      to: "/work/projects",
      icon: "i-heroicons-rocket-launch",
      size: "lg",
      color: "primary",
    },
    {
      label: "Download Resume",
      to: "/resume.pdf",
      icon: "i-heroicons-arrow-down-tray",
      size: "lg",
      color: "gray",
      target: "_blank",
    },
  ],
};
const aboutContent: AboutSection = {
  headline: "About Me",
  title: "Senior Software Engineer & Project Manager",
  description:
    "I'm Zeyad Khadeeda, specializing in Generative AI, full-stack development, and cutting-edge system integrations. My academic foundation in Computer Science combined with real-world experience enables me to solve complex problems and drive impactful results.",
  skills: [
    {
      name: "Generative AI Integration",
      description:
        "Delivering AI-powered features that redefine user experiences",
      icon: "i-heroicons-cpu-chip",
    },
    {
      name: "Full-Stack Development",
      description:
        "Crafting robust web and mobile solutions using modern technologies",
      icon: "i-heroicons-code-bracket",
    },
    {
      name: "Project Management",
      description: "Leading cross-functional teams to achieve project goals",
      icon: "i-heroicons-presentation-chart-bar",
    },
    {
      name: "Database Development",
      description: "Designing scalable database systems for business needs",
      icon: "i-heroicons-circle-stack",
    },
  ],
};

const testimonialsContent: TestimonialsSection = {
  headline: "Testimonials",
  title: "What People Say",
  description:
    "Feedback from clients and colleagues about our collaboration and results.",
  items: [
    {
      quote:
        "Working with Zeyad was exceptional. His expertise in AI integration and attention to detail resulted in a recruitment platform that exceeded our expectations.",
      author: {
        name: "Sarah Johnson",
        description: "CTO at TechRecruit",
        avatar: {
          src: "/testimonials/sarah.jpg",
          loading: "lazy",
        },
      },
      icon: "i-simple-icons-microsoft",
    },
    {
      quote:
        "Zeyad's project management skills and technical knowledge were instrumental in delivering our e-commerce platform on time and within budget.",
      author: {
        name: "Alex Chen",
        description: "Product Manager at ShopTech",
        avatar: {
          src: "/testimonials/alex.jpg",
          loading: "lazy",
        },
      },
      icon: "i-simple-icons-shopify",
    },
    {
      quote:
        "His ability to translate complex requirements into elegant solutions made him an invaluable asset to our team.",
      author: {
        name: "Maria Garcia",
        description: "Lead Developer at InnovateCo",
        avatar: {
          src: "/testimonials/maria.jpg",
          loading: "lazy",
        },
      },
      icon: "i-simple-icons-google",
    },
  ],
};
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
          light="/profile-light.jpg"
          dark="/profile-dark.jpg"
          alt="Zeyad Khadeeda"
          class="w-full max-w-lg rounded-2xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          loading="eager"
        />
      </template>
    </ULandingHero>
    <ULandingSection
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
