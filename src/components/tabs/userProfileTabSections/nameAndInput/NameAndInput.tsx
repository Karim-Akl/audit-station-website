const NameAndInput = ({ label, inputType = 'text', ...props }: any) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <label className='font-medium'>
        {label} <span className='text-red-500'>*</span>
      </label>
      <input
        {...props}
        type={inputType}
        className='w-full rounded-md p-2 border-2 border-gray-300 focus:outline-none'
      />
    </div>
  );
};

export default NameAndInput;
