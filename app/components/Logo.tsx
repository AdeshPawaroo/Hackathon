import Image from 'next/image'

interface LogoProps {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
}

const Logo: React.FC<LogoProps> = ({ src = '/Logo-image.png', alt = 'Logo', height = 50 , width = 50 }) => {
    return <Image src={src} alt={alt} height={height} width={width} />;
};

export default Logo;
