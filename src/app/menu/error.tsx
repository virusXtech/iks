'use client'; 

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useEffect } from 'react';
 
export default function MenuError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[60vh]">
      <Alert variant="destructive" className="max-w-lg text-center">
        <Terminal className="h-5 w-5 mx-auto mb-2" />
        <AlertTitle className="text-2xl mb-2">Something went wrong!</AlertTitle>
        <AlertDescription className="mb-4">
          We encountered an error while trying to load the menu. Your patience is appreciated.
        </AlertDescription>
        <AlertDescription className="text-xs text-muted-foreground mb-4">
          Error details: {error.message}
        </AlertDescription>
        <Button
          onClick={() => reset()}
          variant="destructive"
          className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90"
        >
          Try again
        </Button>
      </Alert>
    </div>
  );
}
