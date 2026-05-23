/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

import { ArrowUpRight, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="flex h-56 w-full items-center justify-center bg-muted">
        <span className="text-sm text-muted-foreground">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setImageError(true)}
        className="
          h-56
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-black/10
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <article
      className={cn(
        `
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-background/60
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-2xl
        `,
        className
      )}
    >
      {/* =========================================================
          MEDIA
      ========================================================= */}

      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <div className="relative overflow-hidden">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="
                  h-56
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                  "
                >
                  <Play className="h-5 w-5 text-white fill-white" />
                </div>
              </div>
            </div>
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-muted">
              <span className="text-sm text-muted-foreground">
                No preview available
              </span>
            </div>
          )}
        </Link>

        {/* =========================================================
            TOP LINKS
        ========================================================= */}

        {links && links.length > 0 && (
          <div className="absolute right-4 top-4 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border-0
                    bg-black/70
                    px-3
                    py-1
                    text-white
                    backdrop-blur-md
                    transition-all
                    hover:bg-black
                  "
                >
                  {link.icon}
                  <span>{link.type}</span>
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3
              className="
                text-xl
                font-semibold
                tracking-tight
                text-foreground
              "
            >
              {title}
            </h3>

            <time
              className="
                text-xs
                font-medium
                uppercase
                tracking-wider
                text-muted-foreground
              "
            >
              {dates}
            </time>
          </div>

          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
              text-muted-foreground
              transition-all
              duration-300
              hover:border-primary
              hover:text-primary
              hover:rotate-45
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Description */}
        <div
          className="
            prose
            prose-sm
            dark:prose-invert
            mt-5
            max-w-none
            text-muted-foreground
          "
        >
          <Markdown>{description}</Markdown>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="
                  rounded-full
                  border
                  border-border/60
                  bg-muted/40
                  px-3
                  py-1
                  text-[11px]
                  font-medium
                  transition-colors
                  hover:bg-muted
                "
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================
          HOVER GRADIENT
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-br
            from-primary/5
            via-transparent
            to-primary/5
          "
        />
      </div>
    </article>
  );
}