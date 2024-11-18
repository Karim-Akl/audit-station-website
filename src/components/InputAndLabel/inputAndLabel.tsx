"use client"
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

type InputAndLabelProps = {
    label?: string;
    error?: string;
    placeholder?: string;
    icon?: JSX.Element;
    see?: boolean;
    hight?: string;
    type?: React.ComponentProps<"input">["type"];
} & React.ComponentProps<"input">;

export default function InputAndLabel({
    label,
    error,
    placeholder,
    icon,
    see = false,
    type,
    height,
    ...props
}: InputAndLabelProps) {
    const [visible, setVisible] = useState(true);
    const [typeInput, setTypeInput] =
        useState<React.ComponentProps<"input">["type"]>("");

    const handleVisible = () => {
        setTypeInput(typeInput === "password" ? "text" : "password");
        setVisible(!visible);
    };
    const t = useTranslations();

    useEffect(() => {
        document.body.dir = t("dir");
    }, [t]);

    useEffect(() => {
        setTypeInput(type);
    }, [type]);

    return (
        <div
            className={`${height ? height : null
                } flex flex-col my-2 relative font-semibold text-black dark:text-white `}
        >
            <div className="flex flex-row text-black">
                <label
                    id={label}
                    htmlFor={label}
                    className="mb-2 text-[#333333] text-lg font-bold "
                >
                    {label}
                    {" : "}
                    <span className="text-red-500">*</span>
                </label>
            </div>
            <div className="relative w-[100%]">
                <input
                    placeholder={placeholder}
                    id={label}
                    {...props}
                    type={typeInput}
                    className={`${icon ? "ps-14" : ""
                        } text-[#333] shadow rounded-md border-2 outline-none h-[55px] mb-1 ${error ? 'border-red-500' : 'border-gray-200'
                        } w-full px-6 py-3`}
                />
                {icon && (
                    <div
                        className={`absolute  ${t('language') === "ar" ? "right-2" : "left-2"
                            } top-1/2 text-[#D6D6D6] transform mx-3 -translate-y-1/2  text-2xl`}
                    >
                        {icon}
                    </div>
                )}
                {error && <span className="ps-3 pt-2 text-red-500">{error}</span>}
                {see && (
                    <button
                        type="button"
                        onClick={handleVisible}
                        className={`absolute z-50 ${document.body.dir === "rtl" ? "left-2" : "right-2"
                            } ${error ? "top-1/3" : "top-1/2"} -translate-y-1/2 text-2xl`}
                    >
                        {visible ? (
                            <FaEyeSlash className="dark:text-black" />
                        ) : (
                            <IoEyeSharp className="dark:text-black" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
