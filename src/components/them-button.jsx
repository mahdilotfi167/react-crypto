import {useDispatch} from "react-redux";
import {useTheme} from "../hooks/theme";
import {setTheme} from "../store/theme";

export default function ThemeButton(props) {
    const dispatch = useDispatch();
    const [theme, builder] = useTheme();

    return (
        <button className={props.className} onClick={() => {
            if (theme === 'light')
                dispatch(setTheme('dark'));
            else
                dispatch(setTheme('light'));
        }}>Change Theme</button>
    )
}