import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";
import logo from "../assets/react.svg";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Register Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Basic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-yup"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Yup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-components"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Components
                </NavLink>
              </li>
            </ul>
              <li>
                <NavLink
                  to="/formik-abstraction"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Abstraction
                </NavLink>
              </li>
          </nav>

          <Routes>
            <Route path="register" element={<RegisterPage />} />
            <Route path="formik-basic" element={<FormikBasicPage />} />
            <Route path="formik-yup" element={<FormikYupPage />} />
            <Route path="formik-components" element={<FormikComponents />} />
            <Route path="formik-abstraction" element={<FormikAbstraction />} />

            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
