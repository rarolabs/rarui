import React, { forwardRef, useState, LegacyRef } from "react";
import { select } from "@rarui/styles";
import { ArrowDownIcon, CloseIcon, CheckIcon } from "@rarui/icons";
import { Dropdown } from "@rarui-react/dropdown";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";
import { Chip } from "@rarui-react/chip";
import { Checkbox } from "@rarui-react/checkbox";
import { Text } from "@rarui-react/text";

import { SelectProps } from "./select.types";
import { useSelect } from "./hooks";

const Select: React.FC<SelectProps> = forwardRef(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      children,
      open,
      value,
      defaultValue,
      multiple,
      options,
      placeholder,
      disabled,
      appearance,
      portalId,
      enabledFlip,
      position,
      maxHeight,
      zIndex,
      onChange,
      ...props
    }: SelectProps,
    ref,
  ) => {
    const {
      selectedOptions,
      handleSelect,
      handleRemoveOption,
      handleResetOptions,
    } = useSelect({
      value,
      defaultValue,
      multiple: !!multiple,
      onChange,
    });

    const [menuOpen, setMenuOpen] = useState(open);

    const { className, style } = select.sprinkle({ ...props, maxHeight });

    return (
      <Dropdown
        width="100%"
        matchReferenceWidth
        visible={open}
        enabledClick={!disabled}
        portalId={portalId}
        enabledFlip={enabledFlip}
        position={position}
        zIndex={zIndex}
        content={
          <div
            className={[select.classnames.list, className].join(" ")}
            style={style}
          >
            {children}
            {options?.map((option) => (
              <React.Fragment key={option.value}>
                {!multiple && (
                  <Dropdown.Item
                    key={option.value}
                    selected={selectedOptions[0] === option.value}
                    onClick={(event) => handleSelect(option.value, event)}
                  >
                    {option.label}
                    {selectedOptions[0] === option.value && (
                      <Icon
                        color="$brand"
                        source={<CheckIcon size="small" />}
                      />
                    )}
                  </Dropdown.Item>
                )}
                {multiple && (
                  <Dropdown.Item
                    key={option.value}
                    as="label"
                    htmlFor={option.value}
                  >
                    <Checkbox
                      size="medium"
                      id={option.value}
                      label={option.label}
                      readOnly
                      onClick={(event) => handleSelect(option.value, event)}
                      checked={selectedOptions.some(
                        (selectedOption) => selectedOption === option.value,
                      )}
                    />
                  </Dropdown.Item>
                )}
              </React.Fragment>
            ))}
          </div>
        }
      >
        <div
          ref={ref as LegacyRef<HTMLDivElement>}
          className={select.classnames.select({ size, appearance })}
          aria-disabled={disabled}
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={() => {}}
          onFocus={() => {}}
          tabIndex={0}
          role="button"
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
            alignItems="center"
            flex="1"
            gap="$3xs"
            overflow="hidden"
            padding="$4xs"
          >
            {selectedOptions?.map((option) => (
              <React.Fragment key={option}>
                {!multiple && (
                  <Text
                    textTransform="capitalize"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                  >
                    {options?.find((opt) => opt.value === option)?.label}
                  </Text>
                )}
                {multiple && (
                  <Chip
                    size="small"
                    onClick={(event) => handleRemoveOption(option, event)}
                    pill
                    closeable
                    data-testid={`option-selected-${option}`}
                    textTransform="capitalize"
                    disabled={disabled}
                  >
                    <Text
                      textTransform="capitalize"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      overflow="hidden"
                    >
                      {options.find((opt) => opt.value === option)?.label}
                    </Text>
                  </Chip>
                )}
              </React.Fragment>
            ))}
          </Box>
          <Box display="flex" alignItems="center" gap="$4xs" paddingLeft="$3xs">
            {!!selectedOptions.length && multiple && (
              <button
                type="button"
                aria-label="clear options"
                className={select.classnames.close}
                disabled={disabled}
                onClick={handleResetOptions}
              >
                <Icon source={<CloseIcon size="small" />} />
              </button>
            )}
            <Icon
              color={disabled ? "$disabled" : "$currentColor"}
              source={<ArrowDownIcon size="medium" />}
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
