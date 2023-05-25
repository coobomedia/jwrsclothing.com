import {
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid"
import {
  BeakerIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  LanguageIcon,
  NewspaperIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  SquaresPlusIcon,
  SwatchIcon,
  TableCellsIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline"

export const engagement = [
  {
    id: "1",
    name: "About",
    href: "#",
    icon: InformationCircleIcon,
    title: "Boost your conversion rate",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    description:
      "Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.",
  },
  {
    id: "2",
    title: "How to use search engine optimization to drive sales",
    name: "Customers",
    href: "#",
    icon: UsersIcon,
    date: "Mar 10, 2023",
    datetime: "2023-03-10",
    category: { title: "Customers", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et.",
  },
  {
    id: "3",
    title:
      "Eget velit aliquet sagittis id consectetur. Vitae semper quis lectus nulla at volutpat diam ut.",
    name: "Press",
    href: "#",
    icon: NewspaperIcon,
    date: "Aug 27, 2023",
    datetime: "2023-08-27",
    category: { title: "Press", href: "#" },
    imageUrl: "https://source.unsplash.com/random/?press",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    title: "In massa tempor nec feugiat nisl pretium fusce id velit.",
    name: "Careers",
    href: "#",
    icon: BriefcaseIcon,
    date: "April 9, 2023",
    datetime: "2023-04-9",
    category: { title: "Careers", href: "#" },
    imageUrl: "https://source.unsplash.com/random/?careers",
    description:
      "Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Euismod elementum nisi quis eleifend quam adipiscing.",
  },
  {
    id: "5",
    title: "Ac odio tempor orci dapibus ultrices in iaculis.",
    name: "Privacy",
    href: "#",
    icon: ShieldCheckIcon,
    date: "April 27, 2023",
    datetime: "2023-04-27",
    category: { title: "Privacy", href: "#" },
    imageUrl: "https://source.unsplash.com/random/?privacy",
    description:
      "Nisl rhoncus mattis rhoncus urna neque. Sed enim ut sem viverra.",
  },
  // { id: "3", name: "Press", href: "#", icon: NewspaperIcon },
  // { id: "4", name: "Careers", href: "#", icon: BriefcaseIcon },
  // { id: "5", name: "Privacy", href: "#", icon: ShieldCheckIcon },
]

export const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookOpenIcon },
  { name: "Webinars", href: "#", icon: VideoCameraIcon },
]

export const products = [
  {
    name: "Typography",
    description: "Custom styles for headings, paragraphs, lists, fonts, etc.",
    href: "/typography",
    icon: LanguageIcon,
  },
  {
    name: "Components",
    description: "Accessible and customizable components.",
    href: "/components",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Colors",
    description: "Custom default color palette for your project.",
    href: "/colors",
    icon: SwatchIcon,
  },
  {
    name: "Forms",
    description: "Full featured secure forms.",
    href: "/forms",
    icon: TableCellsIcon,
  },
]

export const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
]
