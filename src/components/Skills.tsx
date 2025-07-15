'use client'

import { skillsData } from '@/data/skillsData'

export default function Skills() {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              dot <= level 
                ? 'bg-teal-600 scale-110' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const renderProgressBar = (level: number) => {
    const percentage = (level / 5) * 100
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Skills & <span className="text-teal-600">Expertise</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical skills and competencies developed through education, professional experience, and personal projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${(index * 0.1) + (skillIndex * 0.1)}s both`
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`text-lg font-semibold ${skill.color}`}>
                          {skill.name}
                        </span>
                        <div className="hidden sm:block">
                          {renderSkillLevel(skill.level)}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">
                        {skill.level}/5
                      </span>
                    </div>
                    
                    <div className="sm:hidden mb-2">
                      {renderSkillLevel(skill.level)}
                    </div>
                    
                    {renderProgressBar(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Continuous Learning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m passionate about staying current with technology trends and continuously expanding my skill set. 
              Currently exploring advanced cryptographic protocols, cloud architectures, and modern development practices.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}