"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BuyPackageButton() {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      type="button"
      size="sm"
      variant={selected ? "outline" : "default"}
      onClick={() => setSelected((value) => !value)}
    >
      {selected ? "Selected" : "Choose"}
    </Button>
  );
}
