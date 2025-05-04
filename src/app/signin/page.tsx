"use client";

import { signInFunction } from "@/components/firebase/Firebase";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await signInFunction(values.email, values.password);
      router.push("/");
    } catch(error) {
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col h-screen items-center p-20">
        <div className="flex flex-col w-[500px] items-center rounded-lg bg-white p-8 shadow-md">
          <h1 className="font-bold text-[50px] mb-6">Sign in</h1>

          <input
            className="lg:w-[400px] w-[300px] border border-black rounded-md p-2 mt-2"
            name="email"
            type="email"
            placeholder="Email"
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}

          <input
            className="lg:w-[400px] w-[300px] border border-black rounded-md p-2 mt-4"
            name="password"
            type="password"
            onBlur={formik.handleBlur} 
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          )}

          <div className="flex mt-6">
            <Button className="w-[200px]" type="submit">
              Sign In
            </Button>
            <Link href="/signup" className="p-2">
              <h1>Need an Account?</h1>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
