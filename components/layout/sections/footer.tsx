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
    {
        title: 'About',
        href: '#',
    },
]

// Policy links based on the policy document
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
        <footer className="py-12 md:py-16 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="go home" className="block mb-8">
                        <Image 
                            src="/noBG.png" 
                            alt="IMPERIUM LINGUISTICS Logo" 
                            width={120} 
                            height={120} 
                            className="mx-auto"
                        />
                    </Link>
                    
                    {/* Main Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {links.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Policy Links */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6">
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
                    <div className="flex justify-center gap-4 mb-6">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} IMPERIUM LINGUISTICS
                    </div>
                </div>
            </div>
        </footer>
    )
}

export const SmallFooterSection = () => {
    return (
        <footer className="py-6 border-t border-blue-100 dark:border-blue-900/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <Link href="/" aria-label="go home" className="block mb-4">
                        <Image 
                            src="/noBG.png" 
                            alt="IMPERIUM LINGUISTICS Logo" 
                            width={150} 
                            height={150} 
                            className="mx-auto"
                        />
                    </Link>
                    
                    {/* Main Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-5">
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
                    <div className="flex flex-wrap justify-center gap-4 mb-3">
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
                    <div className="flex justify-center gap-4 mb-3">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                            </svg>
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center text-blue-600/70 dark:text-blue-400/70 text-sm">
                        © {new Date().getFullYear()} IMPERIUM LINGUISTICS
                    </div>
                </div>
            </div>
        </footer>
    )
}
