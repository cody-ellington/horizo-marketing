import BlurFade from "../ui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding1.jpeg",
    title: "Fizens ",
    subTitle: "Designed to help you create a sleek and fully functional website",
    link: "https://fizens.webflow.io/home",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding2.jpeg",
    title: "Biznix ",
    subTitle: "Tailored for Business, Agencies, Startups, and Consultancies websites",
    link: "https://biznix-ttm.webflow.io/home1",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding3.jpeg",
    title: "Nutriflow ",
    subTitle: "Designed for nutritionists, health coaches, and wellness professionals",
    link: "https://nutriflow-template.webflow.io/",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding4.png",
    title: "StrategiX ",
    subTitle: "Boost your consulting firm’s online presence and attract more clients with our expertly designed",
    link: "https://strategix-1c7afa.webflow.io/home-v1",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding5.jpeg",
    title: "Evoluxe ",
    subTitle: "Sleek, minimalistic template for small businesses. Easy to customize and fully responsive",
    link: "https://evo-luxe.webflow.io/",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding6.jpeg",
    title: "ADZEN ",
    subTitle: "Vibrant, modern website template designed for marketing agencies.",
    link: "https://adzen.webflow.io/",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding7.png",
    title: "Constint ",
    subTitle: "Designed with a contemporary look and customizable elements.",
    link: "https://constint.webflow.io/",
  },
  {
    background: "bg-gray-100",
    imageUrl: "/project/branding8.jpeg",
    title: "BizCoach ",
    subTitle: "Tailored for coaches, consultants, and mentors.",
    link: "https://bizcoach.webflow.io/home-one",
  },
];

export function ProjectShowcaseBranding() {
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
