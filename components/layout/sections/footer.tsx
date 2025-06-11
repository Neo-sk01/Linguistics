import Link from 'next/link'
import Image from 'next/image'

// Define the type for navigation links
type NavLink = {
    title: string;
    href: string;
};

// Main navigation links for the footer
const footerLinks: NavLink[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Services",
        href: "/#services",
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "FAQ",
        href: "/faq",
    },
    {
        title: "Files",
        href: "/files",
    },
    {
        title: "Contact",
        href: "/contact",
    }
];

// Policy links based on the policy document
const policyLinks: NavLink[] = [
    {
        title: 'Company Policy',
        href: '/policies',
    },
    {
        title: 'Terms of Service',
        href: '/policies#terms',
    },
    {
        title: 'Privacy Policy',
        href: '/policies#privacy',
    },
];

export const FooterSection = () => {
    return (
        <footer className="py-12 relative text-gray-100 overflow-hidden bg-[#1b2432]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1b2432] to-[#141c28] opacity-100"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="container mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and about section */}
                    <div className="md:col-span-1">
                        <Link href="/" aria-label="go home" className="block mb-4">
                            <Image 
                                src="/noBG.png" 
                                alt="IMPERIUM LINGUISTICS Logo" 
                                width={150} 
                                height={150} 
                                className="mx-auto md:mx-0"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
                            Professional language services for businesses and individuals worldwide.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-medium mb-4 text-lg text-center md:text-left">Quick Links</h3>
                        <ul className="space-y-2 text-center md:text-left">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-blue-300 transition-colors text-sm"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-medium mb-4 text-lg text-center md:text-left">Legal</h3>
                        <ul className="space-y-2 text-center md:text-left">
                            {policyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-blue-300 transition-colors text-sm"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-medium mb-4 text-lg text-center md:text-left">Contact Us</h3>
                        <ul className="space-y-3 text-center md:text-left">
                            <li className="flex items-center justify-center md:justify-start text-gray-400">
                                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <a href="mailto:nkuna@imperiumlinguistics.com" className="text-sm hover:text-blue-300 transition-colors">
                                    nkuna@imperiumlinguistics.com
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start text-gray-400">
                                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="text-sm">+27 83 988 3902</span>
                            </li>
                        </ul>
                        
                        {/* Social Media */}
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <a 
                                href="https://www.facebook.com/imperiumlinguistics" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Facebook"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900/50 text-gray-300 hover:text-blue-300 hover:bg-blue-800/70 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/imperium-linguistics" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-900/50 text-gray-300 hover:text-blue-300 hover:bg-blue-800/70 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="w-full h-px bg-gray-800 my-8"></div>
                
                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <div>
                        &copy; {new Date().getFullYear()} IMPERIUM LINGUISTICS. All rights reserved.
                    </div>
                    <div className="mt-3 md:mt-0">
                        Designed with excellence for professional language services.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const SmallFooterSection = () => {
    return (
        <footer className="py-3 bg-[#1b2432] border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Logo and copyright */}
                    <div className="flex items-center">
                        <Link href="/" aria-label="go home" className="flex items-center">
                            <Image 
                                src="/noBG.png" 
                                alt="IMPERIUM LINGUISTICS Logo" 
                                width={36} 
                                height={36} 
                                className="mr-2"
                            />
                            <span className="text-blue-300 font-medium text-sm hidden sm:inline">IMPERIUM LINGUISTICS</span>
                        </Link>
                        <span className="text-gray-500 text-xs ml-2 sm:ml-4">
                            &copy; {new Date().getFullYear()}
                        </span>
                    </div>
                    
                    {/* Navigation Links - Horizontal layout */}
                    <div className="flex flex-wrap justify-center gap-3 text-xs">
                        {footerLinks.slice(0, 5).map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-gray-400 hover:text-blue-300 transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Policy Links */}
                    <div className="flex flex-wrap justify-center gap-3 text-xs">
                        {policyLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-gray-400 hover:text-blue-300 transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
