import "./globals.css";
import { Header, Footer } from "@/components";
import QueryProvider from "@/providers/QueryProvider";
import {
  getBlogs,
  getFeatures,
  getFooterContact,
  getFooterInfo,
  getInfo,
  getInsight,
  getPartners,
  getServices,
  getStats,
} from "@/requests/shared";
import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: {
    template: "Ejaf | %s",
    default: "Ejaf | Home Page",
  },
  description: "Your trusted source in IT services and support",
};

export default async function RootLayout({ children }) {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["stats"],
      queryFn: getStats,
    }),
    queryClient.prefetchQuery({
      queryKey: ["services"],
      queryFn: getServices,
    }),
    queryClient.prefetchQuery({
      queryKey: ["features"],
      queryFn: getFeatures,
    }),
    queryClient.prefetchQuery({
      queryKey: ["partners"],
      queryFn: getPartners,
    }),
    queryClient.prefetchQuery({
      queryKey: ["insight"],
      queryFn: getInsight,
    }),
    queryClient.prefetchQuery({
      queryKey: ["info"],
      queryFn: getInfo,
    }),
    queryClient.prefetchQuery({
      queryKey: ["blogs"],
      queryFn: getBlogs,
    }),
    queryClient.prefetchQuery({
      queryKey: ["footerInfo"],
      queryFn: getFooterInfo,
    }),
    queryClient.prefetchQuery({
      queryKey: ["footerContactUs"],
      queryFn: getFooterContact,
    }),
  ]);
  return (
    <html lang="en">
      <body className={`bg-secondary-color ${outfit.className}`}>
        <QueryProvider>
          <Header />
          <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
            <Footer />
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </html>
  );
}
