import SwitchButton from "../buttons/SwitchButton";

const SwitchScreen = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 left-16 w-4/6 h-2/3">
      <h1 className="text-center text-4xl">Du hast schon einen Acocunt?</h1>
      <br></br>
      <br></br>
      <br></br>
      <p className="text-center">
        <SwitchButton content="Amelden" />
      </p>
    </div>
  );
};

export default SwitchScreen;
