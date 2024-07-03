import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form className="py-4 md:py-0">
      <div className="mb-5">
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          value={formData.email}
          onChange={handleChangeFormData}
          className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  "
          required
        />
      </div>
      <div className="mb-5">
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={formData.password}
          onChange={handleChangeFormData}
          className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  "
          required
        />
      </div>
      <div className="mt-7">
        <button
          type="submit"
          aria-label="button login"
          className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
        >
          Sign In
        </button>
      </div>

      <p className="mt-5 text-textColor text-center">
        Don't have an account?{" "}
        <Link to={"/register"} className="text-primaryColor ml-1 font-medium">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
