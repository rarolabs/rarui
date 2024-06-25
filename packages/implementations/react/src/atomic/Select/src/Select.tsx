import React, { forwardRef, useEffect, useState } from "react";
import { select } from "@rarui/styles";
import { ArrowDownIcon, ArrowUpIcon, CloseIcon } from "@rarui/icons";
import { Dropdown } from "@rarui-react/dropdown";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";
import { Chip } from "@rarui-react/chip";
import { Checkbox } from "@rarui-react/checkbox";
import { Text } from "@rarui-react/text";

import { SelectOption, SelectProps } from "./select.types";

const Select: React.FC<SelectProps> = forwardRef(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      children,
      options,
      value,
      placeholder,
      disabled,
      appearance,
      onChange,
      ...props
    }: SelectProps,
    _ref,
  ) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(
      value ?? [],
    );

    const handleOptionChange = (option: SelectOption) => {
      if (
        selectedOptions.some(
          (selectedOption) => selectedOption === option.value,
        )
      ) {
        const newOptions = selectedOptions.filter(
          (item) => item !== option.value,
        );
        setSelectedOptions(newOptions);
        onChange?.(newOptions);
      } else {
        setSelectedOptions([...selectedOptions, option.value]);
        onChange?.([...selectedOptions, option.value]);
      }
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((prevState) => !prevState);

    const handleRemoveOption = (option: string) => {
      setOpen(true);
      const newOptions = selectedOptions.filter((item) => item !== option);
      setSelectedOptions(newOptions);
      onChange?.(newOptions);
    };

    const handleResetOptions = () => {
      setOpen(true);
      setSelectedOptions([]);
      onChange?.([]);
    };

    // Atualiza o estado quando a prop value muda
    useEffect(() => {
      // Verificar se os valores são diferentes antes de atualizar o estado
      const valueSet = new Set(value);
      const selectedValueSet = new Set(selectedOptions);
      if (
        value &&
        (valueSet.size !== selectedValueSet.size ||
          ![...valueSet].every((val) => selectedValueSet.has(val)))
      ) {
        setSelectedOptions(value);
      }
    }, [value]);

    const { className, style } = select.sprinkle(props);

    return (
      <Dropdown
        width="100%"
        matchReferenceWidth
        visible={open}
        onVisibility={handleOpen}
        enabledClick={!disabled}
        content={
          <div
            className={[select.classnames.list, className].join(" ")}
            style={style}
          >
            {children}
            {options.map((option) => (
              <Dropdown.Item
                key={option.value}
                as="label"
                htmlFor={option.value}
              >
                <Checkbox
                  id={option.value}
                  label={option.label}
                  onChange={() => handleOptionChange(option)}
                  size="medium"
                  checked={selectedOptions.some(
                    (selectedOption) => selectedOption === option.value,
                  )}
                />
              </Dropdown.Item>
            ))}
          </div>
        }
      >
        <div
          className={select.classnames.select({ size, appearance })}
          aria-disabled={disabled}
          {...props}
        >
          {!selectedOptions.length && (
            <Text
              fontSize={size === "small" ? "$s" : "$m"}
              lineHeight={size === "small" ? "$m" : "$l"}
              color="$disabled"
            >
              {placeholder}
            </Text>
          )}
          <Box
            display="flex"
            flex="1"
            gap="$3xs"
            overflow="hidden"
            padding="$4xs"
          >
            {selectedOptions.map((selectedOption) => {
              const option = options.find(
                (option) => option.value === selectedOption,
              );
              return (
                <Chip
                  key={selectedOption}
                  size="small"
                  onClick={() => handleRemoveOption(selectedOption)}
                  pill
                  closeable
                  data-testid={`option-selected-${selectedOption}`}
                  textTransform="capitalize"
                  disabled={disabled}
                >
                  <Text
                    textTransform="capitalize"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                  >
                    {option?.label}
                  </Text>
                </Chip>
              );
            })}
          </Box>
          <Box display="flex" alignItems="center" gap="$4xs" paddingLeft="$3xs">
            {!!selectedOptions.length && (
              <button
                type="button"
                className={select.classnames.close}
                onClick={handleResetOptions}
                aria-label="clear options"
                disabled={disabled}
              >
                <Icon source={<CloseIcon size="small" />} />
              </button>
            )}
            <Icon
              color={disabled ? "$disabled" : "$currentColor"}
              source={
                <>
                  {open && <ArrowUpIcon size="medium" />}
                  {!open && <ArrowDownIcon size="medium" />}
                </>
              }
            />
          </Box>
        </div>
      </Dropdown>
    );
  },
);

Select.displayName = "Select";

export { Select };
export default Select;
