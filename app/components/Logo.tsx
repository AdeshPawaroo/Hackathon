import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  height?: number
  width?: number
}

const Logo: React.FC<LogoProps> = () => {
  return <Image src={'/Logo-image.png'} alt={'logo'} height={50} width={50} />
}

export default Logo
