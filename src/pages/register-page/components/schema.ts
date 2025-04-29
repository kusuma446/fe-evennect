import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "minimal 3 character")
    .required("Wajib diisi"),
  last_name: Yup.string().required("Wajib diisi"),
  email: Yup.string().email("Format email salah").required("Wajib diisi"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Minimal 8 Karakter, at least one letter, satu nomor"
    )
    .required("Wajib diisi"),
  role: Yup.string()
    .oneOf(["CUSTOMER", "ORGANIZER"])
    .required("Role is required"),
  referral_code: Yup.string().optional(),
});

export default RegisterSchema;

// import * as Yup from "yup";

// export const RegisterSchema = Yup.object({
//   first_name: Yup.string().required("First name is required"),
//   last_name: Yup.string().required("Last name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   role: Yup.string()
//     .oneOf(["CUSTOMER", "ORGANIZER"])
//     .required("Role is required"),
//   referral_code: Yup.string().optional(),
// });
