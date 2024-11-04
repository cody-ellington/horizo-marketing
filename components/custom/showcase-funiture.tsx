import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-100",
    imageUrl: "/project/shopify1.webp",
    title: "Atlantic",
    subTitle: "Elegant design to showcase high-quality visuals and boost sales",
    link: "https://themes.shopify.com/themes/atlantic/styles/modern/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/funi2.webp",
    title: "Combine",
    subTitle: "Bundle products & increase average order value, sales & revenue",
    link: "https://themes.shopify.com/themes/combine/styles/objects/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/funi3.webp",
    title: "Enterprise",
    subTitle: "A new benchmark in store speed and conversion. Sell faster, sell more.",
    link: "https://themes.shopify.com/themes/enterprise/styles/home/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/funi4.webp",
    title: "Release",
    subTitle: "Boldly Unique, Lightning-Fast Impact",
    link: "https://themes.shopify.com/themes/release/styles/living/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/funi5.webp",
    title: "Impact",
    subTitle: "A colored, typography-oriented theme for impactful brands",
    link: "https://themes.shopify.com/themes/impact/styles/home/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/funi6.webp",
    title: "Abode",
    subTitle: "Best for Fashion,Furniture, Art, Tools, Clothing,Flower,Clothes",
    link: "https://themes.shopify.com/themes/abode/styles/outdoor-garden/preview",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/funi7.webp",
    title: "Madrid",
    subTitle: "Crafted to highlight heritage-rich elegance with timeless design.",
    link: "https://themes.shopify.com/themes/madrid/styles/signature/preview",
  },
];

export function ProjectShowcaseFuniture() {
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
