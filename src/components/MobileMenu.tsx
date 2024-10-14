import React from "react";

interface MobileMenuProps {
  closeDrawer: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeDrawer }) => {
  return (
    <nav className="flex flex-col space-y-4 p-6 bg-primary">
      <a href="#features" className="text-lg" onClick={closeDrawer}>
        Features
      </a>
      <a href="#pricing" className="text-lg" onClick={closeDrawer}>
        Pricing
      </a>
      <a href="#login" className="text-lg" onClick={closeDrawer}>
        Login
      </a>
      <a
        href="#create-landscape"
        className="text-lg bg-secondary text-white px-4 py-2 rounded"
        onClick={closeDrawer}
      >
        Create Landscape
      </a>
    </nav>
  );
};

export default MobileMenu;
