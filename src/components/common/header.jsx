import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";

export const Header = () => (
    <header className="bg-white max-w-7xl mx-auto flex py-10 w-full">
        <div className="flex items-center gap-24 w-1/2">
            <Logo />
            <nav className="flex gap-12 text-lg font-medium text-secondary-50">
                <a href="/">Home</a>
                <a href="#">Products</a>
                <a href="#">Contacts</a>
            </nav>
        </div>
        <div className="flex items-center w-1/2 justify-end gap-12 2">
            <Icon name="cart" />
            <Icon name="person" />
            <div className="h-6 w-[1px] bg-secondary"></div>
            <Icon name="menu" />
        </div>
    </header>
);
