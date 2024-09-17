import { Suspense } from "react";
import Cover from "@/components/cover/Cover";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Cover />
    </Suspense>
  );
}
