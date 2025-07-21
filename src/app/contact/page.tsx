'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageWrapper from '../components/PageWrapper'
import TypeWriter from '../components/TypeWriter'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Contact() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
          <section className="px-6 py-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent min-h-[80px]">
                <TypeWriter 
                  texts={["Contact"]} 
                  speed={50}
                  onComplete={() => setShowContent(true)}
                />
              </h1>

              {showContent && (
                <div className="stagger-animate">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                      <h3 className="text-lg font-semibold text-purple-300 mb-2">
                        <TypeWriter 
                          texts={["Email"]} 
                          speed={100}
                        />
                      </h3>
                      <p className="text-gray-200 text-xl font-medium">sornthep.ch@rmuti.ac.th</p>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                      <h3 className="text-lg font-semibold text-purple-300 mb-2">
                        <TypeWriter 
                          texts={["Phone"]} 
                          speed={100}
                        />
                      </h3>
                      <p className="text-gray-200 text-xl font-medium">+66 0637350595</p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-6 mt-8">
                    <a 
                      href="https://web.facebook.com/sornthep.ch" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white hover:scale-110 transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <FaFacebookF size={20} />
                    </a>

                    <a 
                      href="https://www.instagram.com/xk_9uh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: '0.7s' }}
                    >
                      <FaInstagram size={20} />
                    </a>

                    <a 
                      href="https://github.com/SornthepCh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 hover:text-white hover:scale-110 transition-all duration-300 animate-scale-in"
                      style={{ animationDelay: '0.9s' }}
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  )
}