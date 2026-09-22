const SITE = {
  profile: {
    name: "Md Mazidul Islam",
    role: "Statistics Student • Data & Python",
    location: "India",
    tagline: "I study statistics, build with Python, and turn real-world data into useful stories.",
    photo: "assets/images/profile-placeholder.svg",
    email: "mazidulrough@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-islam-374926356",
    instagram: "https://www.instagram.com/__.mazidul.__/",
    bio: [
      "I am a B.Sc. Statistics student building this space as a public record of what I learn and create.",
      "Here you will find data-analysis projects, programming work, statistical notes, and writing that goes beyond code.",
      "The goal is simple: learn seriously, build openly, and improve one project at a time."
    ],
    education: [
      { title: "B.Sc. Statistics", place: "Pondicherry University Centre, Andaman", years: "Current" },
      { title: "Higher Secondary — Science & Computer Science", place: "CBSE", years: "Completed" }
    ],
    interests: ["Statistics","Data analysis","Python","SQL","Finance","Entrepreneurship","Writing","Photography"],
    courses: ["Add your completed courses here"]
  },

  projects: [
    {
      slug:"spending-analysis", title:"PUC Student Spending & Scholarship Analysis",
      category:"Data Analysis",
      summary:"Survey-based analysis of spending, scholarship status, family income and parental employment using responses from 122 students.",
      date:"2025-01", tags:["statistics","survey data","visualization"],
      content:"content/projects/spending-analysis.html", featured:true
    },
    {
      slug:"finance-tracker", title:"Spending & Income Tracker",
      category:"Tools & Scripts",
      summary:"A Python + MySQL command-line tool for recording spending, income and savings through a structured query workflow.",
      date:"2024-11", tags:["python","mysql","cli"],
      content:"content/projects/finance-tracker.html", featured:true
    },
    {
      slug:"coded-conversation", title:"Coded Conversation",
      category:"Tools & Scripts",
      summary:"A small Tkinter messaging experiment using a custom substitution cipher to encode messages.",
      date:"2024-10", tags:["python","tkinter","cryptography"],
      content:"content/projects/coded-conversation.html", featured:true
    },
    {
      slug:"pandas-notes", title:"Learning pandas",
      category:"Reference Notes",
      summary:"Working notes on Series, DataFrames, indexing and core pandas operations used in data analysis.",
      date:"2024-09", tags:["python","pandas","notes"],
      content:"content/projects/pandas-notes.html", featured:true
    },
    {
      slug:"numpy-notes", title:"Learning NumPy",
      category:"Reference Notes",
      summary:"Practical notes on arrays, vectorisation and basic NumPy operations.",
      date:"2024-08", tags:["python","numpy","notes"],
      content:"content/projects/numpy-notes.html", featured:true
    }
  ],

  writings: [
    {
      slug:"starting-this-space", title:"Starting this space", category:"Note",
      excerpt:"Why I am building a public archive of my learning, projects and writing.",
      date:"2026-09", readMins:2, content:"content/writings/starting-this-space.html"
    }
  ],

  published: [],
  glimpses: [
    { caption:"A small visual archive of places, people and moments.", date:"2026", image:"assets/images/in-bird.jpeg" }
  ]
};