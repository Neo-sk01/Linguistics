"use client";
import { ChevronsDown, Menu, FileText, Headphones, Languages } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
import { ToggleTheme } from "./toogle-theme";
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
    href: "/pricing",
    label: "Pricing",
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
  
  return (
    <header className={`shadow-inner w-[85%] md:w-[90%] lg:w-[95%] top-5 mx-auto sticky border border-gray-200 z-40 rounded-xl flex justify-between items-center py-0 px-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'}`}>
      <Link href="/" className="font-bold text-sm flex items-center">
        <Image 
          src="/noBG.png" 
          alt="IMPERIUM LINGUISTICS Logo" 
          width={180} 
          height={180} 
          className="ml-0 mr-1 -my-5"
        />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden h-5 w-5 mr-2"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image 
                      src="/noBG.png" 
                      alt="IMPERIUM LINGUISTICS Logo" 
                      width={180} 
                      height={180} 
                      className="mr-1 -my-1"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  label === "Services" ? (
                    <div key={href} className="flex flex-col">
                      <Button
                        onClick={() => {}}
                        variant="ghost"
                        className="justify-start text-base flex items-center"
                      >
                        <span>{label}</span>
                        <ChevronsDown className="ml-2 h-4 w-4 transition-transform duration-200" />
                      </Button>
                      <div className="ml-4 flex flex-col gap-2 border-l pl-4 border-primary/20">
                        {servicesItems.map((item) => (
                          <Button
                            key={item.href}
                            onClick={() => setIsOpen(false)}
                            asChild
                            variant="ghost"
                            className="justify-start text-base group"
                          >
                            <Link href={item.href} className="flex items-center gap-2">
                              <span className="text-primary/80">{item.icon}</span>
                              <span className="group-hover:text-foreground transition-colors">{item.label}</span>
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-sm"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  )
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
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

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
