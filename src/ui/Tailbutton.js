export default function Tailbutton({ caption, color, handleLottoClick, handleClick}) {
  
  const colorObj = {
    'blue' : 'bg-blue-800',
    'red' : 'bg-red-800',
    'orange' : 'bg-orange-800',
    'lime' : 'bg-lime-800'
  }
  
  
  const hoverObj = {
    'blue' : 'hover:bg-blue-600',
    'red' : 'hover:bg-red-600',
    'orange' : 'hover:bg-orange-600',
    'lime' : 'hover:bg-lime-600'
  }

  const bColor = `p-2 rounded-md m-2 ${hoverObj[color]} ${colorObj[color]} text-white`
  let num = Math.floor(Math.random()*45 + 1)
  return (
    // bg-%{blue}-900 : 이게 안 됨 => object 선언해서 해야 해
    <button className={bColor}
            onClick = {()=>{handleClick()}}>
    {caption}
    </button>
  );
}
