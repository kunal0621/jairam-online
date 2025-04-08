import { Routes, Route } from "react-router-dom";

import {
  Home,
  CreateOrder,
  ExistingOrder,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/booking" element={<CreateOrder action={"Create"} />} />
          <Route path="/existingOrder" element={<ExistingOrder />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
