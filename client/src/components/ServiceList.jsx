

export function ServiceList() {
  return (
    <div className="flex justify-center gap-4 md:gap-20 py-10 px-4 md:px-2">
        <div className="">
          <h3 className='font-semibold text-lg md:text-xl pb-5'>Commercial Services:</h3>
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor"  d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Specialized Packaging & Distribution</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Warehouse Racking</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Crating</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Warehouse Projectors</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Welding</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>Painting</span>
              </li>
          </ul>

        </div>
        <div className="">
        <h3 className='font-semibold text-lg md:text-xl pb-5'>Residential Services:</h3>
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Full Interior Remodeling</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span>Exterior Fencing</span>
                </li>
            </ul>
        </div>
      </div>
  )
}