import { Card } from "../../components/card"


export  function UserCard({user, onSelect}){

    return(
        <div>
            <Card onClick={() => onSelect()}>
                <h2 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">Name: {user.name}</h2>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Email: {user.email}</p>
            </Card>
        </div>
    )
}