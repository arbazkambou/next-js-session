"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// A small Client Component boundary for the client-components demonstration.
export function BuyPackageButton({ packageName }: { packageName: string }) {
  const [selected, setSelected] = useState(false);
  return <Button onClick={() => setSelected((value) => !value)} variant={selected ? "outline" : "default"}>{selected ? "Selected" : `Choose ${packageName}`}</Button>;
}
