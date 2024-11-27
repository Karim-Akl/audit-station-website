import React from "react";
import { DropdownMenuCheckboxes } from "@/components/helper/dropdownMenuCheckboxes";

export const metadata = {
  title: "UpgradeToAccountant | audit",
  description: "UpgradeToAccountant Page",
};
export default function UpgradeToAccountantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
