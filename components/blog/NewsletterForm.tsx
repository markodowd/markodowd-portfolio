"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async ({ email }: FormValues) => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_NEWSLETTER_API_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 mb-10 text-center">
        <p className="text-muted-foreground">You&apos;re subscribed! I&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 mb-10">
      <p className="text-center text-muted-foreground mb-4">
        Subscribe to hear about new articles and major life updates
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row gap-3 justify-center items-start sm:items-center max-w-lg mx-auto"
      >
        <div className="w-full sm:w-auto flex-1">
          <Input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            className="h-12 text-base px-4"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
          {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Subscribe"}
        </Button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-center text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
