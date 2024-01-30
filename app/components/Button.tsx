interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="bg-jada-purple text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
