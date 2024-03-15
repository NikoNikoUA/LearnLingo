import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
