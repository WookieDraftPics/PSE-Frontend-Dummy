import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function LanguageMenu() {
  return (
    <div className="absolute inset-y-0 right-10 w-6/12">
      <p className="text-right">
        <Menu>
          <MenuHandler>
            <Button className="top-0 right-0 h-10 border-1 border-textGreen text-textGreen">
              Sprache
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

export default LanguageMenu;
