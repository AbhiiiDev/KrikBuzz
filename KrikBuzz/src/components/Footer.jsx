
const Footer = () => {


const Follow=["facebook","twitter","youtube","Pinterest"];

const Company=["Careers","Advertise","Privacy Policy","Terms of use","KrikBuzz TV Ads"];





  return (
    <div className='bg-[#4a4a4a] '>

    <div className='flex flex-col sm:flex-row justify-evenly m-5 p-5 gap-5 '>
     <img className='h-24 w-28' src='https://static.cricbuzz.com/images/cb_logo.svg' alt='logo'/>
    

      <ul className='text-white'>
        <h1 className='font-bold text-xl mb-3'>Follow</h1>
        {Follow.map((item,index)=>(
            <li className='mb-2 cursor-pointer' key={index} >{item}</li>
            ))}
      </ul>
      <ul className='text-white'>
        <h1 className='font-bold text-xl mb-3 '>Follow us On</h1>
        {Follow.map((item,index)=>(
            <li className='mb-2 cursor-pointer' key={index} >{item}</li>
            ))}
      </ul>
      <ul className='text-white'>
        <h1 className='font-bold text-xl mb-3'>Company</h1>
        {Company.map((item,index)=>(
            <li key={index} className='mb-2 cursor-pointer' >{item}</li>
            ))}
      </ul>
      </div>
 <p className='text-[#bababa] text-sm text-center p-2'>
 © 2024 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times
 </p>
          
           
            </div>

  )
}

export default Footer
