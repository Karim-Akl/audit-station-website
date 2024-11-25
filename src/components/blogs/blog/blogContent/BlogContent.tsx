

const BlogContent = ({data}: any) => {
    return (
        <>
        <h1 className='text-2xl font-bold mb-10'>{data?.title}</h1>
      <p>{data?.description}</p>
      <div className='flex items-center gap-4'>
        <div className='flex flex-col md:flex-row md:items-center mt-4 gap-2'>
          <h3 className='font-semibold'>Tags:</h3>
          {data?.tags?.map((tag: any) => (
            <span
              key={tag}
              className='bg-[#22B9DD] text-white px-3 py-2 rounded-full text-sm ms-2'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
        </>
    )
}

export default BlogContent