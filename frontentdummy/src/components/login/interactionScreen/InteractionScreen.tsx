import GuestButton from "../buttons/GuestButton";
import PasswdReset from "../buttons/PasswdReset";
import PrimButton from "../buttons/PrimButton";
import LanguageMenu from "./LanguageMenu";

import LingoLinkIcon from "./LingoLinkIcon.svg";

function InteractionScreen() {
  return (
    <div className="absolute right-8 top-10 w-6/12">
      <LanguageMenu />
      <br></br>
      <div className="grid grid-cols-6 gap-1 relative h-1/12 top-10">
        <div className="bg-switchGreen">
          <img src={LingoLinkIcon} alt="Logo" className="object-fill"></img>
        </div>
        <div className="col-span-5">
          <h1 className="text-left text-5xl">Login</h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Benutzername/E-Mail
          </label>
          <input
            className="bg-white rounded border border-black"
            placeholder="Tano/tano@email.de"
            required
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Passwort
          </label>
          <input
            className="bg-white rounded border border-black"
            placeholder="**********"
            required
          ></input>
        </div>
      </div>
      <div>
        <PasswdReset />
      </div>
      <br></br>
      <br></br>
      <p className="text-center">
        <PrimButton item={"Anmelden"} />
      </p>
      <br></br>
      <p className="text-center">
        <GuestButton />
      </p>
    </div>
  );
}

export default InteractionScreen;
