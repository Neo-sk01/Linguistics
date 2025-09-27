import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function FooterSection() {
    return (
        <footer className="bg-white text-gray-600 py-8 border-t border-blue-100">
            <div className="container mx-auto p-8 border border-blue-100 rounded-lg shadow-sm bg-white">
                <div className="mb-4 flex justify-center">
                    <Link href="/" aria-label="go home">
                        <Logo />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* CONTACT US */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">CONTACT US</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <p className="text-gray-600">067 747 2124</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <p className="text-gray-600">nkuna@imperiumlinguistics.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div>
                                    <p className="font-semibold text-gray-900">Hours</p>
                                    <p className="text-gray-600">Monday-Friday: 9AM-6PM</p>
                                    <p className="text-gray-600">Saturday: 10AM-2PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONNECT WITH US & QUICK LINKS */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">CONNECT WITH US</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/imperiumlinguistics" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                </a>
                                <a href="https://www.instagram.com/imperiumlingustics/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.266.058 2.163.248 2.914.554.784.31 1.46.72 2.123 1.383.662.662 1.073 1.34 1.383 2.123.306.75.496 1.648.554 2.914.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.266-.248 2.163-.554 2.914-.31.783-.72 1.46-1.383 2.123-.662.662-1.34 1.073-2.123 1.383-.75.306-1.648.496-2.914.554-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.266-.058-2.163-.248-2.914-.554-.783-.31-1.46-.72-2.123-1.383-.662-.662-1.073-1.34-1.383-2.123-.306-.75-.496-1.648-.554-2.914-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.266.248-2.163.554-2.914.31-.783.72-1.46 1.383-2.123.662-.662 1.34-1.073 2.123-1.383.75-.306 1.648-.496 2.914-.554C8.416 2.175 8.796 2.163 12 2.163m0-2.163c-3.259 0-3.667.014-4.947.072-1.27.058-2.148.27-2.91.588-.78.316-1.487.74-2.123 1.38-1.275 1.275-1.835 2.9-1.835 4.58C.014 8.333 0 8.74 0 12c0 3.259.014 3.667.072 4.947.058 1.27.27 2.148.588 2.91.316.78.74 1.487 1.38 2.123 1.275 1.275 2.9 1.835 4.58 1.835 1.277.058 1.687.072 4.947.072s3.667-.014 4.947-.072c1.27-.058 2.148-.27 2.91-.588.78-.316 1.487-.74 2.123-1.38 1.275-1.275 1.835-2.9 1.835-4.58 0-1.277.058-1.687.072-4.947s-.014-3.667-.072-4.947c-.058-1.27-.27-2.148-.588-2.91-.316-.78-.74-1.487-1.38-2.123C20.068.82 19.36.495 18.58.18c-.762-.318-1.64-.53-2.91-.588C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">QUICK LINKS</h3>
                            <nav className="space-y-2 text-gray-600">
                                <Link href="/faq" className="block hover:text-primary">FAQ</Link>
                                <Link href="/we-transfer" className="block hover:text-primary">WeTransfer Guide</Link>
                                <Link href="/policies#privacy" className="block hover:text-primary">Privacy</Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-10 pt-6">
                    <p>&copy; {new Date().getFullYear()} Imperium Linguistics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
