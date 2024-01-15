const data = [
  {
    id: 1,
    title: 'Adaptive Web Design',
    subtitle: 'Master SE',
    teamsCode: '9f83sk',
    activityYears: [
      [2023, 2024],
      [2024, 2025],
      [2025, 2026],
      [2026, 2027],
    ],
    desc: `Learning, understanding and applying the web standards (HTML and CSS).
      Developing website creation, evaluation and validation skills so that the
      developed sites to comply with the standards, be responsive (i.e., adapt to
      any device: telephone, tablet, netbook, laptop, desktop or TV) and
      perform better for search engines and accessibility.`,
    overview: {
      lectureDuration: '2 hours every 2 weeks',
      lectureHours: ['18:00 - 20:00, Wednesday, odd week (room 404)'],
      seminarDuration: '2 hours every 2 weeks',
      seminarHours: [
        '14:00 - 16:00, Wednesday, odd week (room 200, gr. 258)',
        '16:00 - 18:00, Wednesday, odd week (room 200, gr. 259)',
      ],
      topics: [
        'Introduction to Adaptive Web Design',
        'Flexible Layouts and Grids',
        'Media Queries and Breakpoints',
        'Adaptive Typography and Icons',
        'Responsive Images and Media',
        'User Experience and Accessibility',
        'Testing and Optimization',
      ],
    },
    grading: {
      coursework: ['40% assignments', '40% exam', '20% course activity'],
      examDetails: '29 January, 2024 - Written',
      assignments: [
        "Review teacher's webpage (week 3-4) - 30% of assignments' grade",
        "Midterm assignment (week 7-8) - 30% of assignments' grade",
        "Final assignment (week 13-14) - 40% of assignments' grade",
      ],
    },
    externalMaterials: [
      {
        title:
          'Jameel, Asad & Shahzad, Khurram & Zafar, Afia & Ahmed, Usman & Hussain, Syed & Sajid, Ahthasham. (2018). The users experience quality of responsive web design on multiple devices. 1-6. 10.1145/3231053.3234632.',
        link: 'https://www.researchgate.net/publication/327329078_The_users_experience_quality_of_responsive_web_design_on_multiple_devices',
      },
      {
        title:
          'Atiq, Muhammad Faizan & Soomro, Tariq. (2016). Modern Web Designs Using Adaptive Content Delivery. Review of Computer Engineering Studies. 3. 72-80. 10.18280/rces.030305.',
        link: 'https://www.researchgate.net/publication/311666701_Modern_Web_Designs_Using_Adaptive_Content_Delivery',
      },
    ],
    faq: [
      {
        question: 'Is the seminar attendance mandatory?',
        answer: 'Only when presenting an assignment.',
      },
      {
        question: 'Can I use additional resources for my assignments?',
        answer: 'Of course.',
      },
      {
        question: 'What is required to promote this course?',
        answer: 'Overall grade >= 4.5 (45%)',
      },
    ],
  },
  {
    id: 2,
    title: 'Design of interactive software systems',
    subtitle: 'Master SE',
    teamsCode: '4hfd82',
    activityYears: [
      [2023, 2024],
      [2024, 2025],
    ],
    desc: `This course provides students with a comprehensive understanding
     of user interface and experience design principles. 
     Covering human-computer interaction concepts, prototyping, 
     and usability testing, the course emphasizes creating intuitive
      and aesthetically pleasing software. Students gain practical 
      experience with industry-standard tools, focusing on graphical 
      user interfaces, responsive design, and accessibility considerations. 
      Through hands-on projects, they develop the skills needed to design 
      interactive systems that meet technical requirements while addressing 
      user needs. `,
    overview: {
      lectureDuration: '2 hours weekly',
      lectureHours: ['18:00 - 20:00, Friday (room 105)'],
      seminarDuration: '2 hours weekly',
      seminarHours: [
        '14:00 - 16:00, Thursday (room 401, gr. 410)',
        '16:00 - 18:00, Thursday (room 401, gr. 411)',
      ],
      topics: [
        'Fundamentals of Interactive System Design',
        'User-Centered Design and User Experience',
        'Prototyping and Wireframing Techniques',
        'Usability Testing and Feedback Integration',
        'Designing for Accessibility',
        'Emerging Trends in Interactive Design',
        'Project Management in Software Design',
      ],
    },
    grading: {
      coursework: [
        '30% practical assignments',
        '40% group project',
        '30% individual presentation',
      ],
      examDetails: '02 February, 2024 - Oral and Practical',
      assignments: [
        "Individual UX Design Concept (weeks 3-4) - 20% of practical assignments' grade",
        'Group Design Project (weeks 5-10) - 50% of group project grade',
        'Final Presentation on Design Project (week 13-14) - 30% of individual presentation grade',
      ],
    },
    externalMaterials: [
      {
        title:
          'Cooper, Alan, et al. (2014). About Face: The Essentials of Interaction Design. 4th Edition.',
        link: 'https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576',
      },
      {
        title:
          'Norman, Don. (2013). The Design of Everyday Things: Revised and Expanded Edition.',
        link: 'https://www.jnd.org/books.html#doet',
      },
    ],
    faq: [
      {
        question: 'Is group work a major component of this course?',
        answer:
          'Yes, collaborative projects are key to understanding interactive software design.',
      },
      {
        question: 'Will the course cover mobile and web interface design?',
        answer:
          'Yes, both mobile and web interfaces are included in the curriculum.',
      },
      {
        question: 'What are the prerequisites for this course?',
        answer:
          'Basic knowledge of programming and UX design is recommended, but not mandatory.',
      },
    ],
  },
  {
    id: 3,
    title: 'Databases',
    subtitle: 'Master SE / DB',
    teamsCode: '1iur83',
    activityYears: [[2021, 2022]],
    desc: `Covering both theoretical concepts and practical applications, 
    the course explores database design, normalization, query languages, 
    and transaction management. Students learn to model data, 
    create relational databases, and optimize query performance. 
    Additionally, the course addresses emerging trends in databases, 
    such as NoSQL databases and distributed database systems. 
    Through hands-on projects, students gain proficiency in using 
    popular database management tools and develop the skills necessary 
    to design, implement, and manage databases effectively.`,
    overview: {
      lectureDuration: '2 hours weekly',
      lectureHours: ['10:00 - 12:00, Monday (room 501)'],
      seminarDuration: '2 hours weekly',
      seminarHours: [
        '14:00 - 16:00, Tuesday (room 302, gr. 301)',
        '16:00 - 18:00, Tuesday (room 302, gr. 302)',
      ],
      topics: [
        'Introduction to Database Systems',
        'Data Modeling and Database Design',
        'SQL and Data Manipulation',
        'Advanced SQL and Stored Procedures',
        'Database Security and Authorization',
        'NoSQL Databases and Big Data',
        'Database Performance Tuning and Optimization',
      ],
    },
    grading: {
      coursework: ['30% quizzes', '50% project', '20% class participation'],
      examDetails: '27 January, 2024 - Practical and Theory',
      assignments: [
        'Database Design Project (weeks 5-6) - 40% of project grade',
        'SQL Query Assignment (week 9-10) - 30% of project grade',
        'NoSQL Implementation Project (week 13-14) - 30% of project grade',
      ],
    },
    externalMaterials: [
      {
        title:
          'Silberschatz, Abraham, et al. (2019). Database System Concepts. 7th Edition.',
        link: 'https://www.db-book.com',
      },
      {
        title:
          'Rob, Peter & Coronel, Carlos. (2017). Database Systems: Design, Implementation, & Management. 12th Edition.',
        link: 'https://www.cengage.com/c/database-systems-design-implementation-management-12e-rob/9781305627482',
      },
    ],
    faq: [
      {
        question: 'Are seminars interactive or lecture-based?',
        answer:
          'Seminars are interactive, with practical exercises and discussions.',
      },
      {
        question: 'Will there be hands-on SQL training?',
        answer: 'Yes, there will be extensive practical SQL training sessions.',
      },
      {
        question: 'What is the minimum grade required to pass this course?',
        answer: 'A minimum grade of 5.0 (50%) is required to pass.',
      },
    ],
  },
];

export default data;
