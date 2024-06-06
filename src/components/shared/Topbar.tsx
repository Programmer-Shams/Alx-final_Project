import { Link, useNavigate} from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations"
import { useEffect } from "react"
import { useUserContext } from "@/context/AuthContext"
const Topbar = () => {
    const { mutate: SignOut, isSuccess } = useSignOutAccount()
    const navigate = useNavigate()
    const {user} = useUserContext()


    useEffect(() => {
        if(isSuccess) navigate(0)
    }, [isSuccess])
    
  return (
   <section className="topbar">
    <div className="flex-between py-4 px-5">
        <Link to='/' className="flex gap-3 items-center">
            <img src="/assets/icons/codeshare.svg" alt="logo" height={325} width={130} />
        </Link>

        <div className="flex gap-4">
            <Button variant='ghost' className="shad-button_ghost" onClick={() => SignOut()}>
                <img src="/assets/icons/logout.svg" alt="logout" />
            </Button>
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                <img src={user.imageUrl || '/assets/icons/profile-placeholder.svg'} alt="profile" className=" w-8 h-8 rounded-full" />
            </Link>
        </div>
    </div>
   </section>
  )
}

export default Topbar