import { forwardRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { navbarLinks } from "@/constants";
import { Tree } from "antd";

import logoLight from "@/assets/unisaColors.png";
import logoDark from "@/assets/unisaColors.png";

import { cn } from "@/utils/cn";

import PropTypes from "prop-types";
import { printJobCategories } from "../constants";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  // Show tree view when Print Queue is active
  const handleCategoryClick = (category) => {
    navigate("/print-queue", { state: { category } });
  };

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0",
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img
          src={logoLight}
          alt="3D Platform Admin"
          className="rounded-2xl dark:hidden"
          width={40}
          height={40}
        />
        <img
          src={logoDark}
          alt="3D Platform Admin"
          className="hidden rounded-2xl dark:block"
          width={40}
          height={40}
        />
        {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">3D Platform Admin</p>}
      </div>
      <div className="flex w-full flex-col gap-y-4 overflow-x-hidden overflow-y-auto p-3 [scrollbar-width:_thin]">
        {navbarLinks.map((navbarLink) => (
          <nav
            key={navbarLink.title}
            className={cn("sidebar-group", collapsed && "md:items-center")}
          >
            <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
            {navbarLink.links.map((link) => (
              <div
                key={link.label}
                className="relative"
              >
                <NavLink
                  to={link.path}
                  className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                  onClick={() => {
                    if (link.label === "Print Queue") {
                      setExpanded(!expanded);
                    }
                  }}
                >
                  <link.icon
                    size={22}
                    className="flex-shrink-0"
                  />
                  {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                </NavLink>

                {/* Show Tree View When Print Queue is Clicked */}
                {link.label === "Print Queue" && expanded && (
                  <div className="ml-6 rounded-md bg-white p-2 dark:bg-gray-800">
                    <Tree
                      treeData={printJobCategories.map((category) => ({
                        title: category.title,
                        key: category.key,
                      }))}
                      defaultExpandAll
                      onSelect={(selectedKeys) => {
                        if (selectedKeys.length > 0) {
                          handleCategoryClick(selectedKeys[0]); // Pass only the key
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};
