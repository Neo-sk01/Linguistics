import { Logo } from '@/components/logo'
import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Pricing',
        href: '#pricing',
    },
]

// Policy links based on the policy documentgit push origin no-LFS-maingit push origin no-LFS-maingit push origin no-LFS-maingit push origin no-LFS-main
const policyLinks = [
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
]

export const FooterSection = () => {
    return (
        <footer className="py-6 md:py-8 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6" style={{ transform: 'scale(0.85)', transformOrigin: 'center top' }}>
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="go home" className="block mb-6">
                        <Image 
                            src="/noBG.png" 
                            alt="IMPERIUM LINGUISTICS Logo" 
                            width={180} 
                            height={180} 
                            className="mx-auto"
                        />
                    </Link>
                    
                    {/* Main Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-5">
                        {links.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-medium"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Policy Links */}
                    <div className="flex flex-wrap justify-center gap-4 mb-3">
                        {policyLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className={`text-sm ${
                                    link.href.includes('#terms') 
                                        ? 'text-blue-600 dark:text-blue-400 font-medium' 
                                        : 'text-gray-500 dark:text-gray-400'
                                } hover:text-blue-600 dark:hover:text-blue-400`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Social Media */}
                    <div className="flex justify-center gap-3 mb-3">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center text-gray-500 dark:text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} IMPERIUM LINGUISTICS
                    </div>
                </div>
            </div>
        </footer>
    )
}

export const SmallFooterSection = () => {
    return (
        <footer className="py-4 border-t border-blue-100 dark:border-blue-900/30">
            <div className="container mx-auto px-6" style={{ transform: 'scale(0.85)', transformOrigin: 'center top' }}>
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="go home" className="block mb-3">
                        <Image 
                            src="/noBG.png" 
                            alt="IMPERIUM LINGUISTICS Logo" 
                            width={180} 
                            height={180} 
                            className="mx-auto"
                        />
                    </Link>
                    
                    {/* Main Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        {links.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-blue-700 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Policy Links */}
                    <div className="flex flex-wrap justify-center gap-3 mb-2">
                        {policyLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className={`text-sm ${
                                    link.href.includes('#terms') 
                                        ? 'text-blue-600 dark:text-blue-400 font-medium' 
                                        : 'text-blue-600/80 dark:text-blue-400/80'
                                } hover:text-blue-500 dark:hover:text-blue-300 transition-colors`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Social Media */}
                    <div className="flex justify-center gap-3 mb-2">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center text-blue-600/70 dark:text-blue-400/70 text-sm">
                        &copy; {new Date().getFullYear()} IMPERIUM LINGUISTICS
                    </div>
                </div>
            </div>
        </footer>
    )
}
