export  function Card({children, onClick}){

    return(
        <div
        className="bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-5 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group"
        onClick={onClick}>
            <p className="text-black p-3 rounded-md  ">👤</p>
            {children}
        </div>
    )
}