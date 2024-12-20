import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function InteractionScreen() {
  return (
    <div className="absolute inset-y-0 right-0 w-7/12">
      <p className="text-right">
        <Menu>
          <MenuHandler>
            <Button className="top-0 right-0">
              <h4 className="text-textGreen">Sprache</h4>
            </Button>
          </MenuHandler>
          <MenuList className="bg-backingGreen h-40 w-40">
            <MenuItem>Deutsch-Hochdeutsch</MenuItem>
            <MenuItem>Enlish</MenuItem>
            <MenuItem>Hindi</MenuItem>
            <MenuItem>Deutsch-Hotam/Simplified</MenuItem>
          </MenuList>
        </Menu>
      </p>
    </div>
  );
}

export default InteractionScreen;
