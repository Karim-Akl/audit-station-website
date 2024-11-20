

const CourseTab = ({sectionTitle, currentView, setCurrentView}: any) => {

    const getTabStyles = (sectionName: any) => {
        return sectionName === currentView ? 'bg-[#22B9DD] text-white' : 'bg-[#F5F5F5] text-[##6D6C80]'
      }
    return (
        <button
          className={`rounded-full px-6 py-3 ${getTabStyles(sectionTitle)}`}
          onClick={() => setCurrentView(sectionTitle)}
        >
          {sectionTitle}
        </button>
    )}

    export default CourseTab