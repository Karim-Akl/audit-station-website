const ShoppingCartOrderSummary = ({ label, value }: any) => {
  return (
    <div>
      <div className='flex justify-between items-center pe-6'>
        <span>{label}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default ShoppingCartOrderSummary;
