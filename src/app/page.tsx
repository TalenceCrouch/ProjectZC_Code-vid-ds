import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>Sign in</Button>
      <Card className="mt-6 max-w-sm">
        <CardHeader>
          <CardTitle>Welcome to ProjectZC_Code-vid|ds</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a Shadcn UI Card component. You can put any content here!</p>
        </CardContent>
      </Card>
    </div>
  );
}
