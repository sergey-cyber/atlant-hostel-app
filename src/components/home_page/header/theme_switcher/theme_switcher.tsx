import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./theme_switcher.module.scss";
import moonSvg from "./images/moon.svg";
import sunSvg from "./images/sunny.svg";
import { setGlobalTheme, Themes } from "../../../../redux/localizations-reduser";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: any) => state.localizationData.globalTheme);

  const onChange = () => {
    dispatch(setGlobalTheme(currentTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT));
  };

  return (
    <div className={styles.themeSwitcher}>
      <Switch
        defaultChecked
        onChange={onChange}
        checkedChildren={<img alt="" src={sunSvg} />}
        unCheckedChildren={<img alt="" src={moonSvg} />}
      />
    </div>
  );
};
