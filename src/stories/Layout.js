import React from "react";
import Sidebar from "./Sidebar";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ variant = "desktop", header, children }) => {
  return (
    <div
      className={`flex ${
        variant === "mobile" ? "flex-col" : "flex-row"
      } h-screen bg-gray-100`}
    >
      {/* Sidebar */}
      <Sidebar variant={variant} />

      {/* Main Content */}
      <div
        className={`py-3 px-2 flex-1 flex flex-col ${
          variant === "mobile" ? "mt-auto" : ""
        }`}
      >
        {header && (
          <header className="">
            <div className="flex flex-row items-center gap-1">
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "12px" }} />
              <span className="text-xs font-normal">Accueil</span>
            </div>
          </header>
        )}
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
