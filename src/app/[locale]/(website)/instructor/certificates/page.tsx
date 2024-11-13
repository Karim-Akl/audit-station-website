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
const certificates = [
  {
    certificate: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    certificate: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    certificate: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
 
];
export const metadata = {
  title: "Certificates | Instructor",
  description: "Certificates Page",
};
export default function Certificates() {
  return (
    <div className="mb-20">
      <div className=" w-full py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold">Certificates</h2>
      </div>
      <SearchInput  />
      <Table className="my-8">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((certificate) => (
            <TableRow key={certificate.certificate}>
              <TableCell className="font-medium">{certificate.certificate}</TableCell>
              <TableCell>{certificate.paymentStatus}</TableCell>
              <TableCell>{certificate.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {certificate.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
