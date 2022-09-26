import './Button.css'


const Button = (props) => {
    return (
        <div className="button--container">
            <a href={props.href} target={props.target}>
                <button className="button--button">{props.name}</button>
            </a>
        </div>
    )
}

export default Button