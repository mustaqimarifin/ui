import baseConfig from "../../tailwind.config.js"

export const config = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    "content/**/*.mdx",
    "registry/**/*.{ts,tsx}",
  ],
}

export default config
