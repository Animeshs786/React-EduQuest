export const initialState = {
  correctAnswer: 0,
  wrongAnswer: 0,
  point: 0,
  currentSubject: "Chemistry",
  currentOption: "",
  clearResponse: false,
  timeout: false,
  quizQuestion: {
    Chemistry: {
      answered: 0,
      notVisited: 5,
      notAnswered: 0,
      marked: 0,
      markedAnswered: 0,
      index: 0,
      questions: [
        {
          question: "The mass number of nucleus is",
          options: [
            "The sum of number of protons and neutrons present in the nucleus",
            "Always more than the atomic weight",
            "Always less than atomic weight",
            "A fraction",
          ],
          correctOption: 1,
          selectedOption: "",
          legend: "notVisited",
        },
        {
          question: "What is the atomic number of carbon?",
          options: ["6", "12", "14", "16"],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 0,
        },
        {
          question: "Which gas is known as laughing gas?",
          options: [
            "Nitrogen monoxide",
            "Nitrous oxide",
            "Carbon monoxide",
            "Carbon dioxide",
          ],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 1,
        },
        {
          question: "Which metal is liquid at room temperature?",
          options: ["Iron", "Gold", "Mercury", "Aluminum"],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 2,
        },
        {
          question: "What is the chemical symbol for gold?",
          options: ["Au", "Ag", "Pb", "Fe"],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 0,
        },
      ],
    },
    Physics: {
      answered: 0,
      notVisited: 6,
      notAnswered: 0,
      marked: 0,
      markedAnswered: 0,
      index: 0,
      questions: [
        {
          question: "What is the SI unit of force?",
          options: ["Newton", "Joule", "Watt", "Volt"],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 0,
        },
        {
          question: "What is the speed of light in a vacuum?",
          options: [
            "299,792,458 meters per second",
            "3.00 x 10^8 meters per second",
            "300,000 kilometers per second",
            "186,000 miles per second",
          ],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 1,
        },
        {
          question: "What is the formula for calculating kinetic energy?",
          options: [
            "KE = 1/2 * m * v^2",
            "KE = m * g * h",
            "KE = F * d",
            "KE = m * c^2",
          ],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 0,
        },
        {
          question: "Which of the following is a vector quantity?",
          options: ["Mass", "Speed", "Distance", "Velocity"],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 3,
        },
        {
          question: "What is the law of conservation of energy?",
          options: [
            "Energy cannot be created or destroyed, only transformed",
            "Energy can be created or destroyed",
            "Energy can only be transformed into heat",
            "Energy is always conserved in elastic collisions",
          ],
          legend: "notVisited",
          selectedOption: "",
          correctOption: 0,
        },
      ],
    },
    Maths: {
      answered: 0,
      notVisited: 6,
      notAnswered: 0,
      marked: 0,
      markedAnswered: 0,
      index: 0,
      questions: [
        {
          question: "What is the value of pi (π) to two decimal places?",
          options: ["3.19", "3.14", "3.18", "3.20"],
          subject: "Math",
          correctOption: 1,
        },
      ],
    },
  },
};

export const defaultOption = {
  rightMark: 4,
  negativeMark: 1,
  time: 1, // in minute
};

export const existingUser = [
  {
    id: "lsjdfsuro0304830",
    score: 5,
    name: "Kartik",
  },
  {
    id: "sjflsjflsjd898",
    score: 25,
    name: "Ishu Pal",
  },
  {
    id: "ldfdfsuro0304830",
    score: 15,
    name: "Kartik",
  },
];
