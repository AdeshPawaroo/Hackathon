import Link from 'next/link'

interface MenuItemProps {
  href: string
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <span>{label}</span>
    </Link>
  )
}

export default MenuItem
