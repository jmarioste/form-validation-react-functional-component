// pages/index.tsx
import type { NextPage } from "next";
import RegistrationForm from "../components/RegistrationForm";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="h-screen grid place-content-center">
        <div className="w-full lg:w-[540px]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
