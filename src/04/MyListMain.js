import MyList from "./MyList"
import listData from "./MyListData.json"

export default function MyListMain() {
    console.log(listData)

    const myItems = listData.map(Item =>    //return문 하나 {} 필요 없다
        <MyList title= {Item.title} 
                imgUrl={Item.imgUrl} 
                content = {Item.content}
                key = {Item.title}/>
    ); 

    return (
    <div className="w-10/12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {myItems}
    </div>
  )
}
