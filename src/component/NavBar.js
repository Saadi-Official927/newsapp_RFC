import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {


  const removeClassListColor = () => {
    document.body.classList.remove('bg-gray-800')
    document.body.classList.remove('text-gray-300')
    document.body.classList.remove('bg-white')
    document.body.classList.remove('text-gray-700')


  }
  const bodyModeDark = (cls) => {
    removeClassListColor();
    document.body.classList.add(`bg-${cls}`)
    document.body.classList.add(`text-gray-300`)
  }
  const bodyModeWhite = (cls) => {
    removeClassListColor();
    document.body.classList.add(`bg-${cls}`)
    document.body.classList.add(`text-gray-700`)
  }
  return (

    <>
      
      <header class=" body-font" data-aos='fade-down' >
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link class="mr-5 hover:text-gray-500 text-xl font-semibold " to="/home" >News One Click Away</Link>
          </nav>
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg style={{ cursor : 'pointer'}}  onClick={() => window.location.reload(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
            <Link class="ml-3 text-2xl" to="/" >Tail News</Link>
          </a>
          <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <svg style={{ cursor: 'pointer' }} onClick={() => { bodyModeDark('gray-800') }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
            </svg>
            <svg style={{ cursor: 'pointer' }} onClick={() => { bodyModeWhite('white') }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mx-2">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar