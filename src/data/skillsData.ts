export interface Skill {
  name: string
  level: number // 1-5 scale
  category: 'language' | 'framework' | 'tool' | 'soft'
  icon?: string
  color?: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'TypeScript', level: 5, category: 'language', color: 'text-blue-600' },
      { name: 'JavaScript', level: 5, category: 'language', color: 'text-yellow-500' },
      { name: 'Go', level: 4, category: 'language', color: 'text-cyan-600' },
      { name: 'Python', level: 4, category: 'language', color: 'text-green-600' },
      { name: 'Java', level: 3, category: 'language', color: 'text-red-600' },
      { name: 'C#', level: 3, category: 'language', color: 'text-purple-600' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 5, category: 'framework', color: 'text-blue-500' },
      { name: 'Next.js', level: 5, category: 'framework', color: 'text-gray-800' },
      { name: 'Node.js', level: 4, category: 'framework', color: 'text-green-500' },
      { name: 'Tailwind CSS', level: 5, category: 'framework', color: 'text-teal-500' },
      { name: 'Unity', level: 4, category: 'framework', color: 'text-gray-700' },
      { name: 'Express.js', level: 4, category: 'framework', color: 'text-gray-600' },
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 5, category: 'tool', color: 'text-orange-600' },
      { name: 'Docker', level: 4, category: 'tool', color: 'text-blue-600' },
      { name: 'PostgreSQL', level: 4, category: 'tool', color: 'text-blue-700' },
      { name: 'MongoDB', level: 3, category: 'tool', color: 'text-green-700' },
      { name: 'AWS', level: 3, category: 'tool', color: 'text-orange-500' },
      { name: 'Linux', level: 4, category: 'tool', color: 'text-gray-800' },
    ]
  },
  {
    title: 'Core Competencies',
    skills: [
      { name: 'Cryptography', level: 5, category: 'soft', color: 'text-purple-700' },
      { name: 'Algorithms', level: 5, category: 'soft', color: 'text-indigo-600' },
      { name: 'Full-Stack Development', level: 5, category: 'soft', color: 'text-teal-600' },
      { name: 'System Design', level: 4, category: 'soft', color: 'text-blue-700' },
      { name: 'Problem Solving', level: 5, category: 'soft', color: 'text-green-700' },
      { name: 'Team Leadership', level: 4, category: 'soft', color: 'text-red-600' },
    ]
  }
]