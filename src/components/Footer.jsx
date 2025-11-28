import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../assets/footer-logo.png';
const Footer = () => {
    return (
        <footer
            className="relative bg-cover bg-center bg-no-repeat text-white"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80')",
                backgroundAttachment: 'fixed', // This makes the background fixed for a parallax effect
            }}
        >
            {/* Dark Overlay for better readability */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    
                    {/* Logo and Social Media */}
                    <div className="lg:col-span-2 flex flex-col items-start space-y-6">
                        <div className="text-center md:text-left">
                            <img
                                src="logo"
                                alt="VJTI Logo"
                                className="w-40 mb-4 hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <p className="font-semibold text-lg text-gray-200">Connect With Us</p>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/people/Veermata-Jijabai-Technological-Institute-VJTI/100082630024845/?mibextid=PtKPJ9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-sm" />
                            </a>
                            {/* Twitter */}
                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2Fvjti_official"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 hover:bg-sky-500 transition-all duration-300 transform hover:scale-110"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="text-sm" />
                            </a>
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/vjti_official/?igsh=ZHo1ZDNncmx6Nmxk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-sm" />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/school/veermata-jijabai-technological-institute/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 transform hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-sm" />
                            </a>
                        </div>
                        
                        {/* Additional Info */}
                        <div className="mt-4">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Veermata Jijabai Technological Institute - Empowering students with quality education 
                                and fostering innovation since 1887.
                            </p>
                        </div>
                    </div>

                    {/* About */}
                    <div className="flex flex-col space-y-4">
                        <p className="font-bold text-lg text-white border-b border-gray-600 pb-2">About</p>
                        <div className="flex flex-col space-y-3">
                            <a href="/about" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">About Us</a>
                            <a href="/rules-guidelines" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Rules & Guidelines</a>
                            <a href="/activity-and-events" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Events</a>
                            <a href="/contact" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Contact</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <p className="font-bold text-lg text-white border-b border-gray-600 pb-2">Quick Links</p>
                        <div className="flex flex-col space-y-3">
                            <a href="/students" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Students</a>
                            <a href="/hostels" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Hostels</a>
                            <a href="/alumni" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Alumni</a>
                            <a href="/visit" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Visit</a>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className="flex flex-col space-y-4">
                        <p className="font-bold text-lg text-white border-b border-gray-600 pb-2">Get in Touch</p>
                        <div className="flex flex-col space-y-3">
                            <a href="/media" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Media</a>
                            <a href="/announcements-for-career" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Careers</a>
                            <a href="/tenders" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">Tenders</a>
                            <a href="/training-and-placement-office" className="hover:text-rose-400 transition-colors duration-300 text-gray-300 hover:translate-x-1 transform">TPO</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section - Also with background image */}
            <div className="relative border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300 text-sm text-center md:text-left">
                            Copyright © {new Date().getFullYear()} Veermata Jijabai Technological Institute. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="/privacy-policy" className="hover:text-rose-400 transition-colors duration-300">Privacy Policy</a>
                            <a href="/terms-of-service" className="hover:text-rose-400 transition-colors duration-300">Terms of Service</a>
                            <a href="/sitemap" className="hover:text-rose-400 transition-colors duration-300">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;