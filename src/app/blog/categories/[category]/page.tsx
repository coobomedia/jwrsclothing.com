import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { pick } from "@contentlayer/client"
import slugify from "@sindresorhus/slugify"
import { allPosts } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { PaginatedPosts } from "@/components/pagination"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { Separator } from "@/components/ui/separator"

export async function generateStaticParams() {
  const categories = new Set(allPosts.flatMap((p) => p.categories))
  // console.log("categories:", categories)
  const paths = Array.from(categories).map((category) => ({
    params: { category },
  }))
  // console.log("paths:", paths)
  return paths
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Params
// }): Promise<Metadata | undefined> {
//   const post = allPosts.find((post) => post.slug === params.slug)
//   if (!post) {
//     return
//   }

//   const {
//     title,
//     publishedAt: publishedTime,
//     excerpt: description,
//     image,
//     slug,
//   } = post
//   const ogImage = image
//     ? `${siteConfig.url}${image}`
//     : `${siteConfig.url}/api/og?title=${title}`

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${siteConfig.url}/blog/${slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

// interface BlogProps {
//   params: {
//     slug: string
//   }
// }

export default async function CategoryPage({ params }) {
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

  const filteredPosts = posts.filter((post) => {
    const matchingCategories = post.categories.filter((cat) => {
      const slugifiedCat = slugify(cat.title!)
      return slugifiedCat === params.category
    })
    return matchingCategories.length > 0
  })

  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="flex  flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold capitalize leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {params.category}
        </h1>
        {/* <Breadcrumbs /> */}
      </section>
      <Separator className="my-4 " />
      <div className="mt-10 space-y-20 lg:space-y-20">
        <PaginatedPosts posts={filteredPosts} postsPerPage={2} />
      </div>
    </div>
  )
}
