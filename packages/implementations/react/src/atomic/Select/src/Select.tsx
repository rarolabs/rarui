import React, { useEffect, useState } from "react";
import { select } from "@rarui/styles";
import { ArrowDownIcon } from "@rarui/icons";
import { Dropdown } from "@rarui-react/dropdown";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";
import { Chip } from "@rarui-react/chip";
import { Checkbox } from "@rarui-react/checkbox";

import { SelectOption, SelectProps } from "./select.types";

const Select: React.FC<SelectProps> = ({
  className: _className,
  style: _style,
  size = "medium",
  children,
  options,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
    value ?? [],
  );

  const handleOptionChange = (option: SelectOption) => {
    if (
      selectedOptions.some(
        (selectedOption) => selectedOption.value === option.value,
      )
    ) {
      setSelectedOptions(
        selectedOptions.filter((item) => item.value !== option.value),
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prevState) => !prevState);

  const handleRemoveOption = (option: SelectOption) => {
    setOpen(true);
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
  };

  useEffect(() => {
    if (value) {
      setSelectedOptions(value);
    }
  }, [value]);

  useEffect(() => {
    if (onChange) {
      onChange(selectedOptions);
    }
  }, [selectedOptions, onChange]);

  return (
    <Dropdown
      width="100%"
      matchReferenceWidth
      visible={open}
      onVisibility={handleOpen}
      content={
        <Box display="flex" flexDirection="column" width="100%" gap="$3xs">
          {children}
          {options.map((option) => (
            <Dropdown.Item key={option.value} as="label" htmlFor={option.value}>
              <Checkbox
                id={option.value}
                label={option.label}
                onChange={() => handleOptionChange(option)}
                size="medium"
                checked={selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value,
                )}
              />
            </Dropdown.Item>
          ))}
        </Box>
      }
    >
      <div className={select.classnames.select({ size })} {...props}>
        <Box display="flex" flexWrap="wrap" gap="$3xs">
          {selectedOptions.map((selectedOption) => (
            <Chip
              key={selectedOption.value}
              size="small"
              onClick={() => handleRemoveOption(selectedOption)}
              pill
              closeable
              data-testid={`option-selected-${selectedOption.value}`}
            >
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
        <Icon source={<ArrowDownIcon size="medium" />} />
      </div>
    </Dropdown>
  );
};

Select.displayName = "Select";

export { Select };
