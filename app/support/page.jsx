import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Hero } from "./_components";
import { getSteps } from "@/requests/support";

export const metadata = {
  title: "Support",
  description: "You can contact us for any problem you face",
};

export default async function Support() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["steps"],
    queryFn: getSteps,
  });
  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Hero />
      </HydrationBoundary>
    </main>
  );
}
