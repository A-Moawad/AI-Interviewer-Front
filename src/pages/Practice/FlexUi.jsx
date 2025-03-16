
export default function FlexUi({title , p , children}) {
  return (
    <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-gray-400">{p}</p>
        </div>
       {children}
      </div>
  )
}
