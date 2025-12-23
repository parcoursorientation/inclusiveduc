"use client";

import { PropsWithChildren, useEffect, useState } from "react";

/**
 * ClientOnly delays rendering its children until after the component has mounted
 * on the client. This helps avoid hydration mismatches when browser extensions
 * mutate the DOM before React hydrates.
 */
export default function ClientOnly({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
}
