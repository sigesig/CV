import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="wrapper flex w-full max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden">
        {/* Victor Side */}
        <div className="side left w-1/2 relative bg-gradient-to-br from-teal-600 to-teal-700 flex flex-col items-center justify-center text-white p-8">
          <div className="image victor mb-8">
            <Image
              src="/img/Selection/VictorKjelde.jpg"
              alt="Victor Kjelde"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="caption text-center">
            <h1 className="text-4xl font-bold mb-4">Victor Kjelde</h1>
            <h4 className="text-xl mb-2">Software Engineer</h4>
            <h4 className="text-lg mb-6">Master&apos;s Degree in Computer Science</h4>
            <Link 
              href="/victor-cv" 
              className="button inline-block bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Go To Resume
            </Link>
          </div>
        </div>

        {/* Bo Side */}
        <div className="side right w-1/2 relative bg-gradient-to-br from-gray-600 to-gray-700 flex flex-col items-center justify-center text-white p-8">
          <div className="image bo mb-8">
            <Image
              src="/img/Selection/BoKjelde.jpeg"
              alt="Bo Kjelde"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="caption text-center">
            <h1 className="text-4xl font-bold mb-4">Bo Kjelde</h1>
            <h4 className="text-xl mb-2">---------------------</h4>
            <h4 className="text-lg mb-6">----------------------</h4>
            <button 
              className="button inline-block bg-white text-gray-700 px-8 py-3 rounded-full font-semibold opacity-50 cursor-not-allowed shadow-lg"
              disabled
            >
              Go To Resume
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
