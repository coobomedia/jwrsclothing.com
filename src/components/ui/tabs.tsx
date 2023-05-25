"use client"

import { Tab } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

const tabs = [
  { name: "My Account", href: "#", current: true },
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: false },
  { name: "Billing", href: "#", current: false },
]

export default function Tabs() {
  return (
    <Tab.Group as="div">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-accent-300 focus:border-primary-500 focus:ring-primary-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <Tab.List
          as="nav"
          className="isolate flex divide-x divide-accent-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <Tab
              key={tab.name}
              className={cn(
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white p-4 text-center text-sm font-medium hover:bg-accent-50 focus:z-10 ui-selected:text-accent-900 ui-selected:hover:text-accent-700 ui-not-selected:text-accent-500"
              )}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className="test absolute inset-x-0 bottom-0 h-0.5 ui-selected:bg-primary-500 ui-not-selected:bg-transparent"
              />
            </Tab>
          ))}
        </Tab.List>
      </div>
      <AnimatePresence mode="wait">
        <Tab.Panels className="mt-10">
          <Tab.Panel
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Content 1
          </Tab.Panel>
          <Tab.Panel
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Content 2
          </Tab.Panel>
          <Tab.Panel
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Content 3
          </Tab.Panel>
          <Tab.Panel
            as={motion.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Content 4
          </Tab.Panel>
        </Tab.Panels>
      </AnimatePresence>
    </Tab.Group>
  )
}
