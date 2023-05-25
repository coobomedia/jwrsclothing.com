import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },

  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "Posts",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://leerob.io${doc.image}`
        : `https://leerob.io/api/og?title=${doc.title}`,
      url: `https://leerob.io/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Lee Robinson",
      },
    }),
  },
}

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string" },
  },
}))

const Categories = defineNestedType(() => ({
  name: "Categories",
  fields: {
    title: { type: "string" },
  },
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    tags: {
      type: "list",
      of: Tag,
    },
    categories: {
      type: "list",
      of: Categories,
      required: true,
    },
    slug: {
      type: "string",
    },
    draft: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
})
