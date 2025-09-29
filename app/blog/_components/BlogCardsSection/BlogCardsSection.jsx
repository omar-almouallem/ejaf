"use client";

import Link from "next/link";
import Image from "next/image";
import { dateFormatter } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/requests/shared";
import { BlogsSkeleton } from "@/components/skeletons";

const BlogCardsSection = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <BlogsSkeleton />;
  }
  if (error) {
    return <div className="text-lg text-neutral-100">{error.message}</div>;
  }
  return (
    <div className="w-full px-4 md:px-8">
      <div className="w-full max-w-[1256px] flex flex-col gap-8 mx-auto">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 xl:gap-[35px] justify-items-center">
          {blogs.map(
            ({
              id,
              image: [
                {
                  size: [width, height],
                  src: [url],
                  alt,
                },
              ],
              title,
              date,
              summary,
            }) => (
              <div
                key={id}
                className="w-full sm:max-w-[387px] mx-auto lg:h-[485px] p-[6px] group rounded-[10px] overflow-hidden shadow-md transition-all duration-300 border border-slider-border hover:border-main-color relative"
              >
                <div className="h-full bg-slider-bg overflow-clip rounded-sm">
                  <div className="relative h-[240px] lg:h-[302px] lg:group-hover:h-[240px] transition-all duration-300 ease-in-out overflow-hidden">
                    <Image
                      src={url}
                      alt={alt}
                      width={width}
                      height={height}
                      className="w-full h-full object-cover rounded-t-md transition-all duration-300"
                    />
                    <time className="absolute -top-0 -left-0 z-10 flex items-center gap-2 rounded-tl-md rounded-br-[10px] bg-main-color py-1 px-2 text-neutral-100">
                      {dateFormatter(date)}
                    </time>
                  </div>
                  <div className="p-[10px] pt-2 lg:group-hover:pt-8 text-neutral-100 flex flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-6">
                    <h2 className="md:min-h-14 text-main-color text-lg md:text-xl font-semibold md:line-clamp-2">
                      {title}
                    </h2>
                    <p className="md:min-h-[84px] text-lg lg:text-xl font-normal md:line-clamp-3">
                      {summary}
                    </p>
                    <Link
                      className="general-button slider mt-3 md:mt-2.5"
                      href={`/blog/${id}`}
                      role="link"
                      aria-label={`read more about ${title}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCardsSection;
/* 
<Link
              key={blog._id}
              href={`/blog/${blog._id}`}
              className="w-full max-w-[387.025px]"
            >
              <div className="relative w-full border border-[#15BADF]/40 rounded-[10px] p-[3px] overflow-hidden pb-[7px]">
                <div className="absolute top-[3px] left-[3px] z-10 bg-[#0081EA] px-[12px] py-[2px] rounded-tl-[10px] rounded-br-[10px]">
                  <span className="text-white font-[Outfit] text-[20px] font-normal">
                    {blog.date}
                  </span>
                </div>

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-tl-[10px] rounded-tr-[10px] max-w-[487.96px] h-[305.895px] object-cover"
                />

                <div className="bg-[#0D1E20] rounded-bl-[10px] rounded-br-[10px] px-4 pt-4">
                  <h3 className="text-[#15BADF] font-[Outfit] text-[18px] sm:text-[20px] font-semibold leading-[110%] tracking-[-1px] mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-white font-[Outfit] text-[16px] sm:text-[20px] font-normal break-words">
                    {blog.description}
                  </p>
                </div>
              </div>
            </Link>
            const blogs = [
    {
      _id: 1,
      slug: "gold-partner-iraq",
      image: "/assets/blog/blog3.png",
      date: "14 June 2023",
      title: "The Power of Surveillance: Effective CCTV Solutions for Iraq",
      description:
        "Have you ever wondered how a country facing significant security challenges can improve its safety measures?",
    },
    {
      _id: 2,
      slug: "gold-partner-iraq",
      date: "14 June 2023",
      image: "/assets/blog/blog2.png",
      title: "Navigating the Digital Landscape in Iraq: Top 5 IT Solutions",
      description:
        "Let's first think about how important IT solutions are in our lives. Imagine your life without technology. It's hard, right?",
    },
    {
      _id: 3,
      slug: "gold-partner-iraq",
      date: "14 June 2023",
      image: "/assets/blog/blog1.png",
      title:
        "Elevating Your Business: The Advantages of Being a Gold Partner in Iraq",
      description:
        "Elevating Your Business: The Advantages of Being a Gold Partner in Iraq Being a Gold Partner in Iraq ...",
    },
    {
      _id: 4,
      slug: "gold-partner-iraq",
      date: "14 June 2023",
      image: "/assets/blog/blog3.png",
      title: "The Power of Surveillance: Effective CCTV Solutions for Iraq",
      description:
        "Have you ever wondered how a country facing significant security challenges can improve its safety measures?",
    },
    {
      _id: 5,
      slug: "gold-partner-iraq",
      date: "14 June 2023",
      image: "/assets/blog/blog2.png",
      title: "Navigating the Digital Landscape in Iraq: Top 5 IT Solutions",
      description:
        "Let's first think about how important IT solutions are in our lives. Imagine your life without technology. It's hard, right?",
    },
    {
      _id: 6,
      slug: "gold-partner-iraq",
      date: "14 June 2023",
      image: "/assets/blog/blog1.png",
      title:
        "Elevating Your Business: The Advantages of Being a Gold Partner in Iraq",
      description:
        "Elevating Your Business: The Advantages of Being a Gold Partner in Iraq Being a Gold Partner in Iraq ...",
    },
  ];
*/
