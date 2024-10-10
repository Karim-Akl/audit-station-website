"use client";
import { FC, ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import UseSearchParamsHook from "@/hooks/UseSearchParamsHook";
import { Url } from 'url';

interface BreadcrumbItemProps {
  title: string;
  link: string;
}

interface BreadcrumbHeaderProps {
  MainTitle?: string;
  MainLink?: Url | string;
  items?: BreadcrumbItemProps[];
}

const GlobalBreadcrumbHeader: FC<BreadcrumbHeaderProps> = ({
  MainTitle,
  MainLink,
  items,
}) => {
  const { pathname } = UseSearchParamsHook();
  const lastPath = pathname.split("/").filter(Boolean).pop();

  return (
    <div className=" flex items-center gap-1 ml-10 mt-5 capitalize">
      <Breadcrumb className="font-semibold font-sans text-xl">
        <BreadcrumbList>
          <BreadcrumbItem>
            {MainLink ? (
              <Link href={MainLink}>{MainTitle}</Link>
            ) : (
              <span>{MainTitle}</span>
            )}
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {items?.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="capitalize">
            <span>{lastPath}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default GlobalBreadcrumbHeader;
