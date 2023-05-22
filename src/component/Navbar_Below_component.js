import React from 'react'
import dp from './dp.jpg'
import CountUp from 'react-countup';

function Navbar_Below_component() {
    const URL = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd"
    return (
        <>
            <section class=" body-font" data-aos='fade'>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">Tail News from All Over the World!</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Tail News is an online platform that offers a wide range of articles on various topics, including technology, business, health, and lifestyle. It aims to provide readers with up-to-date and informative content from reliable sources, catering to a diverse audience. With a user-friendly interface, readers can easily navigate and find articles of interest, making Tail News a go-to destination for information and knowledge.</p>
                    </div>
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div class="border-2 px-4 py-6 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                                <h2 class="title-font font-medium text-3xl  "><CountUp enableScrollSpy={true} start={0} end={URL.length} duration={5} /></h2>
                                <p class="leading-relaxed">Articles</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div class="border-2 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 class="title-font font-medium text-3xl  "><CountUp enableScrollSpy={true} start={0} end={100} duration={5} />K</h2>
                                <p class="leading-relaxed">Users</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div class="border-2 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <h2 class="title-font font-medium text-xl  ">All over the World</h2>
                                <p class="leading-relaxed">Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="  body-font" >
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <div class="lg:w-4/6 mx-auto">
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8" data-aos='zoom-in'>
                                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200  ">
                                    <img class="rounded-full w-36 h-auto" src={dp} alt="" />
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-lg">Muhammad Saad</h2>
                                    <div class="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                                    <p class="text-base">Muhammad Saad is the provider of Tail News, he is a journalist, writer, or content creator committed to delivering informative and engaging articles to readers.</p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" data-aos='flip-up'>
                                <p class="leading-relaxed text-lg mb-4">As a dedicated journalist, the news provider strives to deliver reliable and informative content to readers. With a keen eye for detail and a passion for storytelling, they are committed to uncovering and reporting the truth, even in the face of adversity. They understand the importance of journalistic integrity and ethics, and work tirelessly to ensure their writing is fair, balanced, and accurate. Their love for the written word is evident in every article they produce, making them a valuable asset to the industry.</p>
                                <a class="text-purple-500 inline-flex items-center" href='https://www.linkedin.com/in/muhammad-saad-ab4346209/' >Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class=" body-font overflow-hidden" >
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20" data-aos='fade-in'>
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2" >Pricing</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div class="flex mx-auto border-2 border-purple-500 rounded overflow-hidden mt-6">
                            <button class="py-1 px-4 hover:bg-purple-500 hover:text-white focus:outline-none">Monthly</button>
                        </div>
                    </div>
                    <div class="flex flex-wrap -m-4" >
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos='fade-up-right'>
                            <div class="h-full p-6 rounded-lg border-2 border-gray-400 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                                <h1 class="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-400">
                                    <span>Free</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the News
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Source
                                </p>
                                <p class="flex items-center mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Publisher
                                </p>
                                <button class="flex items-center mt-auto text-white bg-gray-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Subscribe
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-400 mt-3">Get the latest News and Information from <em> @TailNews</em></p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos='fade-up'>
                            <div class="h-full p-6 rounded-lg border-2 border-gray-400 flex flex-col relative overflow-hidden">
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                                <h1 class="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-400">
                                    <span><CountUp enableScrollSpy={true} start={50} end={24} duration={2} /></span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the News
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Source
                                </p>
                                <p class="flex items-center mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Publisher
                                </p>
                                <button class="flex items-center mt-auto text-white bg-gray-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Subscribe
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-400 mt-3">Get the latest News and Information from <em> @TailNews</em></p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos='fade-up'>
                            <div class="h-full p-6 rounded-lg border-2 border-purple-500 flex flex-col relative overflow-hidden">
                                <span class="bg-purple-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                <h1 class="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-400">
                                    <span>$<CountUp enableScrollSpy={true} start={0} end={48} duration={2} /></span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the News
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Source
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Read About Section
                                </p>
                                <p class="flex items-center mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Publisher
                                </p>
                                <button class="flex items-center mt-auto text-white bg-purple-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-purple-600 rounded">Subscribe
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-400 mt-3">Get the latest News and Information from <em> @TailNews</em></p>
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos='fade-up-left'>
                            <div class="h-full p-6 rounded-lg border-2 border-purple-500 flex flex-col relative overflow-hidden">
                                <span class="bg-purple-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Annual</span>
                                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                <h1 class="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-400">
                                    <span>$<CountUp enableScrollSpy={true} start={0} end={100} duration={2} /></span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/annual</span>
                                </h1>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the News
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Source
                                </p>
                                <p class="flex items-center mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Read About Section
                                </p>
                                <p class="flex items-center mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Get the Publisher
                                </p>
                                <button class="flex items-center mt-auto text-white bg-purple-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-purple-600 rounded">Subscribe
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p class="text-xs text-gray-400 mt-3">Get the latest News and Information from <em> @TailNews</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="  body-font" data-aos='fade-in' >
                <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col" >
                    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 class="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">Tail News Apps</h2>
                        <h1 class="md:text-3xl text-2xl font-medium title-font  ">Available on GOOGLE and APPLE Stores</h1>
                        <div class="w-full h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                    </div>

                    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4" >
                        <button class=" inline-flex py-3 px-5 rounded-lg items-center focus:outline-none hover:bg-purple-500 hover:text-white"  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                            </svg>
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs   mb-1">GET IT ON</span>
                                <span class="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button class=" inline-flex py-3 px-5 rounded-lg items-center focus:outline-none hover:bg-purple-500 hover:text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                            </svg>
                            <span class="ml-4 flex items-start flex-col leading-none">
                                <span class="text-xs   mb-1">Download on the</span>
                                <span class="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar_Below_component