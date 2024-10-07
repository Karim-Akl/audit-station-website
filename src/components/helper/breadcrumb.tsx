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
import { BiLeftArrow } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";

interface BreadcrumbItemProps {
    title: string;
    link: string;
}

interface BreadcrumbHeaderProps {
    title: string;
    MainTitle: string;
    MainLink: string;
    items: BreadcrumbItemProps[];
}

const GlobalBreadcrumbHeader: FC<BreadcrumbHeaderProps> = ({
    title,
    MainTitle,
    MainLink,
    items,
}) => {
    return (
        <div className="relative py-6 px-8 md:px-20 md:py-20 bg-gradient-to-r from-blue-50 to-yellow-50 border  rounded-lg shadow-md">
            <div className="flex items-start ">
                <Link href="/" className="p-3">
                    <FaAngleLeft />
                </Link>
                <div>
                    <h1 className="text-2xl font-semibold md:text-4xl  text-gray-800">
                        {title}
                    </h1>
                    {/* Breadcrumb below the header */}
                    <div className="mt-4">
                        <Breadcrumb className="font-semibold font-sans text-xl">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <Link href={MainLink}>{MainTitle}</Link>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1">
                                            <BreadcrumbEllipsis className="h-4 w-4" />
                                            <span className="sr-only">Toggle menu</span>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            {items.map((item, index) => (
                                                <DropdownMenuItem key={index}>
                                                    <Link href={item.link}>{item.title}</Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/docs/components">
                                        Components
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            {/* Render children if provided */}
            {/* {children && <div className="mt-4">{children}</div>} */}
        </div>
    );
};

export default GlobalBreadcrumbHeader;
