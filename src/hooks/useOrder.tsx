import {useState} from 'react'
import {MenuItem, OrderItem} from '../types/index'

export default function useOrder(){
const [order,setOrder] = useState<OrderItem[]>([])

const addItem= (item:MenuItem)=>{
    //console.log(item)
    const searchOrder= order.find(orderItem=> orderItem.id== item.id);
    if(searchOrder){
        const updateOrder = order.map(orderItem=> orderItem.id=== item.id ? {...orderItem,quantity:orderItem.quantity+1}: orderItem)
        setOrder(updateOrder)
    }else{
        const newOrder={...item, quantity:1}
        setOrder([...order,newOrder])
    }

    console.log(order)
}

const removeItem= (id:MenuItem['id'])=>{
    setOrder(order.filter(item=>item.id != id))
}

return{
    order,
    addItem,
    removeItem,
    
}
}