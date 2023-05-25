import type { NextApiRequest, NextApiResponse } from "next"
import { pick } from "@contentlayer/client"
import { allPosts } from "contentlayer/generated"

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
      "body",
    ])
  )
  .sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query

      if (typeof query !== "string" || query.length === 0) {
        // Check if the query is not empty or undefined
        throw new Error("Invalid request")
      }

      const filteredPosts = posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.raw.toLowerCase().includes(query.toLowerCase())
        )
      })

      res.status(200).json({ filteredPosts })
    } catch (error: any) {
      console.log(error)
      res.status(500).end()
    }
  }
}
