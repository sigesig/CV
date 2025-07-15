import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Con<span className="text-teal-400">t</span>act i<span className="text-teal-400">n</span>fo
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <Link href="mailto:victor@kjelde.dk" className="text-teal-400 hover:text-teal-300">
              Victor@kjelde.dk
            </Link>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <div className="space-y-1">
              <Link href="https://github.com/sigesig" className="block text-teal-400 hover:text-teal-300">GitHub</Link>
              <Link href="https://www.linkedin.com/in/victor-kjelde/" className="block text-teal-400 hover:text-teal-300">LinkedIn</Link>
              <Link href="https://gitlab.com/sigesig" className="block text-teal-400 hover:text-teal-300">GitLab</Link>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <Link href="https://goo.gl/maps/PAF1FRfQXMznMJZt9" className="text-teal-400 hover:text-teal-300">
              Aarhus C, Jutland, Denmark
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}