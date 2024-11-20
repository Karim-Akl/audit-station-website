import Image from "next/image"


const BlogAuthor = ({data}: any) => {
    return (
        <>
        <div className='mt-20 mx-6 flex gap-4'>
        <div className='w-24 h-24 rounded-full'>
          <Image
            src={data?.image}
            alt='author'
            width={0}
            height={100}
            layout='responsive'
            className='rounded-full'
          />
        </div>
        <div className=''>
          <h1 className='text-lg'>{data?.name}</h1>
          <p>{data?.description}</p>
        </div>
      </div>
        </>
    )
}

export default BlogAuthor