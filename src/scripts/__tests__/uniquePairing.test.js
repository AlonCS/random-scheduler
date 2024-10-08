import shuffle from "../../util/shuffle.js";
import { isValidPair, uniquePairingHelper } from "../filters.js";
import pair from "../../util/pair.js";
const internInfo = {
  "interns": {
    "Web Development": {
      "Ali Taquie": {
        "location": "Watsonville",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Sergio Medina-Inta": {
        "location": "Watsonville",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Afternoon",
          "Thursday": "Afternoon",
          "Friday": "Afternoon"
        }
      },
      "Yuliana Morales-Galvan": {
        "location": "Watsonville",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Unavailable",
          "Thursday": "Morning",
          "Friday": "Full Day"
        }
      },
      "Joel Mariscal": {
        "location": "Watsonville",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Tyler Nguyen": {
        "location": "Stockton",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Christopher Loya": {
        "location": "Stockton",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Bledine Messa Ngunte": {
        "location": "Stockton",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Full Day"
        }
      },
      "Jose Velarde-Ruiz": {
        "location": "Modesto",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Full Day"
        }
      },
      "Alan Buenrostro": {
        "location": "Modesto",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Afternoon",
          "Thursday": "Not Available",
          "Friday": "Full Day"
        }
      },
      "Leo Masellis": {
        "location": "Modesto",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Karl Legson": {
        "location": "Modesto",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Afternoon",
          "Thursday": "Afternoon",
          "Friday": "Morning"
        }
      },
      "Victor Lomelli Ponce": {
        "location": "Modesto",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Adriaan Cajijas": {
        "location": "Modesto",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Afternoon",
          "Thursday": "Morning",
          "Friday": "Afternoon"
        }
      },
      "Eli Manzo": {
        "location": "Salinas",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Liliana Constantino": {
        "location": "Salinas",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Jacqueline Perez": {
        "location": "Salinas",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Alonzo Cabrera": {
        "location": "Salinas",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Unavailable",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Youssef Bazzi": {
        "location": "Gilroy",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Unavailable",
          "Thursday": "Afternoon",
          "Friday": "Full Day"
        }
      },
      "Lisandro Jimenez": {
        "location": "Gilroy",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Unavailable",
          "Thursday": "Full Day",
          "Friday": "Full Day"
        }
      },
      "Ian Ellis": {
        "location": "Gilroy",
        "department": "Web Development",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Unavailable",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      }
    },
    "Video Production": {
      "Lizeth Villareal": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Full Day"
        }
      },
      "Ivan Ramirez": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Julian Guerrero": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Full Day"
        }
      },
      "Dominic Morales": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      },
      "Luis Perez": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Morning"
        }
      },
      "Rogelio Valdez-Perez": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Melanie Torres": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Full Day",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      },
      "Emily Ramirez": {
        "location": "Watsonville",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      },
      "Josh Matadamas": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Full Day"
        }
      },
      "Julia Ruiz": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Emiliano Margarito": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Afternoon",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      },
      "Elijah Younger": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Unavailable",
          "Thursday": "Full Day",
          "Friday": "Morning"
        }
      },
      "Lesley Vargas": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Unavailable",
          "Thursday": "Morning",
          "Friday": "Full Day"
        }
      },
      "Natalia Rodas": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Afternoon",
          "Friday": "Full Day"
        }
      },
      "Nicolas Biala": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Unavailable",
          "Friday": "Morning"
        }
      },
      "Talia Mendoza": {
        "location": "Salinas",
        "department": "Video Production",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Unavailable",
          "Thursday": "Morning",
          "Friday": "Full Day"
        }
      }
    },
    "Design": {
      "Fatima Perez": {
        "location": "Modesto",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Seneca Rubianes": {
        "location": "Modesto",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      },
      "Carmen Trujillo": {
        "location": "Modesto",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Morning"
        }
      },
      "Andrew Eversley": {
        "location": "Modesto",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Nazgol Ghafourian": {
        "location": "Modesto",
        "department": "Design",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Afternoon",
          "Friday": "Full Day"
        }
      },
      "Nat Talaid": {
        "location": "Stockton",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Thalia Gu": {
        "location": "Stockton",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Unavailable",
          "Thursday": "Full Day",
          "Friday": "Afternoon"
        }
      },
      "Gianelli Liguidliguid": {
        "location": "Stockton",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Sebi Perry": {
        "location": "Watsonville",
        "department": "Design",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Morning",
          "Thursday": "Unavailable",
          "Friday": "Full Day"
        }
      },
      "Ryan Janowitz": {
        "location": "Watsonville",
        "department": "Design",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Mirna Gonzalez": {
        "location": "Watsonville",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Nancy Cervantes-Herrera": {
        "location": "Watsonville",
        "department": "Design",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Afternoon",
          "Thursday": "Morning",
          "Friday": "Morning"
        }
      },
      "Yadriel Pareja": {
        "location": "Gilroy",
        "department": "Design",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Princess Rodriguez": {
        "location": "Gilroy",
        "department": "Design",
        "schedule": {
          "Tuesday": "Morning",
          "Wednesday": "Morning",
          "Thursday": "Morning",
          "Friday": "Morning"
        }
      },
      "Milagros Perez": {
        "location": "Gilroy",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      },
      "Xavier Cruz": {
        "location": "Salinas",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Alexa Zavala": {
        "location": "Salinas",
        "department": "Design",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Afternoon",
          "Thursday": "Full Day",
          "Friday": "Full Day"
        }
      },
      "Emma Griffin-Ortiz": {
        "location": "Salinas",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      },
      "Cristian Reyes": {
        "location": "Salinas",
        "department": "Design",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Unavailable"
        }
      }
    },
    "Marketing": {
      "Maribel Garcia": {
        "location": "Modesto",
        "department": "Marketing",
        "schedule": {
          "Tuesday": "Unavailable",
          "Wednesday": "Full Day",
          "Thursday": "Full Day",
          "Friday": "Morning"
        }
      },
      "Fernanda Jordan": {
        "location": "Watsonville",
        "department": "Marketing",
        "schedule": {
          "Tuesday": "Afternoon",
          "Wednesday": "Unavailable",
          "Thursday": "Afternoon",
          "Friday": "Full Day"
        }
      }
    },
    "IT": {
      "Elissa Covarrubias": {
        "location": "Salinas",
        "department": "IT",
        "schedule": {
          "Tuesday": "Full Day",
          "Wednesday": "Full Day",
          "Thursday": "Morning",
          "Friday": "Unavailable"
        }
      }
    }
  }
};

