// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

const starlightConfig = {
  favicon: "./favicon.png",
  logo: { src: "@/assets/luma-logo.webp" },
  title: "Wiki",
  customCss: ["./src/styles/starlight.css"],
  social: {
    github: "https://github.com/LumaLibre/wiki",
    discord: "https://lumamc.net/chat",
    tiktok: "https://www.tiktok.com/@playlumamc",
    email: "mailto:stars@lumamc.net",
  },
  sidebar: [
    {
      label: "Information",
      autogenerate: { directory: "information" },
    },
    {
      label: "Crossplay",
      autogenerate: { directory: "crossplay" },
    },
    {
      label: "Basics",
      autogenerate: { directory: "basics" },
    },
    {
      label: "Features",
      autogenerate: { directory: "features" },
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.lumamc.net",
  //base: "wiki",
  integrations: [starlight(starlightConfig)],

  vite: {
    plugins: [tailwindcss()],
  },
});
