import { ThemeContext } from "../../context";

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ toggle }) => (
        <button onClick={toggle}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
