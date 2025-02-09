import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../api/commentary';
import {useQuery} from '@tanstack/react-query'
import ErrorPage from '../views/ErrorPage';

const Commentary = () => {
  const [id]=useSearchParams();
  console.log(useSearchParams(id.get("v")))


  const { data, isLoading, isError } = useQuery({
    queryKey: ["matchData", id],  // Re-fetch when `id` changes
    queryFn: () => getData(id),
    enabled: !!id,  // Prevents running query if `id` is null/undefined
  });
  
  useEffect(()=>{
console.log("dataa",data?.matchHeader)
  },[data])

  if(isError){
    return <ErrorPage/>
  }


  return (

       <div className="bg-white mt-2 p-2">

{
  !isLoading ? (
<section id="Header" className="">
<div>
      <div className="font-bold text-lg mt-2 mb-3">
          <div className='flex gap-10'>
            <p>{data.matchHeader.team1.shortName}</p> <p> 241/4 (20)</p>
          </div>
          <div className='flex gap-10'>
          <p>{data.matchHeader.team2.shortName} </p><p>207/4 (20)</p>
          </div>
          <p className="text-sm font-light text-blue-500">
          {data.matchHeader.status}
          </p>
          <hr className="mt-2" />
          </div>
          </div>
</section>
  ) :(
<p>Loading ......</p>
  )
}
       {data?.commentaryList.map((comments,index)=>(
          <>
          <div key={index} className='p-1 my-2'>
            <p  className='text-sm mb-2'> 
            {comments.commText}
          </p>
          <hr />
          </div>
          </>
        ))}
    </div>
  )
}

export default Commentary
