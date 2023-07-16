const myName = "Sebastian";
const favNumber = 12;
const arrayAnimals = [
  "Lion",
  "Cat",
  "Dog",
  "Zebra",
  "Tiger",
  "Elephant",
  "Kangaroo",
  "Parrot",
  "Spider",
  "Bat",
];

console.log(myName);
console.log(favNumber);
console.log(arrayAnimals);
console.log(arrayAnimals[3]);

// inicion objeto organizacion

interface organization {
  organizationName: string;
  motto: string;
  workersQty: number;
  schedule: string;
  remoteWork: boolean;
  creationDate: string;
  weekendsOff?: boolean;
}

class Organization {
  organizationName = "The tick company";
  motto = "Just do it";
  workersQty = 30;
  schedule = "8:00 - 17:00";
  remoteWork = false;
  creationDate = "03-14-1996";
  weekendsOff = true;
}

interface Student {
  name: string;
  age: number;
  course: string;
  address?: string;
}

const arrayStudents: Student[] = [
  { name: "Pepito", age: 14, course: "8° C" },

  {
    name: "Sutano",
    age: 13,
    course: "8° B",
    address: "Avenida siempre viva 742",
  },

  { name: "Perengano", age: 15, course: "9° D" },
];

const generateRandomRadius = () => {
  return Math.floor(Math.random() * 25); // function created to generate a random radius from up to 25 meters, centimeters or any other measurement
};

const radius = generateRandomRadius();
console.log("The circle area formula is: π*" + radius + "²");

const returnCircleArea = (radius: number) => {
  const areaRadius = radius;
  console.log(areaRadius + " This is the radius given");
  const area = Math.PI * Math.pow(areaRadius, 2);
  return area;
};
const area = returnCircleArea(radius);
console.log("This circle area is: ", area);
// Ending of returnCircleArea Function

// Start of calculateMaxNum function

const generateRandomNumbers = () => {
  return Math.round(Math.random() * 1000); // created random numbers generator from
};

const number1 = generateRandomNumbers();
const number2 = generateRandomNumbers();
const number3 = generateRandomNumbers();

console.log("1st number: " + number1);
console.log("2nd number: " + number2);
console.log("3rd number: " + number3);

const calculateMaxNum = function (
  number1: number,
  number2: number,
  number3: number
) {
  if (number1 > number2 && number1 > number3) {
    console.log(number1 + " is the biggest number");
  } else {
    if (number2 > number1 && number2 > number3) {
      console.log(number2 + " is the biggest number");
    } else {
      if (number3 > number1 && number3 > number2) {
        console.log(number3 + " is the bigest number");
      }
    }
  }
};

calculateMaxNum(number1, number2, number3);

// end of calculateMaxNum function

// starting sayMyName function

const sayMyName = function (name: string) {
  console.log("Hy my name is " + name);
};

sayMyName("Sebastian");
