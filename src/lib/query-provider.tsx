"use client";

import { useState } from "react";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           staleTime: 1000 * 60 * 5,
  //           refetchInterval: 1000 * 60 * 5,
  //         },
  //       },
  //     })
  // );

  return (
    <SessionProvider>
      {/* <QueryClientProvider client={queryClient}> */}
        {children}
        {/* <ReactQueryDevtools buttonPosition="bottom-left" /> */}
      {/* </QueryClientProvider> */}
    </SessionProvider>
  );
}
