import TodoContainer from "@/components/todo/todoContainer";
import Container from "@/components/ui/container";


const Todo = () => {
    return (
        <Container>
            <p className="text-center text-3xl font-semibold my-10 ">MY TODO </p>
           <TodoContainer/>
        </Container>
    );
};

export default Todo;