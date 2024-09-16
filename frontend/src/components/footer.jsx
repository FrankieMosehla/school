import { useLocation } from 'react-router-dom'
import {useState} from 'react'

export default function Footer() {
    const {pathname} = useLocation();
    const paths = ['/signup', '/explore', '/signin', '/messages', '/explore/plastic', '/chat/:id'];
    const [disable, seDisable] = useState( paths.includes(pathname) ? true : false);
    return disable ? "" :  (
        <section className="py-10 bg-white sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                    <div className="col-span-2 md:col-span-4 xl:pr-8">
                        <img
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt=""
                        />

                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit.
                        </p>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            Start Live Chat
                        </a>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Company</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Features
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Works
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Customer Support
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Delivery Details
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Resources</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Free eBooks
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Development Tutorial
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    How to - Blog
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    YouTube Playlist
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Extra Links</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Customer Support
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Delivery Details
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    title=""
                                    className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">
                        © Copyright 2021, All Rights Reserved by Postcraft
                    </p>

                    <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                        <li>
                            <a
                                href="#"
                                title=""
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                            >
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.437.549-2.037a11.448 11.448 0 0 0 8.303 4.21 4.544 4.544 0 0 1-.099-.922A4.033 4.033 0 0 1 18.61 5.63a7.89 7.89 0 0 0 2.548-.973 4.015 4.015 0 0 1-1.77 2.224 8.068 8.068 0 0 0 2.32-.624 8.562 8.562 0 0 1-2.075 2.14z"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                title=""
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                            >
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}