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
        <footer className="py-8 md:py-10 relative text-gray-100 overflow-hidden bg-[#1b2432]">
            <div className="absolute inset-0 bg-[#1b2432] opacity-100"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
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
                                className="text-gray-300 hover:text-blue-300 text-xs font-medium"
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
                                        ? 'text-blue-300 font-medium' 
                                        : 'text-gray-300'
                                } hover:text-blue-300`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Social Media */}
                    <div className="flex justify-center gap-5 mb-5 mt-2">
                        <Link href="https://www.facebook.com/imperiumlinguistics" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-gray-300 hover:text-blue-300 hover:bg-blue-800 transition-colors">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/102341300/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-gray-300 hover:text-blue-300 hover:bg-blue-800 transition-colors">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/imperiumlingustics_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-gray-300 hover:text-blue-300 hover:bg-blue-800 transition-colors">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
                            </svg>
                        </Link>
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center text-gray-300 text-xs mt-2">
                        &copy; {new Date().getFullYear()} IMPERIUM LINGUISTICS
                    </div>
                </div>
            </div>
        </footer>
    )
}

export const SmallFooterSection = () => {
    return (
        <footer className="py-4 border-t border-blue-900/30 bg-[#1b2432]">
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
                                } hover:text-blue-500 dark:hover:text-blue-600 transition-colors`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Social Media */}
                    <div className="flex justify-center gap-3 mb-2">
                        <Link href="https://www.facebook.com/imperiumlinguistics" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/102341300/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/imperiumlingustics_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blue-600/70 dark:text-blue-400/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
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
