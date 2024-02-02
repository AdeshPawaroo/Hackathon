import Link from 'next/link';

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
    return (
        <li className="hover:bg-jada-blue-500 hover:text-black transition-colors duration-150 rounded">
            <Link href={href}>
                <span className="block px-3 py-2 text-md font-medium">{label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
