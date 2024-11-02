import { Suspense } from "react";
import Cover from "@/app/ivona/components/cover/Cover";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Cover />
    </Suspense>
  );
}
