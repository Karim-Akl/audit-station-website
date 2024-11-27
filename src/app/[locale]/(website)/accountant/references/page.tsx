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
import { Button } from "@mui/material";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
const revivew = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
];
export const metadata = {
  title: "References | Accountant",
  description: "References Page",
};
export default async function References() {
  const locale = await getLocale();

  return (
    <div className="mb-20">
      <div className="w-full flex justify-between items-center py-2 mb-2 font-sans">
        <h2 className="text-4xl text-[#333333] font-semibold">References</h2>

        <Link
          href={`/${locale}/accountant/references/add-reference` || ''}
          className="flex items-center bg-[#22B9DD] gap-2 p-2 rounded-md text-white"
        >
          {" "}
          <GoPlus />
          Add New Reference
        </Link>
      </div>
      <div>
        <Table className="my-8">
          <TableCaption>A list of your recent revivew.</TableCaption>
          <TableHeader className="bg-[#E9F8FC]">
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Positionss</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {revivew.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outlined"
                    className="bg-transparent text-black"
                  >
                    <RiEdit2Line size={22} />
                  </Button>
                  <Button
                    variant="outlined"
                    className="bg-transparent text-black"
                  >
                    <RiDeleteBin6Line size={22} />
                  </Button>
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
    </div>
  );
}
