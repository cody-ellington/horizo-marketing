import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-100",
    imageUrl: "/project/other1.webp",
    title: "Shapes",
    subTitle: "Move products fast with clever Shapes.",
    link: "https://themes.shopify.com/themes/shapes/styles/playful/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other2.webp",
    title: "Label",
    subTitle: "A theme for labels. No matter if yours is on cotton or vinyl.",
    link: "https://themes.shopify.com/themes/label/styles/music/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other3.webp",
    title: "Toyo",
    subTitle: "Great flr Kids wear, Children's Fashion, Toys, Pets, Kids, Baby, Books",
    link: "https://themes.shopify.com/themes/toyo/styles/kids-and-baby/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other4.webp",
    title: "Symmetry",
    subTitle: "Versatile, fashionable, professional theme with premium features.",
    link: "https://themes.shopify.com/themes/symmetry/styles/duke/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other5.webp",
    title: "Alchemy",
    subTitle: "Fast, modern, easy set-up. Designed to best showcase your products!",
    link: "https://themes.shopify.com/themes/alchemy/styles/sharp/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other6.webp",
    title: "Pinnacle",
    subTitle: "Accelerate sales and increase revenue with Pinnacle",
    link: "https://themes.shopify.com/themes/pinnacle/styles/hardware/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other7.webp",
    title: "Publisher",
    subTitle: "An avant-garde theme inspired by independent studios and publishers.",
    link: "https://themes.shopify.com/themes/publisher/styles/default/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/other8.webp",
    title: "Fashionopolism",
    subTitle: "Fast and packed with features to help you sell more",
    link: "https://themes.shopify.com/themes/fashionopolism/styles/galleria/preview",
  },
  
];

export function ProjectShowcaseOther() {
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
                  h-fit w-full object-cover rounded-lg"
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
