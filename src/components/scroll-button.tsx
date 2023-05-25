"use client"

import { useEffect, useState } from "react"

import { Button } from "./ui/button"

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={handleScrollToTop}
      style={{ display: scrollPosition > 200 ? "block" : "none" }}
    >
      Scroll to Top
    </Button>
  )
}

export default ScrollButton
