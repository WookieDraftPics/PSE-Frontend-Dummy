import GuestButton from "../buttons/GuestButton";
import InputField from "../buttons/input";
import PrimButton from "../buttons/PrimButton";

const InteractionScreen = () => {
  return (
    <div className="absolute öeft-8 top-10 w-6/12">
      <h1 className="text-3xl font-medium">Account Erstellen</h1>
      <br></br>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <InputField title="Benutzername" placeHolder="Tano" />
        <InputField title="E-Mail Adresse" placeHolder="tano@example.de" />
        <InputField title="Passwort" placeHolder="**********" />
        <InputField title="Passwort wiederholen" placeHolder="**********" />
      </div>
      <PrimButton content="Registrieren" route="/overview" />
      <br></br>
      <br></br>
      <p className="text-center">
        <GuestButton />
      </p>
    </div>
  );
};

export default InteractionScreen;
