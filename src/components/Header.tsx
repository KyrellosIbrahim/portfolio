
import NavBar from "./NavBar";

export const Header = () => {
    return (
        <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center
        justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase
        text-text-primary backdrop-blur-[100px] dark:border-gray-500 dark:bg-d-background dark:text-d-text-primary">
            <span className="text-2xl font font-semibold">Kyrellos Ibrahim</span>
            <NavBar />
        </header>
    );
};

export default Header;