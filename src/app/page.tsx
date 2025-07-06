import Image from "next/image";
import CenteredSection from "./components/CenteredSection";
import ExpertiseList from "./components/ExpertiseList";

export default function Home() {
  return (
    <CenteredSection padding="p-12">
  <div className="flex flex-col sm:flex-row items-center gap-12">
    {/* รูปภาพ + ชื่อ */}
    <div className="flex flex-col items-center">
      <Image
        src="/images/me.png"
        alt="My Photo"
        width={200}
        height={200}
        className="rounded-lg shadow-md"
      />
      <div className="text-white mt-4 text-center leading-tight text-2xl font-bold">
        <p>Sornthep</p>
        <p>Chimsuntorn</p>
      </div>
    </div>

    {/* About + Expertise */}
        <div className="text-white text-lg leading-relaxed max-w-2xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold uppercase mb-4">About</h2>
            <p>
              I am currently seeking an internship position as a Front-End Developer, Back-End Developer, or Full-Stack Developer.
              I am eager to learn new technologies and continuously improve my skills.
              I am hardworking, a fast learner, and highly responsible when it comes to my work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase mb-4">Expertise</h2>
            <ExpertiseList />
          </div>
        </div>
      </div>
    </CenteredSection>



  );
}
