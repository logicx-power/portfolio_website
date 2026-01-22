const PricingSkeleton = () => {
  return (
    <>
      <div>
        <div
          role='status'
          className='max-w-md animate-pulse overflow-hidden bg-white dark:bg-darkmode rounded-lg shadow-lg dark:shadow-neutral-50/10 border border-black/10 dark:border-white/10 px-7 py-10 h-full'>
          <div className='h-2 w-20  bg-gray-200 rounded-full max-w-[330px] my-5'></div>
          <div className='h-2 w-48  bg-gray-200 rounded-full max-w-[330px] mb-2.5'></div>
          <div className='my-10'>
            <div className='h-2 w-48  bg-gray-200 rounded-full max-w-[330px] mb-2.5'></div>
            <div className='h-2 w-36  bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
          </div>
          <div className="flex flex-col gap-10 mt-20">
            <div className='h-2 w-full  bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
            <div className='h-2 w-full  bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
            <div className='h-2 w-full  bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
            <div className='h-2 w-full  bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
            <div className='h-2 w-full  bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </>
  )
}

export default PricingSkeleton
