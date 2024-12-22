import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function LanguageMenu() {
  return (
    <p className="text-right">
      <Menu>
        <MenuHandler>
          <button className="top-0 right-0 h-7 border-1 border-textGreen rounded text-textGreen shadow">
            Sprache
          </button>
        </MenuHandler>
        <MenuList className="bg-backingGreen h-40 w-40">
          <MenuItem>Deutsch-Hochdeutsch</MenuItem>
          <MenuItem>English</MenuItem>
          <MenuItem>Tadschikisch</MenuItem>
          <MenuItem>Hindi</MenuItem>
          <MenuItem>French</MenuItem>
          <MenuItem>Japanese</MenuItem>
          <MenuItem>Deutsch-Hotam/Simplified</MenuItem>
        </MenuList>
      </Menu>
    </p>
  );
}

export default LanguageMenu;
