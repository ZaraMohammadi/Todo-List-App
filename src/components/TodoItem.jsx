import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import StarIcon from "./StarIcon";
import CheckIcon from "./CheckIcon";

const TodoItem = ({ todo, handleShowModal, deleteTodo,editTodo,handleIsChecked,handleIsImportant}) => {
  return (
    <>
      <div className=" bg-gray-100 duration-700 border  transition-all  flex items-center justify-between my-4 p-4 rounded-lg">
        <CheckIcon  todo={todo} handleIsChecked={handleIsChecked} />
        <div onClick={() => handleShowModal(todo)} className="w-2/3">
          {todo.title}
        </div>
        <div className="flex items-center justify-around">
          
          <StarIcon  todo={todo} handleIsImportant={handleIsImportant} />
          <EditIcon  onClick={() => editTodo(todo)} />
          <DeleteIcon onClick={() => deleteTodo(todo)} />
        </div>
      </div>
    </>
  );
};
export default TodoItem;
