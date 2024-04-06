/* eslint-disable react/display-name */

import { cn } from "@/utils/cn";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React, { ChangeEvent, forwardRef } from "react";

interface CustomInputProps extends InputProps {
  label?: string;
  labelExtra?: string;
  placeholder?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  paddingX?: string;
  paddingY?: string;
  readonly?: boolean;
  right?: string;
  leftIcon?: React.ReactNode;
  defaultValue?: string;
  rightIcon?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      labelExtra,
      placeholder = "",
      type = "text",
      onChange,
      error,
      paddingX = "14px",
      paddingY = "10px",
      readonly,
      right,
      className,
      leftIcon,
      defaultValue,
      rightIcon,
      containerClassName,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <Box className={containerClassName ?? ""}>
        {label && (
          <label className="text-barrel-grey-800 text-sm font-medium leading-tight ">
            {label}{" "}
            {labelExtra ? (
              <span className="text-barrel-grey-500 font-normal">
                {labelExtra}
              </span>
            ) : null}
          </label>
        )}

        <InputGroup className="mt-[6px]">
          {leftIcon && (
            <InputLeftElement
              top="35%"
              transform="translateY(-30%)"
              right={right || "1rem"}
            >
              {leftIcon}
            </InputLeftElement>
          )}
          <Input
            ref={ref}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            className={cn(
              "text-sm font-normal border px-3.5 py-2.5 border-gray-300 h-auto text-[14px] leading-[22px] focus:shadow-input-focus-shadow focus:border-input-focus-border invalid:border-input-error-border disabled:border-input-disabled-border disabled:text-input-disabled-color disabled:bg-input-disabled-bg rounded-[10px] justify-start items-center gap-2 inline-flex",
              className,
              leftIcon && "!pl-9"
            )}
            variant="outline"
            focusBorderColor="purple.600"
            isReadOnly={readonly}
            isInvalid={!!error}
            py={paddingY}
            paddingY={paddingY}
            disabled={disabled}
            errorBorderColor="red.500"
            defaultValue={defaultValue}
            _placeholder={{
              color: "text-b-grey-4",
              fontSize: "14px",
            }}
            {...rest}
          />
          {rightIcon && (
            <InputRightElement
              top="35%"
              transform="translateY(-35%)"
              right={right || "1rem"}
            >
              {rightIcon}
            </InputRightElement>
          )}
        </InputGroup>

        {error && (
          <small className="text-sm text-b-error-5">{`${error}`}</small>
        )}
      </Box>
    );
  }
);

export { CustomInput };
