import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-10 flex items-center gap-4">
      <p className="font-montserrat text-2xl font-bold">
        Count: <span className="text-primary">{count}</span>
      </p>
      <Button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment
      </Button>
    </div>
  );
}
