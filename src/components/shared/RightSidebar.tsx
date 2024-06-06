import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
// import UserChat from "./UserChat";
import UserCard2 from "./UserCard2";


const RightSidebar = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });
    
    return;
  }

  return (
    <div className="w-[400px]">
      <div className="user-container2">
        <h2 className="h3-bold md:h2-bold text-left w-full my-11">Top Devs</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid2">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="flex-1 min-w-[100px] w-full">
                <UserCard2 user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default RightSidebar