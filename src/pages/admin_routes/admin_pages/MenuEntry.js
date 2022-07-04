import { useState, Fragment } from 'react';
import { Switch, Listbox, Transition } from '@headlessui/react';
import axios from 'axios';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const categories = [
  {id: 1, name: 'Appetizer'},
  {id: 2, name: 'A La Carte'},
  {id: 3, name: 'Sushi Bar Entree'},
  {id: 4, name: 'Regular Rolls'},
  {id: 5, name: 'Special Rolls'},
  {id: 6, name: 'Soup & Salad'},
  {id: 7, name: 'Sushi & Sashimi Combo'},
  {id: 8, name: 'Noodles'},
  {id: 9, name: 'Kitchen Entree'},
  {id: 10, name: 'Dinner Box'},
  {id: 11, name: 'Lunch Special'},
  {id: 13, name: 'Party Platter'},
  {id: 14, name: 'Dessert'},
  {id: 15, name: 'Drinks'},
  {id: 16, name: 'Add On'},
]

const subCategories = [
  {id: 1, name: '', category: ''},
  {id: 2, name: 'Cold', category: 'Appetizer'},
  {id: 3, name: 'Hot', category: 'Appetizer'},
  {id: 4, name: 'Salad', category: 'Soup & Salad'},
  {id: 5, name: 'Soup', category: 'Soup & Salad'},
  {id: 6, name: 'Sushi', category: 'A La Carte'},
  {id: 7, name: 'Sashimi', category: 'A La Carte'},
  {id: 8, name: 'Regular Rolls', category: 'Regular Rolls'},
  {id: 9, name: 'Tempura Rolls', category: 'Regular Rolls'},
  {id: 10, name: 'Spicy Rolls', category: 'Regular Rolls'},
  {id: 11, name: 'Vegetable Rolls', category: 'Regular Rolls'},
  {id: 12, name: 'Chef Special Rolls', category: 'Special Rolls'},
  {id: 13, name: 'Special Deluxe Rolls', category: 'Special Rolls'},
  {id: 14, name: 'Deep Fried Rolls', category: 'Special Rolls'},
  {id: 15, name: 'Rolls with Passion', category: 'Special Rolls'},
  {id: 16, name: 'Roll Combos', category: 'Lunch Special'},
  {id: 17, name: 'Sushi Lunch', category: 'Lunch Special'},
  {id: 18, name: 'Lunch Box', category: 'Lunch Special'},
  {id: 19, name: 'Lunch Noodles', category: 'Lunch Special'},
]

