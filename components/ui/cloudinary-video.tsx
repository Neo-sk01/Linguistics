'use client';

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

interface CloudinaryVideoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export function CloudinaryVideo({
  src,
  width,
  height,
  className,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}: CloudinaryVideoProps) {
  return (
    <CldVideoPlayer
      id={`video-${src.split('/').pop()}`}
      width={width}
      height={height}
      src={src}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
    />
  );
}
