import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
  alt: string;
  ariaLabel: string;
}

const projects: Project[] = [
  {
    title: 'NOVALAUNCH',
    category: 'Space Technology',
    media: {
      type: 'image',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c91a33a-dad6-4aae-b453-64b758a370ae-orchids-app/assets/images/next-884180-novalaunch.png?',
    },
    alt: 'NOVALAUNCH',
    ariaLabel: 'Open NOVALAUNCH website',
  },
  {
    title: 'Clay & Kiln',
    category: 'Artisan E-commerce',
    media: {
      type: 'video',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/image-references/potterysite.mp4',
    },
    alt: 'Clay & Kiln',
    ariaLabel: 'Open Clay & Kiln website',
  },
  {
    title: 'SkySwift',
    category: 'Drone Delivery',
    media: {
      type: 'video',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/image-references/alexrivera.mp4',
    },
    alt: 'SkySwift',
    ariaLabel: 'Open SkySwift website',
  },
  {
    title: 'FitTrack',
    category: 'Fitness Platform',
    media: {
      type: 'image',
      src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c91a33a-dad6-4aae-b453-64b758a370ae-orchids-app/assets/images/next-858171-vitalsync.png?',
    },
    alt: 'FitTrack',
    ariaLabel: 'Open FitTrack website',
  },
];

const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <div
      role="button"
      aria-label={project.ariaLabel}
      className="group cursor-pointer bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        {project.media.type === 'image' ? (
          <Image
            src={project.media.src}
            alt={project.alt}
            fill
            className="object-cover"
          />
        ) : (
          <video
            src={project.media.src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-4 h-4 bg-background/80 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-2 h-2 text-foreground" strokeWidth={3} />
          </div>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-medium text-xs mb-0.5 group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground opacity-70">
          {project.category}
        </p>
      </div>
    </div>
  );
};


const PortfolioShowcase = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-2 md:px-4 md:py-12 py-6">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-foreground text-background">
          Landing Pages
        </button>
        <button className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-accent text-foreground hover:bg-accent-foreground/10">
          Web Apps
        </button>
        <button className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-accent text-foreground hover:bg-accent-foreground/10">
          Portfolio Websites
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {projects.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcase;