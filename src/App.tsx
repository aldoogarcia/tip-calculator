import {menuItems} from './data/bd'
import useOrder from './hooks/useOrder'
import MenuItem from './components/menuItem'


function App() {

  const{addItem}= useOrder()

  return (
    <>
      <header className='bg-cyan-700 py-10 mx-auto'>
        <h1 className='text-center text-3xl font-black text-white text'>Tip Calculater</h1>
      </header>
      

      <main className='grid md:grid-cols-2 container mx-auto mt-5'>
          <div className="">
            <h1 className='text-center font-black text-4xl'>Menu</h1>
              {menuItems.map((item) => (
                <div className="">
                <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
                /> 
                </div>
              ))}
          </div>
          <div className="">
            <h1 className='text-center font-black text-4xl'>Pedido</h1>
          </div>
      </main>
    </>
  )
}

export default App
