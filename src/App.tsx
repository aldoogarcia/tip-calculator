import {menuItems} from './data/bd'
import useOrder from './hooks/useOrder'
import MenuItem from './components/menuItem'
import ViewOrder from './components/viewOrder'
import SubtotalItem from './components/subtotal'
import PropinaItem from './components/propina-item'


function App() {

  const{addItem,order,removeItem,tip,setTip,saveOrder}= useOrder()
  

  return (
    <>
    
      <header className='w-full bg-cyan-700 py-10 mx-auto'>
        <h1 className='text-center text-3xl font-black text-white text'>Manejador de Ordenes</h1>
      </header>
      

      <main className='grid md:grid-cols-2  container mx-auto mt-5'>
          <div className='shadow-2xl'>
            <div className='px-3'>

            <h1 className='text-center font-black text-4xl'>Menu</h1>
              {menuItems.map((item) => (
                <div key={item.id} className="">
                <MenuItem
                
                item={item}
                addItem={addItem}
                /> 
                </div>
              ))}
            </div>
          </div>


          <div className=" shadow-2xl">


            <div   className=" px-2">
              <h1 className='text-center font-black text-4xl mb-3'>Pedido</h1>
            {order.length ?(
              <>
            
            <div className="">
              <ViewOrder
              order={order}
              removeItem={removeItem}
              />
            </div>

            
            <PropinaItem
            setTip={setTip}
            />

            <SubtotalItem
            order={order}
            tip={tip}
            saveOrder={saveOrder}
            />
            </>
          ):(<p className='text-center'>Sin Pedidos</p>)}

            </div>
          </div>
      </main>
    </>
  )
}

export default App
