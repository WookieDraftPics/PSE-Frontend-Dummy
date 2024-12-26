import InteractionScreen from "../components/login/interactionScreen/InteractionScreen";
import SwitchScreen from "../components/login/SwitchScreen";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bg-backingGreen rounded-lg shadow w-50 h-2/3 p-12">
        <div>
          <SwitchScreen />
        </div>
        <div>
          <InteractionScreen />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
