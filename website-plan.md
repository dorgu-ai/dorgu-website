- simple webapp explaining what dorgu does, the dorgu operator, cli and the platform. 
- Some diagram or images for better visualization of the project or cards explaining the features of the project. 
- Links to the open-source repos of dorgu and dorgu-operator
- A waitlist for the user to sign-up
  - the waitlist will contain a curated questionaire for better understanding the user
  - understanding their needs and use case
  - this should be easy to fill within 2-5 mins
  - last part of the waitlist will ask the user for their email and phone
  - this will be a form with step by step question and the last 2 questions being the users email and phone. 
- Use the relevant skill/agents to get the work done and the market research, from /home/poklinho/coding-practices/claude-skills, deep-research, starup skills if needed.
- We'll be using shadcn for componenets and 21stdev for animations. Some of the animations i liked i listed below for use if needed
- Documentation: https://dorguai.mintlify.app/

Theme css:
:root {
  --card: #fcfcfc;
  --ring: #644a40;
  --input: #d8d8d8;
  --muted: #efefef;
  --accent: #e8e8e8;
  --border: #d8d8d8;
  --radius: 0.5rem;
  --chart-1: #644a40;
  --chart-2: #ffdfb5;
  --chart-3: #e8e8e8;
  --chart-4: #ffe6c4;
  --chart-5: #66493e;
  --popover: #fcfcfc;
  --primary: #644a40;
  --sidebar: #fbfbfb;
  --secondary: #ffdfb5;
  --background: #f9f9f9;
  --foreground: #202020;
  --destructive: #e54d2e;
  --sidebar-ring: #b5b5b5;
  --sidebar-accent: #f7f7f7;
  --sidebar-border: #ebebeb;
  --card-foreground: #202020;
  --sidebar-primary: #343434;
  --muted-foreground: #646464;
  --accent-foreground: #202020;
  --popover-foreground: #202020;
  --primary-foreground: #ffffff;
  --sidebar-foreground: #252525;
  --secondary-foreground: #582d1d;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #343434;
  --sidebar-primary-foreground: #fbfbfb;
}

.dark {
  --card: #191919;
  --ring: #ffe0c2;
  --input: #484848;
  --muted: #222222;
  --accent: #2a2a2a;
  --border: #201e18;
  --radius: 0.5rem;
  --chart-1: #ffe0c2;
  --chart-2: #393028;
  --chart-3: #2a2a2a;
  --chart-4: #42382e;
  --chart-5: #ffe0c1;
  --popover: #191919;
  --primary: #ffe0c2;
  --sidebar: #18181b;
  --secondary: #393028;
  --background: #111111;
  --foreground: #eeeeee;
  --destructive: #e54d2e;
  --sidebar-ring: #d4d4d8;
  --sidebar-accent: #27272a;
  --sidebar-border: #27272a;
  --card-foreground: #eeeeee;
  --sidebar-primary: #1d4ed8;
  --muted-foreground: #b4b4b4;
  --accent-foreground: #eeeeee;
  --popover-foreground: #eeeeee;
  --primary-foreground: #081a1b;
  --sidebar-foreground: #f4f4f5;
  --secondary-foreground: #ffe0c2;
  --destructive-foreground: #ffffff;
  --sidebar-accent-foreground: #f4f4f5;
  --sidebar-primary-foreground: #ffffff;
}

@theme inline {
  --color-card: var(--card);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-border: var(--border);
  --color-radius: var(--radius);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-popover: var(--popover);
  --color-primary: var(--primary);
  --color-sidebar: var(--sidebar);
  --color-secondary: var(--secondary);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-destructive: var(--destructive);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-border: var(--sidebar-border);
  --color-card-foreground: var(--card-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent-foreground: var(--accent-foreground);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary-foreground: var(--primary-foreground);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
}

Animations from 21stdev
You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
bento-grid.tsx
"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 2,
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    },
];

function BentoGrid({ items = itemsSample }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
                        "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
                                item.hasPersistentHover,
                            "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
                                {item.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                                    "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300",
                                    "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                                )}
                            >
                                {item.status || "Active"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
                                {item.title}
                                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }


demo.tsx
import { BentoGrid, type BentoItems } from "@/components/ui/bento-grid"
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";


const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 2,
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    },
];

function BentoGridDemo() {
    return <BentoGrid items={itemsSample} />
}

