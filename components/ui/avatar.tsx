"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Provides a styled avatar container using the Radix Avatar root primitive.
 *
 * Composes a default set of avatar classes with an optional `className`, sets a data-slot of "avatar", and forwards all other props to the underlying Radix Avatar root.
 *
 * @param className - Additional class names to merge with the component's base avatar styles.
 * @param props - Additional props passed through to the Radix Avatar root element.
 * @returns The Radix Avatar root element with the composed `className` and forwarded props.
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders an avatar image element with enforced square aspect ratio and merged class names.
 *
 * @param className - Additional CSS classes to merge with the component's base styles
 * @returns The rendered avatar image element
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled fallback element for an avatar to display when no image is available.
 *
 * @param className - Additional CSS class names to merge with the component's default styles
 * @returns A Radix `AvatarFallback` element with centered, rounded, muted-background styling
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
