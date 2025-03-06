import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/ignite_logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/pomodoro-timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/pomodoro-timer/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
