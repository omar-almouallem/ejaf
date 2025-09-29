"use client";

import { dateFormatter } from "@/utils/dateFormatter";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { sanitizeHTML } from "@/utils/sanitize";
import { getBlog } from "@/requests/shared";
import { BlogSkeleton } from "@/components/skeletons";

export default function BlogDetails({ blogId }) {
  const {
    data: blog,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs", blogId],
    queryFn: () => getBlog(blogId),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <BlogSkeleton />;
  }
  if (error) {
    return <div className="text-lg text-neutral-100">{error.message}</div>;
  }
  if (!blog) {
    return <div className="text-lg text-neutral-100">No data received</div>;
  }
  const {
    image: [
      ,
      {
        size: [width, height],
        src: [url],
        alt,
      },
    ],
    title,
    date,
    content,
  } = blog;
  const cleanContent = sanitizeHTML(content);
  return (
    <div className="max-w-[1255px] bg-[#001114] w-full flex justify-center pb-[160px] pt-[50px] md:pt-[80px] sm:pt-[10px] flex-col gap-8 mx-auto">
      <div className="px-4 md:px-0 w-full max-w-[832px] mx-auto flex flex-col items-center gap-8">
        <div className="w-full relative">
          <Image
            src={url}
            alt={alt}
            width={width}
            height={height}
            className="w-full rounded-[12px] h-auto object-cover flex-shrink-0"
          />
          <div className="absolute bottom-0 left-0 inline-flex px-[12px] py-[2px] justify-center items-center gap-[10px] rounded-br-[10px] rounded-bl-[10px] bg-main-color">
            <span className="text-neutral-100 text-xl">
              {dateFormatter(date)}
            </span>
          </div>
        </div>
        <h1 className="text-[#15BADF] w-full text-3xl font-semibold">
          {title}
        </h1>
        <div
          className="w-full flex flex-col gap-3 text-neutral-100 blog-content"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </div>
    </div>
  );
}
