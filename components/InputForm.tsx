"use client";

import { ReactNode } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  className: string;
  onSubmit: () => void;
}

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

import { useRef } from "react";

const InputForm = ({ children, action, className, onSubmit }: formProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await action(formData);
        formRef.current?.reset();
      }}
      className={className}
      onSubmit={onSubmit}
      ref={formRef}
    >
      {children}
    </form>
  );
};

const Button = ({ type, text, onClick, actionButton, bgColor, ...props }: buttonProps) => {
    return (
        <button type={type} onClick={onClick} {...props}>
            {text}
        </button>
    )
}

export default InputForm;
