import { MenuItem, OrderItem } from "../types";

type viewOrderProps = {
  order: OrderItem[],
  removeItem: (id:MenuItem['id'])=>void
};

export default function ViewOrder({ order,removeItem }: viewOrderProps) {
  return (
    <div className="text-center">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Producto</th>
            <th className="py-3 px-6 text-left">Cantidad</th>
            <th colSpan={2} className="py-3 px-6 text-left">Precio</th>
            
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {order.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-3 px-6 text-center">
                Agrega un Producto
              </td>
            </tr>
          ) : (
            order.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.quantity}</td>
                <td className="py-3 px-6 text-left">${item.price}</td>
                <td className="text-center">
                    <button onClick={()=>removeItem(item.id)} className="text-center bg-red-800 px-3 py-1 text-white rounded-full">
                        X
                    </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
