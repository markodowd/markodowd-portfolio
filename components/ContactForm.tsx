"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ContactForm() {
  const { mousePosition, ref } = useMousePosition();
  const [state, handleSubmit] = useForm("xojvazad");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-gradient-to-b from-background via-muted/20 to-background px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.5 0.15 265 / 0.15), transparent 40%)`,
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />
      <div className="relative mx-auto max-w-2xl z-10">
        <ScrollAnimation direction="up">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {state.succeeded && (
              <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center text-green-600 dark:text-green-400">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            <ValidationError errors={state.errors} />

            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full cursor-pointer"
              size="lg"
            >
              {state.submitting ? (
                <>
                  <Mail className="h-4 w-4" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              Prefer direct contact?{" "}
              <a
                href="mailto:contact@markodowd.dev"
                className="text-primary hover:underline font-medium"
              >
                contact@markodowd.dev
              </a>
            </p>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

