export interface TimelineItem {
  id: string
  year: string
  label: string
  description: string
  sortOrder: number
}

export const timelineData: TimelineItem[] = [
  {
    id: '2014',
    year: '2014',
    label: 'Libratone A/S',
    description: 'I stopped at Flex Trim A/S as a warehouse cleaner, and began working for Libratone A/S as a warehouse worker in some weekends/holidays. Being responsible for packing/repacking, testing and updating speakers.',
    sortOrder: 2014.0
  },
  {
    id: '2015',
    year: '2015',
    label: 'Café Holmen & HTX',
    description: 'Started studying at Skive College HTX in the Mathematics/Physics class. I began working as a part-time job at Café Holmen in Nykøbing Mors as a dishwasher and kitchen helper.',
    sortOrder: 2015.0
  },
  {
    id: '2016',
    year: '2016',
    label: 'Floorball Coach',
    description: 'After A year at Café Holmen I stopped working there. I got a part-time job at Libratone A/S as their warehouse janitor, while still doing the warehouse work in some holidays/weekends. Also, I started as a floorball coach for a youth team at Skive Floorbal.',
    sortOrder: 2016.0
  },
  {
    id: '2018',
    year: '2018',
    label: 'B.Sc. in CS start',
    description: 'I finished studying at Skive College HTX, and moved to Aarhus to study a bachelors degree in Computer Science. I stopped working at Libratone A/S after I had developed a device for testing the battery quality in the wireless speakers.',
    sortOrder: 2018.0
  },
  {
    id: '2021-education',
    year: '2021',
    label: 'M.Sc. in CS start',
    description: 'I finished my bachelors degree in Computer Science at Aarhus University. After finishing my bachelor degree, I began studying for a masters degree in Computer Science at Aarhus University.',
    sortOrder: 2021.1
  },
  {
    id: '2021-work',
    year: '2021',
    label: 'Systematic A/S',
    description: 'Started working part-time at Systematic A/S as a Junior Software Developer, here I was part of the Studematic team, which organizes events for the company\'s student workers. Here time I got the opportunity to be an ambassador for Systematic at K-dag at Aarhus University, IT-day in Aalborg, and a few other events.',
    sortOrder: 2021.2
  },
  {
    id: '2023-education',
    year: 'Summer 2023',
    label: 'M.Sc in CS finished',
    description: 'I finished my masters degree in Computer Science at Aarhus University, with specialization in Algorithms, Cryptography, and Ubiquitous Computing and Interaction. My master\'s thesis was centered on light-weight cryptography.',
    sortOrder: 2023.1
  },
  {
    id: '2023-work',
    year: 'Fall 2023 - Present',
    label: 'Current Status',
    description: 'I am currently working full-time at Systematic A/S as a Senior Software Developer, where I am part of a team in the SitaWare Headquarters product. I am also involved in various student ambassador activities, mentoring new student workers, part of the employess club and planing events and parties for my colleagues.',
    sortOrder: 2023.2
  }
]
