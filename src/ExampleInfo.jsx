import { v4 as uuid } from "uuid";

export const examplePersonalData = {
  name: "Juan Ramon Perez Galindo",
  email: "juanpiperezoso@gmail.com",
  tel: "667-557-8462",
  address: "Sonora, Mexico",
  id: uuid(),
};

export const exampleEducationData = [
  {
    school: "Universidad Autonoma De Guadalajara",
    degree: "Licenciatura en Pedagogía",
    start: "02/01/1998",
    end: "09/07/2005",
    location: "Hermosillo, Sonora",
    id: uuid(),
  },
  {
    school: "Universidad Autonoma De México",
    degree: "Licenciatura en Ingenieria Civil",
    start: "02/01/1998",
    end: "09/07/2005",
    location: "CDMX, México",
    id: uuid(),
  },
];

export const exampleExperienceData = [
  {
    company: "Aceros del pacifico SA. de CV.",
    position: "Head Manager",
    start: "01/01/2005",
    end: "02/02/2010",
    location: "Guadalajara, Jalisco",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    id: uuid(),
  },
];
