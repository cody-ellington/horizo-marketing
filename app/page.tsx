/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
import Meteors from "@/components/ui/meteors";
import IconCloud from "@/components/ui/icon-cloud";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import TypingAnimation from "@/components/ui/typing-animation";
import { DollarSign, KeyRound, Timer } from "lucide-react";

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
    name: "Chị Thanh",
    username: "Chủ tiệm Waxing",
    body: "Team Horizo cực kỳ nhiệt tình và nắm rõ được mong muốn tiệm mình đưa ra. Content sau 2 tháng chạy thử thấy tăng reach hơn hẳn.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Chị Nga",
    username: "Kinh doanh Mỹ phẩm thiên nhiên",
    body: "Biết đến Horizo vì được giới thiệu làm website. Mình đánh giá cao sự chuyên nghiệp của các bạn khi hợp tác. Web sau vài lần chỉnh sửa thì hiện giờ mình thấy rất ưng ý",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Sarah",
    username: "Marketing Director",
    body: "The team expertise and commitment to excellence have transformed our online presence. Our traffic and engagement levels have increased significantly since collaborating with them.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Chị Hương",
    username: "Chủ cửa hàng thực phẩm Hà Nội",
    body: "Giá mà biết đến Horizo sớm hơn thì mình đã không phải tốn bao chi phí và công sức với cái web cũ không đi đến đâu.  ",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Tùng Đoàn",
    username: "@tungdoan68",
    body: "Mình chọn Horizo để làm trang xây dựng thương hiệu cá nhân. High recommend vì team không những biết làm webflow mà ở Vn chưa nhiều chỗ dùng, mà còn có gu thẩm mỹ tốt. ",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Mark",
    username: "Operation Manager",
    body: "The results speak for themselves. Our website is now faster, more engaging, and optimized for our audience. Thank you for making this transformation a reality!",
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
    name: "Trao đổi & xác định nhu cầu ",
    description:
      "Mục tiêu: Lắng nghe, thấu hiểu mong muốn và kỳ vọng của bạn về giao diện website, đối tượng khách hàng và phong cách thương hiệu. Phân tích: Bằng cách điền chi tiết bảng khảo sát từ Horizo, cả bạn và team Horizo sẽ xác định được cụ thể các tính năng cần thiết và mục đích sử dụng website, giúp nắm rõ yêu cầu và đưa ra đề xuất phù hợp",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "",
  },
  {
    Icon: InputIcon,
    name: "Lựa chọn giải pháp phù hợp",
    description:
      "Dựa trên nhu cầu đã xác định, Horizo sẽ gợi ý các giải pháp phù hợp về nền tảng, giao diện và tính năng nhằm tối ưu hóa trải nghiệm người dùng và đạt hiệu quả cho mục đích làm website của bạn. Đề xuất chi phí và thời gian dự kiến hoàn thành để giúp bạn hình dung được bao quát dự án.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "",
  },
  {
    Icon: GlobeIcon,
    name: "Thỏa thuận",
    description:
      "Lập hợp đồng dịch vụ gồm phạm vi công việc, yêu cầu kỹ thuật, thời gian hoàn thành và các điều khoản liên quan để bảo vệ quyền lợi của cả hai bên. Chốt các điều khoản thanh toán: Thỏa thuận về chi phí, phương thức thanh toán và lịch thanh toán rõ ràng trước khi bắt đầu triển khai.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "",
  },
  {
    Icon: CalendarIcon,
    name: "Triển khai chi tiết",
    description:
      "Team Horizo tiến hành lên sitemap, layout gửi bản demo để khách hàng duyệt và phản hồi. Sau khi thống nhất sẽ tiến hành thiết kế phần code. Sau khi phát triển xong, website được kiểm tra kỹ càng để đảm bảo hoạt động trơn tru trên các thiết bị, tối ưu hóa hiệu suất và bảo mật",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "",
  },
  {
    Icon: BellIcon,
    name: "Bàn giao và hướng dẫn quản trị",
    description:
      "Khi website hoàn tất và đạt yêu cầu, Horizo sẽ bàn giao quyền truy cập, hướng dẫn và các thông tin quản lý cho khách hàng.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "",
  },
];

