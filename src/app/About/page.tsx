import Navbar from '../components/Navbar';
import ExpertiseList from '../components/ExpertiseList';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 text-gray-200">
        <section className="max-w-6xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500">
              <Image
                src="/images/me.png"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            {/* Intro */}
            <div>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                I'm passionate about developing modern web and mobile applications.
                I enjoy learning new technologies and continuously improving my skills.
              </p>
            </div>
          </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">Skills & Expertise</h2>
            <ExpertiseList />
          </div>
          {/* About Description */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Education </h2>
            <p className="text-gray-300 leading-relaxed">
                2020-2022 <br />
                Science–Mathematics Program
                Dan Khun Thot School <br />
                GPA: 3.84 <br />

                2022-2025 <br />
                Bachelor’s Degree 
                in Computer Science
                Rajamangala University of Technology Isan <br />
                GPA: 3.56
            </p>
          </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Soft Skills </h2>
            <p className="text-gray-300 leading-relaxed">
                • Highly responsible and punctual <br />
                • Fast learner and adaptable to new technologies <br />
                • Excellent teamwork and communication skills <br />
                • Creative thinker with strong problem-solving abilities <br />
                • Can apply and adapt AI to suit different contexts or requirements.
            </p>
          </div>
          
        </section>
      </main>
    </>
  );
}
