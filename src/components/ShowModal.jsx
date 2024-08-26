const ShowModal = ({data}) => {
  return (
    <>
    <div className="border p-5 rounded bg-violet-100 h-96 items-center ">
      <div className="font-bold text-xl mb-14"><span>{data.title}</span></div>
      <div className=" mb-6">
        <div className="text-sm text-gray-500 mb-1">Description</div>
        <p>{data.des}</p>
      </div>
      <div className=" mb-6">
        <div className="text-sm text-gray-500 mb-1">Deadline Date</div>
        <p>{data.date}</p>
      </div>
      
      <div className="flex"><div className="text-sm text-gray-500 mb-1">Status</div>
        {data.status ? (
          <div className="grid place-items-center w-2/6 p-1 text-center ml-3 text-green-700 rounded-lg border border-green-700 text-sm">
            DONE
          </div>
        ) : (
          <div className="grid place-items-center w-2/6 p-1 text-center ml-3 text-red-600 border border-red-600 rounded-lg text-sm">
            TO DO
          </div>
        )}
      </div>
    </div></>
  );
};
export default ShowModal;