"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import slugify from "@sindresorhus/slugify"
import { ArrowLeft, ArrowRight } from "lucide-react"
import ReactPaginate from "react-paginate"

import { Separator } from "./ui/separator"

function CurrentPosts({ currentPosts }) {
  return (
    <>
      {currentPosts &&
        currentPosts.map((post) => (
          <article
            key={post.slug}
            className="relative isolate flex flex-col gap-8 lg:flex-row"
          >
            <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
              <Image
                src={post.image!}
                fill
                alt=""
                className="absolute inset-0 h-full w-full rounded-2xl bg-primary-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-primary-500">
                  {post.publishedAt}
                </time>
                {post.categories?.map((category: { title }) => (
                  <Link
                    key={category.title}
                    href={`/blog/categories/${slugify(category.title!)}`}
                    className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600 hover:bg-primary-100"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
              <div className="group relative max-w-xl">
                <h2 className="mt-3 text-lg font-semibold leading-6 text-primary-900 group-hover:text-primary-600">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-5 text-sm leading-6 text-primary-600 group-hover:text-primary-500">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
    </>
  )
}

export function PaginatedPosts({ postsPerPage, posts }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [postOffset, setPostOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = postOffset + postsPerPage
  console.log(`Loading items from ${postOffset} to ${endOffset}`)
  const currentPosts = posts.slice(postOffset, endOffset)
  const pageCount = Math.ceil(posts.length / postsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * postsPerPage) % posts.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setPostOffset(newOffset)
  }

  return (
    <>
      <CurrentPosts currentPosts={currentPosts} />
      <Separator className="my-4 " />
      {posts.length > postsPerPage ? (
        <ReactPaginate
          activeLinkClassName="bg-primary-100"
          pageLinkClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-primary-900 ring-1 ring-inset ring-primary-300 hover:bg-primary-50 focus:z-20 focus:outline-offset-0"
          className="mx-auto flex max-w-fit flex-1 items-center justify-between gap-4"
          breakLabel="..."
          nextLabel={
            <div className="flex items-center text-sm">
              <span>Next</span>
              <ArrowRight className="ml-2 h-5 w-5  text-primary-400" />
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          disabledClassName="invisible"
          previousLabel={
            <div className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5  text-primary-400" />
              <span className="text-sm">Previous</span>
            </div>
          }
        />
      ) : null}
    </>
  )
}
