"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



import GradientMain from "@/assets/images/GradientMain.svg";


const mobileApp: { title: string; href: string; description: string }[] = [
  {
    title: "ToDo Mate",
    href: "/docs/primitives/alert-dialog",
    description:
      "Allows users to manage and share their ToDo's with their friends.",
  },
  {
    title: "Budget Mate",
    href: "/docs/primitives/hover-card",
    description:
      "Budgeting companion that let's users keep track of their expenses.",
  },
  {
    title: "Coming Soon...",
    href: "/docs/primitives/progress",
    description:
      "This app is currently under development, stay tuned!",
  },
  {
    title: "Coming Soon...",
    href: "/docs/primitives/progress",
    description:
    "This app is currently under development, stay tuned!",
  },
  {
    title: "Coming Soon...",
    href: "/docs/primitives/progress",
    description:
    "This app is currently under development, stay tuned!",
  },
  {
    title: "Coming Soon...",
    href: "/docs/primitives/progress",
    description:
    "This app is currently under development, stay tuned!",
  },
]

const webApp: { title: string; href: string; description: string }[] = [
  {
    title: "Marcel Camps",
    href: "/docs/primitives/alert-dialog",
    description:
      "The sculpture of Marcel Camps expresses the experiences and feelings that arise as a reflection of human relationships with his environment.",
  },
  {
    title: "Budget Mate Website",
    href: "/docs/primitives/hover-card",
    description:
      "Showcasing the Budget Mate app and its features.",
  },
]

export default function NavigationMenuDemo() {
  return (
    
    <div className="flex">
      <header className="flex-shrink-0 p-4 w-40 flex flex-col items-center justify-center">
        <h1 className="font-bold">MateSuite</h1>
      </header>
      <NavigationMenu className="">
        <NavigationMenuList className="flex-grow">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md from-red-300 via-red-500 to-orange-300 hover:from-red-400 hover:via-red-500 hover:to-orange-400"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-bold text-white">
                        MateSuite
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground text-white	" >
                        Beautifully designed mobile applications using React Native, Expo and Firebase.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Overview">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Mobile Applications</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {mobileApp.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Web Applications</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {webApp.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"