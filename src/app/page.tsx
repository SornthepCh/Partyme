import Image from "next/image";
import CenteredSection from "./components/CenteredSection";
import ExpertiseList from "./components/ExpertiseList";
import './globals.css'

export const metadata = {
  title: 'My App',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <CenteredSection padding="p-12">
      <div className="flex flex-col lg:flex-row items-start gap-8 max-w-7xl mx-auto">
        
        {/* การ์ดรูปและชื่อ */}
        <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex-shrink-0 w-full lg:w-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <Image
                src="/images/me.png"
                alt="Portrait of Sornthep Chimsuntorn"
                width={180}
                height={240}
                className="rounded-xl shadow-lg ring-4 ring-purple-400/20"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl blur opacity-20"></div>
            </div>
            <div className="text-white mt-6 leading-tight">
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
                Sornthep
              </p>
              <p className="text-2xl font-semibold text-purple-200">
                Chimsuntorn
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-1">
          {/* การ์ด About */}
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="text-white text-lg leading-relaxed">
              <h2 className="text-2xl font-bold uppercase mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                About
              </h2>
              <p className="text-blue-100 leading-relaxed">
                I am currently seeking an internship position as a Front-End Developer, Back-End Developer, 
                or Full-Stack Developer. I am eager to learn new technologies and continuously improve my skills.
                I am hardworking, a fast learner, and highly responsible when it comes to my work.
              </p>
            </div>
          </div>

          {/* การ์ด Expertise */}
          <div className="bg-gradient-to-br from-green-600/20 to-green-900/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
            <div className="text-white">
              <h2 className="text-2xl font-bold uppercase mb-6 bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                Expertise
              </h2>
              <ExpertiseList />
            </div>
          </div>
        </div>
      </div>
    </CenteredSection>
  );
}