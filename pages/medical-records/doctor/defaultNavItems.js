import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Doctor from '.';

export const defaultNavItems = [
  {
    label: "Doctor Info",
    icon: React.createElement(HomeIcon, { className: "w-6 h-6" }),
    onClick: async () => {
      Doctor.getDoctor();
      Doctor.setPview(false);
      Doctor.setRview(false);
      Doctor.setOview(false);
      Doctor.setArecord(false);
      Doctor.setOrecord(false);
      // Add the rest of the actions you want to perform
    },
  },
  {
    label: "Add Patient Record",
    icon: React.createElement(UserGroupIcon, { className: "w-6 h-6" }),
    onClick: async () => {
      setPview(false);
      setRview(false);
      setOview(false);
      setLoading(false);
      setArecord(false);
      setOrecord(true);
      setViewDoc(false);
      // Add the rest of the actions you want to perform
    },
  },
  {
    label: "View Patient Info",
    icon: React.createElement(FolderIcon, { className: "w-6 h-6" }),
    onClick: async () => {
      setPview(false);
      setRview(false);
      setOview(true);
      setLoading(false);
      setArecord(false);
      setOrecord(false);
      setViewDoc(false);
      // Add the rest of the actions you want to perform
    },
  },
  {
    label: "Logout",
    icon: React.createElement(CalendarIcon, { className: "w-6 h-6" }),
    // You can add an onClick for the logout button here if needed
  },
];