async function pairInterns(isUniqueDept, isUniqueLoc) {
  let interns = [];
  const departments = internInfo.interns;
  for (const department in departments) {
    for (const [intern, internInfo] of Object.entries(
      departments[department],
    )) {
      interns.push({
        name: intern,
        department: internInfo.department,
        location: internInfo.location,
      });
    }
  }

  shuffle(interns);
  uniquePairingHelper(interns, isUniqueDept, isUniqueLoc);
  return pair(interns);
}

async function uniquePairingTest(test) {
  let count = 0;
  const pairs = await pairInterns(test.isUniqueDept, test.isUniqueLoc);

  pairs.forEach((pair) => {
    if (pair.length === 2) {
      const [intern1, intern2] = pair;

      if (isValidPair(intern1, intern2, test.isUniqueDept, test.isUniqueLoc)) {
        count++;
      }
    }
  });

  const num_pairs = pairs.length;
  const percent = (count / num_pairs) * 100 + "%";

  console.log(test.testMessage, percent);
}

uniquePairingTest({
  isUniqueDept: true,
  isUniqueLoc: false,
  testMessage: "Testing accuracy unique departments: ",
});
uniquePairingTest({
  isUniqueDept: false,
  isUniqueLoc: true,
  testMessage: "Testing accuracy unique locations: ",
});
uniquePairingTest({
  isUniqueDept: true,
  isUniqueLoc: true,
  testMessage: "Testing accuracy unique departments & locations: ",
});
