import EscapeButton from "../components/buttons/EscapeButton";
import InputField from "../components/buttons/input";
import PrimButton from "../components/buttons/PrimButton";

const PasswdRecovery = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bg-backingGreen rounded-lg shadow w-30 h-1/3 p-12">
        <p className="text-right">
          <EscapeButton />
        </p>
        <h1 className="text-3xl font-medium">Passwort zurücksetzen</h1>
        <br></br>
        <InputField title="E-Mail Adresse" placeHolder="tano@email.de" />
        <br></br>
        <PrimButton content="Senden" route="/" />
      </div>
    </div>
  );
};

export default PasswdRecovery;
