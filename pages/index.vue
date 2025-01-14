<script setup lang="ts">
import type { HeroContent, AboutSection, ProjectsSection, TestimonialsSection } from '~/types/content'

// ...existing content constants...

const testimonialsContent: TestimonialsSection = {
  headline: "Testimonials",
  title: "What People Say",
  description: "Feedback from clients and colleagues about our collaboration and results.",
  items: [{
    quote: "Working with Zeyad was exceptional. His expertise in AI integration and attention to detail resulted in a recruitment platform that exceeded our expectations.",
    author: {
      name: "Sarah Johnson",
      description: "CTO at TechRecruit",
      avatar: {
        src: "/testimonials/sarah.jpg",
        loading: "lazy"
      }
    },
    icon: "i-simple-icons-microsoft"
  }, {
    quote: "Zeyad's project management skills and technical knowledge were instrumental in delivering our e-commerce platform on time and within budget.",
    author: {
      name: "Alex Chen",
      description: "Product Manager at ShopTech",
      avatar: {
        src: "/testimonials/alex.jpg",
        loading: "lazy"
      }
    },
    icon: "i-simple-icons-shopify"
  }, {
    quote: "His ability to translate complex requirements into elegant solutions made him an invaluable asset to our team.",
    author: {
      name: "Maria Garcia",
      description: "Lead Developer at InnovateCo",
      avatar: {
        src: "/testimonials/maria.jpg",
        loading: "lazy"
      }
    },
    icon: "i-simple-icons-google"
  }]
}
</script>

<template>
  <div class="space-y-24 py-8">
    <!-- ...existing sections... -->

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
