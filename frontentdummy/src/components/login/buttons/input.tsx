interface Props {
  title: string;
  placeHolder: string;
}

const InputField = ({ title, placeHolder }: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {title}
      </label>
      <input
        className="bg-white rounded border border-black"
        placeholder={placeHolder}
        required
      ></input>
    </div>
  );
};

export default InputField;
