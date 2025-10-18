"use client";
import { ChevronsDown, Menu, FileText, Languages } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import AuthButton from "../AuthButton";
import { cn } from "@/lib/utils";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceItemProps {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "/we-transfer",
    label: "Upload Files",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

const servicesItems: ServiceItemProps[] = [
  {
    href: "/transcription",
    label: "Transcription",
    description: "Professional linguistic transcription services",
    icon: <FileText className="h-5 w-5 text-[hsl(var(--accent-layer-2))]" />
  },
  {
    href: "/interpreting",
    label: "Interpreting",
    description: "Expert interpreting services for multiple languages",
    icon: <Languages className="h-5 w-5 text-[hsl(var(--accent-layer-2))]" />
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and past the initial 100px threshold
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  
  // Handle body overflow in a more stable way
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
    
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, [isOpen]);
  
  return (
    <header
      className={cn(
        "layer-nav top-5 mx-auto flex w-[95%] items-center justify-between gap-3 px-4 py-3 text-[hsl(var(--foreground))] transition-all duration-300 sm:w-[90%] md:w-[85%] lg:w-[90%]",
        "sticky z-40",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-6 opacity-0"
      )}
    >
      <Link href="/" className="font-bold text-sm flex items-center">
        <Image 
          src="/noBG.png" 
          alt="IMPERIUM LINGUISTICS Logo" 
          width={140}
          height={140}
          className="ml-0 mr-1 -my-3 sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] md:-my-5"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto text-[hsl(var(--foreground))]">
        <NavigationMenuList className="space-x-1">
          {routeList.map(({ href, label }) => (
            label === "Services" ? (
              <NavigationMenuItem key={href}>
                <NavigationMenuTrigger className="h-9 rounded-lg border border-transparent bg-transparent px-3 text-sm font-medium text-[hsl(var(--foreground))] transition-all hover:border-[hsl(var(--secondary-layer-2))] hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))] data-[state=open]:border-[hsl(var(--secondary-layer-2))] data-[state=open]:bg-[hsl(var(--secondary-layer-3))] data-[state=open]:text-[hsl(var(--accent-layer-2))]">
                  <span className="transition-colors">{label}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-4 p-5 md:grid-cols-1">
                    {servicesItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="group block select-none space-y-1 rounded-xl border border-transparent bg-[hsl(var(--surface-card))] p-4 leading-none no-underline outline-none transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--secondary-layer-2))] hover:bg-[hsl(var(--secondary-layer-4))] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_14px_22px_-12px_rgba(30,58,138,0.22)] focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent-layer-3))]"
                          >
                            <div className="flex items-center gap-3">
                              <div className="layer-chip p-2">
                                {item.icon}
                              </div>
                              <div>
                                <div className="mb-1.5 text-sm font-semibold leading-none text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--accent-layer-2))]">
                                  {item.label}
                                </div>
                                <p className="text-xs leading-snug text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--foreground))]">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link 
                    href={href} 
                    className="inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-[hsl(var(--foreground))] transition-all hover:-translate-y-0.5 hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:block">
        <AuthButton />
      </div>

      {/* Mobile Navigation & Theme Toggle */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-lg"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[300px] sm:w-[360px] border-l border-[hsl(var(--secondary-layer-2))] bg-[hsl(var(--surface-card))]"
          >
            <SheetHeader className="border-b border-[hsl(var(--secondary-layer-3))] pb-2">
              <Link href="/" className="font-bold text-lg flex items-center" onClick={() => setIsOpen(false)}>
                <Image 
                  src="/noBG.png" 
                  alt="IMPERIUM LINGUISTICS Logo" 
                  width={120}
                  height={120}
                  className="-ml-1 -my-4"
                />
              </Link>
            </SheetHeader>

            <nav className="mt-4 flex flex-col text-base font-medium text-[hsl(var(--foreground))]">
              {routeList.map(({ href, label }) => (
                label === "Services" ? (
                  <div key={href} className="py-2">
                    <button
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-3 text-left transition-all hover:border-[hsl(var(--secondary-layer-2))] hover:bg-[hsl(var(--secondary-layer-4))]"
                    >
                      <span>{label}</span>
                      <ChevronsDown className={`h-5 w-5 transition-transform duration-300 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesExpanded && (
                      <div className="ml-3 mt-3 flex flex-col gap-1 border-l-2 border-[hsl(var(--secondary-layer-3))] pl-6">
                        {servicesItems.map((item) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[hsl(var(--muted-foreground))] transition-all hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]"
                            >
                              {item.icon}
                              <span>{item.label}</span>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className="block rounded-lg px-3 py-2 transition-all hover:bg-[hsl(var(--secondary-layer-4))] hover:text-[hsl(var(--accent-layer-2))]"
                    >
                      {label}
                    </Link>
                  </SheetClose>
                )
              ))}
            </nav>
            
            <div className="mt-4">
              <AuthButton />
            </div>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
