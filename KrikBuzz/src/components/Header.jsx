

const Header = () => {
  return (
    <div className="flex justify-evenly bg-[#09ae84]">
      <img className="h-20 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6fe_4zNybRyHSfe3rVymQ2E3jD2-d-AfSJv583qglLFKiWIXKV9BHgkABF7dfaRk6M&usqp=CAU" alt="logo"/>
        <div className="mt-7">
            <ul className="text-white text-center flex ">
                <li className="mx-3 cursor-pointer">
                    Live Scores
                </li>
                <li className="mx-3 cursor-pointer">
                Schedules
                </li>
                <li className="mx-3 cursor-pointer">
                    News
                </li>
                <li className="mx-3 cursor-pointer">
                    Series
                </li>
                <li className="mx-3 cursor-pointer">
                    Teams
                </li>
                <li className="mx-3 cursor-pointer">
                    Rankings
                </li>
              

            </ul>
        </div>
        <div className="mt-7">
            <input type="text"/>
            <button className="mx-1 p-1 text-white hover:bg-green-600 border rounded-md">Search</button>
        </div>
    </div>
  )
}

export default Header
