export const Input = ({
    value,
    handleChange,
    placeholder
}) => {
    return (
        <input value={value} onChange={handleChange} placeholder={placeholder}/>
    )
}