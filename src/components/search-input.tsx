"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const SearchInput = () => {
  const search = useSearchParams()
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  )
  const router = useRouter()

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault()

    if (typeof searchQuery !== "string") {
      return
    }

    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)
  }

  return (
    <form onSubmit={onSearch}>
      <label
        htmlFor="search"
        className="block text-lg font-medium text-accent-900"
      >
        Search
      </label>
      <div className="relative mt-4 flex items-center">
        <input
          type="text"
          placeholder="What are you looking for?"
          name="search"
          value={searchQuery || ""}
          onChange={(event) => setSearchQuery(event.target.value.toLowerCase())}
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-accent-900 shadow-sm ring-1 ring-inset ring-accent-300 placeholder:text-accent-400 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
        />
      </div>
    </form>
  )
}

export default SearchInput
