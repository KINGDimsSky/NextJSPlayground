export default function Loading () {
    return (
        <div className="grid grid-cols-4 gap-2 mt-5 items-center">
            {Array.from({ length : 8}).map((_, index) => (
              <div key={index} className="w-full h-96 max-w-sm bg-gray-400 border border-gray-200 rounded-lg shadow-sm  my-5">
              <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"></h5>
                    </a>
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                    </div>
                </div>
          </div>
            ))}    
        </div>
    )
}