import React from "react";
import Sidebar from "./Sidebar";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Layout = ({ variant = "desktop", header, children }) => {
  return (
    <div
      className={`flex font-sans ${
        variant === "mobile" ? "flex-col" : "flex-row"
      } h-screen bg-page-background`}
    >
      {/* Sidebar */}
      <Sidebar variant={variant} />

      {/* Main Content */}
      <div
        className={`py-8 px-12 flex-1 flex flex-col ${
          variant === "mobile" ? "mt-auto" : ""
        }`}
      >
        {header && (
          <header className="flex flex-col gap-3 py-12">
            <div className="flex flex-row items-center gap-2">
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "12px" }} />
              <span className="text-xs font-normal">Accueil</span>
            </div>
            <h1 className="text-heading-1  tracking-tight">Ma Page</h1>
          </header>
        )}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
