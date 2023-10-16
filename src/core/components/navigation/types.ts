export interface Product {
    name: string;
    description: string;
    href: string;
    icon: any;
};

export interface CallToAction {
    name: string;
    href: string;
    icon: any;
};

export interface NavBarDesktopProps {
    products: Product[];
    callsToAction: CallToAction[];
};

export interface NavBarMobileProps {
    mobileMenuOpen: boolean;
    logOut: () => void;
    setMobileMenuOpen: (open: boolean) => void;
};