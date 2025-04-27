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
});

export default RegisterSchema;
