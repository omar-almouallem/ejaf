import { GifBackground } from "@/components/gif-background";
import BlogDetails from "./_components/BlogDetails";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getBlog } from "@/requests/shared";

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["blogs", id],
    queryFn: () => getBlog(id),
  });
  return (
    <GifBackground className="min-h-dvh">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogDetails blogId={id} />
      </HydrationBoundary>
    </GifBackground>
  );
};

export default BlogDetailsPage;