export { BentoGridDemo }
```

Install NPM dependencies:
```bash
lucide-react
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them

 
 
 
 You are given a task to integrate an existing React component in the codebase
 
 The codebase should support:
 - shadcn project structure  
 - Tailwind CSS
 - Typescript
 
 If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
 
 Determine the default path for components and styles. 
 If default path for components is not /components/ui, provide instructions on why it's important to create this folder
 Copy-paste this component to /components/ui folder:
 ```tsx
 hero-section-1.tsx
 import React from 'react'
 import Link from 'next/link'
 import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
 import { Button } from '@/components/ui/button'
 import { AnimatedGroup } from '@/components/ui/animated-group'
 import { cn } from '@/lib/utils'
 
 const transitionVariants = {
     item: {
         hidden: {
             opacity: 0,
             filter: 'blur(12px)',
             y: 12,
         },
         visible: {
             opacity: 1,
             filter: 'blur(0px)',
             y: 0,
             transition: {
                 type: 'spring',
                 bounce: 0.3,
                 duration: 1.5,
             },
         },
     },
 }
 
 export function HeroSection() {
     return (
         <>
             <HeroHeader />
             <main className="overflow-hidden">
                 <div
                     aria-hidden
                     className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                     <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                     <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                     <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                 </div>
                 <section>
                     <div className="relative pt-24 md:pt-36">
                         <AnimatedGroup
                             variants={{
                                 container: {
                                     visible: {
                                         transition: {
                                             delayChildren: 1,
                                         },
                                     },
                                 },
                                 item: {
                                     hidden: {
                                         opacity: 0,
                                         y: 20,
                                     },
                                     visible: {
                                         opacity: 1,
                                         y: 0,
                                         transition: {
                                             type: 'spring',
                                             bounce: 0.3,
                                             duration: 2,
                                         },
                                     },
                                 },
                             }}
                             className="absolute inset-0 -z-20">
                             <img
                                 src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                 alt="background"
                                 className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                 width="3276"
                                 height="4095"
                             />
                         </AnimatedGroup>
                         <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                         <div className="mx-auto max-w-7xl px-6">
                             <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                 <AnimatedGroup variants={transitionVariants}>
                                     <Link
                                         href="#link"
                                         className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                         <span className="text-foreground text-sm">Introducing Support for AI Models</span>
                                         <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
 
                                         <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                             <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                 <span className="flex size-6">
                                                     <ArrowRight className="m-auto size-3" />
                                                 </span>
                                                 <span className="flex size-6">
                                                     <ArrowRight className="m-auto size-3" />
                                                 </span>
                                             </div>
                                         </div>
                                     </Link>
                         
                                     <h1
                                         className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                         Modern Solutions for Customer Engagement
                                     </h1>
                                     <p
                                         className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                         Highly customizable components for building modern websites and applications that look and feel the way you mean it.
                                     </p>
                                 </AnimatedGroup>
 
                                 <AnimatedGroup
                                     variants={{
                                         container: {
                                             visible: {
                                                 transition: {
                                                     staggerChildren: 0.05,
                                                     delayChildren: 0.75,
                                                 },
                                             },
                                         },
                                         ...transitionVariants,
                                     }}
                                     className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                     <div
                                         key={1}
                                         className="bg-foreground/10 rounded-[14px] border p-0.5">
                                         <Button
                                             asChild
                                             size="lg"
                                             className="rounded-xl px-5 text-base">
                                             <Link href="#link">
                                                 <span className="text-nowrap">Start Building</span>
                                             </Link>
                                         </Button>
                                     </div>
                                     <Button
                                         key={2}
                                         asChild
                                         size="lg"
                                         variant="ghost"
                                         className="h-10.5 rounded-xl px-5">
                                         <Link href="#link">
                                             <span className="text-nowrap">Request a demo</span>
                                         </Link>
                                     </Button>
                                 </AnimatedGroup>
                             </div>
                         </div>
 
                         <AnimatedGroup
                             variants={{
                                 container: {
                                     visible: {
                                         transition: {
                                             staggerChildren: 0.05,
                                             delayChildren: 0.75,
                                         },
                                     },
                                 },
                                 ...transitionVariants,
                             }}>
                             <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                 <div
                                     aria-hidden
                                     className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                 />
                                 <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                     <img
                                         className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                         src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                                         alt="app screen"
                                         width="2700"
                                         height="1440"
                                     />
                                     <img
                                         className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                         src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                                         alt="app screen"
                                         width="2700"
                                         height="1440"
                                     />
                                 </div>
                             </div>
                         </AnimatedGroup>
                     </div>
                 </section>
                 <section className="bg-background pb-16 pt-16 md:pb-32">
                     <div className="group relative m-auto max-w-5xl px-6">
                         <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                             <Link
                                 href="/"
                                 className="block text-sm duration-150 hover:opacity-75">
                                 <span> Meet Our Customers</span>
 
                                 <ChevronRight className="ml-1 inline-block size-3" />
                             </Link>
                         </div>
                         <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                             <div className="flex">
                                 <img
                                     className="mx-auto h-5 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                     alt="Nvidia Logo"
                                     height="20"
                                     width="auto"
                                 />
                             </div>
 
                             <div className="flex">
                                 <img
                                     className="mx-auto h-4 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/column.svg"
                                     alt="Column Logo"
                                     height="16"
                                     width="auto"
                                 />
                             </div>
                             <div className="flex">
                                 <img
                                     className="mx-auto h-4 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/github.svg"
                                     alt="GitHub Logo"
                                     height="16"
                                     width="auto"
                                 />
                             </div>
                             <div className="flex">
                                 <img
                                     className="mx-auto h-5 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/nike.svg"
                                     alt="Nike Logo"
                                     height="20"
                                     width="auto"
                                 />
                             </div>
                             <div className="flex">
                                 <img
                                     className="mx-auto h-5 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                     alt="Lemon Squeezy Logo"
                                     height="20"
                                     width="auto"
                                 />
                             </div>
                             <div className="flex">
                                 <img
                                     className="mx-auto h-4 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/laravel.svg"
                                     alt="Laravel Logo"
                                     height="16"
                                     width="auto"
                                 />
                             </div>
                             <div className="flex">
                                 <img
                                     className="mx-auto h-7 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/lilly.svg"
                                     alt="Lilly Logo"
                                     height="28"
                                     width="auto"
                                 />
                             </div>
 
                             <div className="flex">
                                 <img
                                     className="mx-auto h-6 w-fit dark:invert"
                                     src="https://html.tailus.io/blocks/customers/openai.svg"
                                     alt="OpenAI Logo"
                                     height="24"
                                     width="auto"
                                 />
                             </div>
                         </div>
                     </div>
                 </section>
             </main>
         </>
     )
 }
 
 const menuItems = [
     { name: 'Features', href: '#link' },
     { name: 'Solution', href: '#link' },
     { name: 'Pricing', href: '#link' },
     { name: 'About', href: '#link' },
 ]
 
 const HeroHeader = () => {
     const [menuState, setMenuState] = React.useState(false)
     const [isScrolled, setIsScrolled] = React.useState(false)
 
     React.useEffect(() => {
         const handleScroll = () => {
             setIsScrolled(window.scrollY > 50)
         }
         window.addEventListener('scroll', handleScroll)
         return () => window.removeEventListener('scroll', handleScroll)
     }, [])
     return (
         <header>
             <nav
                 data-state={menuState && 'active'}
                 className="fixed z-20 w-full px-2 group">
                 <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                     <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                         <div className="flex w-full justify-between lg:w-auto">
                             <Link
                                 href="/"
                                 aria-label="home"
                                 className="flex items-center space-x-2">
                                 <Logo />
                             </Link>
 
                             <button
                                 onClick={() => setMenuState(!menuState)}
                                 aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                 className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                 <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                 <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                             </button>
                         </div>
 
                         <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                             <ul className="flex gap-8 text-sm">
                                 {menuItems.map((item, index) => (
                                     <li key={index}>
                                         <Link
                                             href={item.href}
                                             className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                             <span>{item.name}</span>
                                         </Link>
                                     </li>
                                 ))}
                             </ul>
                         </div>
 
                         <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                             <div className="lg:hidden">
                                 <ul className="space-y-6 text-base">
                                     {menuItems.map((item, index) => (
                                         <li key={index}>
                                             <Link
                                                 href={item.href}
                                                 className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                 <span>{item.name}</span>
                                             </Link>
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                 <Button
                                     asChild
                                     variant="outline"
                                     size="sm"
                                     className={cn(isScrolled && 'lg:hidden')}>
                                     <Link href="#">
                                         <span>Login</span>
                                     </Link>
                                 </Button>
                                 <Button
                                     asChild
                                     size="sm"
                                     className={cn(isScrolled && 'lg:hidden')}>
                                     <Link href="#">
                                         <span>Sign Up</span>
                                     </Link>
                                 </Button>
                                 <Button
                                     asChild
                                     size="sm"
                                     className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                     <Link href="#">
                                         <span>Get Started</span>
                                     </Link>
                                 </Button>
                             </div>
                         </div>
                     </div>
                 </div>
             </nav>
         </header>
     )
 }
 
 const Logo = ({ className }: { className?: string }) => {
     return (
         <svg
             viewBox="0 0 78 18"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             className={cn('h-5 w-auto', className)}>
             <path
                 d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                 fill="url(#logo-gradient)"
             />
             <path
                 d="M27.06 7.054V12.239C27.06 12.5903 27.1393 12.8453 27.298 13.004C27.468 13.1513 27.7513 13.225 28.148 13.225H29.338V14.84H27.808C26.9353 14.84 26.2667 14.636 25.802 14.228C25.3373 13.82 25.105 13.157 25.105 12.239V7.054H24V5.473H25.105V3.144H27.06V5.473H29.338V7.054H27.06ZM30.4782 10.114C30.4782 9.17333 30.6709 8.34033 31.0562 7.615C31.4529 6.88967 31.9855 6.32867 32.6542 5.932C33.3342 5.524 34.0822 5.32 34.8982 5.32C35.6349 5.32 36.2752 5.46733 36.8192 5.762C37.3745 6.04533 37.8165 6.40233 38.1452 6.833V5.473H40.1002V14.84H38.1452V13.446C37.8165 13.888 37.3689 14.2563 36.8022 14.551C36.2355 14.8457 35.5895 14.993 34.8642 14.993C34.0595 14.993 33.3229 14.789 32.6542 14.381C31.9855 13.9617 31.4529 13.3837 31.0562 12.647C30.6709 11.899 30.4782 11.0547 30.4782 10.114ZM38.1452 10.148C38.1452 9.502 38.0092 8.941 37.7372 8.465C37.4765 7.989 37.1309 7.62633 36.7002 7.377C36.2695 7.12767 35.8049 7.003 35.3062 7.003C34.8075 7.003 34.3429 7.12767 33.9122 7.377C33.4815 7.615 33.1302 7.972 32.8582 8.448C32.5975 8.91267 32.4672 9.468 32.4672 10.114C32.4672 10.76 32.5975 11.3267 32.8582 11.814C33.1302 12.3013 33.4815 12.6753 33.9122 12.936C34.3542 13.1853 34.8189 13.31 35.3062 13.31C35.8049 13.31 36.2695 13.1853 36.7002 12.936C37.1309 12.6867 37.4765 12.324 37.7372 11.848C38.0092 11.3607 38.1452 10.794 38.1452 10.148ZM43.6317 4.232C43.2803 4.232 42.9857 4.113 42.7477 3.875C42.5097 3.637 42.3907 3.34233 42.3907 2.991C42.3907 2.63967 42.5097 2.345 42.7477 2.107C42.9857 1.869 43.2803 1.75 43.6317 1.75C43.9717 1.75 44.2607 1.869 44.4987 2.107C44.7367 2.345 44.8557 2.63967 44.8557 2.991C44.8557 3.34233 44.7367 3.637 44.4987 3.875C44.2607 4.113 43.9717 4.232 43.6317 4.232ZM44.5837 5.473V14.84H42.6457V5.473H44.5837ZM49.0661 2.26V14.84H47.1281V2.26H49.0661ZM50.9645 10.114C50.9645 9.17333 51.1572 8.34033 51.5425 7.615C51.9392 6.88967 52.4719 6.32867 53.1405 5.932C53.8205 5.524 54.5685 5.32 55.3845 5.32C56.1212 5.32 56.7615 5.46733 57.3055 5.762C57.8609 6.04533 58.3029 6.40233 58.6315 6.833V5.473H60.5865V14.84H58.6315V13.446C58.3029 13.888 57.8552 14.2563 57.2885 14.551C56.7219 14.8457 56.0759 14.993 55.3505 14.993C54.5459 14.993 53.8092 14.789 53.1405 14.381C52.4719 13.9617 51.9392 13.3837 51.5425 12.647C51.1572 11.899 50.9645 11.0547 50.9645 10.114ZM58.6315 10.148C58.6315 9.502 58.4955 8.941 58.2235 8.465C57.9629 7.989 57.6172 7.62633 57.1865 7.377C56.7559 7.12767 56.2912 7.003 55.7925 7.003C55.2939 7.003 54.8292 7.12767 54.3985 7.377C53.9679 7.615 53.6165 7.972 53.3445 8.448C53.0839 8.91267 52.9535 9.468 52.9535 10.114C52.9535 10.76 53.0839 11.3267 53.3445 11.814C53.6165 12.3013 53.9679 12.6753 54.3985 12.936C54.8405 13.1853 55.3052 13.31 55.7925 13.31C56.2912 13.31 56.7559 13.1853 57.1865 12.936C57.6172 12.6867 57.9629 12.324 58.2235 11.848C58.4955 11.3607 58.6315 10.794 58.6315 10.148ZM65.07 6.833C65.3533 6.357 65.7273 5.98867 66.192 5.728C66.668 5.456 67.229 5.32 67.875 5.32V7.326H67.382C66.6227 7.326 66.0447 7.51867 65.648 7.904C65.2627 8.28933 65.07 8.958 65.07 9.91V14.84H63.132V5.473H65.07V6.833ZM73.3624 10.165L77.6804 14.84H75.0624L71.5944 10.811V14.84H69.6564V2.26H71.5944V9.57L74.9944 5.473H77.6804L73.3624 10.165Z"
                 fill="currentColor"
             />
             <defs>
                 <linearGradient
                     id="logo-gradient"
                     x1="10"
                     y1="0"
                     x2="10"
                     y2="20"
                     gradientUnits="userSpaceOnUse">
                     <stop stopColor="#9B99FE" />
                     <stop
                         offset="1"
                         stopColor="#2BC8B7"
                     />
                 </linearGradient>
             </defs>
         </svg>
     )
 }
 
 demo.tsx
 import { HeroSection } from "@/components/blocks/hero-section-1"
 
 export function Demo (){
     return (
         <HeroSection />
     )
 }
 ```
 
 Copy-paste these files for dependencies:
 ```tsx
 shadcn/button
 import * as React from "react"
 import { Slot } from "@radix-ui/react-slot"
 import { cva, type VariantProps } from "class-variance-authority"
 
 import { cn } from "@/lib/utils"
 
 const buttonVariants = cva(
   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
   {
     variants: {
       variant: {
         default: "bg-primary text-primary-foreground hover:bg-primary/90",
         destructive:
           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
         outline:
           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
         secondary:
           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
         ghost: "hover:bg-accent hover:text-accent-foreground",
         link: "text-primary underline-offset-4 hover:underline",
       },
       size: {
         default: "h-10 px-4 py-2",
         sm: "h-9 rounded-md px-3",
         lg: "h-11 rounded-md px-8",
         icon: "h-10 w-10",
       },
     },
     defaultVariants: {
       variant: "default",
       size: "default",
     },
   },
 )
 
 export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
     VariantProps<typeof buttonVariants> {
   asChild?: boolean
 }
 
 const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, ...props }, ref) => {
     const Comp = asChild ? Slot : "button"
     return (
       <Comp
         className={cn(buttonVariants({ variant, size, className }))}
         ref={ref}
         {...props}
       />
     )
   },
 )
 Button.displayName = "Button"
 
 export { Button, buttonVariants }
 
 ```
 ```tsx
 ibelick/text-effect
 'use client';
 
 import { cn } from '@/lib/utils';
 import {
   AnimatePresence,
   motion,
   TargetAndTransition,
   Variants,
 } from 'framer-motion';
 import React from 'react';
 
 type PresetType = 'blur' | 'shake' | 'scale' | 'fade' | 'slide';
 
 type TextEffectProps = {
   children: string;
   per?: 'word' | 'char' | 'line';
   as?: keyof React.JSX.IntrinsicElements;
   variants?: {
     container?: Variants;
     item?: Variants;
   };
   className?: string;
   preset?: PresetType;
   delay?: number;
   trigger?: boolean;
   onAnimationComplete?: () => void;
   segmentWrapperClassName?: string;
 };
 
 const defaultStaggerTimes: Record<'char' | 'word' | 'line', number> = {
   char: 0.03,
   word: 0.05,
   line: 0.1,
 };
 
 const defaultContainerVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.05,
     },
   },
   exit: {
     transition: { staggerChildren: 0.05, staggerDirection: -1 },
   },
 };
 
 const defaultItemVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
   },
   exit: { opacity: 0 },
 };
 
 const presetVariants: Record<
   PresetType,
   { container: Variants; item: Variants }
 > = {
   blur: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, filter: 'blur(12px)' },
       visible: { opacity: 1, filter: 'blur(0px)' },
       exit: { opacity: 0, filter: 'blur(12px)' },
     },
   },
   shake: {
     container: defaultContainerVariants,
     item: {
       hidden: { x: 0 },
       visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
       exit: { x: 0 },
     },
   },
   scale: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, scale: 0 },
       visible: { opacity: 1, scale: 1 },
       exit: { opacity: 0, scale: 0 },
     },
   },
   fade: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0 },
       visible: { opacity: 1 },
       exit: { opacity: 0 },
     },
   },
   slide: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, y: 20 },
       visible: { opacity: 1, y: 0 },
       exit: { opacity: 0, y: 20 },
     },
   },
 };
 
 const AnimationComponent: React.FC<{
   segment: string;
   variants: Variants;
   per: 'line' | 'word' | 'char';
   segmentWrapperClassName?: string;
 }> = React.memo(({ segment, variants, per, segmentWrapperClassName }) => {
   const content =
     per === 'line' ? (
       <motion.span variants={variants} className='block'>
         {segment}
       </motion.span>
     ) : per === 'word' ? (
       <motion.span
         aria-hidden='true'
         variants={variants}
         className='inline-block whitespace-pre'
       >
         {segment}
       </motion.span>
     ) : (
       <motion.span className='inline-block whitespace-pre'>
         {segment.split('').map((char, charIndex) => (
           <motion.span
             key={`char-${charIndex}`}
             aria-hidden='true'
             variants={variants}
             className='inline-block whitespace-pre'
           >
             {char}
           </motion.span>
         ))}
       </motion.span>
     );
 
   if (!segmentWrapperClassName) {
     return content;
   }
 
   const defaultWrapperClassName = per === 'line' ? 'block' : 'inline-block';
 
   return (
     <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
       {content}
     </span>
   );
 });
 
 AnimationComponent.displayName = 'AnimationComponent';
 
 export function TextEffect({
   children,
   per = 'word',
   as = 'p',
   variants,
   className,
   preset,
   delay = 0,
   trigger = true,
   onAnimationComplete,
   segmentWrapperClassName,
 }: TextEffectProps) {
   let segments: string[];
 
   if (per === 'line') {
     segments = children.split('
 ');
   } else if (per === 'word') {
     segments = children.split(/(\s+)/);
   } else {
     segments = children.split('');
   }
 
   const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
   const selectedVariants = preset
     ? presetVariants[preset]
     : { container: defaultContainerVariants, item: defaultItemVariants };
   const containerVariants = variants?.container || selectedVariants.container;
   const itemVariants = variants?.item || selectedVariants.item;
   const ariaLabel = per === 'line' ? undefined : children;
 
   const stagger = defaultStaggerTimes[per];
 
   const delayedContainerVariants: Variants = {
     hidden: containerVariants.hidden,
     visible: {
       ...containerVariants.visible,
       transition: {
         ...(containerVariants.visible as TargetAndTransition)?.transition,
         staggerChildren:
           (containerVariants.visible as TargetAndTransition)?.transition
             ?.staggerChildren || stagger,
         delayChildren: delay,
       },
     },
     exit: containerVariants.exit,
   };
 
   return (
     <AnimatePresence mode='popLayout'>
       {trigger && (
         <MotionTag
           initial='hidden'
           animate='visible'
           exit='exit'
           aria-label={ariaLabel}
           variants={delayedContainerVariants}
           className={cn('whitespace-pre-wrap', className)}
           onAnimationComplete={onAnimationComplete}
         >
           {segments.map((segment, index) => (
             <AnimationComponent
               key={`${per}-${index}-${segment}`}
               segment={segment}
               variants={itemVariants}
               per={per}
               segmentWrapperClassName={segmentWrapperClassName}
             />
           ))}
         </MotionTag>
       )}
     </AnimatePresence>
   );
 }
 
 ```
 ```tsx
 ibelick/animated-group
 'use client';
 import { ReactNode } from 'react';
 import { motion, Variants } from 'framer-motion';
 import { cn } from '@/lib/utils';
 import React from 'react';
 
 type PresetType =
   | 'fade'
   | 'slide'
   | 'scale'
   | 'blur'
   | 'blur-slide'
   | 'zoom'
   | 'flip'
   | 'bounce'
   | 'rotate'
   | 'swing';
 
 type AnimatedGroupProps = {
   children: ReactNode;
   className?: string;
   variants?: {
     container?: Variants;
     item?: Variants;
   };
   preset?: PresetType;
 };
 
 const defaultContainerVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.1,
     },
   },
 };
 
 const defaultItemVariants: Variants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1 },
 };
 
 const presetVariants: Record<
   PresetType,
   { container: Variants; item: Variants }
 > = {
   fade: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0 },
       visible: { opacity: 1 },
     },
   },
   slide: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, y: 20 },
       visible: { opacity: 1, y: 0 },
     },
   },
   scale: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, scale: 0.8 },
       visible: { opacity: 1, scale: 1 },
     },
   },
   blur: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, filter: 'blur(4px)' },
       visible: { opacity: 1, filter: 'blur(0px)' },
     },
   },
   'blur-slide': {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, filter: 'blur(4px)', y: 20 },
       visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
     },
   },
   zoom: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, scale: 0.5 },
       visible: {
         opacity: 1,
         scale: 1,
         transition: { type: 'spring', stiffness: 300, damping: 20 },
       },
     },
   },
   flip: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, rotateX: -90 },
       visible: {
         opacity: 1,
         rotateX: 0,
         transition: { type: 'spring', stiffness: 300, damping: 20 },
       },
     },
   },
   bounce: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, y: -50 },
       visible: {
         opacity: 1,
         y: 0,
         transition: { type: 'spring', stiffness: 400, damping: 10 },
       },
     },
   },
   rotate: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, rotate: -180 },
       visible: {
         opacity: 1,
         rotate: 0,
         transition: { type: 'spring', stiffness: 200, damping: 15 },
       },
     },
   },
   swing: {
     container: defaultContainerVariants,
     item: {
       hidden: { opacity: 0, rotate: -10 },
       visible: {
         opacity: 1,
         rotate: 0,
         transition: { type: 'spring', stiffness: 300, damping: 8 },
       },
     },
   },
 };
 
 function AnimatedGroup({
   children,
   className,
   variants,
   preset,
 }: AnimatedGroupProps) {
   const selectedVariants = preset
     ? presetVariants[preset]
     : { container: defaultContainerVariants, item: defaultItemVariants };
   const containerVariants = variants?.container || selectedVariants.container;
   const itemVariants = variants?.item || selectedVariants.item;
 
   return (
     <motion.div
       initial='hidden'
       animate='visible'
       variants={containerVariants}
       className={cn(className)}
     >
       {React.Children.map(children, (child, index) => (
         <motion.div key={index} variants={itemVariants}>
           {child}
         </motion.div>
       ))}
     </motion.div>
   );
 }
 
 export { AnimatedGroup };
 
 ```
 
 Install NPM dependencies:
 ```bash
 lucide-react, @radix-ui/react-slot, class-variance-authority, framer-motion
 ```
 
 Implementation Guidelines
  1. Analyze the component structure and identify all required dependencies
  2. Review the component's argumens and state
  3. Identify any required context providers or hooks and install them
  4. Questions to Ask
  - What data/props will be passed to this component?
  - Are there any specific state management requirements?
  - Are there any required assets (images, icons, etc.)?
  - What is the expected responsive behavior?
  - What is the best place to use this component in the app?
 
 Steps to integrate
  0. Copy paste all the code above in the correct directories
  1. Install external dependencies
  2. Fill image assets with Unsplash stock images you know exist
  3. Use lucide-react icons for svgs or logos if component requires them

  
  You are given a task to integrate an existing React component in the codebase
  
  The codebase should support:
  - shadcn project structure  
  - Tailwind CSS
  - Typescript
  
  If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
  
  Determine the default path for components and styles. 
  If default path for components is not /components/ui, provide instructions on why it's important to create this folder
  Copy-paste this component to /components/ui folder:
  ```tsx
  tubelight-navbar.tsx
  "use client"
  
  import React, { useEffect, useState } from "react"
  import { motion } from "framer-motion"
  import Link from "next/link"
  import { LucideIcon } from "lucide-react"
  import { cn } from "@/lib/utils"
  
  interface NavItem {
    name: string
    url: string
    icon: LucideIcon
  }
  
  interface NavBarProps {
    items: NavItem[]
    className?: string
  }
  
  export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }
  
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  
    return (
      <div
        className={cn(
          "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
          className,
        )}
      >
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
  
            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
  
  
  demo.tsx
  import { Home, User, Briefcase, FileText } from 'lucide-react'
  import { NavBar } from "@/components/ui/tubelight-navbar"
  
  export function NavBarDemo() {
    const navItems = [
      { name: 'Home', url: '#', icon: Home },
      { name: 'About', url: '#', icon: User },
      { name: 'Projects', url: '#', icon: Briefcase },
      { name: 'Resume', url: '#', icon: FileText }
    ]
  
    return <NavBar items={navItems} />
  }
  ```
  
  Install NPM dependencies:
  ```bash
  lucide-react, framer-motion
  ```
  
  Implementation Guidelines
   1. Analyze the component structure and identify all required dependencies
   2. Review the component's argumens and state
   3. Identify any required context providers or hooks and install them
   4. Questions to Ask
   - What data/props will be passed to this component?
   - Are there any specific state management requirements?
   - Are there any required assets (images, icons, etc.)?
   - What is the expected responsive behavior?
   - What is the best place to use this component in the app?
  
  Steps to integrate
   0. Copy paste all the code above in the correct directories
   1. Install external dependencies
   2. Fill image assets with Unsplash stock images you know exist
   3. Use lucide-react icons for svgs or logos if component requires them

   
   You are given a task to integrate an existing React component in the codebase
   
   The codebase should support:
   - shadcn project structure  
   - Tailwind CSS
   - Typescript
   
   If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
   
   Determine the default path for components and styles. 
   If default path for components is not /components/ui, provide instructions on why it's important to create this folder
   Copy-paste this component to /components/ui folder:
   ```tsx
   tubelight-navbar.tsx
   "use client"
   
   import React, { useEffect, useState } from "react"
   import { motion } from "framer-motion"
   import Link from "next/link"
   import { LucideIcon } from "lucide-react"
   import { cn } from "@/lib/utils"
   
   interface NavItem {
     name: string
     url: string
     icon: LucideIcon
   }
   
   interface NavBarProps {
     items: NavItem[]
     className?: string
   }
   
   export function NavBar({ items, className }: NavBarProps) {
     const [activeTab, setActiveTab] = useState(items[0].name)
     const [isMobile, setIsMobile] = useState(false)
   
     useEffect(() => {
       const handleResize = () => {
         setIsMobile(window.innerWidth < 768)
       }
   
       handleResize()
       window.addEventListener("resize", handleResize)
       return () => window.removeEventListener("resize", handleResize)
     }, [])
   
     return (
       <div
         className={cn(
           "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
           className,
         )}
       >
         <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
           {items.map((item) => {
             const Icon = item.icon
             const isActive = activeTab === item.name
   
             return (
               <Link
                 key={item.name}
                 href={item.url}
                 onClick={() => setActiveTab(item.name)}
                 className={cn(
                   "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                   "text-foreground/80 hover:text-primary",
                   isActive && "bg-muted text-primary",
                 )}
               >
                 <span className="hidden md:inline">{item.name}</span>
                 <span className="md:hidden">
                   <Icon size={18} strokeWidth={2.5} />
                 </span>
                 {isActive && (
                   <motion.div
                     layoutId="lamp"
                     className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                     initial={false}
                     transition={{
                       type: "spring",
                       stiffness: 300,
                       damping: 30,
                     }}
                   >
                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                       <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                       <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                       <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                     </div>
                   </motion.div>
                 )}
               </Link>
             )
           })}
         </div>
       </div>
     )
   }
   
   
   demo.tsx
   import { Home, User, Briefcase, FileText } from 'lucide-react'
   import { NavBar } from "@/components/ui/tubelight-navbar"
   
   export function NavBarDemo() {
     const navItems = [
       { name: 'Home', url: '#', icon: Home },
       { name: 'About', url: '#', icon: User },
       { name: 'Projects', url: '#', icon: Briefcase },
       { name: 'Resume', url: '#', icon: FileText }
     ]
   
     return <NavBar items={navItems} />
   }
   ```
   
   Install NPM dependencies:
   ```bash
   lucide-react, framer-motion
   ```
   
   Implementation Guidelines
    1. Analyze the component structure and identify all required dependencies
    2. Review the component's argumens and state
    3. Identify any required context providers or hooks and install them
    4. Questions to Ask
    - What data/props will be passed to this component?
    - Are there any specific state management requirements?
    - Are there any required assets (images, icons, etc.)?
    - What is the expected responsive behavior?
    - What is the best place to use this component in the app?
   
   Steps to integrate
    0. Copy paste all the code above in the correct directories
    1. Install external dependencies
    2. Fill image assets with Unsplash stock images you know exist
    3. Use lucide-react icons for svgs or logos if component requires them


