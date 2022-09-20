import './Button.css'


const Button = (props) => {
    return (
        <div className="button--container">
            <a href={props.href} target="_blank">
                <div className="button--button">{props.name}</div>
            </a>
        </div>
    )
}

export default Button