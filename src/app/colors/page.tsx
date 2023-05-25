"use client"

import { useToast } from "@/hooks/use-toast"
import { theme } from "tailwind.config.js"
import * as colors from "tailwindcss/colors"

import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function ColorsPage() {
  const themeColors = theme.extend.colors

  const brandColors = Object.keys(themeColors).filter((name) =>
    name.startsWith("brand")
  )
  const primaryColors = Object.keys(themeColors).filter((name) =>
    name.startsWith("primary")
  )
  const secondaryColors = Object.keys(themeColors).filter((name) =>
    name.startsWith("secondary")
  )
  const accentColors = Object.keys(themeColors).filter((name) =>
    name.startsWith("accent")
  )

  // const tailwindColors = Object.keys(colors).slice(5)

  const tailwindColors = Object.keys(colors)
    .filter(
      (color) =>
        !["warmGray", "trueGray", "coolGray", "blueGray", "lightBlue"].includes(
          color
        )
    )
    .slice(5)

  const copyToClipboard = (value: string) => {
    const textarea = document.createElement("textarea")
    textarea.value = value
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy", false, textarea.value)
    textarea.remove()
  }

  const { toast } = useToast()

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex  flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Colors
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Custom default color palette for your project. Edit these colors in
          the tailwind.config.js file. Reference this{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://tailwindcss.com/docs/customizing-colors"
          >
            link
          </a>{" "}
          for further customization. Hover and click on a color to copy the
          hex value.
        </p>
      </section>
      <Separator className="my-4 " />

      <section>
        <div className="body">
          <h2>Primary Pallete</h2>
        </div>
        <div className="mx-auto mt-3 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
          {primaryColors.map((colorName) => {
            // Get the shade object for the current color
            const shades = themeColors[colorName]

            // Generate a JSX element for each shade of the current color
            return Object.keys(shades).map((shadeName) => {
              // Get the hex value for the current shade
              const hexValue = shades[shadeName]

              // Generate a unique key for this JSX element
              const key = `${colorName}-${shadeName}`

              // Generate a JSX element for the current shade
              return (
                <div className=" flex flex-col" key={key}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            try {
                              copyToClipboard(hexValue)
                              toast({
                                title: "Copied to clipboard",
                                description: `The color code ${hexValue} has been copied to your clipboard.`,
                                duration: 3000,
                              })
                            } catch (err) {
                              toast({
                                title: "Uh oh! Something went wrong.",
                                description:
                                  "There was a problem with your request.",
                                duration: 5000,
                              })
                            }
                          }}
                          className=" h-10 w-10 rounded  sm:w-full"
                          style={{ backgroundColor: hexValue }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Copy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <p className="mt-1 text-sm text-accent-900">{key}</p>
                  <p className="text-xs lowercase text-accent-500">
                    {hexValue}
                  </p>
                </div>
              )
            })
          })}
        </div>
      </section>
      <section className=" mt-10">
        <div className="body">
          <h2>Secondary Pallete</h2>
        </div>
        <div className="mx-auto mt-3 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
          {secondaryColors.map((colorName) => {
            // Get the shade object for the current color
            const shades = themeColors[colorName]

            // Generate a JSX element for each shade of the current color
            return Object.keys(shades).map((shadeName) => {
              // Get the hex value for the current shade
              const hexValue = shades[shadeName]

              // Generate a unique key for this JSX element
              const key = `${colorName}-${shadeName}`

              // Generate a JSX element for the current shade
              return (
                <div className=" flex flex-col" key={key}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            try {
                              copyToClipboard(hexValue)
                              toast({
                                title: "Copied to clipboard",
                                description: `The color code ${hexValue} has been copied to your clipboard.`,
                                duration: 3000,
                              })
                            } catch (err) {
                              toast({
                                title: "Uh oh! Something went wrong.",
                                description:
                                  "There was a problem with your request.",
                                duration: 5000,
                              })
                            }
                          }}
                          className=" h-10 w-10 rounded  sm:w-full"
                          style={{ backgroundColor: hexValue }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Copy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <p className="mt-1 text-sm text-accent-900">{key}</p>
                  <p className="text-xs lowercase text-accent-500">
                    {hexValue}
                  </p>
                </div>
              )
            })
          })}
        </div>
      </section>
      <section className=" mt-10">
        <div className="body">
          <h2>Accent Pallete</h2>
        </div>
        <div className="mx-auto mt-3 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
          {accentColors.map((colorName) => {
            // Get the shade object for the current color
            const shades = themeColors[colorName]

            // Generate a JSX element for each shade of the current color
            return Object.keys(shades).map((shadeName) => {
              // Get the hex value for the current shade
              const hexValue = shades[shadeName]

              // Generate a unique key for this JSX element
              const key = `${colorName}-${shadeName}`

              // Generate a JSX element for the current shade
              return (
                <div className="flex flex-col " key={key}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            try {
                              copyToClipboard(hexValue)
                              toast({
                                title: "Copied to clipboard",
                                description: `The color code ${hexValue} has been copied to your clipboard.`,
                                duration: 3000,
                              })
                            } catch (err) {
                              toast({
                                title: "Uh oh! Something went wrong.",
                                description:
                                  "There was a problem with your request.",
                                duration: 5000,
                              })
                            }
                          }}
                          className=" h-10 w-10 rounded  sm:w-full"
                          style={{ backgroundColor: hexValue }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Copy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="mt-1 text-sm text-accent-900">{key}</p>
                  <p className="text-xs lowercase text-accent-500">
                    {hexValue}
                  </p>
                </div>
              )
            })
          })}
        </div>
      </section>
    </div>
  )
}

export default ColorsPage
