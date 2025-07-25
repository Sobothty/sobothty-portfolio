"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtag from "@/lib/gtag";

function AnalyticComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export function Analytic() {
  return (
    <Suspense fallback={null}>
      <AnalyticComponent />
    </Suspense>
  );
}
