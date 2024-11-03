import { useNavigate } from "react-router-dom";
import { ReturnButton } from "../../ui/buttons";

interface IHeader {
  title: string;
  showReturnButton?: boolean;
}

function Header({ title, showReturnButton }: IHeader) {
  const navigate = useNavigate();
  const returnToDashboard = () => {
    navigate({
      pathname: "/dashboard",
    });
  };

  return (
    <div
      className="col-span-full my-5 flex flex-col gap-2" //
      test-id="header"
    >
      {showReturnButton && (
        <div test-id="return-button">
          <ReturnButton onClick={returnToDashboard} />
        </div>
      )}
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}

export default Header;
