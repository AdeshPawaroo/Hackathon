interface LogoProps {
    src: string;
    alt?: string;
    height?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', height = '50px' }) => {
    return <img src={src} alt={alt} style={{ height }} />;
};

export default Logo;
