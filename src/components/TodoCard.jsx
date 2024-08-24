import TodoItem from "./TodoItem";

const TodoCard = ({ title,icon, todo ,handleShowModal,deleteTodo,editTodo,todoImportant,handleIsChecked,handleIsImportant}) => {


  return (
    <>
      <div className=" bg-white md:w-2/5 mt-5 rounded-lg px-3">
        { <div className="flex py-3 w-full bg-white font-bold text-slate-500 text-lg">
        
          <span>{icon}</span>
          <p>{title}</p>
        </div> }
        
          {todo.map((item, index) => (
            <TodoItem todo={item} key={item.id} handleShowModal={handleShowModal} deleteTodo={deleteTodo} editTodo={editTodo} todoImportant={todoImportant} handleIsChecked={handleIsChecked} handleIsImportant={handleIsImportant} />
          ))}
        
      </div>
    </>
  );
};
export default TodoCard;
