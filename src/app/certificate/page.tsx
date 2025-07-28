'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageWrapper from '../components/PageWrapper'
import TypeWriter from '../components/TypeWriter'
import { FaAward } from 'react-icons/fa'

interface Certificate {
  id: number
  image: string
  description: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    image: "/images/C3.jpg",
    description: "นักศึกษาผู้มีผลการเรียนดีเด่น ประจำปี 2565 | Students with outstanding academic performance in the academic year 2022"
  },
  {
    id: 2,
    image: "/images/C2.jpg", 
    description: "กรรมการฝ่ายอาสาพัฒนาและบำเพ็ญประโยชน์ สโมสรนักศึกษาคณะวิทยาศาสตร์และศิลปศาสตร์ ประจำปี 2566 | Served as a Committee Member for Volunteer Development and Public Service, Student Club, Faculty of Science and Liberal Arts, Academic Year 2023"
  },
  {
    id: 3,
    image: "/images/C1.jpg",
    description: "นักศึกษาผู้มีความสามารถด้านกิจกรรมดีเด่น ประจำปี 2566 | Student with Outstanding Performance in Extracurricular Activities, Academic Year 2023"
  },
  // เพิ่มใบรับรองอื่นๆ ตามที่คุณมี
]

export default function Certificate() {
  const [showDescription, setShowDescription] = useState(false)
  const [showCertificates, setShowCertificates] = useState(false)



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
                  texts={["Certificates"]} 
                  speed={50}
                  onComplete={() => setShowDescription(true)}
                />
              </h1>
              {showDescription && (
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
                  <TypeWriter 
                    texts={["Here are some of my most memorable testimonials."]} 
                    speed={10}
                    onComplete={() => setShowCertificates(true)}
                  />
                </p>
              )}
            </div>
          </section>

          {/* Certificates Grid */}
          {showCertificates && (
            <section className="px-6 pb-20">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
                  {certificates.map((certificate) => (
                    <div
                      key={certificate.id}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group"
                    >
                      {/* Certificate Image */}
                      <div className="overflow-hidden">
                        <img
                          src={certificate.image}
                          alt={`Certificate ${certificate.id}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Certificate Description */}
                      <div className="p-6">
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {certificate.description}
                        </p>
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