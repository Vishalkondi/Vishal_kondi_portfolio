"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden border rounded-3xl p-8 md:p-14">
      {/* Background Effect */}
      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-3xl">
        <FlickeringGrid
          className="h-full w-full opacity-40"
          squareSize={3}
          gridGap={4}
          color="#6b7280"
          maxOpacity={0.3}
        />
      </div>

      {/* Top Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full bg-primary px-5 py-2 shadow-lg">
          <span className="text-sm font-medium text-primary-foreground">
            Contact Me
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let&apos;s Build Something Amazing
        </h2>

        <p className="mt-5 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
          I&apos;m always open to discussing new projects, frontend
          development, full-stack applications, DevOps opportunities, and
          creative ideas. Feel free to connect with me through LinkedIn,
          GitHub, or email.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Email */}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </Link>

          {/* LinkedIn */}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>

          {/* GitHub */}
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}