"use client";

import Image from "next/image";
import Particles from "@/components/ui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import { MagicCard } from "@/components/ui/magic-card";
import GradualSpacing from "@/components/ui/gradual-spacing";
import RetroGrid from "@/components/ui/retro-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import HyperText from "@/components/ui/hyper-text";
import SparklesText from "@/components/ui/sparkles-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectShowcaseFnB } from "@/components/custom/showcase-fnb";
import { ProjectShowcaseBeauty } from "@/components/custom/showcase-beauty";
import { ProjectShowcaseFuniture } from "@/components/custom/showcase-funiture";
import { ProjectShowcaseBranding } from "@/components/custom/showcase-branding";
import { ProjectShowcaseOther } from "@/components/custom/showcase-other";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BoxReveal from "@/components/ui/box-reveal";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// MAP CIRCLES
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

// TESTIMONIAL
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// Bento / Operation
const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

// MAIN FUNCTION
export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(theme === "dark" ? "#91edff" : "#91edff");
  }, [theme]);

  let logoUrl = "/logo/white-long.png";
  if (theme === "light") {
    logoUrl = "/logo/black-long.png";
  }

  return (
    <>
      {/* NAVIGATION SECTION */}
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
          xl:w-4/5 2xl:w-[68%] backdrop-blur-xl flex items-center 
          justify-between py-3 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={logoUrl}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-32"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center dark:text-gray-200 font-medium text-lg cursor-pointer">
            <Link href={"#showcase"} className="hover:text-blue-600">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-600"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-600"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-600"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Link
            href={"#contact-us"}
            className="py-1 px-6 text-sm hover:bg-[#222482] rounded-3xl border-2 border-black text-black bg-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] "
          >
            Contact Us
          </Link>

          {/* <ThemeToggle></ThemeToggle> */}
        </div>
      </Element>

      {/* HERO SECTION */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl md:text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          EMBRACE YOUR ONLINE PRESENSE
        </span>
        <span className="text-center dark:text-white/70 w-[80%] md:w-[40%] mt-3">
          This is a subtitle, Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptates est vel ex totam consequuntur odit porro
          atque dolor accusantium quod temporibus dignissimos
        </span>
        <Particles
          className="absolute inset-0"
          quantity={200}
          ease={80}
          color={color}
          refresh
        />
      </div>

      {/* BRAND STORY SECTION */}
      {/* <div className="relative mx-auto h-fit w-[80%] rounded-4xl">
        <BorderBeam />
        <Image
          src={"/images/shadcn-dark.png"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-full rounded-4xl"
        />
      </div> */}

      <ShineBorder
        className="relative flex h-[500px] w-[80%] mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          BRAND STORY
        </span>
      </ShineBorder>

      {/* CORE VALUES SECTION */}
      <div
        className={
          "flex h-fit w-[80%] mx-auto flex-col gap-6 lg:h-[250px] lg:flex-row my-10"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:w-[30%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          INTEGRITY
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:w-[40%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          RESPONSIBILITY
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:w-[30%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          WORTH
        </MagicCard>
      </div>

      {/* TESTIMONIAL */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>

      {/* SERVICES SECTION */}
      <div className="relative flex h-fit w-full flex-col overflow-hidden rounded-lg bg-background md:shadow-xl">
        <GradualSpacing
          className="mt-6 font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-6xl md:leading-[5rem]"
          text="Our Services"
        />
        <HyperText
          className="text-xl text-center font-bold text-black dark:text-white"
          text="Horizo"
        />

        <div
          className={
            "flex h-fit w-[80%] mx-auto flex-col gap-6 lg:h-fit lg:flex-row my-10"
          }
        >
          <div className="w-full rounded-3xl">
            <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/ecom.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">E-Commerce Website</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Take your business to the next level with our web design and
                  development services
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  non neque pellentesque, sodales quam vitae, consequat lectus.
                  Aliquam vel facilisis dui. Etiam vel ornare neque, eget
                  imperdiet sapien
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-3xl">
            <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/web.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Branding Website</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Take your business to the next level with our web design and
                  development services
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  non neque pellentesque, sodales quam vitae, consequat lectus.
                  Aliquam vel facilisis dui. Etiam vel ornare neque, eget
                  imperdiet sapien
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-3xl">
            <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/mkt.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Content Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Take your business to the next level with our web design and
                  development services
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  non neque pellentesque, sodales quam vitae, consequat lectus.
                  Aliquam vel facilisis dui. Etiam vel ornare neque, eget
                  imperdiet sapien
                </p>
              </div>
            </div>
          </div>
        </div>

        <RetroGrid />
      </div>

      {/* PROJECT SECTION */}
      <section id="photos" className="py-14 w-[80%] mx-auto">
        <div className="text-center">
          <SparklesText text="Project Showcase" />
        </div>
        <div className="z-10 flex items-center justify-center my-6 mb-8">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Make one with your ideas</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>

        <Tabs defaultValue="fnb" className="w-full">
          <TabsList className="w-full mx-auto bg-white/0">
            <TabsTrigger value="fnb">F&B</TabsTrigger>
            <TabsTrigger value="beauty">Beauty</TabsTrigger>
            <TabsTrigger value="funiture">Funiture</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <TabsContent value="fnb">
            <ProjectShowcaseFnB></ProjectShowcaseFnB>
          </TabsContent>
          <TabsContent value="beauty">
            <ProjectShowcaseBeauty></ProjectShowcaseBeauty>
          </TabsContent>
          <TabsContent value="funiture">
            <ProjectShowcaseFuniture></ProjectShowcaseFuniture>
          </TabsContent>
          <TabsContent value="branding">
            <ProjectShowcaseBranding></ProjectShowcaseBranding>
          </TabsContent>
          <TabsContent value="other">
            <ProjectShowcaseOther></ProjectShowcaseOther>
          </TabsContent>
        </Tabs>
      </section>

      {/* GUARANTEE SECTION */}
      <div className="md:flex gap-5 w-[80%] mx-auto">
        <div className="md:w-[40%] mb-10 md:mb-0">
          <div className="size-full max-w-lg items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">Our guarantee</p>
            </BoxReveal>

            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                UI library for{" "}
                <span className="text-[#ffffff]">Design Engineers</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <div className="mt-6">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold text-[#ffffff]"> React</span>,
                  <span className="font-semibold text-[#ffffff]">
                    {" "}
                    Typescript
                  </span>
                  ,
                  <span className="font-semibold text-[#ffffff]">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-[#ffffff]">
                    {" "}
                    Framer Motion
                  </span>
                  . <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
          </div>
        </div>

        <div className="md:w-[60%]">
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="md:flex gap-5 w-[80%] mx-auto py-20">
        <div className="md:w-[40%] mb-10 md:mb-0">
          <div className="size-full max-w-lg items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">Process</p>
            </BoxReveal>

            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                UI library for{" "}
                <span className="text-[#ffffff]">Design Engineers</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <div className="mt-6">
                <p>
                  -&gt; 20+ free and open-source animated components built with
                  <span className="font-semibold text-[#ffffff]"> React</span>,
                  <span className="font-semibold text-[#ffffff]">
                    {" "}
                    Typescript
                  </span>
                  ,
                  <span className="font-semibold text-[#ffffff]">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-[#ffffff]">
                    {" "}
                    Framer Motion
                  </span>
                  . <br />
                  -&gt; 100% open-source, and customizable. <br />
                </p>
              </div>
            </BoxReveal>
          </div>
        </div>

        <div className="md:w-[60%]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-black mt-12">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <Image
                className="w-auto h-14"
                src={logoUrl}
                width={1000}
                height={1000}
                alt=""
              ></Image>
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400 capitalize">
              Embrace Your Online Presense. Horizon without and end
            </p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <span className="mx-1">Let&apos;s get started</span>
              </button>
              <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <span className="mx-1">Find Us On Behance</span>
              </button>
              <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                <span className="mx-1">Or on Facebook</span>
              </button>
            </div>
          </div>

          <hr className="my-10 border-gray-200 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              Horizo Marketing © Copyright 2024. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <span className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300">
                (+84) 335 580 068
              </span>
              <span className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300">
                (+84) 975 092 460
              </span>
              <span className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300">
                contact@horizo.marketing
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
