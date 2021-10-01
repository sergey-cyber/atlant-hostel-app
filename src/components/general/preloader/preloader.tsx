import { Spin, Space } from "antd";
import style from "./preloader.module.scss";

// В stylePosition может прийти один из двух названий стилей описанных в css
// Стили в свою очередь определяют позиционирование

type stylePosition = "preloaderAbsolut" | "preloaderFlex";
type propsType = {
  message: string,
  stylePosition: stylePosition,
};

const Preloader = (props: propsType) => {
  const { stylePosition, message } = props;

  return (
    <div className={style[stylePosition]}>
      <Space size="middle">
        <Spin size="large" tip={message} />
      </Space>
    </div>
  );
};

export default Preloader;
