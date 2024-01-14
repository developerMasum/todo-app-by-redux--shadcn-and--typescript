import { Button } from "../ui/button";
import TodoCard from "./todoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5 ">
                <Button className="bg-primary-gradient text-xl font-semibold ">ADD TODO </Button>
                <Button>Filter</Button>
            </div>
            <div className=" bg-primary-gradient w-full h-full rounded-xl   p-[5px]">
                <div className="bg-white w-full p-5 h-full rounded-lg space-y-3 ">
             <TodoCard/>

                </div>
             {/* <div className="bg-white p-3 flex justify-center items-center text-2xl font-bold ">
               <p className=""> There is no Task pending </p>
             </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;