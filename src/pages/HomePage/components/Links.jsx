
export default function Links({link}) {
  return (
    <div className="flex flex-col gap-2">
      <h1>{link.title}</h1>
      {link.links.map(item => <a key = {item} className="text-gray-400" href='#'>{item}</a>)}
    </div>
  )
}
