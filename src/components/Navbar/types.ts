import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

export interface INavbarItem {
  icon: IconDefinition;
  label: string;
}

export interface INavGroup {
  className?: string;
  children: ReactNode;
}

export interface INavbar {
  children: ReactNode;
}

export interface INavbarLogo {
  src: string;
  href?: string;
}

export interface INavbarItems {
  children: ReactNode;
}
