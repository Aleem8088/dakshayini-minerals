import Image, { type ImageProps } from "next/image";
import { blurData } from "@/lib/blurData";

/**
 * Drop-in replacement for next/image that automatically applies a blur-up
 * placeholder (from the generated blurData map) so photos fade from a tiny
 * blur to sharp instead of popping in.
 */
export default function BlurImage(props: ImageProps) {
  const key = typeof props.src === "string" ? props.src : "";
  const blur = blurData[key];

  if (blur) {
    return <Image quality={95} placeholder="blur" blurDataURL={blur} {...props} />;
  }
  return <Image quality={95} {...props} />;
}
