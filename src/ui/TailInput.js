

export default function TailInput({type,inputRef, ph,handleChange}) {
  return (
        <input className="bg-white
        appearance-none border-2 border-gray-200 
        rounded w-full py-2 px-4 
        text-gray-700 leading-tight 
        focus:outline-none focus:bg-white
         focus:border-purple-500  "  
         type={type} 
         placeholder={ph} ref = {inputRef}
         onChange={handleChange}/>
    
  )
}
