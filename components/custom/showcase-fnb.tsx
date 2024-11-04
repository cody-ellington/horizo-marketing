import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify1.webp",
    title: "Expanse",
    subTitle: "A clean, versatile theme for large inventories",
    link: "https://themes.shopify.com/themes/expanse/styles/contemporary/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify2.webp",
    title: "Combine",
    subTitle: "Bundle products & increase average order value, sales & revenue",
    link: "https://themes.shopify.com/themes/combine/styles/restaurant/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify3.webp",
    title: "Flow",
    subTitle:
      "Unlock the power of image-focused design and super flexible layouts",
    link: "https://themes.shopify.com/themes/flow/styles/nourish/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify4.webp",
    title: "Modular",
    subTitle:
      "Fun, lively design and elegant animations to entice your customers",
    link: "https://themes.shopify.com/themes/modular/styles/mayfair/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify5.webp",
    title: "Viola",
    subTitle:
      "Design theme with amazing visuals for an unforgettable user experience",
    link: "https://themes.shopify.com/themes/viola/styles/pure/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify6.webp",
    title: "Sydney",
    subTitle:
      "Supercharged with stunning designs and tools to incentivize sales.",
    link: "https://themes.shopify.com/themes/sydney/styles/refined/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify7.webp",
    title: "Crave",
    subTitle: "An eye-catching theme optimized for shopping on the go.",
    link: "https://themes.shopify.com/themes/crave/styles/default/preview",
  },
];

export function ProjectShowcaseFnB() {
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
