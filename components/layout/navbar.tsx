"use client";
import { ChevronsDown, Menu, FileText, Headphones, Languages, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
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

import { useTheme } from "next-themes";

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
    href: "/faq",
    label: "FAQ",
  },
  {
    href: "/upload-test",
    label: "Upload Files",
  },
  {
    href: "/files",
    label: "View Files",
  },
  {
    href: "/admin",
    label: "Admin",
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
    icon: <FileText className="h-5 w-5 text-primary" />
  },
  {
    href: "/interpreting",
    label: "Interpreting",
    description: "Expert interpreting services for multiple languages",
    icon: <Languages className="h-5 w-5 text-primary" />
  },
  {
    href: "/conference-equipment",
    label: "Conference Equipment",
    description: "High-quality equipment for professional events",
    icon: <Headphones className="h-5 w-5 text-primary" />
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = useTheme();
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
    <header className={`shadow-inner w-[95%] sm:w-[90%] md:w-[90%] lg:w-[95%] top-5 mx-auto sticky border border-gray-200 z-40 rounded-xl flex justify-between items-center py-0 px-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'}`}>
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
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList className="space-x-1">
          {routeList.map(({ href, label }) => (
            label === "Services" ? (
              <NavigationMenuItem key={href}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10 rounded-lg transition-colors text-sm py-0 h-7">
                  <span className="data-[state=open]:text-primary hover:text-primary transition-colors font-medium">{label}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-5 md:grid-cols-1">
                    {servicesItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-md bg-muted group-hover:bg-primary/10 transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div className="text-sm font-semibold leading-none mb-1.5 group-hover:text-primary/90 transition-colors">{item.label}</div>
                                <p className="text-xs leading-snug text-muted-foreground group-hover:text-foreground transition-colors">{item.description}</p>
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
                    className="px-3 py-0 h-7 text-sm hover:text-primary transition-colors rounded-lg hover:bg-primary/10 inline-flex items-center"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          ))}
        </NavigationMenuList>
      </NavigationMenu>



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

          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
            <SheetHeader className="border-b pb-2">
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

            <nav className="flex flex-col mt-4 text-base font-medium text-gray-700 dark:text-gray-300">
              {routeList.map(({ href, label }) => (
                label === "Services" ? (
                  <div key={href} className="py-2">
                    <button
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      className="w-full flex justify-between items-center rounded-md hover:bg-accent transition-colors px-3 py-2"
                    >
                      <span>{label}</span>
                      <ChevronsDown className={`h-5 w-5 transition-transform duration-300 ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesExpanded && (
                      <div className="pl-6 mt-2 flex flex-col gap-1 border-l-2 ml-3 border-gray-200 dark:border-gray-700">
                        {servicesItems.map((item) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
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
                      className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      {label}
                    </Link>
                  </SheetClose>
                )
              ))}
            </nav>
            

          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
