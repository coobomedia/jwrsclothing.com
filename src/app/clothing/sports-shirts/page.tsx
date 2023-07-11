"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { Dialog, Popover, RadioGroup, Tab, Transition } from "@headlessui/react"
import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import byron from "../../../../public/images/3.png"
// import ag from "../../../../public/images/ag.png"
// import berg from "../../../../public/images/berg.png"
// import byron from "../../../../public/images/byron.png"
// import payne from "../../../../public/images/payne.png"
// import riomar from "../../../../public/images/riomar.png"
// import sport1 from "../../../../public/images/sports-coats-1.jpeg"
// import sport2 from "../../../../public/images/sports-coats-2.jpeg"
// import sport3 from "../../../../public/images/sports-coats-3.jpeg"
// import sport4 from "../../../../public/images/sports-coats-4.jpeg"
// import stenstroms from "../../../../public/images/stenstroms.png"
import ag from "../../../../public/images/ag.png"
import berg from "../../../../public/images/berg.png"
import payne from "../../../../public/images/payne.png"
import riomar from "../../../../public/images/riomar.png"
import sport1 from "../../../../public/images/sports-coats-1.jpeg"
import sport2 from "../../../../public/images/sports-coats-2.jpeg"
import sport3 from "../../../../public/images/sports-coats-3.jpeg"
import sport4 from "../../../../public/images/sports-coats-4.jpeg"
import stenstroms from "../../../../public/images/stenstroms.png"

const product = {
  name: "Sports Shirts",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Store", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: sport1.src,
      alt: "Two each of primary, white, and black shirts laying flat.",
    },
    {
      src: sport2.src,
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: sport3.src,
      alt: "Model wearing plain primary basic tee.",
    },
    {
      src: sport4.src,
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-primary-400" },
    {
      name: "primary",
      class: "bg-primary-200",
      selectedClass: "ring-primary-400",
    },
    {
      name: "Black",
      class: "bg-primary-900",
      selectedClass: "ring-primary-900",
    },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "Made from the finest materials, our Sports Coat embodies the perfect balance of durability, breathability, and elegance. The carefully selected fabrics ensure a comfortable fit, allowing you to move with ease without compromising on style. Whether you're attending a business meeting or social event, our Sports Coat will effortlessly exude confidence and sophistication.",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather primary Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal primary" limited release.',
}

