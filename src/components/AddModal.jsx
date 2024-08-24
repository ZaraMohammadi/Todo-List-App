import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddModal = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [des, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const status = false;
    const isImportant=false;
    const newItem = { id, title, status, des, date, isImportant };

    let updatedTodo = [];
    const localTodos =JSON.parse( localStorage.getItem("todos"));
    if (localTodos.length>0) {
      console.log(localTodos);
      updatedTodo = [...todos, newItem]
    } else{
      updatedTodo=[newItem];
    }
      setTodos( updatedTodo);
      localStorage.setItem('todos', JSON.stringify(updatedTodo)); 
    
   //localStorage.setItem('todos', JSON.stringify(updatedTodo)); 
    //console.log(newItem);
    // Reset the inputs
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        
          <div className="border p-5 mb-3 rounded bg-violet-100 ">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
              <div className="col-span-full">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Task Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="to do..."
                    autoComplete="title"
                    required
                    className="block w-full rounded-md shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-violet-400  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    value={des}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    required
                    className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 py-1.5 text-gray-900"
                  />
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Write a few sentences about your Task.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Due Date
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="block w-full rounded-md shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-violet-400 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-1 flex items-center gap-x-6">
            <button
              type="submit"
              className="rounded-lg bg-violet-500 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        
      </form>
    </>
  );
};
export default AddModal;
