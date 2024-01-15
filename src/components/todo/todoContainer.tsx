// import { useAppSelector } from "@/redux/features/hook";
import { useGetTodosQuery } from "@/redux/api/api";
import AddToDoModal from "./addTodoModal";
import TodoCard from "./todoCard";
import TodoFilter from "./todoFilter";


const TodoContainer = () => {
  // from local 
  // const {todos} = useAppSelector((state) => state.todos);
  // console.log("err", todos, typeof todos);

  // from server 
  const {data:todos}= useGetTodosQuery(undefined)
  console.log(todos);

  
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddToDoModal />
        <TodoFilter />
      </div>
     
      {todos && todos.length > 0 ? (
        <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
          <div className="bg-white w-full p-5 h-full rounded-lg space-y-3">
         
            {todos.map((item) => (
              <TodoCard key={item._id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-5 flex justify-center items-center text-2xl font-bold">
          <p className="border  border-cyan-500  p-5 rounded-lg uppercase text-lg">
            There is no task pending. Please click on ADD TODO.
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoContainer;
