import {useCallback} from "react";
import {useSelector} from "react-redux";

/**
 * Updates classNames corresponding to the current theme.
 * original class names will be applied and in addition, the theme postfix will be added.
 * @returns {(string|*|(function(*): string))[]}
 */
export function useTheme() {

    const theme = useSelector(state => state.theme.theme);

    const builder = useCallback((className) => {

        const classes = className.split(/\s+/g);

        return [...classes, ...classes.map(c => c + "-" + theme)].join(" ");

    }, [theme]);

    return [theme, builder];
}