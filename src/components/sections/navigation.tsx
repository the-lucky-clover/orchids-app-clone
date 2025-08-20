"use client";

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin } from 'lucide-react';

const OrchidLogoIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-hidden="true"
  >
    <path d="M14 0C10.134 0 7 3.13401 7 7C7 10.866 10.134 14 14 14V0Z" fill="#F472B6"></path>
    <path d="M14 28C17.866 28 21 24.866 21 21C21 17.134 17.866 14 14 14V28Z" fill="#F472B6"></path>
    <path d="M0 14C0 17.866 3.13401 21 7 21C10.866 21 14 17.866 14 14H0Z" fill="#F472B6"></path>
    <path d="M28 14C28 10.134 24.866 7 21 7C17.134 7 14 10.134 14 14H28Z" fill="#F472B6"></path>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.317 4.3698C18.775 3.5148 17.061 2.9038 15.222 2.5998C15.167 2.7638 15.107 2.9318 15.044 3.1038C13.342 2.8258 11.603 2.8258 9.90404 3.1038C9.84104 2.9318 9.78104 2.7638 9.72604 2.5998C7.88804 2.9038 6.17304 3.5148 4.63104 4.3698C1.51104 8.2438 0.925044 11.9798 1.15704 15.6328C3.12004 17.2028 4.97804 18.2588 6.78604 18.9958C7.09804 18.6188 7.38904 18.2258 7.65804 17.8188C7.12604 17.5338 6.61104 17.2288 6.12204 16.9038C6.01204 16.8378 5.90404 16.7698 5.79804 16.7008C5.83304 16.6328 5.86704 16.5668 5.90204 16.5008C5.57804 16.2758 5.26504 16.0398 4.96504 15.7948C4.94304 15.7728 4.92204 15.7518 4.90004 15.7298C8.34904 17.7338 12.115 17.9108 15.659 16.9488C16.918 18.1568 18.528 19.0008 20.359 19.4298C20.364 19.4298 20.368 19.4288 20.372 19.4278C21.722 18.5998 22.825 17.5188 23.639 16.2088C24.083 12.0228 23.224 8.0778 20.317 4.3698ZM8.44804 13.3448C7.45604 13.3448 6.63604 12.5518 6.63604 11.5978C6.63604 10.6448 7.43604 9.8518 8.44804 9.8518C9.45904 9.8518 10.279 10.6448 10.259 11.5978C10.259 12.5518 9.45904 13.3448 8.44804 13.3448ZM15.552 13.3448C14.56 13.3448 13.74 12.5518 13.74 11.5978C13.74 10.6448 14.54 9.8518 15.552 9.8518C16.563 9.8518 17.383 10.6448 17.363 11.5978C17.363 12.5518 16.563 13.3448 15.552 13.3448Z" />
  </svg>
);


const Navigation = () => {
    return (
        <header className="fixed top-1 left-0 right-0 py-3 md:py-6 md:max-w-[95%] max-w-full md:px-0 px-2 mx-auto w-full z-20">
            <div className="w-full flex items-center justify-between">
                <div className="flex-1">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <OrchidLogoIcon />
                            <span className="text-xl font-medium text-foreground">orchids</span>
                        </div>
                    </Link>
                </div>
                <div className="flex-1 flex items-center gap-6 justify-end">
                    <div className="hidden md:flex items-center justify-center gap-6 text-foreground">
                        <Link href="/careers" className="text-sm hover:text-blue-400 transition-colors">
                            Careers
                        </Link>
                        <button className="text-sm hover:text-blue-400 transition-colors cursor-pointer">
                            Pricing
                        </button>
                        <a aria-label="Discord" href="https://discord.gg/vb8JSeun4f" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <DiscordIcon />
                        </a>
                        <a aria-label="X" href="https://x.com/orchidsapp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Twitter width="16" height="16" />
                        </a>
                        <a aria-label="LinkedIn" href="https://www.linkedin.com/company/orchids-yc-w25/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Linkedin width="20" height="20" />
                        </a>
                    </div>
                    <div className="flex items-center text-sm gap-3">
                        <button className="bg-accent text-foreground rounded-md px-3 py-1.5 cursor-pointer transition-all duration-300 hover:bg-accent-foreground/20">
                            Log in
                        </button>
                        <button className="bg-foreground text-background rounded-md px-3 py-1.5 cursor-pointer transition-all duration-300 hover:bg-primary hover:text-foreground">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navigation;