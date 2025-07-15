import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image src="/img/about-img.JPG" alt="About image" width={500} height={600} className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">About <span className="text-teal-600">me</span></h2>
            <h3 className="text-2xl font-semibold mb-4">Software Developer</h3>
            <p className="text-gray-600 mb-8">
              Software developer with some experience and a drive for clean code. In my spare time, I like to fiddle 
              with different software projects, other hobby projects, and hanging out with friends. Currently, I&apos;m 
              studying for a master&apos;s degree in computer science at Aarhus University with specialization in Algorithms, 
              Cryptography, and Ubiquitous Computing and Interaction. My master&apos;s thesis is centered on light-weight 
              cryptography, which entails the development/analysis of cryptographic algorithms and protocols optimized 
              for efficiency in computation, memory usage, power consumption, and code size.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Personal skills</h3>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {['Organized', 'Punctual', 'Good at cooperating', 'Detail-minded', 'Quick learner', 'Dutiful', 'Planning and executing', 'Social'].map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <Link href="/data/CV-2023.pdf" download="Resume-Victor-Kjelde" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors inline-block">
              Download resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}