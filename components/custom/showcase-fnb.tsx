import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-100",
    imageUrl: "/images/shopify1.webp",
    title: "F&B - Expanse",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://themes.shopify.com/themes/expanse/styles/contemporary/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/images/shopify2.webp",
    title: "F&B - Combine",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://themes.shopify.com/themes/combine/styles/restaurant/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/images/shopify3.webp",
    title: "F&B - Flow",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://themes.shopify.com/themes/flow/styles/nourish/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/images/shopify4.webp",
    title: "F&B - Modular",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://themes.shopify.com/themes/modular/styles/mayfair/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/images/shopify5.webp",
    title: "F&B - Viola",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://themes.shopify.com/themes/viola/styles/pure/preview",
  },
];

export function ProjectShowcaseFnB() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-3 gap-8 mt-10 justify-items-center">
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
                  h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold mt-3 text-center">
                {title}
              </h3>
              <div className=" text-center">{subTitle}</div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