// MAIN FUNCTION
export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(theme === "dark" ? "#91edff" : "#91edff");
  }, [theme]);

  let logoUrl = "/logo/white-ls.png";
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
            className="w-20"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center dark:text-gray-200 font-medium text-lg cursor-pointer">
            <Link href={"#about"} className="hover:text-blue-600">
              About Us
            </Link>

            <Link href={"#service"} className="hover:text-blue-600">
              Services
            </Link>

            <Link href={"#showcase"} className="hover:text-blue-600">
              Showcase
            </Link>
            {/* <ScrollLink
              to="#services"
              smooth={true}
              className="hover:text-blue-600"
            >
              Dịch vụ
            </ScrollLink>

            <ScrollLink
              to="#process"
              smooth={true}
              className="hover:text-blue-600"
            >
              Quy trình
            </ScrollLink> */}
            {/* 
            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-600"
            >
              Cam kết
            </ScrollLink> */}
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <Link
            href={"#contact-us"}
            className="py-1 px-6 text-sm hover:bg-[#55d7ff] rounded-3xl border-2 border-black text-black bg-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] "
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
        <span
          id="about"
          className="text-center md:text-lg dark:text-white/70 w-[80%] md:w-[40%] mt-3"
        >
          Giải pháp sáng tạo về Website Design & Content Marketing giúp nâng cao
          &quot;sự hiện diện&quot; cho thương hiệu của bạn trong kỷ nguyên số
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

      <NeonGradientCard className="flex flex-col place-items-center w-[80%] h-fit mx-auto items-center justify-center text-center bg-[url('/images/galay.jpg')]">
        <ShineBorder
          className="relative flex h-[70vh] md:h-[400px] mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-[url('/images/galay.jpg')] bg-cover md:shadow-xl"
          color={["#3b3b3b", "#1c1b1b", "#170b03"]}
        >
          <span className="pointer-events-none py-2 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl md:text-5xl font-semibold leading-none text-transparent dark:from-[#fece8f] dark:to-[#00d9ff00]">
            OUR STORY
          </span>
          <span className="text-center text-sm dark:text-white/70 w-[80%] md:w-[48%] mt-3">
            Horizo được lấy cảm hứng từ “Horizon” (đường chân trời). Đường chân
            trời luôn di chuyển khi ta tiến lên và dù đi xa đến đâu, ta vẫn luôn
            có thể tiến xa hơn, tìm kiếm những ‘chân trời” mới cho riêng mình.
            <br></br>
            <br></br>
            Ra đời với sự tâm huyết và kinh nghiệm trong lĩnh vực về website &
            content marketing, Horizo sẽ giúp bạn xây dựng thương hiệu vững mạnh
            hơn trong thị trường trực tuyến đầy cạnh tranh như hiện nay.
          </span>
        </ShineBorder>
      </NeonGradientCard>

      {/* <ShineBorder
        className="relative flex h-[450px] w-[80%] mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-[url('/images/space.avif')] bg-cover md:shadow-xl"
        color={["#546eff", "#8feffe", "#7bffd7"]}
      >
        <span className="pointer-events-none py-2 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-[#fece8f] dark:to-[#00d9ff00]">
          OUR STORY
        </span>
        <span className="text-center dark:text-white/70 w-[80%] md:w-[45%] mt-3">
          Horizo được lấy cảm hứng từ “Horizon” (đường chân trời). Đường chân
          trời luôn di chuyển khi ta tiến lên và dù đi xa đến đâu, ta vẫn luôn
          có thể tiến xa hơn, tìm kiếm những ‘chân trời” mới cho riêng mình.
          <br></br>
          <br></br>
          Ra đời với sự tâm huyết và kinh nghiệm trong lĩnh vực về website &
          content marketing, Horizo sẽ giúp bạn xây dựng thương hiệu vững mạnh
          hơn trong thị trường trực tuyến đầy cạnh tranh như hiện nay.
        </span>
      </ShineBorder> */}

      {/* CORE VALUES SECTION */}
      {/* <div
        className={
          "flex h-[300px] md:h-fit w-[80%] mx-auto flex-col gap-6 lg:h-[250px] lg:flex-row my-10"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:w-[30%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <span className=" bg-gradient-to-b font-semibold leading-none text-transparent dark:from-[#8fd3fe] dark:to-[#00d9ff00] bg-clip-text">
            CHÍNH TRỰC
          </span>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:w-[40%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <span className=" bg-gradient-to-b font-semibold leading-none text-transparent dark:from-[#8fd3fe] dark:to-[#00d9ff00] bg-clip-text">
            TRÁCH NHIỆM
          </span>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl md:w-[30%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <span className=" bg-gradient-to-b font-semibold leading-none text-transparent dark:from-[#8fd3fe] dark:to-[#00d9ff00] bg-clip-text">
            XỨNG ĐÁNG
          </span>
        </MagicCard>
      </div> */}

      {/* TESTIMONIAL */}
      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        {/* <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div
          id="service"
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
        ></div>
      </div>

      {/* SERVICES SECTION */}
      <div
        id="service"
        className="relative flex h-fit w-full flex-col overflow-hidden rounded-lg bg-background md:shadow-xl"
      >
        <div className="text-center mt-10">
          <SparklesText text="Our Service" />
        </div>
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
            <div className="bg-white h-full text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/3d_ecom.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-4">
                <TypingAnimation
                  className="text-3xl font-bold text-black dark:text-white"
                  text="E-Comm Website"
                />
                <p className="text-gray-500 dark:text-gray-200">
                  Thiết kế giao diện website UX UI
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Tối ưu hóa danh mục sản phẩm
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Thiết lập tính năng giỏ hàng và thanh toán
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Tích hợp công cụ chatbot, social media
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Bảo trì và hỗ trợ kỹ thuật
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-3xl">
            <div className="bg-white h-full text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/3d_brand.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-4">
                <TypingAnimation
                  className="text-3xl font-bold text-black dark:text-white"
                  text="Branding Website"
                />
                <p className="text-gray-500 dark:text-gray-200">
                  Thiết kế giao diện website UX UI
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Thiết kế Landing Page
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Hệ thống quản lý liên hệ và thông tin
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  Tích hợp công cụ chatbot, mạng xã hội, email marketing
                </p>
                <p id="showcase" className="text-gray-500 dark:text-gray-200">
                  Bảo trì và hỗ trợ kỹ thuật
                </p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-3xl">
            <div className="bg-white h-full text-center rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-black">
              <Image
                src={"/images/3d_mkt.png"}
                alt="Logo"
                width={1000}
                height={1000}
                className="w-full"
              />
              <div className="p-4 space-y-4">
                <TypingAnimation
                  className="text-3xl font-bold text-black dark:text-white"
                  text="Content Marketing"
                />
                <p className="text-gray-500 dark:text-gray-200">
                  Social Media Content
                </p>
                <p className="text-gray-500 dark:text-gray-200">PR Media</p>
                <p className="text-gray-500 dark:text-gray-200">Copywriting</p>
                <p className="text-gray-500 dark:text-gray-200">Blog SEO</p>
                <p className="text-gray-500 dark:text-gray-200">
                  Video Content
                </p>
                <p className="text-gray-500 dark:text-gray-200">
                  User-Generated Content (UGC)
                </p>
              </div>
            </div>
          </div>
        </div>

        <RetroGrid />
      </div>

      {/* TECH STACK SECTION */}
      {/* <section>
        <div className="relative flex size-full w-[100%] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </section> */}

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
              <a href="#contact-us">✨ Biến ý tưởng của bạn thành hiện thực</a>
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

      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Meteors number={30} />
        <div className="py-16 w-[80%] mx-auto">
          <div className="container">
            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <p className="text-[3.5rem] font-bold">Our Guarantees</p>
            </BoxReveal>
            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <h2 className="mt-[.9rem] text-[1rem]">
                Vì sao các khách hàng tin tưởng vào Horizo?
              </h2>
            </BoxReveal>
            {/* <p className="mb-4 text-xs text-muted-foreground">Vì sao các khách hàng tin tưởng vào Horizo?</p> */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  1
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-lg">
                    Chất lượng hàng đầu
                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Cam kết mang đến giải pháp về website chất lượng cao, đảm
                    bảo giao diện phù hợp, tối ưu hóa trải nghiệm người dùng.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  2
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-lg">
                    Chính trực trong hợp tác
                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Sự chính trực khi tư vấn và hợp tác luôn là kim chỉ nam của
                    Horizo từ ngày đầu thành lập để cùng tạo nên kết quả
                    WIN-WIN.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  3
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-lg">
                    Tiến độ đúng hẹn
                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Làm việc theo lịch trình cụ thể và rõ ràng, luôn đảm bảo
                    hoàn thành dự án đúng thời hạn đã cam kết với khách hàng.
                  </p>
                </div>
              </div>
              <div className="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5">
                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                  4
                </span>
                <div>
                  <h3 className="font-medium md:mb-2 md:text-lg">
                    Bảo mật thông tin
                    <span className="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"></span>
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Horizo cam kết bảo mật mọi thông tin của khách hàng, từ ý
                    tưởng đến dữ liệu, đảm bảo tính bảo mật và riêng tư tuyệt
                    đối trong quá trình hợp tác
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div id="process" className="md:flex gap-5 w-[80%] mx-auto py-12">
        <div className="md:w-[40%] mb-10 md:mb-0">
          <div className="size-full max-w-lg items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <p className="text-[3.5rem] font-bold">Our Process</p>
            </BoxReveal>

            <BoxReveal boxColor={"#ffffff"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                Bắt đầu xây dựng website mang đậm nét riêng cho thương hiệu của
                bạn cùng Horizo.{" "}
              </h2>
            </BoxReveal>
          </div>
        </div>

        <div className="md:w-[60%]">
          {/* <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid> */}

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Trao đổi & xác định nhu cầu
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc">
                  <li>
                    • Mục tiêu: Lắng nghe, thấu hiểu mong muốn và kỳ vọng của
                    bạn về giao diện website, đối tượng khách hàng và phong cách
                    thương hiệu.
                  </li>
                  <br />
                  <li>
                    • Phân tích: Bằng cách điền chi tiết bảng khảo sát từ
                    Horizo, cả bạn và team Horizo sẽ xác định được cụ thể các
                    tính năng cần thiết và mục đích sử dụng website, giúp nắm rõ
                    yêu cầu và đưa ra đề xuất phù hợp.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Lựa chọn giải pháp phù hợp
              </AccordionTrigger>
              <AccordionContent>
                • Dựa trên nhu cầu đã xác định, Horizo sẽ gợi ý các giải pháp
                phù hợp về nền tảng, giao diện và tính năng nhằm tối ưu hóa trải
                nghiệm người dùng và đạt hiệu quả cho mục đích làm website của
                bạn.
                <br></br>
                <br></br>• Đề xuất chi phí và thời gian dự kiến hoàn thành để
                giúp bạn hình dung được bao quát dự án{" "}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Thỏa thuận
              </AccordionTrigger>
              <AccordionContent>
                • Lập hợp đồng dịch vụ gồm phạm vi công việc, yêu cầu kỹ thuật,
                thời gian hoàn thành và các điều khoản liên quan để bảo vệ quyền
                lợi của cả hai bên.
                <br></br>
                <br></br>• Chốt các điều khoản thanh toán: Thỏa thuận về chi
                phí, phương thức thanh toán và lịch thanh toán rõ ràng trước khi
                bắt đầu triển khai
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Triển khai chi tiết
              </AccordionTrigger>
              <AccordionContent>
                • Team Horizo tiến hành lên sitemap, layout gửi bản demo để
                khách hàng duyệt và phản hồi. Sau khi thống nhất sẽ tiến hành
                thiết kế phần code.
                <br></br>
                <br></br>• Sau khi phát triển xong, website được kiểm tra kỹ
                càng để đảm bảo hoạt động trơn tru trên các thiết bị, tối ưu hóa
                hiệu suất và bảo mật
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg" id="contact-us">
                Bàn giao và hướng dẫn quản trị
              </AccordionTrigger>
              <AccordionContent>
                • Khi website hoàn tất và đạt yêu cầu, Horizo sẽ bàn giao quyền
                truy cập, hướng dẫn và các thông tin quản lý cho khách hàng.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="w-[80%] mx-auto pt-32 pb-16">
        <div className="container relative">
          <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[350px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"></div>
          <div className="relative md:flex justify-between gap-16">
            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block"></div>

            <div className="w-full max-w-96 shrink-0 justify-between">
              {/* <p className="font-mono text-xs text-muted-foreground">
                Bạn đã có idea của mình?
              </p> */}
              <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-5xl">
                Liên hệ với chúng tôi
              </h2>
              <p className="text-sm text-muted-foreground mb-10 text-justify leading-loose">
                Dù bạn chưa có ý tưởng cụ thể, đừng lo lắng! Chúng tôi luôn sẵn
                sàng đồng hành cùng bạn để xây dựng và phát triển những ý tưởng
                từ cơ bản nhất. Cùng nhau, chúng ta sẽ tạo ra những giải pháp
                sáng tạo, tối ưu và biến những ý tưởng đó thành hiện thực một
                cách dễ dàng và hiệu quả. Bạn chỉ cần có niềm tin, chúng tôi sẽ
                giúp bạn đi từng bước để biến giấc mơ của mình thành sự thật. 😊
              </p>
            </div>
            <div className="w-full max-w-3xl shrink-0">
              <img
                src="/images/space.png"
                alt="map-decor"
                className="max-h-[450px w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
              ></img>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.93598580620198!2d106.7847731!3d10.8131658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20905a0d2ce93357%3A0xddcfea65efcbb35e!2sHorizo%20Marketing%20Agency!5e0!3m2!1sen!2s!4v1730787602662!5m2!1sen!2s"
                width="100%"
                height="350"
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
          <div className="relative mt-8 grid md:grid-cols-3">
            <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8 text-center">
              <div>
                <h3 className="text-lg font-medium">
                  Qua các kênh truyền thông
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                    <a
                      href="https://www.behance.net/horizomarketing"
                      target="_blank"
                      className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      <span className="mx-1">Behance</span>
                    </a>
                    <a
                      href="https://www.facebook.com/horizo.marketing"
                      target="_blank"
                      className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      <span className="mx-1">Facebook</span>
                    </a>
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8 text-center">
              <div>
                <h3 className="text-lg font-medium">Qua số hotline</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  (+84) 335 580 068<br></br>
                  (+84) 975 092 460
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8 text-center">
              <div>
                <h3 className="text-lg font-medium">
                  Hoặc gửi email cho chúng tôi
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  contact@horizo.marketing
                </p>
              </div>
            </div>
            <div className="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
            <div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"></div>
            <div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"></div>
            <div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"></div>
            <div className="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
            <div className="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
            <div className="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
            <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
            <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"></div>
            <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"></div>
            <div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-black mt-12">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <Image
                className="w-auto h-32"
                src={logoUrl}
                width={1000}
                height={1000}
                alt=""
              ></Image>
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400 capitalize">
              Embrace Your Online Presense. Horizon without and end
            </p>

            {/* <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="https://www.behance.net/horizomarketing"
                target="_blank"
                className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40"
              >
                <span className="mx-1">Behance</span>
              </a>
              <a
                href="https://www.facebook.com/horizo.marketing"
                target="_blank"
                className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40"
              >
                <span className="mx-1">Facebook</span>
              </a>
            </div> */}
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