function SportsCoatsPage() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <main className="grow py-10 sm:py-16">
      {/* <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-primary-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-primary-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={product.href}
              aria-current="page"
              className="font-medium text-primary-500 hover:text-primary-600"
            >
              {product.name}
            </a>
          </li>
        </ol>
      </nav> */}

      {/* Image gallery */}
      {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.images[1].src}
              alt={product.images[1].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.images[2].src}
              alt={product.images[2].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div> */}

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-primary-200 lg:pr-8">
          <h1 className="text-2xl   text-primary-900 sm:text-3xl">
            {product.name}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="relative mx-auto  grid h-1/2 w-full max-w-xl grid-cols-1 place-items-center  items-center gap-y-4  py-8  lg:mx-0 lg:max-w-none lg:pl-8">
            <Image className="z-10 " src={byron} width={140} height={48} />

            <svg
              viewBox="0 0 272 35"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              width={140}
              height={48}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M176.054 2.8688L174.392 2.43848L174.197 2.58192H172.437L170.14 3.01225V3.25132L170.336 4.68574L170.58 4.92482V5.35514L172.095 6.35924L173.317 6.12017L173.904 5.49859L176.054 5.68984L176.641 5.92891L178.156 6.12017L178.449 7.60241L178.596 7.74585L178.449 9.03684H178.009L178.449 9.51498L178.156 9.65842V10.0887L178.596 10.5191L178.156 11.1407L179.036 12.7663L178.009 14.392L178.156 14.6311V16.8784L178.449 17.0696L178.156 17.3087H178.009V17.7868L176.934 19.1256V20.4166L177.765 21.0382V21.612L178.009 22.2336L177.374 22.903H177.081L177.374 23.0942L176.934 24.5765L177.374 25.5806L176.641 26.2021H176.299V26.8237L175.272 27.2062L174.832 26.8237L174.588 27.0628L172.437 27.2062L171.215 27.6366L170.58 28.0669L169.993 29.1188H169.7V29.7404L170.775 31.3183L171.655 31.5095L173.513 31.1748H174.197L175.028 31.5095V31.7964L175.859 31.3183H181.186H181.773L181.919 31.1748H182.799L183.288 31.9877H183.874L184.95 31.3183L185.39 31.7964L185.536 31.5095H187.247L190.033 30.1707V29.1188L188.518 27.6366L187.247 28.0669L187.051 28.2581H186.612L185.536 28.0669L184.51 27.8278L184.07 27.0628L183.288 27.2062L183.044 27.3975H182.653L181.773 26.8237L181.919 26.6325V26.3934L181.577 25.5806L181.333 25.3415V24.7199L181.577 24.1461L181.186 23.7158V23.0942L181.333 22.4726V20.6079L180.893 20.1297L181.186 19.3647L181.333 16.448V11.8579L180.893 11.5232L181.186 11.2841L181.333 9.03684L181.773 8.60651L181.577 8.46307V5.68984H181.773L181.577 5.49859V4.35105L180.893 3.63383L180.551 3.25132L179.476 2.8688H178.791L178.009 3.25132L176.054 3.01225V2.8688Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M206.162 1.7692L205.527 1.33887V1.48231L203.865 1.7692L203.67 1.91264L203.425 1.7692V1.48231L203.23 1.7692L201.764 1.91264L200.737 2.77329L200.591 2.91674L199.026 3.34706L197.951 4.39898L197.707 4.15991L197.609 4.35116L197.805 4.4946L197.951 4.39898L197.365 5.59433L196.925 6.02466L197.12 6.21592L196.68 6.59843L196.045 7.65034V8.46318L195.605 8.89351L195.898 9.08477L195.458 9.5151V12.7665L195.019 13.1968L195.458 14.2009L195.263 15.0615L195.605 15.3962L195.898 16.2091L197.12 17.8826L196.925 18.1217H196.68V18.3129H197.12V18.1217L197.365 18.3129V18.7432L198.147 19.317V19.5083H198.733L199.173 19.9386H199.76L201.275 21.4208H202.594L203.377 22.2337L203.621 21.9946L203.963 22.4249L204.256 22.2337H204.403L204.256 21.9946L204.696 21.4208H205.869L206.309 20.9905H206.505L207.531 20.7993L209.046 20.2255L209.926 20.5602L210.513 20.3689V19.7952L211.295 18.7911L211.539 18.9345L211.734 19.5561L211.295 20.3689H211.099L211.295 20.5602V20.7993L211.539 21.8512L211.099 22.2337V22.9987L210.513 24.0506H210.268V24.6244L209.926 25.0547L209.242 25.485L209.486 25.6285L208.46 27.1107L207.384 27.7323L207.58 27.9714L207.14 28.4017L205.918 28.9755L205.771 29.4058H205.478L204.452 30.1708L204.012 29.7405V29.9796L203.865 30.1708L203.67 29.9796H203.23L201.275 30.6012L198.391 30.7446L197.365 31.4618L196.68 33.0875L197.951 34.5697H198.587L199.417 34.761L199.76 34.3307H201.079V34.5697H201.519L201.666 34.3307H202.741L203.572 34.5697L204.794 33.9482H205.82L205.527 33.7569L206.847 33.5178L207.433 32.7528H207.873L208.509 31.8921L208.655 32.0834L208.9 31.7487L209.682 31.4618L211.832 29.8361V29.2146L212.419 28.6408L212.712 27.7801L213.299 26.9195L213.445 25.5807L213.885 23.2378L213.738 23.5247L213.445 23.2378V23.0943L213.885 21.8033L214.765 20.608L214.96 19.1736V18.026L214.52 16.735L215.351 15.0615L214.52 11.5711V11.3799L213.885 10.567L213.738 8.70226L213.445 8.46318V7.88941L213.299 7.12439L212.077 5.21182V4.39898L211.686 3.82521L209.584 2.34297H208.557L207.678 1.91264L207.922 1.7692H206.162ZM204.941 5.88122L206.162 6.21592H206.847L207.189 5.88122L207.873 6.02466L208.215 6.45499L208.509 6.21592L209.535 7.69816L209.975 8.70226L210.561 8.94133H210.757V14.4878L210.317 14.8703L210.122 14.7268L209.535 15.9222L209.095 16.9263H208.069L207.042 17.787H206.162L205.527 18.1695H204.794L203.23 16.9263H201.959L200.737 16.735H200.591L199.857 15.4919L200.151 15.3006L199.711 14.8703L199.075 13.8662L199.271 12.384L198.831 12.0493L198.684 10.7583L199.515 10.0411L199.271 8.98914L200.297 6.93313L200.933 6.5028L203.034 6.26373L203.279 5.4987L204.061 6.26373L204.941 5.88122Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M230.699 2.8688L229.037 2.43848L228.89 2.58192H227.082L224.785 3.01225V3.25132L224.98 4.68574L225.225 4.92482V5.35514L226.74 6.35924L227.962 6.12017L228.597 5.49859L230.699 5.68984L231.334 5.92891L232.8 6.12017L233.094 7.60241L233.24 7.74585L233.094 9.03684H232.654L233.094 9.51498L232.8 9.65842V10.0887L233.24 10.5191L232.8 11.1407L233.68 12.7663L232.654 14.392L232.8 14.6311V16.8784L233.094 17.0696L232.8 17.3087H232.654V17.7868L231.627 19.1256V20.4166L232.409 21.0382V21.612L232.654 22.2336L232.018 22.903H231.774L232.018 23.0942L231.627 24.5765L232.018 25.5806L231.334 26.2021H230.992V26.8237L229.917 27.2062L229.477 26.8237L229.232 27.0628L227.082 27.2062L225.909 27.6366L225.225 28.0669L224.638 29.1188H224.345V29.7404L225.469 31.3183L226.3 31.5095L228.206 31.1748H228.89L229.672 31.5095V31.7964L230.503 31.3183H235.831H236.417L236.564 31.1748H237.493L237.932 31.9877H238.519L239.643 31.3183L240.083 31.7964L240.23 31.5095H241.892L244.678 30.1707V29.1188L243.211 27.6366L241.892 28.0669L241.696 28.2581H241.256L240.23 28.0669L239.154 27.8278L238.715 27.0628L237.932 27.2062L237.688 27.3975H237.346L236.417 26.8237L236.564 26.6325V26.3934L236.222 25.5806L235.977 25.3415V24.7199L236.222 24.1461L235.831 23.7158V23.0942L235.977 22.4726V20.6079L235.538 20.1297L235.831 19.3647L235.977 16.448V11.8579L235.538 11.5232L235.831 11.2841L235.977 9.03684L236.417 8.60651L236.222 8.46307V5.68984H236.417L236.222 5.49859V4.35105L235.538 3.63383L235.195 3.25132L234.169 2.8688H233.436L232.654 3.25132L230.699 3.01225V2.8688Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M258.07 2.8688L256.359 2.43848L256.213 2.58192H254.404L252.156 3.01225V3.25132L252.351 4.68574L252.596 4.92482V5.35514L254.062 6.35924L255.333 6.12017L255.919 5.49859L258.07 5.68984L258.656 5.92891L260.123 6.12017L260.416 7.60241L260.563 7.74585L260.416 9.03684H259.976L260.416 9.51498L260.123 9.65842V10.0887L260.563 10.5191L260.123 11.1407L261.051 12.7663L259.976 14.392L260.123 14.6311V16.8784L260.416 17.0696L260.123 17.3087H259.976V17.7868L258.95 19.1256V20.4166L259.732 21.0382V21.612L259.976 22.2336L259.341 22.903H259.096L259.341 23.0942L258.95 24.5765L259.341 25.5806L258.656 26.2021H258.314V26.8237L257.239 27.2062L256.799 26.8237L256.555 27.0628L254.404 27.2062L253.231 27.6366L252.596 28.0669L251.96 29.1188H251.667V29.7404L252.791 31.3183L253.622 31.5095L255.528 31.1748H256.213L256.995 31.5095V31.7964L257.874 31.3183H263.153H263.788L263.935 31.1748H264.815L265.255 31.9877H265.841L266.965 31.3183L267.405 31.7964L267.552 31.5095H269.214L272 30.1707V29.1188L270.533 27.6366L269.214 28.0669L269.018 28.2581H268.578L267.552 28.0669L266.526 27.8278L266.037 27.0628L265.255 27.2062L265.01 27.3975H264.668L263.788 26.8237L263.935 26.6325V26.3934L263.544 25.5806L263.3 25.3415V24.7199L263.544 24.1461L263.153 23.7158V23.0942L263.3 22.4726V20.6079L262.86 20.1297L263.153 19.3647L263.3 16.448V11.8579L262.86 11.5232L263.153 11.2841L263.3 9.03684L263.788 8.60651L263.544 8.46307V5.68984H263.788L263.544 5.49859V4.35105L262.86 3.63383L262.518 3.25132L261.491 2.8688H260.807L259.976 3.25132L258.07 3.01225V2.8688Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.317 0.478122L10.5085 0.286865L10.0198 0.765007L5.52309 0.478122L3.71464 0.90845L3.51914 1.14752H2.83486L2.29721 0.90845L1.51518 0.765007V0.478122L0.684277 0.90845L0.537646 1.67348H0.293261L0.537646 1.96036L0 2.34288L0.537646 2.86883V3.39479L0.293261 3.58605L0.977538 4.59014L2.49272 3.92075H3.51914V4.112H4.25229L4.78994 4.4467V4.59014L5.7186 4.112L8.70009 3.92075L9.23774 4.4467L10.0198 4.112L10.313 3.92075H10.5085L11.2417 4.112L11.9748 4.59014V5.35517L10.9973 7.07648L10.704 6.83741V7.55463L10.9973 8.31965L11.2417 10.9494L11.7793 11.7623L11.2417 12.1448V12.6707L11.535 12.9576L10.704 13.388L11.2417 15.1093L10.704 16.1134V20.7513V21.5642L10.5085 22.2336V23.9549L10.704 25.3893L10.313 25.9153L10.5085 26.1544L10.704 28.8798L10.313 29.2623H9.77538L8.55346 29.597L8.01581 29.1188L7.77143 29.2623L6.94052 29.597H0.684277L0.537646 30.3142L0.293261 32.0355H0L0.537646 32.5615V32.8005L0.293261 32.944L0.684277 33.9959H1.51518L3.51914 33.4699L4.49668 34.1871L8.55346 33.9959L9.23774 33.4699L9.77538 33.9959L10.0198 33.7568L10.9973 33.4699L11.2417 33.2309L11.7793 33.7568V33.9959H13.5389H16.0316L16.5693 33.4699L18.0356 33.9959H20.3328L20.4794 33.7568H21.2615L23.7542 33.9959L24.4873 34.1871L25.3182 33.7568H27.2733H29.2773L31.2812 30.8401L31.0368 29.1188L30.7436 28.0669V26.6325L31.0368 26.8716V25.9153L30.7436 23.9549L31.2812 23.5246L31.0368 23.1421V21.5642L30.4992 21.0382L30.7436 20.7513V20.5123L31.0368 19.3169L30.4992 18.791V18.0738L29.5217 17.0697L28.202 17.3565L26.9801 18.0738V19.3169L26.2469 19.9863V20.7513L26.0514 21.0382L26.5402 21.7076V22.9986L26.2469 27.3497L24.9761 28.0669L24.2429 28.8798L24.0963 29.1188H23.5587L22.7766 29.597L19.7951 29.2623H16.276L15.2985 27.8757V27.1585L15.494 25.2459L14.7608 24.194L15.0052 23.9549L15.2985 22.2336L15.7384 21.7076L15.494 21.5642L16.0316 19.556H16.276V18.5997L15.7384 17.3565L15.494 14.3921L15.2985 14.2486V13.8661L15.0052 8.98905V3.92075H15.2985L15.494 4.112H18.7199L20.3328 4.82922V4.59014L20.4794 4.4467L21.5547 4.59014L21.9457 3.92075L23.021 3.39479V2.34288L22.7766 2.19943V1.67348L21.2615 0.90845L19.7951 0.765007L16.9603 0.478122L15.7384 1.43441H15.2985L13.7344 0.90845V0.765007L13.5389 0.90845L12.317 0.478122Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.9155 0.239071L54.8402 0V0.239071L54.1559 0.525956L53.8626 0.765027L53.6183 0.525956H53.0806L51.6632 1.05191L50.5879 1.96038V3.15574L51.6632 4.44672L52.3475 4.73361V4.92486L54.107 4.73361L54.6447 5.11612L55.3289 5.40301L57.3329 4.20765L57.8706 4.73361V5.11612L57.3329 5.64208L58.0172 7.55465L57.5284 9.80191L58.0172 12.0492L58.5548 12.4317L58.3593 12.7664V14.2008L57.8217 14.679L58.0172 16.1134L58.5548 18.8866V24.4809L58.0172 25.0068L58.3593 26.2022L58.5548 27.6366L58.0172 29.2145H57.8217L58.0172 29.4057L57.3329 30.1708L55.5733 30.8402L55.0357 30.4577V30.123H54.3514L52.8851 29.8839L52.3475 30.4098H51.8098L50.8812 31.6052L52.3475 33.2309L52.8851 32.8484L53.0806 33.0874L54.1559 32.8484H55.0846H58.6037L58.8481 32.5615L62.5627 32.8484L64.1757 33.0874L66.1796 33.2787L66.6684 33.8046L67.9881 33.1353L68.9167 33.3265L69.4544 32.944L69.7476 33.1831V33.3743H70.1387L70.4319 33.1831H72.1915L74.3909 32.1311V31.4618L74.7331 31.2227H74.9286L75.4662 30.2664L76.9325 29.7404L77.6168 28.9754V27.0628L78.4477 25.3415L78.6921 24.5765L78.0078 21.9467L77.4702 21.1339V18.9822L74.9286 16.4959L75.173 16.209L74.782 15.8265V15.0137L74.9775 14.3443L76.0528 13.8183L77.2747 10.9495H77.5191V10.041L77.7146 8.0806L77.0303 6.69399L75.8084 5.40301V4.73361L75.2707 4.20765L75.564 3.92077V3.68169L74.8797 3.15574L75.0752 2.96448L73.6578 1.91257V2.19945L73.3157 2.43852L72.778 1.91257V1.76913L72.1426 1.43443V1.29098H70.0898L68.8678 0.525956L67.9392 0.239071L65.0555 0L64.6644 0.525956H63.5892V0.239071L61.6341 0.525956L60.07 0L58.8481 0.765027L57.3818 0.525956L56.3065 0.765027L55.9155 0.239071ZM66.6195 5.40301L67.9392 5.11612V5.92896L69.1611 6.16803L69.4055 5.92896L70.383 5.64208L71.3117 7.55465H71.8493L71.7516 7.50683L71.996 7.17213L72.1915 7.4112L71.8982 7.60246L72.1915 7.93716L72.9735 9.37159V11.0929L72.6314 12.0492L71.7027 12.9577V13.4836L70.7252 13.7227L69.9431 14.5355L66.424 14.2486H64.9577L64.2734 15.2049L63.7358 14.679L61.9762 14.918L61.4386 14.5355L61.2431 13.4836L60.9987 12.9577V12.2883H61.2431L61.4386 8.0806L61.9762 6.88525V6.35929H62.2695L62.5139 5.16393L63.0515 4.78142L64.8111 5.68989L66.6195 5.40301ZM64.3712 17.8825L65.0555 17.3566L65.5931 17.6913L67.3527 18.2172H69.3566L70.8718 18.8866H71.2628L73.0224 20.6079V20.847L73.56 21.3251L73.8044 21.0383L74.6353 21.8511V25.2459L74.0977 26.4413L73.4134 26.7281H73.0713L72.387 27.9235V28.832L72.1426 29.1667L69.8454 29.3579L65.3487 29.597H61.6341L61.0964 28.1626V24.4809L60.5588 22.2336L60.852 20.321L60.5588 20.082L60.3144 19.556H60.5588L60.852 19.3648L60.3144 18.8388L61.0964 18.3128V17.6913L61.6341 17.3566L62.856 18.2172L64.3712 17.8825Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.8554 4.20769H101.859V4.39894L102.104 4.20769L102.788 4.87708L103.326 6.07244L102.788 6.5984V6.83747L103.326 7.79375L103.619 8.03282V9.08474L103.081 10.9973L103.619 11.7623L102.788 12.7186V13.4836L102.397 13.9618L102.592 14.2009L102.837 15.7787L103.13 15.97V16.4959L102.837 19.8429V22.3293L102.446 23.1421V24.3375L102.837 25.7719L103.13 26.011L102.837 26.2979L102.592 28.7364L101.615 29.2623L101.371 29.5014L100.833 28.9754H100.295V29.1667L100.1 29.4058L99.8554 29.1667L98.8778 30.6011L98.6334 30.3621L98.8778 32.0356L99.3666 32.5615V32.8484L101.175 32.5615L102.592 33.0397L103.912 34.0916H104.596L104.89 33.8047L109.093 33.5656H110.315L111.146 32.5615L111.928 32.3224L113.394 32.9918V33.2309L113.15 33.5178H114.909L115.3 32.9918L115.838 32.3224L116.131 32.5615L116.913 31.7965L117.109 32.0356V32.5615L118.722 33.7569H119.406L121.948 32.8484L122.876 33.2309L123.903 33.5178V33.7569H124.44L125.369 33.2309L125.907 32.8484L129.035 32.9918L128.79 32.8006L130.11 31.9877V31.6052H129.866L129.035 29.8839L128.351 29.5492V29.358L126.542 29.5492L125.858 29.1667V27.9714L125.32 27.1585L125.125 26.25V24.5287L125.32 22.2815L125.662 20.1298L125.125 18.8388V17.6435V16.6872L124.88 15.9222L124.587 13.9618L125.125 13.4836H125.32V12.7186L124.929 11.5233L124.392 8.75004L123.707 8.36752L124.098 7.84157V7.17217L124.636 4.9249L125.32 3.49047L127.422 2.43856L128.644 2.2473V1.72135L128.351 1.43446H128.106L126.884 1.96042L125.662 0.669434H125.125L124.587 1.19539L122.583 0.669434L120.09 1.00413L119.308 1.9126H119.015V2.39075L118.771 2.62982L118.575 2.39075V3.68173L118.282 4.87708H118.038L117.353 6.83747L117.549 7.12435H118.086L119.846 8.03282L120.09 6.83747L120.286 7.12435V6.5984L120.628 5.11616L120.824 3.87299H121.117L121.361 3.49047H121.557L122.632 5.16397L122.876 10.3279L122.485 10.8539V12.0492V13.9618H121.948L122.143 14.2009L122.485 17.6435L121.948 18.1694L122.143 19.3648L121.606 20.7992L122.143 21.3252L121.606 22.7596V23.429V24.6244L122.143 25.6763L121.948 25.9153V27.6367V28.832H121.41L121.166 29.5014H120.872L120.677 29.3101H119.602H118.82L118.331 29.8361L116.865 29.5014V29.3101L117.06 29.0711L116.376 28.2582V27.8757L116.131 26.1544L116.62 24.4331H116.913V23.6681L116.62 23.3812L117.109 22.1858L117.451 21.4208L116.913 20.2254L117.451 19.6995L117.109 19.5082L117.647 18.9823L117.451 18.7432L117.842 18.2651L116.913 17.2132L117.451 16.8306L117.109 16.5438L117.647 16.0178V15.7787L118.184 14.5834H118.429L117.891 14.0574L118.429 13.5315L118.184 12.3361L118.722 11.6667V9.70632H118.184L117.647 10.2323L116.962 11.1407V12.4317V14.153H116.669L116.18 16.1134L116.962 17.3088L116.425 17.8347L116.18 19.0301L115.154 20.2254L114.909 20.0342V19.6995L113.932 21.2774L113.15 20.2254L112.612 19.317L112.075 18.791V17.5957L111.39 16.4003L111.146 14.4399V12.7186L110.657 11.7623L110.315 10.9973L110.12 10.806L110.657 9.75414L109.875 7.2678V4.68583L110.12 4.20769L108.898 2.62982L108.116 2.39075L107.822 1.43446H105.623L104.303 0.669434L104.01 1.00413V1.19539L103.081 1.72135L102.397 1.19539H99.8554H98.7312L97.998 2.86889L99.8554 4.20769ZM108.116 7.55468H108.653V8.08064L108.898 8.36752L108.653 9.56288L108.36 9.80195V9.99321L108.898 10.5192V11.5711L109.093 11.8101H108.898L108.653 12.097V12.2883L108.898 12.5274L109.093 12.2883L108.898 13.0533L108.653 14.2487L108.898 14.5356L109.582 16.735L109.337 18.4563L108.36 18.9345L110.12 21.1339L110.315 23.5724L110.657 25.2938V25.8197L111.146 26.3457L110.853 27.7801L110.657 28.067L111.341 29.2623V30.4577L111.586 30.6968H111.097L110.804 29.5014L110.266 28.9754L109.337 29.2623H108.653L107.822 28.4495L108.36 28.067L107.822 27.2541V26.3457L107.04 25.8197L106.845 26.0588L106.552 24.7678L106.307 23.1421L106.112 21.5642L106.796 20.8948V20.3689L105.574 19.8429L105.769 18.4563L106.112 18.2172L105.769 17.9304L105.232 17.4044L105.036 15.7787L105.232 13.5315V12.4317L105.036 12.1927V8.60659L105.721 7.84157V6.64621V6.12025H106.258L108.116 7.55468ZM116.327 30.6011L116.082 30.3621L116.571 30.0752H116.865L116.327 30.6011Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.4698 26.5368L38.9058 25.8674L38.808 26.1065H38.5636L38.417 25.9631L37.5861 26.2021L37.1951 26.5368H36.9507L36.1198 27.1584L35.4844 28.2581L35.5821 29.5491V29.8838H35.4844L35.7776 30.0273L36.1198 31.2704L36.4619 31.7008H36.8041L36.9507 31.6051L37.5861 32.1789L37.9282 32.2745L38.026 32.1789L38.5636 31.9398L38.808 32.1789L38.9058 32.0833H39.4434L40.1277 31.6051L41.2519 31.0792V30.7445L41.3496 30.3142H41.4962V29.6926L41.8872 28.6885L41.594 28.1147L41.4962 28.0191V27.4931L41.1052 27.1584L40.4698 26.5368Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.8058 26.5368L85.1929 25.8674L85.0951 26.1065H84.8507L84.7041 25.9631L83.8732 26.2021L83.4822 26.5368H83.2867L82.4069 27.1584L81.7715 28.2581L81.8692 29.5491V29.8838H81.7715L82.0647 30.0273L82.4069 31.2704L82.749 31.7008H83.14L83.2867 31.6051L83.8732 32.1789L84.2642 32.2745L84.3131 32.1789L84.8507 31.9398L85.0951 32.1789L85.1929 32.0833H85.7305L86.4148 31.6051L87.5878 31.0792V30.7445L87.6367 30.3142H87.7833V29.6926L88.1743 28.6885L87.93 28.1147L87.7833 28.0191V27.4931L87.3923 27.1584L86.8058 26.5368Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M140.766 26.5368L139.202 25.8674L139.104 26.1065H138.86L138.713 25.9631L137.882 26.2021L137.442 26.5368H137.247L136.367 27.1584L135.78 28.2581L135.878 29.5491V29.8838H135.78L136.025 30.0273L136.367 31.2704L136.758 31.7008H137.1L137.247 31.6051L137.882 32.1789L138.224 32.2745L138.322 32.1789L138.86 31.9398L139.104 32.1789L139.202 32.0833H139.69L140.424 31.6051L141.548 31.0792V30.7445L141.646 30.3142H141.743V29.6926L142.183 28.6885L141.89 28.1147L141.743 28.0191V27.4931L141.401 27.1584L140.766 26.5368Z"
              ></path>
            </svg>
            {/* <Image className="z-10" src={ag} width={140} height={48} />
            <Image className="z-10" src={berg} width={140} height={48} /> */}

            {/* <Image className="z-10" src={payne} width={140} height={48} />
            <Image className="z-10" src={riomar} width={140} height={48} />
            <Image className="z-10" src={stenstroms} width={140} height={48} /> */}
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-primary-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="font-display text-base text-primary-900">
                {product.description}
              </p>
            </div>
          </div>

          {/* <div className="mt-10">
            <h3 className="text-sm font-medium text-primary-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-primary-400">
                    <span className="text-primary-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          {/*
          <section aria-labelledby="shipping-heading" className="mt-10">
            <h2
              id="shipping-heading"
              className="text-sm font-medium text-primary-900"
            >
              Details
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-primary-600">{product.details}</p>
            </div>
          </section> */}
        </div>
      </div>
    </main>
  )
}

export default SportsCoatsPage
