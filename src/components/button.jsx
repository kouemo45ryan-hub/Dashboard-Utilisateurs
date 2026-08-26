export  function Button({text, onClick}) {

return(
    <button
    className="bg-blue-500 rounded-md px-4 py-2 hover:bg-blue-700 hover:py-3 hover:px-6 transition-all cursor-pointer "
    onClick={onClick}>
        {text}
    </button>
)
}