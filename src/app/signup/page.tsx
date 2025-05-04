"use client";

import { signUpFunction } from "@/components/firebase/Firebase";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
});

const Signup = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await signUpFunction(
          values.firstName,
          values.lastName,
          values.email,
          values.password
        );
        resetForm();
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col h-screen items-center p-20">
        <div className="flex flex-col w-[500px] items-center rounded-lg bg-white p-8">
          <h1 className="text-bold text-[50px] mb-6">Sign up now</h1>

          <input
            name="firstName"
            placeholder="First Name"
            className="lg:w-[400px] w-[300px] border border-black rounded-md p-2 mt-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          )}

          <input
            name="lastName"
            placeholder="Last Name"
            className="lg:w-[400px] w-[300px] border border-black rounded-md p-2 mt-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="lg:w-[400px] w-[300px] border border-black rounded-md p-2 mt-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="lg:w-[400px] w-[300px] border border-black rounded-md p-2 mt-4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}

          <div className="flex mt-6">
            <Button className="w-[200px]" type="submit">
              Sign Up
            </Button>
            <Link href="/signin" className="p-2">
              <h1>Already have an Account?</h1>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
