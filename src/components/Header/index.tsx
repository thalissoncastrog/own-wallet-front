import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransationButton>New Transaction</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
