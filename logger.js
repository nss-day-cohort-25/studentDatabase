// Student database creation
const StudentDatabase = {}

// Student table in database
StudentDatabase.students = []

// Add students to the student table in the student database
StudentDatabase.students.push(
    {
        name: "Jacob Smith",
        birthPlace: "El Paso, TX",
        gender: "M"
    },
    {
        name: "Rachael Babcock",
        birthPlace: "Tulsa, OK",
        gender: "F"
    },
    {
        name: "Daniel Beecroft",
        birthPlace: "Kingston Springs, TN",
        gender: "M"
    },
    {
        name: "Deanna Vickers",
        birthPlace: "Dollar bay, MI",
        gender: "F"
    },
    {
        name: "Hayley Landsberg",
        birthPlace: "Coral Springs, FL",
        gender: "F"
    },
    {
        name: "Ronnie Young",
        birthPlace: "Middlesboro, KY",
        gender: "M"
    }
)

// Save database to local storage
localStorage.setItem(
    "StudentDatabase",
    JSON.stringify(StudentDatabase)
)

