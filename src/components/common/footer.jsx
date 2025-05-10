import { Logo } from "../logo/logo";

export const Footer = () => (
    <footer className="bg-primary py-12">
        <main className="max-w-7xl mx-auto">
            <section className="w-full flex">
                <div className="w-1/2">
                <Logo />
                    <h3 className="text-lg font-medium text-secondary-50">We help you find your dream plant</h3>
                </div>
                <div className="w-1/2 flex justify-end">
                    footer
                </div>
            </section>
            <section className="w-full text-lg font-medium text-secondary-50">2023 all Right Reserved Term of use GREENMIND</section>
        </main>
    </footer>
);