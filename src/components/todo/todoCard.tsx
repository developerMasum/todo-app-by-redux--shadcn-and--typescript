import { useAppDispatch } from "@/redux/features/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoProps = {
  id:string;
  title: string;
  description: string;
  isCompleted?:boolean;
  priority: string;
};
const TodoCard = ({ title, description,id,isCompleted ,priority }:TTodoProps) => {
  const dispatch =  useAppDispatch();

  const toggleState = ()=>{
dispatch(toggleComplete(id))
  }
  return (
    <div className="bg-white rounded-md flex justify-between border items-center p-3 ">
      <input onChange={toggleState} type="checkbox" name="complete" id="complete" />
      <p className="font-semibold">{title} </p>
    <div className="flex items-center justify-center gap-2">
    <div className={`size-3 rounded-full
     ${priority === 'high' ? 'bg-red-500' : ''}
     ${priority === 'normal' ? 'bg-yellow-500' : ''}
     ${priority === 'low' ? 'bg-green-500' : ''}
     
     `}></div>

      <p>{priority}</p>
    </div>
      <div className="">
        {
          isCompleted ? <p className="text-green-400"> Done </p> : <p className="text-red-400"> Pending</p>
        }
      </div>
      <p className="">{description}</p>
      <div className="space-x-6">
        <Button  onClick={()=>dispatch (removeTodo(id))} className="bg-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </Button>
        <Button className="bg-sky-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
