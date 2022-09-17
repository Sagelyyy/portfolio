import './Button.css'


const Button = (props) => {
    return(
        <div className="button--container">
            <div className="button--button">{props.name}</div>
        </div>
    )
}

export default Button