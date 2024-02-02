import Link from 'next/link';

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
    return (
        <li>
            <Link href={href}>
                <span>{label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
