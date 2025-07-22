'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageWrapper from '../components/PageWrapper'
import TypeWriter from '../components/TypeWriter'

interface ProjectItem {
  id: number
  title: string
  description: string
  tech: string[]
  image?: string
  images?: string[]
  detailsLink: string
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Chenk-in",
    description: "A website designed for checking student attendance in class.",
    tech: ["next.js", "node.js", "tailwindcss", "firebase"],
    image: "/images/Check.png",
    detailsLink: "https://check-livid-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "Bitcat",
    description: "An e-commerce application focused on cat products, using Firebase to store data and enable users to submit product reviews.",
    tech: ["Flutter", "firebase", "Dart"],
    images: ["/images/Batcat1.jpg", "/images/Batcat2.jpg", "/images/Batcat3.jpg"],
    detailsLink: "https://github.com/SornthepCh/Mobile-App",
  },
  {
    id: 3,
    title: "Party.me",
    description: "This is a website to view my history in more detail.",
    tech: ["next.js", "node.js", "tailwindcss"],
    image: "/images/partyme.png",
    detailsLink: "https://partyme.vercel.app/",
  },
]

export default function Project() {
  const [showDescription, setShowDescription] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  const handleDetailsClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="pt-18 min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
          {/* Header Section */}
          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent min-h-[80px]">
                <TypeWriter 
                  texts={["Projects"]} 
                  speed={50}
                  onComplete={() => setShowDescription(true)}
                />
              </h1>
              {showDescription && (
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
                  <TypeWriter 
                    texts={["A collection of my work from websites to applications and more."]} 
                    speed={10}
                    onComplete={() => setShowProjects(true)}
                  />
                </p>
              )}
            </div>
          </section>

          {/* Projects Grid */}
          {showProjects && (
            <section className="px-6 pb-20">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group"
                    >
                      <div className="p-6">
                        {/* Project Image */}
                        <div className="overflow-hidden rounded-xl">
                          {project.images && project.images.length > 0 ? (
                            <div className="grid grid-cols-3 gap-2">
                              {project.images.map((img, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={img}
                                  alt={`${project.title} ${imgIndex + 1}`}
                                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                                />
                              ))}
                            </div>
                          ) : project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          ) : null}
                        </div>

                        {/* Project Details */}
                        <h3 className="text-xl font-bold text-white mb-3 mt-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button 
                            onClick={() => handleDetailsClick(project.detailsLink)}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </PageWrapper>
    </>
  )
}