import { Logo } from "../logo/logo";

export const Header = () => (
    <header className="bg-white max-w-7xl mx-auto flex py-10">
        <div className="flex items-center gap-24">
            <Logo />
            <nav className="flex gap-12 text-lg font-medium text-secondary-50">
                <a href="/">Home</a>
                <a href="#">Products</a>
                <a href="#">Contacts</a>
            </nav>
        </div>
        <div>

        </div>
    </header>
);