const MenuEntry = (props) => {

  // states
  const [ name, setName ] = useState('');
  const [ category, setCategory ] = useState(categories[0]);
  const [ sub_category, setSub_category ] = useState(subCategories[0]);
  const [ description, setDescription ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ description_on, setDescription_on ] = useState('');
  const [ description_in, setDescription_in ] = useState('');
  const [ stock_availabililty, setStock_availability ] = useState(false);
  const [ caption, setCatption ] = useState('');
  const [ buttonLoading, setButtonLoading ] = useState(false);

  // Components
  const ButtonSelector = (Boolean) => {
    if(!Boolean) {
      return <button        
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={submitButtonHandler}
    >
      Submit
    </button>
    } else if (!!Boolean) {
      return <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-md text-sm font-medium text-gray-400 "
      disabled
    >
      Loading...
    </button>
    }
  }

  const clearNumber = (value) => {
    return value.replace(/[^0-9.]/g, '');
  }

  // Handlers
  const inputHandler = (e, name) => {
    if(name === 'name') {
      setName(e.target.value)
    } else if(name === 'category') {
      setCategory(e.target.value)
    } else if(name === 'sub_category') {
      setSub_category(e.target.value)
    } else if(name === 'description') {
      setDescription(e.target.value)
    } else if(name === 'price') {
      setPrice(clearNumber(e.target.value))
    } else if(name === 'caption') {
      setCatption(e.target.value)
    } else if(name === 'description_on') {
      setDescription_on(e.target.value)
    } else if(name === 'description_in') {
      setDescription_in(e.target.value)
    }
  }

  const clearState = () => {
    setName('');
    setCategory(categories[0]);
    setSub_category(subCategories[0]);
    setDescription('');
    setPrice('');
    setDescription_in('');
    setDescription_on('');
    setStock_availability(false);
    setCatption('')
    setButtonLoading(false);
  }

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (!name || !category || !price ) {
      toast.warn('Plese fill out required fields');
      setButtonLoading(false);
      return 
    }

    const config = {
      header: {
        "Content-Type": "application/json",
      }
    }

    let refinedCategory = category.name
    let refinedSubCategory = sub_category.name
    let refinedPrice = Number(price).toFixed(2);

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/menu/register`, {
        name: name,
        caption: caption,
        description: description,
        description_in: description_in,
        description_on: description_on,
        category: refinedCategory,
        sub_category: refinedSubCategory,
        price: refinedPrice,
        stock_availabililty: stock_availabililty,
      }, config)
      console.log(data)
      if(data.message === 'success') {
        toast.success(`${data.menu.name} has been added`);
        clearState()
      } else {
        toast.error('Error has been found registering menu.')
        setButtonLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex-1">
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Menu Entry</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="mt-5 pb-5 border-b mb-6 border-gray-200 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Menu Entry Form</h3>
          <div className="mt-3 sm:mt-0 sm:ml-4">
            {ButtonSelector(buttonLoading)}
          </div>
        </div>

        <form>
          <div className="border border-gray-300 rounded-t-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="name" className="block text-xs font-medium text-gray-900">
              Item Name*
            </label>
            <input
              type="text"
              name="Item Name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter the item name"
              value={name}
              onChange={(e) => {inputHandler(e, 'name')}}
              required
            />
          </div>

          <div className="border border-gray-300 px-3 py-2 shadow-sm ">
            <Listbox value={category} onChange={setCategory}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-xs font-medium text-gray-700">Select Category*</Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="block truncate">{category.name}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {categories.map((item) => (
                          <Listbox.Option
                            key={item.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-8 pr-4'
                              )
                            }
                            value={item}
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                  {item.name}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>


          <div className="border border-gray-300 px-3 py-2 shadow-sm ">
            <Listbox value={subCategories} onChange={setSub_category}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-xs font-medium text-gray-700">select sub category</Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="w-full inline-flex truncate">
                        <span className="truncate">{sub_category.name}</span>
                        <span className="ml-2 truncate text-gray-500">{sub_category.category}</span>
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {subCategories.map((item) => (
                          <Listbox.Option
                            key={item.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9'
                              )
                            }
                            value={item}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex">
                                  <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                    {item.name}
                                  </span>
                                  <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                    {item.category}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>

          <div className="border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="description" className="block text-xs font-medium text-gray-900">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter description"
              value={description}
              onChange={(e) => {inputHandler(e, 'description')}}
            />
          </div>

          <div className="border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="caption" className="block text-xs font-medium text-gray-900">
              Caption
            </label>
            <input
              type="text"
              name="caption"
              id="caption"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter caption"
              value={caption}
              onChange={(e) => {inputHandler(e, 'caption')}}
            />
          </div>

          <div className="border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="description_on" className="block text-xs font-medium text-gray-900">
              Description: on (for Special rolls only)
            </label>
            <input
              type="text"
              name="description_on"
              id="description_on"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter description: on"
              value={description_on}
              onChange={(e) => {inputHandler(e, 'description_on')}}
            />
          </div>

          <div className="border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="description_on" className="block text-xs font-medium text-gray-900">
              Description: in (for Special rolls only)
            </label>
            <input
              type="text"
              name="description_in"
              id="description_in"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Enter description: in"
              value={description_in}
              onChange={(e) => {inputHandler(e, 'description_in')}}
            />
          </div>

          <div className="border border-gray-300 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <Switch.Group as="div" className="flex items-center justify-between">
              <span className="flex-grow flex flex-col">
                <Switch.Label as="span" className="text-xs font-medium text-gray-900" passive>
                  Stock availability
                </Switch.Label>
                <Switch.Description as="span" className="text-sm text-gray-500">
                  Turn off this option will block selling item.
                </Switch.Description>
              </span>
              <Switch
                checked={stock_availabililty}
                onChange={setStock_availability}
                className={classNames(
                  stock_availabililty ? 'bg-indigo-600' : 'bg-gray-200',
                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    stock_availabililty ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                  )}
                />
              </Switch>
            </Switch.Group>
          </div>

          <div className="border border-gray-300 px-3 py-2 rounded-b-md shadow-sm">
            <label htmlFor="price" className="block text-xs font-medium text-gray-900">
              Price*
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full pl-7 pr-12 sm:text-sm border-none"
                placeholder="0.00"
                value={price}
                onChange={(e) => {inputHandler(e, 'price')}}
              />
            </div>
          </div>

        </form>

      </div>
    </div>
  </main>
  );
}
export default MenuEntry;