import React, { useEffect, useState } from "react";
import { select } from "@rarui/styles";
import { ArrowDownIcon, CloseIcon } from "@rarui/icons";
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

  const handleResetOptions = () => {
    setOpen(true);
    setSelectedOptions([]);
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

  const { className, style } = select.sprinkle(props);

  return (
    <Dropdown
      width="100%"
      matchReferenceWidth
      visible={open}
      onVisibility={handleOpen}
      content={
        <div
          className={[select.classnames.list, className].join(" ")}
          style={style}
        >
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
        </div>
      }
    >
      <div className={select.classnames.select({ size })} {...props}>
        <Box display="flex" flex="1" gap="$3xs" overflowY="hidden">
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
        <Box display="flex" alignItems="center" gap="$4xs" paddingLeft="$3xs">
          {!!selectedOptions.length && (
            <button
              type="button"
              className={select.classnames.close}
              onClick={handleResetOptions}
              aria-label="clear options"
            >
              <Icon source={<CloseIcon size="small" />} />
            </button>
          )}
          <Icon source={<ArrowDownIcon size="medium" />} />
        </Box>
      </div>
    </Dropdown>
  );
};

Select.displayName = "Select";

export { Select };