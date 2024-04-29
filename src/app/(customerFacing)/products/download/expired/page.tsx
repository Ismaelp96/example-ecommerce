import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ExpiredPage() {
  return (
    <>
      <h1 className="text-4xl mb-4">Download link expired</h1>
      <Button size={"lg"} asChild>
        <Link href={"/orders"}>Get New Link</Link>
      </Button>
    </>
  );
}
