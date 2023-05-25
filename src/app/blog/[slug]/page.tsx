import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { Mdx } from "@/components/ui/mdx"
import { Separator } from "@/components/ui/separator"

interface Params {
  slug: string
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    excerpt: description,
    image,
    slug,
  } = post
  const ogImage = image
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${siteConfig.url}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

interface BlogProps {
  params: {
    slug: string
  }
}

export default async function Blog({ params }: BlogProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="flex  flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          <Balancer>{post.title}</Balancer>
        </h1>
        <small className="italic text-accent-500">{post.publishedAt}</small>
      </section>
      <Separator className="my-4" />
      <Mdx code={post.body.code} />
      <Link
        href="/blog"
        className="mt-4 inline-flex h-11 max-w-fit items-center justify-center rounded-md  bg-accent-900 px-8 text-sm font-medium text-white transition-colors hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 active:scale-95   disabled:pointer-events-none  disabled:opacity-50  data-[state=open]:bg-accent-100"
      >
        Back to Blog
      </Link>
    </div>
  )
}