You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
footer-section.tsx
'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Testimonials', href: '#testimonials' },
			{ title: 'Integration', href: '/' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/faqs' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Brand', href: '/brand' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<FrameIcon className="size-8" />
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} Asme. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

demo.tsx
import { Footer } from '@/components/ui/footer-section';

export default function DemoOne() {
	return (
		<div className="relative flex min-h-svh flex-col">
			<div className="min-h-screen flex items-center justify-center">
				<h1 className='font-mono text-2xl font-bold'>Scrool Down!</h1>
			</div>
			<Footer />
		</div>
	);
}

```

Install NPM dependencies:
```bash
motion, lucide-react
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them

 
 
 You are given a task to integrate an existing React component in the codebase
 
 The codebase should support:
 - shadcn project structure  
 - Tailwind CSS
 - Typescript
 
 If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
 
 Determine the default path for components and styles. 
 If default path for components is not /components/ui, provide instructions on why it's important to create this folder
 Copy-paste this component to /components/ui folder:
 ```tsx
 glowing-effect.tsx
 "use client";
 
 import { memo, useCallback, useEffect, useRef } from "react";
 import { cn } from "@/lib/utils";
 import { animate } from "motion/react";
 
 interface GlowingEffectProps {
   blur?: number;
   inactiveZone?: number;
   proximity?: number;
   spread?: number;
   variant?: "default" | "white";
   glow?: boolean;
   className?: string;
   disabled?: boolean;
   movementDuration?: number;
   borderWidth?: number;
 }
 const GlowingEffect = memo(
   ({
     blur = 0,
     inactiveZone = 0.7,
     proximity = 0,
     spread = 20,
     variant = "default",
     glow = false,
     className,
     movementDuration = 2,
     borderWidth = 1,
     disabled = true,
   }: GlowingEffectProps) => {
     const containerRef = useRef<HTMLDivElement>(null);
     const lastPosition = useRef({ x: 0, y: 0 });
     const animationFrameRef = useRef<number>(0);
 
     const handleMove = useCallback(
       (e?: MouseEvent | { x: number; y: number }) => {
         if (!containerRef.current) return;
 
         if (animationFrameRef.current) {
           cancelAnimationFrame(animationFrameRef.current);
         }
 
         animationFrameRef.current = requestAnimationFrame(() => {
           const element = containerRef.current;
           if (!element) return;
 
           const { left, top, width, height } = element.getBoundingClientRect();
           const mouseX = e?.x ?? lastPosition.current.x;
           const mouseY = e?.y ?? lastPosition.current.y;
 
           if (e) {
             lastPosition.current = { x: mouseX, y: mouseY };
           }
 
           const center = [left + width * 0.5, top + height * 0.5];
           const distanceFromCenter = Math.hypot(
             mouseX - center[0],
             mouseY - center[1]
           );
           const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;
 
           if (distanceFromCenter < inactiveRadius) {
             element.style.setProperty("--active", "0");
             return;
           }
 
           const isActive =
             mouseX > left - proximity &&
             mouseX < left + width + proximity &&
             mouseY > top - proximity &&
             mouseY < top + height + proximity;
 
           element.style.setProperty("--active", isActive ? "1" : "0");
 
           if (!isActive) return;
 
           const currentAngle =
             parseFloat(element.style.getPropertyValue("--start")) || 0;
           let targetAngle =
             (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
               Math.PI +
             90;
 
           const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
           const newAngle = currentAngle + angleDiff;
 
           animate(currentAngle, newAngle, {
             duration: movementDuration,
             ease: [0.16, 1, 0.3, 1],
             onUpdate: (value) => {
               element.style.setProperty("--start", String(value));
             },
           });
         });
       },
       [inactiveZone, proximity, movementDuration]
     );
 
     useEffect(() => {
       if (disabled) return;
 
       const handleScroll = () => handleMove();
       const handlePointerMove = (e: PointerEvent) => handleMove(e);
 
       window.addEventListener("scroll", handleScroll, { passive: true });
       document.body.addEventListener("pointermove", handlePointerMove, {
         passive: true,
       });
 
       return () => {
         if (animationFrameRef.current) {
           cancelAnimationFrame(animationFrameRef.current);
         }
         window.removeEventListener("scroll", handleScroll);
         document.body.removeEventListener("pointermove", handlePointerMove);
       };
     }, [handleMove, disabled]);
 
     return (
       <>
         <div
           className={cn(
             "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
             glow && "opacity-100",
             variant === "white" && "border-white",
             disabled && "!block"
           )}
         />
         <div
           ref={containerRef}
           style={
             {
               "--blur": `${blur}px`,
               "--spread": spread,
               "--start": "0",
               "--active": "0",
               "--glowingeffect-border-width": `${borderWidth}px`,
               "--repeating-conic-gradient-times": "5",
               "--gradient":
                 variant === "white"
                   ? `repeating-conic-gradient(
                   from 236.84deg at 50% 50%,
                   var(--black),
                   var(--black) calc(25% / var(--repeating-conic-gradient-times))
                 )`
                   : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                 radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                 radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                 radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                 repeating-conic-gradient(
                   from 236.84deg at 50% 50%,
                   #dd7bbb 0%,
                   #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                   #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                   #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                   #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                 )`,
             } as React.CSSProperties
           }
           className={cn(
             "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
             glow && "opacity-100",
             blur > 0 && "blur-[var(--blur)] ",
             className,
             disabled && "!hidden"
           )}
         >
           <div
             className={cn(
               "glow",
               "rounded-[inherit]",
               'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
               "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
               "after:[background:var(--gradient)] after:[background-attachment:fixed]",
               "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
               "after:[mask-clip:padding-box,border-box]",
               "after:[mask-composite:intersect]",
               "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
             )}
           />
         </div>
       </>
     );
   }
 );
 
 GlowingEffect.displayName = "GlowingEffect";
 
 export { GlowingEffect };
 
 
 demo.tsx
 "use client";
 
 import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
 import { GlowingEffect } from "@/components/ui/glowing-effect";
 import { cn } from "@/lib/utils";
 
 export function GlowingEffectDemo() {
   return (
     <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
       <GridItem
         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
         icon={<Box className="h-4 w-4" />}
         title="Do things the right way"
         description="Running out of copy so I'll write anything."
       />
       <GridItem
         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
         icon={<Settings className="h-4 w-4" />}
         title="The best AI code editor ever."
         description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
       />
       <GridItem
         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
         icon={<Lock className="h-4 w-4" />}
         title="You should buy Aceternity UI Pro"
         description="It's the best money you'll ever spend"
       />
       <GridItem
         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
         icon={<Sparkles className="h-4 w-4" />}
         title="This card is also built by Cursor"
         description="I'm not even kidding. Ask my mom if you don't believe me."
       />
       <GridItem
         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
         icon={<Search className="h-4 w-4" />}
         title="Coming soon on Aceternity UI"
         description="I'm writing the code as I record this, no shit."
       />
     </ul>
   );
 }
 
 interface GridItemProps {
   area: string;
   icon: React.ReactNode;
   title: string;
   description: React.ReactNode;
 }
 
 const GridItem = ({ area, icon, title, description }: GridItemProps) => {
   return (
     <li className={cn("min-h-[14rem] list-none", area)}>
       <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
         <GlowingEffect
           spread={40}
           glow={true}
           disabled={false}
           proximity={64}
           inactiveZone={0.01}
           borderWidth={3}
         />
         <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
           <div className="relative flex flex-1 flex-col justify-between gap-3">
             <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
               {icon}
             </div>
             <div className="space-y-3">
               <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                 {title}
               </h3>
               <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                 {description}
               </h2>
             </div>
           </div>
         </div>
       </div>
     </li>
   );
 };
 
 ```
 
 Install NPM dependencies:
 ```bash
 motion
 ```
 
 Implementation Guidelines
  1. Analyze the component structure and identify all required dependencies
  2. Review the component's argumens and state
  3. Identify any required context providers or hooks and install them
  4. Questions to Ask
  - What data/props will be passed to this component?
  - Are there any specific state management requirements?
  - Are there any required assets (images, icons, etc.)?
  - What is the expected responsive behavior?
  - What is the best place to use this component in the app?
 
 Steps to integrate
  0. Copy paste all the code above in the correct directories
  1. Install external dependencies
  2. Fill image assets with Unsplash stock images you know exist
  3. Use lucide-react icons for svgs or logos if component requires them

  
  
  You are given a task to integrate an existing React component in the codebase
  
  The codebase should support:
  - shadcn project structure  
  - Tailwind CSS
  - Typescript
  
  If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
  
  Determine the default path for components and styles. 
  If default path for components is not /components/ui, provide instructions on why it's important to create this folder
  Copy-paste this component to /components/ui folder:
  ```tsx
  dotted-surface.tsx
  'use client';
  import { cn } from '@/lib/utils';
  import { useTheme } from 'next-themes';
  import React, { useEffect, useRef } from 'react';
  import * as THREE from 'three';
  
  type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;
  
  export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const { theme } = useTheme();
  
	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		particles: THREE.Points[];
		animationId: number;
		count: number;
	} | null>(null);
  
	useEffect(() => {
		if (!containerRef.current) return;
  
		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;
  
		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0xffffff, 2000, 10000);
  
		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			1,
			10000,
		);
		camera.position.set(0, 355, 1220);
  
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(scene.fog.color, 0);
  
		containerRef.current.appendChild(renderer.domElement);
  
		// Create particles
		const particles: THREE.Points[] = [];
		const positions: number[] = [];
		const colors: number[] = [];
  
		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();
  
		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0; // Will be animated
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
  
				positions.push(x, y, z);
				if (theme === 'dark') {
					colors.push(200, 200, 200);
				} else {
					colors.push(0, 0, 0);
				}
			}
		}
  
		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  
		// Create material
		const material = new THREE.PointsMaterial({
			size: 8,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true,
		});
  
		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);
  
		let count = 0;
		let animationId: number;
  
		// Animation function
		const animate = () => {
			animationId = requestAnimationFrame(animate);
  
			const positionAttribute = geometry.attributes.position;
			const positions = positionAttribute.array as Float32Array;
  
			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;
  
					// Animate Y position with sine waves
					positions[index + 1] =
						Math.sin((ix + count) * 0.3) * 50 +
						Math.sin((iy + count) * 0.5) * 50;
  
					i++;
				}
			}
  
			positionAttribute.needsUpdate = true;
  
			// Update point sizes based on wave
			const customMaterial = material as THREE.PointsMaterial & {
				uniforms?: any;
			};
			if (!customMaterial.uniforms) {
				// For dynamic size changes, we'd need a custom shader
				// For now, keeping constant size for performance
			}
  
			renderer.render(scene, camera);
			count += 0.1;
		};
  
		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
  
		window.addEventListener('resize', handleResize);
  
		// Start animation
		animate();
  
		// Store references
		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId,
			count,
		};
  
		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);
  
			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);
  
				// Clean up Three.js objects
				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				});
  
				sceneRef.current.renderer.dispose();
  
				if (containerRef.current && sceneRef.current.renderer.domElement) {
					containerRef.current.removeChild(
						sceneRef.current.renderer.domElement,
					);
				}
			}
		};
	}, [theme]);
  
	return (
		<div
			ref={containerRef}
			className={cn('pointer-events-none fixed inset-0 -z-1', className)}
			{...props}
		/>
	);
  }
  
  
  demo.tsx
  import { DottedSurface } from "@/components/ui/dotted-surface";
  import { cn } from '@/lib/utils';
  
  export default function DemoOne() {
   return (
		<DottedSurface className="size-full">
			<div className="absolute inset-0 flex items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="font-mono text-4xl font-semibold">Dotted Surface</h1>
			</div>
		</DottedSurface>
	);
  }
  
  ```
  
  Install NPM dependencies:
  ```bash
  three, next-themes
  ```
  
  Implementation Guidelines
   1. Analyze the component structure and identify all required dependencies
   2. Review the component's argumens and state
   3. Identify any required context providers or hooks and install them
   4. Questions to Ask
   - What data/props will be passed to this component?
   - Are there any specific state management requirements?
   - Are there any required assets (images, icons, etc.)?
   - What is the expected responsive behavior?
   - What is the best place to use this component in the app?
  
  Steps to integrate
   0. Copy paste all the code above in the correct directories
   1. Install external dependencies
   2. Fill image assets with Unsplash stock images you know exist
   3. Use lucide-react icons for svgs or logos if component requires them
