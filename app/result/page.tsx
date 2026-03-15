"use client";

import { Suspense } from "react";
import ResultPageContent from "./ResultPageContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading results...</div>}>
      <ResultPageContent />
    </Suspense>
  );
}