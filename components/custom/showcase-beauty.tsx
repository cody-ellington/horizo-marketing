import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-100",
    imageUrl: "/project/beauty1.webp",
    title: "Sahara",
    subTitle: "Breathtaking visual treat that redefines the standards of online store",
    link: "https://themes.shopify.com/themes/sahara/styles/cosmetics/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/beauty2.webp",
    title: "Honey",
    subTitle: "A highly flexible, quick set-up theme made for precious products.",
    link: "https://themes.shopify.com/themes/honey/styles/maravella/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/beauty3.webp",
    title: "Mono",
    subTitle: "The SEO-optimized shopify theme for a flawless e-commerce experience",
    link: "https://themes.shopify.com/themes/mono/styles/vanilla/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/beauty4.webp",
    title: "Expanse",
    subTitle: "A clean, versatile theme for large inventories",
    link: "https://themes.shopify.com/themes/expanse/styles/modern/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/beauty5.webp",
    title: "Gem",
    subTitle: "Shine online with this meticulously crafted theme for jewelry brands.",
    link: "https://themes.shopify.com/themes/gem/styles/obsidian/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/beauty6.webp",
    title: "Pipeline",
    subTitle: "A fashionable, feature rich theme designed for luxury brands",
    link: "https://themes.shopify.com/themes/pipeline/styles/bright/preview",
  }
];

export function ProjectShowcaseBeauty() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-4 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, subTitle, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg p-4 backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                  h-3/4 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold mt-3 text-center">
                {title}
              </h3>
              <div className=" text-center text-gray-500">{subTitle}</div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
