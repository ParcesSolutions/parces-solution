import { Footer } from 'flowbite-react';
import React from 'react';
import parces_small_logo from '../logo/parces_small_logo.jpg';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-blue-800'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className="mt-5">
                  <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl flex'>
                    <span><img className='h-10 sm:h-14 rounded-md' src={parces_small_logo} alt="parces solutions logo"/></span>
                    <h1 className='self-center pl-1 font-semibold dark:text-white'>Parces Solutions</h1>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                    <Footer.Title title='Services' />
                    {/* {group of links for services offered} */}
                    <Footer.LinkGroup col>
                      <Footer.Link href='/projects' target='_blank' rel='noopener noreferrer' /*link for "crating" that opens in new page*/>
                        Crating
                      </Footer.Link>
                      <Footer.Link href='/projects' target='_blank' rel='noopener noreferrer' /*link for "Welding" that opens in new page*/>
                        Welding
                      </Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title='Example' />
                    {/* {group of links for services offered} */}
                    <Footer.LinkGroup col>
                      <Footer.Link href='#' target='_blank' rel='noopener noreferrer' /*link for "example1" that opens in new page*/>
                        Example1
                      </Footer.Link>
                      <Footer.Link href='#' target='_blank' rel='noopener noreferrer' /*link for "example2" that opens in new page*/>
                        Example2
                      </Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                  <div>
                    <Footer.Title title='Legal' />
                    {/* {group of links for services offered} */}
                    <Footer.LinkGroup col>
                      <Footer.Link href='#' target='_blank' rel='noopener noreferrer' /*link for "Privacy Policy" that opens in new page*/>
                        Privacy Policy
                      </Footer.Link>
                      <Footer.Link href='#' target='_blank' rel='noopener noreferrer' /*link for "Terms &amp; Conditions" that opens in new page*/>
                        Terms &amp; Conditions
                      </Footer.Link>
                    </Footer.LinkGroup>
                  </div>
                </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
              <Footer.Copyright 
                href='#' 
                by="Parces Solutions" 
                year={new Date().getFullYear()} 
              />
              <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
              </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom