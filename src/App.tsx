import {menuItems} from './data/bd'
import useOrder from './hooks/useOrder'
import MenuItem from './components/menuItem'
import ViewOrder from './components/viewOrder'


function App() {

  const{addItem,order,removeItem}= useOrder()

  return (
    <>
      <header className='bg-cyan-700 py-10 mx-auto'>
        <h1 className='text-center text-3xl font-black text-white text'>Tip Calculater</h1>
      </header>
      

      <main className='grid md:grid-cols-2 container mx-auto mt-5'>
          <div>
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


          <div className="">
            <h1 className='text-center font-black text-4xl'>Pedido</h1>
            <div className="">
              <ViewOrder
              order={order}
              removeItem={removeItem}
              />
            </div>
          </div>
      </main>
    </>
  )
}

export default App
