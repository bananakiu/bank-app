const Button = ({content, color, hoverColor, otherStyling, onClickFunction}) => {
    return <button onClick={onClickFunction} className={`
    ${color} ${hoverColor} rounded-3xl
    text-white
    py-2 px-4
    transition duration-200
    ${otherStyling}
    `}>
        {content}
    </button>
};

export default Button;