"use client"

import Link from "next/link"
import {  useSelectedLayoutSegments } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumbs() {
  // const pathname = usePathname()
  // const parts: string[] = pathname!.split("/")

  // // Remove the first index of the array
  // parts.shift()

  // console.log(parts)

  const segments = useSelectedLayoutSegments()


  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <Home className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {segments.map((segment, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight
                className="h-5 w-5 shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href="#"
                className="ml-4 text-sm font-medium capitalize text-gray-500 hover:text-gray-700"
                // aria-current={segment.current ? "page" : undefined}
              >
                {segment}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
    // <nav className="flex" aria-label="Breadcrumb">
    //   <ol role="list" className="flex items-center space-x-4">
    //     <li>
    //       <div>
    //         <Link href="/" className="text-gray-400 hover:text-gray-500">
    //           <Home className="h-5 w-5 shrink-0" aria-hidden="true" />
    //           <span className="sr-only">Home</span>
    //         </Link>
    //       </div>
    //     </li>
    //     {parts.map((segment, index) => (
    //       <li key={index}>
    //         <div className="flex items-center">
    //           <ChevronRight
    //             className="h-5 w-5 shrink-0 text-gray-400"
    //             aria-hidden="true"
    //           />
    //           <Link
    //             href="#"
    //             className="ml-4 text-sm font-medium capitalize text-gray-500 hover:text-gray-700"
    //             // aria-current={segment.current ? "page" : undefined}
    //           >
    //             {segment}
    //           </Link>
    //         </div>
    //       </li>
    //     ))}
    //   </ol>
    // </nav>
  )
}
