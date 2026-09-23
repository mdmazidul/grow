const SITE = {
  profile: {
    name: "Md Mazidul Islam",
    role: "Statistics Student • Data & Python",
    location: "India",
    tagline: "I study statistics, build with Python, and turn real-world data into useful stories.",
    photo: "assets/images/profile_photo.JPG",
    email: "mazidulrough@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-islam-374926356",
    instagram: "https://www.instagram.com/__.mazidul.__/",
    bio: [
      "I am a B.Sc. Statistics student building this space as a public record of what I learn and create.",
      "Here you will find data-analysis projects, programming work, statistical notes, and writing that goes beyond code.",
      "The goal is simple: learn seriously, build openly, and improve one project at a time."
    ],
    education: [
      { title: "B.Sc. Statistics", place: "Pachhunga University College, Aizawl", years: "Current" },
      { title: "Higher Secondary — Science & Computer Science", place: "JNV Dhubri", years: "Completed" }
    ],
    interests: ["Statistics","Data analysis","Python","SQL","Finance","Entrepreneurship","Writing",],
    courses: ["Python","SQL"]
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
    
   
  ],

  writings: [
    {
      slug:"The God Who Watches", title:"God Who watches", category:"Story",
      excerpt:"Illustrating the Contradiction of Omni and Saviour nature of God through a story of grief",
      date:"2026-09", readMins:3, content:"content/writings/the_god_who_watches.html"
    }
  ],

  published: [],
  glimpses: [
    { caption:"A small visual archive of places, people and moments.", date:"2026", image:"assets/images/in-bird.jpeg" }
  ]
};
