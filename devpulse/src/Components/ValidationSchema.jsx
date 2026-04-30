import * as yup from "yup";
// yup :
//      a js schema builder (library) 
//     validate at runtime 
//      devlop schema using chaimed methods(field typs [string,number,date..] amd contraints[.email(),.required()..])
/////////////
export const loginSchema = yup.object({
  email: yup
    .string()
    .matches()
    .email("Invalid email")//attached error msgs 
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .required("Password is required"),
});