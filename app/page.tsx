"use client";

import Meteors from "@/components/ui/meteors";
import Image from "next/image";
import Particles from "@/components/ui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import ShineBorder from "@/components/ui/shine-border";
import { MagicCard } from "@/components/ui/magic-card";
import GradualSpacing from "@/components/ui/gradual-spacing";
import RetroGrid from "@/components/ui/retro-grid";
import IconCloud from "@/components/ui/icon-cloud";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";
import HyperText from "@/components/ui/hyper-text";

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

// PROJECTS
const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

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
            src={"/logo/white-long.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-200 font-medium text-lg cursor-pointer">
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
            className="py-1 px-6 text-lg hover:bg-[#abcbff] rounded-3xl border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Contact Us
          </Link>
        </div>
      </Element>

      {/* HERO SECTION */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          EMBRACE YOUR ONLINE PRESENSE
        </span>
        <span className="text-center text-white/70 w-[40%] mt-3">
          This is a subtitle, Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptates est vel ex totam consequuntur odit porro
          atque dolor accusantium quod temporibus dignissimos
        </span>
        <Particles
          className="absolute inset-0"
          quantity={100}
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
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl w-[30%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          INTEGRITY
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl w-[40%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          RESPONSIBILITY
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl w-[30%]"
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
          <div className="w-full">
            <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/web.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Website Development</h3>
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
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>

          <div className="relative flex h-full size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 py-32">
            <IconCloud iconSlugs={slugs} />
          </div>

          <div className="w-full">
            <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/mkt.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Website Development</h3>
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
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
        </div>

        <RetroGrid />
      </div>

      {/* PROJECT SECTION */}
      <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}
