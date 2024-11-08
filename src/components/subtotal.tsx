import { useMemo } from "react";
import { OrderItem } from "../types";
type SubtotalProps={
    order: OrderItem[],
    tip:number,
    saveOrder: ()=> void
}

    export default function Subtotal({ order,tip,saveOrder }: SubtotalProps) {
        const subtotal = useMemo(() => {
            return order.reduce((total, item) => total + (item.price * item.quantity), 0);
        }, [order]);
        
        const tipAmount = useMemo(()=>{return tip*subtotal},[tip,order])

        const total= useMemo(()=>{return tipAmount+subtotal},[tip,order])
return(
    <>
    <h1 className="text-center mt-3">Total y Propinas</h1>
    <div className=" flex justify-between">
        <p className="font-bold">Subtotal</p>
        <p>${subtotal}.00</p>
    </div>
    <div className=" flex justify-between">
        <p className="font-bold">Propina</p>
        <p>${tipAmount}.00</p>
    </div>
    <div className=" flex justify-between">
        <p className="font-bold">Total Neto</p>
        <p>${total}.00</p>
    </div>

    <button onClick={saveOrder} className="w-full bg-black mt-3 text-white py-2 font-extralight mb-10">
        Guardar Orden
    </button>
    </>
)
}