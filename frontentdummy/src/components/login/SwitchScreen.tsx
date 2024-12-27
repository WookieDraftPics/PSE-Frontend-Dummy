import SwitchButton from "../buttons/SwitchButton";

//TODO: make text dynamic with languages

function SwitchScreen() {
  return (
    <div className="absolute inset-x-0 bottom-0 left-16 w-4/6 h-2/3">
      <h1 className="text-center text-4xl">Neu hier?</h1>
      <br></br>
      <h2 className="whitespace-normal white-space: pre-line text-center text-xl">
        Dann erstelle dir jetzt deinen eigenen Account und tritt deinem ersten
        kollaborativen Mehrsprachen Projekt bei!
      </h2>
      <br></br>
      <br></br>
      <p className="text-center">
        <SwitchButton content="Registrieren" />
      </p>
    </div>
  );
}

export default SwitchScreen;
