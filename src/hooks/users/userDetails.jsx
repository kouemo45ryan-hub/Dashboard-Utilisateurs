import {Button} from '../../components/button'

export function UserDetails({user, onClose}){

    return(
        <div>
            <h2 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">Name: {user.name}</h2>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Email: {user.email}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Phone: {user.phone}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Website: {user.website}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Company: {user.company.name}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Adress: {user.address.street},{user.address.city}</p>
            <Button  text= 'Close' onClick = {onClose} />
        </div>
    )
}