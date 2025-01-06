import SwitchScreen from "../components/register/SwitchScreen";
import InteractionScreen from "../components/register/InteractionScreen";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bg-backingGreen rounded-lg shadow w-50 h-2/3 p-12">
        <div className="absolute rounded-lg inset-y-0 right-0 w-5/12 bg-switchGreen shadow">
          <SwitchScreen />
        </div>
        <div>
          <InteractionScreen />
        </div>
      </div>
    </div>
  );
}

export default Register;
