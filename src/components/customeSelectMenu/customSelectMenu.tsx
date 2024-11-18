'use client'
import { useState, useEffect, FC } from "react";
import Select, { SingleValue, MultiValue, StylesConfig } from "react-select";
import PropTypes from "prop-types";
import { useTranslations } from "next-intl";

interface OptionType {
    id: number;
    name: string;
}

interface CustomSelectMenuProps {
    options?: OptionType[];
    selected?: boolean;
    name?: string;
    sx?: object;
    isMultiChoices?: boolean;
    label?: string;
    isDisabled?: boolean;
    placeholder?: string;
    onChange?: (
        value: SingleValue<OptionType> | MultiValue<OptionType>,
        name?: string
    ) => void;
    defaultData?: number | undefined | null;
    customstyle?: object;
    loading?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    error?: string;
    width?: string;
    higth?: string;
}

const CustomSelectMenu: FC<CustomSelectMenuProps> = ({
    options = [],
    name,
    isMultiChoices = false,
    label,
    isDisabled,
    placeholder,
    onChange,
    customstyle,
    defaultData,
    loading,
    error,
    width,
    higth,
}) => {
    const t = useTranslations();
    const [selectedValue, setSelectedValue] = useState<any>(null);

    useEffect(() => {
        if (defaultData !== undefined) {
            const updatedSelectedObject =
                options.length > 0 &&
                options?.find((option) => option.id === defaultData);
            setSelectedValue(updatedSelectedObject || null);
        }
    }, [defaultData, options]);

    const handleOnChange = (
        selectedOption: SingleValue<OptionType> | MultiValue<OptionType>
    ) => {
        setSelectedValue(selectedOption);
        if (onChange) onChange(selectedOption, name);
    };

    const customStyles: StylesConfig<OptionType, boolean> = {
        // @ts-ignore
        control: (provided, state) => ({
            ...provided,
            height: higth,
            borderColor: error
                ? "red"
                : state.isFocused
                    ? "blue"
                    : provided.borderColor,
            borderWidth: error ? "2px" : "1px",
            boxShadow: state.isFocused ? "0 0 0 2px blue" : "0 0 0 2px #eee",
            "&:hover": {
                borderColor: error ? "red" : "blue",
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            color: "#333",
        }),
        container: (provided: any) => ({
            ...provided,
            borderRadius: "80px",
            ...customstyle,
        }),
        menuPortal: (provided: any) => ({
            ...provided,
        }),
    };
    return (
        <div
            style={{
                width: `${width}`,
                height: `${higth}`,
            }}
        >
            {label ? (
                <h1 className={`text-[18px] mb-[7px]`}>
                    {label}:<span className="text-red-500">*</span>
                </h1>
            ) : null}

            <Select
                placeholder={placeholder}
                isDisabled={!!isDisabled}
                isSearchable={true}
                isClearable={false}
                isLoading={loading}
                isMulti={isMultiChoices}
                defaultValue={selectedValue}
                name={name}
                value={selectedValue}
                onChange={handleOnChange}
                getOptionLabel={(option: any) => option.name}
                getOptionValue={(option: any) => option.id.toString()}
                options={
                    options?.length > 0
                        ? options?.map((item) => ({ ...item, name: t(item.name) }))
                        : []
                }
                styles={customStyles}
            />
            {error ? (
                <div className="ps-2 text-red-500">{error}</div>
            ) : (
                <div className="ps-2 opacity-0 disabled">" "</div>
            )}
        </div>
    );
};

CustomSelectMenu.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.bool,
    name: PropTypes.string.isRequired,
    sx: PropTypes.object,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    defaultData: PropTypes.number,
    loading: PropTypes.bool,
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default CustomSelectMenu;
