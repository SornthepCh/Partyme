'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ExpertiseList from '../components/ExpertiseList'
import PageWrapper from '../components/PageWrapper'
import TypeWriter from '../components/TypeWriter'
import Image from 'next/image'

export default function About() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 text-gray-200">
          <section className="max-w-6xl mx-auto px-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              {/* Profile Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 animate-scale-in">
                <Image
                  src="/images/me.png"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>

              {/* Intro */}
              <div className="animate-slide-in-right">
                <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                  <TypeWriter 
                    texts={[
                      "I'm passionate about developing modern web and mobile applications.I enjoy learning new technologies and continuously improving my skills."
                    ]} 
                    speed={10}
                    delay={1000}
                    onComplete={() => setShowContent(true)}
                  />
                </p>
              </div>
            </div>

            {showContent && (
              <div className="stagger-animate">
                {/* Skills Section */}
                <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 mb-16">
                  <h2 className="text-2xl font-semibold mb-6 text-purple-300">
                    <TypeWriter 
                      texts={["Skills & Expertise"]} 
                      speed={100}
                    />
                  </h2>
                  <ExpertiseList />
                </div>

                {/* Education Section */}
                <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 mb-16">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                    <TypeWriter 
                      texts={["Education"]} 
                      speed={100}
                    />
                  </h2>
                  <div className="text-gray-300 leading-relaxed">
                    <div className="mb-4">
                      <strong>2020-2022</strong><br />
                      Science–Mathematics Program<br />
                      Dan Khun Thot School<br />
                      GPA: 3.84
                    </div>
                    <div>
                      <strong>2022-2025</strong><br />
                      Bachelor's Degree in Computer Science<br />
                      Rajamangala University of Technology Isan<br />
                      GPA: 3.56
                    </div>
                  </div>
                </div>

                {/* Soft Skills Section */}
                <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 mb-16">
                  <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                    <TypeWriter 
                      texts={["Soft Skills"]} 
                      speed={100}
                    />
                  </h2>
                  <div className="text-gray-300 leading-relaxed space-y-2">
                    <div>• Highly responsible and punctual</div>
                    <div>• Fast learner and adaptable to new technologies</div>
                    <div>• Excellent teamwork and communication skills</div>
                    <div>• Creative thinker with strong problem-solving abilities</div>
                    <div>• Can apply and adapt AI to suit different contexts or requirements</div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </PageWrapper>
    </>
  )
}