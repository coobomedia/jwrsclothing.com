import type { Metadata } from "next"
import { pick } from "@contentlayer/client"
import { allPosts } from "contentlayer/generated"

import { PaginatedPosts } from "@/components/pagination"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

const posts = allPosts
  .map((post) =>
    pick(post, [
      "title",
      "slug",
      "publishedAt",
      "excerpt",
      "draft",
      "image",
      "tags",
      "categories",
    ])
  )
  .sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })

function BlogPage() {
  return (
    <div className="flex flex-col gap-6">
      <section className="flex  flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Blog
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Demonstrating the use of the{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://www.contentlayer.dev/"
          >
            Contentlayer
          </a>{" "}
          and it&apos;s{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://mdxjs.com/"
          >
            MDX
          </a>{" "}
          support via the{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href=" https://github.com/kentcdodds/mdx-bundler"
          >
            MDX Bundler
          </a>{" "}
          package.
        </p>
        <small className="italic text-accent-500">
          * This solution is meant to be used if client does not require a CMS
          yet would still like some sort of blog functionality we can update
          easily.
        </small>
      </section>
      <Separator className="my-4 " />
      <div className="mt-10 space-y-20 lg:space-y-20">
        <PaginatedPosts posts={posts} postsPerPage={2} />
      </div>
    </div>
  )
}

export default BlogPage
