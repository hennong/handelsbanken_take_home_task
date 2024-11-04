interface ICheckbox {
  checked: boolean;
  onToggle: () => void;
}

function Checkbox({ checked, onToggle }: ICheckbox) {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => {
          onToggle();
        }}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            onToggle();
          }
        }}
        checked={checked}
      />
    </div>
  );
}

export default Checkbox;
