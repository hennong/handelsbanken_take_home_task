import ArrowLeft from "../../../assets/svg/arrow-left.svg";

interface IReturnButton {
  onClick: () => void;
}

function ReturnButton({ onClick }: IReturnButton) {
  return (
    <button className="size-4" onClick={onClick}>
      <img src={ArrowLeft} alt="return arrow" />
    </button>
  );
}

export default ReturnButton;
