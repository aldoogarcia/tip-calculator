import {MenuItem} from '../types/index'

type MenuItemProp={
  item: MenuItem
  addItem:() => void
}

export default function menuItem({item, addItem}: MenuItemProp) {
  return (
    <button onClick={addItem} className='w-full my-1'>
      <div className=" boder border-2 border-sky-700 flex justify-between p-3 hover:bg-sky-900 hover:text-white transition-colors">
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
    </button>
  )
}
