import React, { useState, useEffect } from "react";
import { SelectProps } from "../../select.types";

export const useSelect = ({
  value,
  defaultValue,
  multiple,
  onChange,
}: Pick<SelectProps, "multiple" | "value" | "defaultValue" | "onChange">) => {
  const initialState = () => {
    if (value) return Array.isArray(value) ? value : [value];
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  };

  const [selectedOptions, setSelectedOptions] = useState(initialState);

  const handleSelect = (
    selectedValue: string,
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.stopPropagation();

    if (multiple) {
      if (selectedOptions.includes(selectedValue)) {
        const removedOption = selectedOptions.filter(
          (option) => option !== selectedValue,
        );
        onChange?.(removedOption);
        if (!value) {
          setSelectedOptions(removedOption);
        }
      } else {
        const addedOption = [...selectedOptions, selectedValue];
        onChange?.(addedOption);
        if (!value) {
          setSelectedOptions(addedOption);
        }
      }
    } else {
      onChange?.([selectedValue]);
      if (!value) {
        setSelectedOptions([selectedValue]);
      }
    }
  };

  const handleRemoveOption = (
    selectedValue: string,
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.stopPropagation();

    const newOptions = selectedOptions.filter(
      (option) => option !== selectedValue,
    );
    onChange?.(newOptions);
    if (!value) {
      setSelectedOptions(newOptions);
    }
  };

  const handleResetOptions = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.stopPropagation();

    onChange?.([]);
    if (!value) {
      setSelectedOptions([]);
    }
  };

  useEffect(() => {
    if (value) {
      setSelectedOptions(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  return {
    selectedOptions,
    handleSelect,
    handleRemoveOption,
    handleResetOptions,
  };
};
