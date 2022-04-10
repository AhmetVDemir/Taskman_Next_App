import type { NextPage } from 'next'
import React, { useState } from 'react'

const Home: NextPage = () => {

  const [isOpen, togleSideBar] = useState(false);

  return (
    <div className='h-screen flex'>

      {/* SideBar */}
      <div className={`z-30 fixed lg:static inset-y-0 left-0 w-64 bg-white px-8 py-4 border-r overflow-auto lg:translate-x-0 transform ${isOpen ? "translate-x-0 ease-out transition" : "-translate-x-full ease-in transition"}`} >
        <div className='flex justify-between items-center'>
          <img src='/images/spiral_notebook.svg' alt='Logo' className='w-9 h-9' />
          <button className='text-gray-700 lg:hidden' onClick={() => togleSideBar(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>

        <nav className='mt-8'>
          <h3 className='text-sm font-semibold text-gray-600 uppercase tracking-wide'>Akış Listesi</h3>
          <div className='mt-2 -m-3'>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>İş Yığını</span>
              <span className='text-xs font-semibold text-gray-700'>23</span>
            </a>
            <a href='#' className='flex justify-between items-center bg-gradient-to-r from-purple-700 to to-blue-500 rounded-lg px-3 py-2'>
              <span className='text-sm font-medium text-white'>Aktif Sprint</span>
              <span className='text-xs font-semibold text-white'>1</span>
            </a>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Raporlar</span>
              <span className='text-xs font-semibold text-gray-700'>13</span>
            </a>
          </div>
          <h3 className='text-sm font-semibold mt-8 text-gray-600 uppercase tracking-wide'>Etiketler</h3>
          <div className='mt-2 -m-3'>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Hatalar</span>
            </a>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Yeni Özellik</span>
            </a>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Pazarlamma</span>
            </a>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Tasarım</span>
            </a>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Araştırma</span>
            </a>
            <a href='#' className='flex justify-between items-center px-3 py-2'>
              <span className='text-sm font-medium text-gray-700'>Zaman Aşımı</span>
            </a>
          </div>
        </nav>

      </div>

      {/* MainContent */}
      <div className='flex flex-col flex-1 min-w-0'>
        <div className='flex-shrink-0'>
          <header className='flex flex-col border-b px-6 border-gray-200'>
            <div className='min-w-0 flex justify-between items-center py-3'>
              <div className='flex-shrink-1 flex items-center py-3'>

                {/* Hamburger Menu */}
                <button className='text-gray-600 lg:hidden' onClick={() => togleSideBar(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>

                {/* Arama Çubuğu */}
                <div className='relative w-64 ml-4 lg:ml-0'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </span>
                  <input placeholder='Ara' className='block w-full text-sm  border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400' />
                </div>
                {/* İkonlar */}
                <div className='ml-4 flex items-center'>
                  <button className='flex-shrink-0 text-gray-500 w-6 h-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  </button>
                  <button className='ml-4 mr-2 flex-shrink-0'>
                    <img className='w-9 h-9 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='Adam1' />
                  </button>
                </div>
              </div>
            </div>
            {/* Alt Başlık kısmı */}
            <div className='flex items-center justify-between py-2'>
              <div className='sm:flex sm:items-center'>
                <h2 className='text-lg font-medium text-gray-900'>İmzalayanlar</h2>
                <div className='sm:ml-6 flex items-center sm:mt-0 mt-1'>
                  <span className='border-2 border-white rounded-full'>
                    <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                  </span>
                  <span className='-ml-2.5 border-2 border-white rounded-full'>
                    <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                  </span>
                  <span className='-ml-2.5 border-2 border-white rounded-full'>
                    <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                  </span>
                </div>
              </div>

              <div className='ml-8 flex items-center'>
                <button className='text-white pl-2 pr-4 py-2 rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-700'>
                  Sprint'i tammamla
                </button>
                <button className='flex items-center ml-5 pl-2 pr-4 py-2 rounded-md  text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-blue-500 hover: from-purple-500 hover:to-blue-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Yeni Sprint</span>
                </button>
              </div>
            </div>
          </header>
        </div>


        {/* Main Content */}
        <div className='flex-1 bg-gray-50 overflow-auto'>
          <main className='h-full p-3 inline-flex space-x-2 overflow-hidden'>
            <div className='flex flex-col w-80 rounded-md bg-transparent'>
              <h3 className='px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono'>Yapılacaklar</h3>
              <div className='flex-1 min-h-0'>
                <ul className='pt-1 pb-3 px-3'>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-blue-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-blue-500 leading-tight'>Tasarım</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                  {/* ----------------------------- */}
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-red-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-red-500 leading-tight'>Hata</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Devam Eden */}
            <div className='flex flex-col w-80 rounded-md bg-transparent'>
              <h3 className='px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono'>Devam Eden</h3>
              <div className='flex-1 min-h-0 overflow-y-auto'>
                <ul className='pt-1 pb-3 px-3'>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-orange-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-orange-500 leading-tight'>Araştırma</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-pink-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-pink-500 leading-tight'>Yeni Özellik</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-green-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-green-500 leading-tight'>Pazarlama</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-blue-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-blue-500 leading-tight'>Tasarım</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-blue-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-blue-500 leading-tight'>Tasarım</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-blue-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-blue-500 leading-tight'>Tasarım</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Test Aşaması */}
            <div className='flex flex-col w-80 rounded-md bg-transparent'>
              <h3 className='px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono'>Test Aşaması</h3>
              <div className='flex-1 min-h-0'>
                <ul className='pt-1 pb-3 px-3'>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-gray-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-gray-500 leading-tight'>Kodlama</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Biten */}
            <div className='flex flex-col w-80 rounded-md bg-transparent'>
              <h3 className='px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono'>Biten</h3>
              <div className='flex-1 min-h-0'>
                <ul className='pt-1 pb-3 px-3'>
                  <li className='mt-1'>
                    <a href='#' className='block p-5 rounded-md bg-white shadow'>
                      <div className='flex justify-between items-baseline'>
                        <div className='bg-blue-200 rounded px-3 py-1'>
                          <span className='text-sm font-medium text-blue-500 leading-tight'>Tasarım</span>
                        </div>
                        <div className='flex items-center text-sm text-gray-400'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                          <span className='ml-2'>2</span>
                        </div>
                      </div>
                      <div className='mt-3'>
                        <p className='text-sm text-gray-800'>Ürün ilüstrasyonu sembolleştirmesi insanları bir araya taşır.</p>
                      </div>
                      <div className='mt-3 flex items-center'>
                        <span className='border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                        <span className='-ml-2.5 border-2 border-white rounded-full'>
                          <img className='w-6 h-6 rounded-full object-cover' src='https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=144&q=80' alt='kişi' />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
