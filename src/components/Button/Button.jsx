import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  color: ${(props) => (props.color ? props.color : "white")};
  padding: 0
    ${(props) =>
      props.size === "sm"
        ? "16px"
        : props.size === "md"
        ? "20px"
        : props.size === "lg"
        ? "24px"
        : "16px"};
  height: ${(props) =>
    props.size === "sm"
      ? "32px"
      : props.size === "md"
      ? "40px"
      : props.size === "lg"
      ? "48px"
      : "32px"};

  border: 1px solid transparent;
  background-color: ${(props) =>
    props.variant === "primary"
      ? "#3B82F6"
      : props.variant === "secondary"
      ? "#6B7280"
      : props.variant === "warning"
      ? "#EAB308"
      : props.variant === "danger"
      ? "#EF4444"
      : props.variant === "success"
      ? "#22C55E"
      : props.variant === "info"
      ? "#06B6D4"
      : "#ddd"};

  gap: ${(props) =>
    props.size === "sm"
      ? "4px"
      : props.size === "md"
      ? "6px"
      : props.size === "lg"
      ? "8px"
      : "100px"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#60A5FA"
        : props.variant === "secondary"
        ? "#9CA3AF"
        : props.variant === "warning"
        ? "#FACC15"
        : props.variant === "danger"
        ? "#F87171"
        : props.variant === "success"
        ? "#4ADE80"
        : props.variant === "info"
        ? "#22D3EE"
        : "#ccc"};
    border-color: transparent;
  }

  &:active {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#60A5FA"
        : props.variant === "secondary"
        ? "#9CA3AF"
        : props.variant === "warning"
        ? "#FACC15"
        : props.variant === "danger"
        ? "#F87171"
        : props.variant === "success"
        ? "#4ADE80"
        : props.variant === "info"
        ? "#22D3EE"
        : "#ff4c91"};
    border: 1px solid
      ${(props) =>
        props.variant === "primary"
          ? "#3B82F666"
          : props.variant === "secondary"
          ? "#6B728066"
          : props.variant === "warning"
          ? "#EAB30866"
          : props.variant === "danger"
          ? "#EF444466"
          : props.variant === "success"
          ? "#33BA9866"
          : props.variant === "info"
          ? "#06B6D466"
          : "#000"};
  }

  &:focus {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#3B82F6"
        : props.variant === "secondary"
        ? "#6B7280"
        : props.variant === "warning"
        ? "#EAB308"
        : props.variant === "danger"
        ? "#EF4444"
        : props.variant === "success"
        ? "#22C55E"
        : props.variant === "info"
        ? "#06B6D4"
        : "#ff4c91"};
    border: 1px solid
      ${(props) =>
        props.variant === "primary"
          ? "#3B82F666"
          : props.variant === "secondary"
          ? "#6B728066"
          : props.variant === "warning"
          ? "#EAB30866"
          : props.variant === "danger"
          ? "#EF444466"
          : props.variant === "success"
          ? "#33BA9866"
          : props.variant === "info"
          ? "#06B6D466"
          : "#000"};
  }

  &.outline {
    background-color: transparent;
    border: 1px solid
      ${(props) =>
        props.variant === "primary"
          ? "#3B82F6"
          : props.variant === "secondary"
          ? "#6B7280"
          : props.variant === "warning"
          ? "#EAB308"
          : props.variant === "danger"
          ? "#EF4444"
          : props.variant === "success"
          ? "#22C55E"
          : props.variant === "info"
          ? "#06B6D4"
          : "#ddd"};
    color: ${(props) =>
      props.variant === "primary"
        ? "#3B82F6"
        : props.variant === "secondary"
        ? "#6B7280"
        : props.variant === "warning"
        ? "#EAB308"
        : props.variant === "danger"
        ? "#EF4444"
        : props.variant === "success"
        ? "#22C55E"
        : props.variant === "info"
        ? "#06B6D4"
        : "#ddd"};

    &:focus {
      border-color: ${(props) =>
        props.variant === "primary"
          ? "#60A5FA"
          : props.variant === "secondary"
          ? "#9CA3AF"
          : props.variant === "warning"
          ? "#FACC15"
          : props.variant === "danger"
          ? "#F87171"
          : props.variant === "success"
          ? "#4ADE80"
          : props.variant === "info"
          ? "#22D3EE"
          : "#000"};
      color: ${(props) =>
        props.variant === "primary"
          ? "#60A5FA"
          : props.variant === "secondary"
          ? "#9CA3AF"
          : props.variant === "warning"
          ? "#FACC15"
          : props.variant === "danger"
          ? "#F87171"
          : props.variant === "success"
          ? "#4ADE80"
          : props.variant === "info"
          ? "#22D3EE"
          : "#000"};
    }

    &:active {
      border-color: ${(props) =>
        props.variant === "primary"
          ? "#60A5FA"
          : props.variant === "secondary"
          ? "#9CA3AF"
          : props.variant === "warning"
          ? "#FACC15"
          : props.variant === "danger"
          ? "#F87171"
          : props.variant === "success"
          ? "#4ADE80"
          : props.variant === "info"
          ? "#22D3EE"
          : "#000"};
      color: ${(props) =>
        props.variant === "primary"
          ? "#60A5FA"
          : props.variant === "secondary"
          ? "#9CA3AF"
          : props.variant === "warning"
          ? "#FACC15"
          : props.variant === "danger"
          ? "#F87171"
          : props.variant === "success"
          ? "#4ADE80"
          : props.variant === "info"
          ? "#22D3EE"
          : "#000"};
    }
  }

  &:disabled {
    background-color: #6b7280;
    cursor: not-allowed;
    border-color: transparent;
    
    &.outline {
      background-color: transparent;
      border: 1px solid
        ${(props) =>
          props.variant === "primary"
            ? "#D1D5DB"
            : props.variant === "secondary"
            ? "#D1D5DB"
            : props.variant === "warning"
            ? "#D1D5DB"
            : props.variant === "danger"
            ? "#D1D5DB"
            : props.variant === "success"
            ? "#D1D5DB"
            : props.variant === "info"
            ? "#D1D5DB"
            : "#D1D5DB"};

            color: ${(props) =>
              props.variant === "primary"
                ? "#D1D5DB"
                : props.variant === "secondary"
                ? "#D1D5DB"
                : props.variant === "warning"
                ? "#D1D5DB"
                : props.variant === "danger"
                ? "#D1D5DB"
                : props.variant === "success"
                ? "#D1D5DB"
                : props.variant === "info"
                ? "#D1D5DB"
                : "#D1D5DB"};
  }
`;

const Button = ({
  variant,
  className,
  id,
  onClick,
  children,
  size,
  disabled,
  outline,
  color,
}) => {
  const classes = `${className ? className : ""} ${outline ? "outline" : ""}`;

  return (
    <ButtonComponent
      variant={variant}
      onClick={onClick}
      id={id}
      size={size}
      disabled={disabled}
      color={color}
      className={`btn-component ${classes}`}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
