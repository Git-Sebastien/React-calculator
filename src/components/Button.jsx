function Button ({keys,handleClick}){

    return(
        <button onClick={handleClick}>{keys}</button>
    )

}

export default Button