import "../assets/css/navbar.css";
import {useTheme} from "../hooks/theme";
import ThemeButton from "./them-button";

export default function NavBar() {
    const [, builder] = useTheme();

    return (
        <div className={builder('navbar')}>
            <h1>IE Final Project</h1>
            <div />
            <ThemeButton className="change-theme" />
        </div>
    )
}