import { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../../components/spinner';
import { toast } from 'react-toastify';

const MenuEdit = (props) => {

  // states
  const [ allMenu, setAllMenu ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  // useEffect
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const config = {
        header: {
          "Content-Type": "application/json"
        }
      }
      const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/menu/allmenu`, config);
      if(request.data.message === 'success') {
        setAllMenu(request.data.menu);
        setLoading(false)
      } else {
        toast.error('Found error getting data');
        setLoading(false);
      }
      return request
    }
    fetchData();
  },[])
  return (
    <main className="flex-1">
      {loading ? <Spinner /> 
      :
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Menu Edit</h1>
        </div>
        <div className="max-w-7xl mx-auto ">
          {/* Replace with your content */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Sub-Category
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            In-Stock
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Price
                          </th>
                          <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {allMenu.map((menu) => (
                          <tr key={menu.id}>
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                              {menu.name}
                            </td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                              {menu.category}
                            </td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{menu.sub_category}</td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{menu.stock_availability}</td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">${menu.price}</td>
                            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit<span className="sr-only">, {menu.id}</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
      }
  </main>
  );
}
export default MenuEdit;