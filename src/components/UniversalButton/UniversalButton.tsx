import s from "./UniversalButton.module.css";

type ButtonPropsType = {
  title: string;
  onClickHandler: () => void;
  disabled: boolean;
};

export const UniversalButton = (props: ButtonPropsType) => {
  const { title, onClickHandler, disabled } = props;
  return (
    <div>
      <button
        onClick={onClickHandler}
        disabled={disabled}
        className={disabled ? `${s.disabled}` : ""}
      >
        {title}
      </button>
    </div>
  );
};
