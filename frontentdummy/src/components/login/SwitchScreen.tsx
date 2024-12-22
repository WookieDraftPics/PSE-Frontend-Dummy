function SwitchScreen() {
  return (
    <div className="absolute rounded-lg inset-y-0 left-0 w-5/12 bg-switchGreen shadow">
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
          <button className="bg-switchButton  inset-0 w-75 h-10 text-3xl rounded-full border border-black">
            Registrieren
          </button>
        </p>
      </div>
    </div>
  );
}

export default SwitchScreen;
