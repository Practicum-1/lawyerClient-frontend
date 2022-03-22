import { courtNames } from "../../../constants/COURT_NAMES";
import { PRACTICE_AREAS } from "../../../constants/PRACTICE_AREAS";
import { languages } from "../../../constants/languages";
import { cities } from "../../../constants/cities";

const options = {
  0: "<1yr",
  1: "1-2yr",
  2: "2-3yr",
  3: "3-4yr",
  4: "4-5yr",
  5: ">5yr",
};

export const LAWYER_INPUT_FIELDS = [
  {
    name: "first_name",
    label: "First Name",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "last_name",
    label: "Last Name",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Select Location",
    type: "select",
    options: cities,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter email address",
    type: "text",
  },
  {
    name: "phone",
    label: " Phone",
    placeholder: "+91 xxxxxxxxxx",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "*******",
    type: "password",
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Male / Female / Other",
    type: "text",
  },
  {
    name: "education",
    label: "Education",
    placeholder: "Enter Education",
    type: "text",
  },

  {
    name: "experience",
    label: "Experience",
    placeholder: "Experience in years",
    type: "select",
    options: options,
  },
  {
    name: "court_name",
    label: "Court Name",
    placeholder: "Enter Court name",
    type: "select",
    options: courtNames,
  },
  {
    name: "languages",
    label: "Language",
    placeholder: "Enter Languages",
    type: "select",
    options: languages,
  },
  {
    name: "practice_areas",
    label: "Practice Areas ",
    placeholder: "Enter Practice Areas",
    type: "select",
    options: PRACTICE_AREAS,
  },
];

export const CLIENT_INPUT_FIELDS = [
  {
    name: "first_name",
    label: "First Name",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "last_name",
    label: "Last Name",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Select Location",
    type: "select",
    options: cities,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter email address",
    type: "text",
  },
  {
    name: "phone",
    label: " Phone",
    placeholder: "+91 xxxxxxxxxx",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "*******",
    type: "password",
  },
  {
    name: "gender",
    label: "Gender",
    placeholder: "Male / Female / Other",
    type: "text",
  },
];
