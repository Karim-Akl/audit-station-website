import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SearchInput } from "@/components/header/searchInput";
import Image from "next/image";

const certificates = [
  {
    certificate: "1",
    paymentStatus: "Junior Accountant",
    paymentMethod: "Credit Card",
    totalAmount: "$250.00",
    status: "Rejected",
    type: "Full Time",
    action: "Delete.png",
    colorStatus: "#FCA360",
    colorType: "#21A74F",


  },
  {
    certificate: "2",
    paymentStatus: "Junior Accountant",
    paymentMethod: "PayPal",
    totalAmount: "$150.00",
    status: "Approved",
    colorStatus: "#21A74F",
    type: "Part Time",
    colorType: "#22B9DD",
    action: "Delete.png",
  },
  {
    certificate: "3",
    paymentStatus: "Junior Accountant",
    paymentMethod: "Bank Transfer",
    totalAmount: "$350.00",
    status: "Waiting",
    colorStatus: "#DF4A4F",
    colorType: "#22B9DD",
    type: "Full Time",
    action: "Delete.png",
  },
];

export const metadata = {
  title: "Certificates | Instructor",
  description: "Certificates Page",
};

export default function Certificates() {
  return (
    <div className="mb-20">
      <div className="w-full py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold">Offers</h2>
      </div>
      <SearchInput />
      <Table className="my-8 border-collapse border border-gray-200 rounded-lg ">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="rounded-lg">
          <TableRow className="bg-[#E9F8FC] text-gray-700 font-semibold rounded-lg">
            <TableHead className="p-4">NO</TableHead>
            <TableHead className="p-4">Position</TableHead>
            <TableHead className="p-4">Accountant ID</TableHead>
            <TableHead className="p-4">Salary</TableHead>
            <TableHead className="p-4">Status</TableHead>
            <TableHead className="p-4">Type</TableHead>
            <TableHead className="p-4">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((certificate) => (
            <TableRow key={certificate.certificate} className="text-left">
              <TableCell className="p-4">{certificate.certificate}</TableCell>
              <TableCell className="p-4">{certificate.paymentStatus || "No Position"}</TableCell>
              <TableCell className="p-4">{certificate.paymentMethod || "No ID"}</TableCell>
              <TableCell className="p-4">{certificate.totalAmount || "N/A"}</TableCell>
              <TableCell
                className="p-4"
                style={{ color: certificate.colorStatus || "#000000" }}
              >
                {certificate.status || "N/A"}
              </TableCell>
              <TableCell className="p-4"
                style={{ color: certificate.colorType || "#000000" }}
              >{certificate.type || "N/A"}</TableCell>
              <TableCell className="p-4 text-center  cursor-pointer">
                {certificate.action ? (
                  <Image
                    src={`/assets/${certificate.action}`}
                    alt="action"
                    width={30}
                    height={30}
                  />
                ) : (
                  "No Action"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}