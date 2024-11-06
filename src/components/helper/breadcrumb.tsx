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
import { Url } from "url";

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
  const pathSegments = pathname.split("/").filter(Boolean);
  const secondLastPath =
    pathSegments.length > 1 ? pathSegments[1] : pathSegments[2];
  const lastPath =
    pathSegments.length > 2 ? pathSegments[pathSegments.length - 1] : undefined;
  const thirdLastPath =
    pathSegments.length > 3 ? pathSegments[pathSegments.length - 4] : undefined;
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
          {/* <BreadcrumbSeparator />
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
          </BreadcrumbItem> */}

          {secondLastPath && (
            <>
              <BreadcrumbSeparator />
              {lastPath ? (
                <Link href={secondLastPath}>
                  <BreadcrumbItem className="capitalize">
                    <span>{secondLastPath}</span>
                  </BreadcrumbItem>
                </Link>
              ) : (
                <BreadcrumbItem className="capitalize">
                  <span>{secondLastPath}</span>
                </BreadcrumbItem>
              )}
            </>
          )}
          {lastPath && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="capitalize">
                <span>{lastPath}</span>
              </BreadcrumbItem>
            </>
          )}
          {thirdLastPath && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="capitalize">
                <span>{lastPath}</span>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default GlobalBreadcrumbHeader;
