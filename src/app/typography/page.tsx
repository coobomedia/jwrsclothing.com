import Link from "next/link"

import ScrollButton from "@/components/scroll-button"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Text } from "@/components/ui/text"

function TypographyPage() {
  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex  flex-col items-start gap-4">
        <h1 className=" text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Typography
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Custom styles for headings, paragraphs, lists, fonts, etc.{" "}
        </p>
        <small className="italic text-accent-500">
          * Update/optimize font familes by referencing this{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://beta.nextjs.org/docs/optimizing/fonts"
          >
            link
          </a>
          .
        </small>
        <small className="italic text-accent-500">
          * To utlize these typography styles each element must be a child of
          the body class. This can be edited in the global.css file within the
          styles folder.
        </small>
        <small className="italic text-accent-500">
          * Should be noted that Tailwind has a{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://tailwindcss.com/docs/typography-plugin"
          >
            plugin
          </a>{" "}
          that configures an extensive set of thought out styles for responsive
          typography. See the{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js"
          >
            default styles
          </a>{" "}
          this plugin provides for a more in-depth analysis and checkout the{" "}
          <Link
            className="underline underline-offset-2 hover:text-accent-500"
            href="/blog"
          >
            blog
          </Link>{" "}
          to see it in action.
        </small>
      </section>
      <div className="flex gap-4 ">
        <a
          className="mt-4 inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2   "
          href="#section1"
        >
          Anchor Tag to H3
        </a>
        <a
          className="mt-4 inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-secondary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2   "
          href="#section2"
        >
          Anchor Tag to H6
        </a>
      </div>
      <Separator className="my-4 " />

      <section className="body min-h-[300vh] max-w-prose">
        <h1>Heading 1</h1>
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <h2>Heading 2</h2>
        <p>
          The king thought long and hard, and finally came up with{" "}
          <a href="#"> a brilliant plan </a> : he would tax the jokes in the
          kingdom.
        </p>
        <blockquote>
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote>
        <h3 id="section1">Heading 3</h3>
        <p>
          The king&apos;s subjects were not amused. They grumbled and
          complained, but the king was firm:
        </p>
        <ul>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <small>Small</small>
        <p>
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king&apos;s
          foolishness get him down: a court jester named Jokester.
        </p>
        <h4>Heading 4</h4>
        <p>
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>
        <h5>Heading 5</h5>
        <p>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </p>
        <h6 id="section2">Heading 6</h6>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king&apos;s pillow, in his
          soup, even in the royal toilet. The king was furious, but he
          couldn&apos;t seem to stop Jokester.
        </p>
      </section>
      <ScrollButton />
    </div>
  )
}

export default TypographyPage
