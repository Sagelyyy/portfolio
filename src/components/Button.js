import './Button.css'


const Button = (props) => {
    return (
        <div className="button--container">
            <a href={props.href} target="_blank">
                <button className="button--button">{props.name}</button>
            </a>
        </div>
    )
}

export default Button