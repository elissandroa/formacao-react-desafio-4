import { ButtonContainer, ButtonContainerDisabled } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick}: IButtonProps) => {
  return (disabled) ? <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>:
  <ButtonContainerDisabled disabled={disabled} onClick={onClick}>{title}</ButtonContainerDisabled>;
};

export default Button;
