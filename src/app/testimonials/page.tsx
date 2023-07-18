export default function AboutPage() {
  return (
    <section className="grow bg-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl  tracking-tight text-primary-900">
          Testimonials
        </h2>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="skewed-border  flex  flex-col p-10 ">
            {/* <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt=""
            /> */}
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="font-display text-lg leading-8 text-primary-900">
                <p>
                  &quot;I&apos;ve been shopping with Joshua for over ten years,
                  he&apos;s the best in the business. The prices are great, the
                  selection is great and you will not get better customer
                  service anywhere in town. I can&apos;t say enough good things
                  about JWR&apos;s. I wouldn&apos;t go anywhere else.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-6">
                {/* <img
                  className="h-14 w-14 rounded-full bg-primary-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <div className="text-base">
                  <div className="font-semibold text-primary-900">
                    Will Simmen
                  </div>
                  {/* <div className="mt-1  text-primary-500">CEO of Tuple</div> */}
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="skewed-border  flex  flex-col p-10 ">
            {/* <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt=""
            /> */}
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="font-display text-lg leading-8 text-primary-900">
                <p>
                  &quot;JWR&apos;s is our go-to place for mens clothes. I can
                  stop in to shop for our three teenage boys, my father,
                  father-in-law or my husband. Joshua always finds exactly what
                  they need for every day and that special occasion.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-6">
                {/* <img
                  className="h-14 w-14 rounded-full bg-primary-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <div className="text-base">
                  <div className="font-semibold text-primary-900">
                    Molly Watson
                  </div>
                  {/* <div className="mt-1  text-primary-500">CEO of Tuple</div> */}
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="skewed-border  flex  flex-col p-10 ">
            {/* <img
              className="h-12 self-start"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
              alt=""
            /> */}
            <figure className="flex flex-auto flex-col justify-between">
              <blockquote className="font-display text-lg leading-8 text-primary-900">
                <p>
                  &quot;JWR&apos;s has high quality clothing for every occasion.
                  Joshua offers great customer service and remembered my sizes
                  and preferences from the first time I visited his store.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-6">
                {/* <img
                  className="h-14 w-14 rounded-full bg-primary-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <div className="text-base">
                  <div className="font-semibold text-primary-900">
                    Garrett Batten
                  </div>
                  {/* <div className="mt-1  text-primary-500">CEO of Tuple</div> */}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
