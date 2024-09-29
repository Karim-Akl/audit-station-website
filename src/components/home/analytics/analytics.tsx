export const AnalyticsStats: React.FC = () => {
  return (
    <div className="bg-white shadow-[#22B9DD] p-6 rounded-lg shadow-md mt-10 mx-auto">
      <div className="flex flex-col sm:flex-row items-center  justify-around md:divide-x  divide-[#22B9DD] text-center">
        {/* Stat 1 */}
        <div className="px-4 py-2">
          <h3 className="text-2xl font-bold text-gray-800">1st</h3>
          <p className="text-sm text-gray-500">In the world</p>
        </div>

        {/* Stat 2 */}
        <div className="px-4 py-2 ">
          <h3 className="text-2xl font-bold text-gray-800">220</h3>
          <p className="text-sm text-gray-500">Companies</p>
        </div>
        {/* Stat 3 */}
        <div className="px-4 py-2">
          <h3 className="text-2xl font-bold text-gray-800">430</h3>
          <p className="text-sm text-gray-500">Accountants</p>
        </div>

        {/* Stat 4 */}
        <div className="px-4 py-2">
          <h3 className="text-2xl font-bold text-gray-800">6+ yrs</h3>
          <p className="text-sm text-gray-500">Experience</p>
        </div>

        {/* Stat 5 */}
        <div className="px-4 py-2">
          <h3 className="text-2xl font-bold text-gray-800">200+</h3>
          <p className="text-sm text-gray-500">Customers</p>
        </div>
      </div>
    </div>
  );
};
