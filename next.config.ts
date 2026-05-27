import createMDX from "@next/mdx";
import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PluginList = any[];

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-math",
      "remark-frontmatter",
    ] as PluginList,
    rehypePlugins: [
      "rehype-katex",
      ["rehype-pretty-code", { theme: "github-light", keepBackground: true }],
    ] as PluginList,
  },
});

const nextConfig: NextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
