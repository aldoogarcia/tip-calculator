
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
    {
      id: 'tip-s/n',
      value: 0,
      label: 'S/N'
    },
  ]

  type TipItemProps={
    setTip: React.Dispatch<React.SetStateAction<number>>
  }
export default function PropinaItem({setTip}:TipItemProps){
    return(
        <>
        <h1>Propinas a agregar</h1>
        <form>
        {tipOptions.map(opt=>
            (
                <label className="" key={opt.id}>
                    <div className="">
                    <input  onChange={e => setTip(+e.target.value)} className="mx-3" type="radio" name="tip" value={opt.value} />
                    {opt.label}
                    </div>
                    
                </label>
        ))}

</form>

        </>
    )
}