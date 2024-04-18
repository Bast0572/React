import { memo, useState } from "react";

const List = memo(function List({ items }) {

const [done,setDone] =useState(false)
/*
const handleDone = (d) => {
    const newtodolist=items.map(item=>{
        if(item.id===d)
        {
            return {...item,done:!item.done}
        }
        return item;
    })
 setDone(newtodolist)   
}
*/

  return (
    <ul>
      {items.map((item) => (
        <div>
          <span key={item.id}>
            {item.completed ? <s>{item.title}</s> : item.title}{" "}
          </span> 
          <input
          type='checkbox'
          checked={done}
         /* onChange={handleDone(item.id)}*/
          />
          <br></br>
          <span> {item.completed ? <s>{item.content}</s> : item.content} </span>
          <br></br>
          <span>{item.completed ? <s>{item.type}</s> : item.type}</span><br></br>

        </div>
      ))}
    </ul>
  );
});

export default List;
