import { useState, useEffect } from "react";
import Navbar from "./navbar";
import TodoCard from "./TodoCard";
import Modal from "./Modal";
import ShowModal from "./ShowModal";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { v4 as uuidv4 } from "uuid";
import { add } from "date-fns";

const Todo = () => {

  //formatted data to yyyy/mm/dd for defualt values
  const FormattedDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return year + "-" + month + "-" + day;
  };

  //define defualt value for when dont have data from local
  const defaultTodo = [
    {
      id: uuidv4(),
      title: "do homework",
      status: true,
      des: "i should go to the home after school and do homwork at 10:00",
      date: FormattedDate(),
      isImportant:true
    },
    {
      id: uuidv4(),
      title: "read a book",
      status: false,
      des: "i should read book at 11:00",
      date: FormattedDate(),
      isImportant:false
    },
  ];

  //main todos value set with data in local OR defualt value
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const savedTodos =JSON.parse( localStorage.getItem("todos"));
    if (savedTodos.length>0) {
      setTodos( savedTodos);
    } else{
      setTodos( defaultTodo);
    }
  },[])


  //function to search item
  const [searchedItem, setSearchedItem] = useState("");

  //filter todos by searched item
  const searchedTodos = todos.filter((todo) =>
    todo.title.includes(searchedItem)
  );


  //states for ShowModal
  const [selectedTask, setSelectedTask] = useState([]);
  const [isModalOpenShow, setIsModalOpenShow] = useState(false);

  //states for AddModal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //states for EditModal
  const [EditedTask, setEditedTask] = useState([]);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);


  //Handlers functions to open & close ShowModals
  const handleShowModal = (e) => {
    setIsModalOpenShow(true);
    setSelectedTask(e);
  };

  //Handler functions to open & close Modal
  const handleCloseModal = () => {
    setSelectedTask([]);
    setIsModalOpenShow(false);
  };
  const handleCloseAddModal = () => {
    setIsModalOpen(false);
  };

  //Handlers functions to open & close EditModals
  const handleEditModal = (e) => {
    setIsModalOpenEdit(true);
    setEditedTask(e);
  };
  const handleCloseEditModal = () => {
    setEditedTask([]);
    setIsModalOpenEdit(false);
  };

  //Handlers functions to open & close ShowModals
  const handleAddModal = () => {
    setIsModalOpen(true);
  };

  //Handler function to delete item
  const deleteTodoHandler = (todo) => {
    let newTodo = todos.filter((todoItem) => {
      return todo.id != todoItem.id;
    });
    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  //Handler function to searched item
  const handleSearchItem = (e) => {
    setSearchedItem(e);
  };

  //Handler function to open & close sidebar
  const [isOpenSidebar,setIsOpenSidebar]=useState(false);
  
  const handleIsOpenSidebar=()=>{
    setIsOpenSidebar(!isOpenSidebar);
  }

  //Handler functions to checked & unchecked item
  const handleIsChecked=(todo)=>{
    let newTodos = todos.map((item) => {
      if (todo.id == item.id) {
        item.status=!item.status;
      }
      return item;
    });
  
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
  }

   //Handler functions to important & unimportant item
  const handleIsImportant=(todo)=>{
    let newTodos = todos.map((item) => {
      if (todo.id == item.id) {
        item.isImportant=!item.isImportant;
      }
      return item;
    });
  
  setTodos(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  //function & state to handle sidebar items
  const [importantsHandle,setImportantsHandle]=useState(false);
  const [todayHandle,setTodayHandle]=useState("");
  const [pageTitle,setPageTitle]=useState("All Todos");

  const handlerImportantsItem=()=>{
   setImportantsHandle(true);
   setTodayHandle("");
   setPageTitle("Importants");
   
  }

  const handlerTodayItems=()=>{
    const today=FormattedDate();
    setTodayHandle(today);
    setImportantsHandle(false);
    setPageTitle("Today");
  }

  const handleDashboard=()=>{
    
    setImportantsHandle(false);
    setTodayHandle("");
    setPageTitle("All Todos");
  }

  
  return (
    <div> 
    <div className="sm:grid grid-rows-10 grid-cols-8 grid-flow-col">
      
      <div className={`fixed w-40 backdrop-blur-lg bg-white/70 z-40 mt-16  h-screen transition-transform duration-500 -translate-x-full sm:translate-x-0 ${isOpenSidebar?'translate-x-0':''}` }>
          
          <ul>
          <li>
            <a  onClick={handleDashboard}   className="flex items-center cursor-pointer p-3 text-violet-900 font-medium rounded-lg transition duration-300  hover:bg-violet-200  group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-300  group-hover:text-violet-900 " viewBox="0 0 24 24" fill="currentColor">
              <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
              </svg>
               <span className="m-2">All Todos</span>
            </a>
         </li>
          <li>
            <a onClick={handlerTodayItems} className="flex items-center cursor-pointer p-3 text-violet-900 font-medium rounded-lg transition duration-300  hover:bg-violet-200  group">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-300  group-hover:text-violet-900 "  fill="currentColor" viewBox="0 0 48 48">
                <path d="M42 14v-1.5C42 8.916 39.084 6 35.5 6h-23C8.916 6 6 8.916 6 12.5V14H42zM6 17v18.5c0 3.584 2.916 6.5 6.5 6.5h23c3.584 0 6.5-2.916 6.5-6.5V17H6zM32.615 23.503l-9 10C23.34 33.809 22.951 33.989 22.54 34c-.013 0-.026 0-.04 0-.397 0-.779-.158-1.061-.439l-5-5c-.586-.585-.586-1.536 0-2.121.586-.586 1.535-.586 2.121 0l3.882 3.882 7.942-8.825c.554-.616 1.502-.667 2.118-.111C33.119 21.939 33.169 22.888 32.615 23.503z"></path>
                </svg>
               <span className="m-2">Today</span>
            </a>
         </li>
          <li>
            <a onClick={handlerImportantsItem} id="important" className="flex items-center cursor-pointer  p-3 text-violet-900 font-medium rounded-lg transition duration-300  hover:bg-violet-200  group">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-300  group-hover:text-violet-900 "  fill="currentColor" viewBox="0 0 48 48">
                <path d="M 24.009766 5 A 1.50015 1.50015 0 0 0 22.658203 5.8300781 L 17.505859 16.134766 L 5.2714844 18.017578 A 1.50015 1.50015 0 0 0 4.4394531 20.560547 L 12.902344 29.023438 L 11.017578 41.271484 A 1.50015 1.50015 0 0 0 13.193359 42.830078 L 24 37.191406 L 34.806641 42.830078 A 1.50015 1.50015 0 0 0 36.982422 41.271484 L 35.097656 29.023438 L 43.560547 20.560547 A 1.50015 1.50015 0 0 0 42.728516 18.017578 L 30.494141 16.134766 L 25.341797 5.8300781 A 1.50015 1.50015 0 0 0 24.009766 5 z"></path>
              </svg>
               <span className="m-2">Importants</span>
            </a>
         </li>
          
          <li>
            <a onClick={handleAddModal} className="flex items-center cursor-pointer p-3 text-violet-900 font-medium rounded-lg transition duration-300  hover:bg-violet-200  group">
            <svg className="w-5 h-5 text-violet-300  group-hover:text-violet-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
            </svg>

               <span className="m-2">Add new</span>
            </a>
         </li>
          
           
          </ul>
        </div>
        <Navbar
          handleShowModal={handleAddModal}
          handleSearchItem={handleSearchItem}
          handleIsOpenSidebar={handleIsOpenSidebar}
          isOpenSidebar={isOpenSidebar}
        />
        <div className="flex items-center  sm:ml-44 ml-5 mt-5 w-36 text-violet-800 text-2xl font-bold">{pageTitle}</div>
        <div className=" sm:row-start-3 sm:row-end-10 sm:col-start-2 sm:col-end-9 py-5 px-6  rounded-lg flex flex-col md:flex-row justify-around ">
          <TodoCard
            title={"TO DO"}
            icon={<svg className="w-7 h-7 text-orange-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
                  </svg>}
            
            todo={importantsHandle?
              ((todayHandle)?searchedTodos.filter((todo) => (!todo.status && todo.isImportant && (todo.date==todayHandle))):searchedTodos.filter((todo) => (!todo.status && todo.isImportant)))
              :((todayHandle)?searchedTodos.filter((todo) => (!todo.status &&(todo.date==todayHandle))):searchedTodos.filter((todo) => (!todo.status )))}

            handleShowModal={handleShowModal}
            deleteTodo={deleteTodoHandler}
            editTodo={handleEditModal}
            handleIsChecked={handleIsChecked}
            handleIsImportant={handleIsImportant}
          />
          <TodoCard
            title={"DONE"}
            icon={<svg className="w-7 h-7 text-green-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
                  </svg>
                  }
           
            todo={importantsHandle?
              ((todayHandle)?searchedTodos.filter((todo) => (todo.status && todo.isImportant && (todo.date==todayHandle))):searchedTodos.filter((todo) => (todo.status && todo.isImportant)))
              :((todayHandle)?searchedTodos.filter((todo) => (todo.status &&(todo.date==todayHandle))):searchedTodos.filter((todo) => (todo.status )))}

            handleShowModal={handleShowModal}
            deleteTodo={deleteTodoHandler}
            editTodo={handleEditModal}
            handleIsChecked={handleIsChecked}
            handleIsImportant={handleIsImportant}
          />
        </div>
    </div>
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseAddModal}>
          <AddModal setTodos={setTodos} todos={todos} />
        </Modal>
      )}

      {selectedTask.length !== 0 && isModalOpenShow && (
        <Modal handleCloseModal={handleCloseModal}>
          <ShowModal data={selectedTask} />
        </Modal>
      )}

      {EditedTask.length !== 0 && isModalOpenEdit && (
        <Modal handleCloseModal={handleCloseEditModal}>
          <EditModal data={EditedTask} setTodos={setTodos} todos={todos} />
        </Modal>
      )}
    </div>
  );
};
export default Todo;
