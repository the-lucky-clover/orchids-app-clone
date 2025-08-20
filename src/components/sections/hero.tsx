"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Flower2, Settings2, Paperclip, ArrowUp } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <div
        className="fixed inset-0 bg-cover bg-no-repeat bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9c91a33a-dad6-4aae-b453-64b758a370ae-orchids-app/assets/images/landscape-bg-5-3.png?')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="pt-32 md:pt-50">
        <div className="flex flex-col gap-5 w-full items-center justify-center">
          <div className="mb-2 inline-block">
            <Flower2 className="h-12 w-12 text-[#F472B6]" />
          </div>
          <div className="flex flex-col w-full items-center leading-tight text-center">
            <h1 className="font-hero text-[32px] md:text-[42px] lg:text-[72px] font-normal italic text-white px-4">
              Make Something Beautiful
            </h1>
            <p className="mt-2 text-[14px] md:text-lg text-stone-200 px-4">
              Build beautiful apps and websites with AI, no code required.
            </p>
          </div>
        </div>

        <div className="relative max-w-full px-2 md:px-0 md:max-w-[630px] w-full mx-auto mt-8">
          <div className="relative flex flex-col gap-1 w-full py-2.5 rounded-lg bg-[#1F2937] text-sm md:text-base transition-all duration-300">
            <Textarea
              id="home-chat-input"
              placeholder="Make me a personal website for a software engineer"
              className="w-full bg-transparent border-none outline-none resize-none min-h-[60px] max-h-[100px] overflow-y-auto px-4 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="flex items-center justify-between ps-1.5 pe-2.5">
              <div className="flex gap-1.5 items-center">
                <button className="flex text-[13px] gap-1.5 border border-muted-foreground/20 px-2 py-1 items-center justify-center rounded-md text-stone-200 hover:text-white transition-all duration-300 hover:bg-white/10">
                  <Settings2 size={13} />
                  Tools
                </button>
              </div>
              <div className="flex gap-1 items-center">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                  <Paperclip size={16} />
                  <span className="sr-only">Attach files</span>
                </Button>
                <div className="flex items-center bg-white text-black rounded-md p-1 cursor-pointer transition-all duration-300 relative opacity-50">
                    <ArrowUp size={16} />
                    <span className="sr-only">Submit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 my-8 md:my-12">
        <Button className="px-3 md:px-4 py-1.5 md:py-2 h-auto rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-white text-black hover:bg-gray-200">
          Landing Pages
        </Button>
        <Button variant="secondary" className="px-3 md:px-4 py-1.5 md:py-2 h-auto rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-accent text-foreground hover:bg-accent-foreground/10">
          Web Apps
        </Button>
        <Button variant="secondary" className="px-3 md:px-4 py-1.5 md:py-2 h-auto rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-accent text-foreground hover:bg-accent-foreground/10">
          Portfolio Websites
        </Button>
      </div>

    </div>
  );
};

export default HeroSection;