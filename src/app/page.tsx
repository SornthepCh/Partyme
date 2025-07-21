'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import TypeWriter from './components/TypeWriter'

export default function Home() {
  const [showSubText, setShowSubText] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  return (
    <>
      <Navbar />
      <main className="pt-15 min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
        <section className="relative px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent min-h-[200px] flex flex-col justify-center">
                <TypeWriter 
                  texts={["Hello I'm"]} 
                  speed={50}
                  onComplete={() => setShowSubText(true)}
                />
                {showSubText && (
                  <span className="text-3xl md:text-5xl block mt-4">
                    <TypeWriter 
                      texts={["Sornthep Chimsuntorn"]} 
                      speed={50}
                      onComplete={() => setShowDescription(true)}
                    />
                  </span>
                )}
              </h1>
              
              {showDescription && (
                <div className="animate-fade-in-up">
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                    <TypeWriter 
                      texts={["This is a website created to show more of my history."]} 
                      speed={10}
                    />
                  </p>
                  <p className="text-gray-300 opacity-0 animate-fade-in-delayed" style={{ textIndent: '2rem' }}>
                    I'am currently seeking an internship position as a 
                    Front-End Developer, Back-End Developer. I am eager to learn new 
                    technologies and continuously improve my skills. I am hardworking,
                    a fast learner, and highly responsible when it comes to my work.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        </section>
      </main>
    </>
  )
}