import Tailbutton from "../ui/Tailbutton"
export default function TrafficNav({title,category,sel, setSel}) {
    const handleBtClick = (item) =>{
        setSel(item)

    }

  
    const bts = category.map(item =>
        <Tailbutton caption = {item}
                    color ={item === sel ? "blue" : 'red'}
                    handleClick = {() => handleBtClick(item) }
        />
    )
  
    return (
    <div className=" flex flex-row items-center justify-between  bg-pink-200">
        <div>
            <h1 className="font-bold text-xl">
            교통사고 {title}
            </h1>
        </div>
        <div>
            {bts}
        </div>

    </div>
  )
}
