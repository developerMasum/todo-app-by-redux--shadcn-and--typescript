import { useAppSelector } from "@/redux/features/hook";
import AddToDoModal from "./addTodoModal";
import TodoCard from "./todoCard";
import TodoFilter from "./todoFilter";

const TodoContainer = () => {
  const todos = useAppSelector((state) => state.todos);
  console.log("err", todos, typeof todos);
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddToDoModal />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl   p-[5px]">
        <div className="bg-white w-full p-5 h-full rounded-lg space-y-3 ">
          {todos.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white p-3 flex justify-center items-center text-2xl font-bold ">
               <p className=""> There is no Task pending </p>
             </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
