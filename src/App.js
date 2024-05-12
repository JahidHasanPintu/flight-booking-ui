import React, { useState, useEffect } from 'react';
import flightData from './Assets/data/LHR_CDG_ADT1_TYPE_1.json';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DataTable from './Components/DataTable/DataTable';
import FlightSearch from './Components/FlightSearch/FlightSearch';

function App() {
  const [flightOffers, setFlightOffers] = useState([]);

  const getFlightOffers = () => {
    setFlightOffers(flightData.flightOffer);
  };
  useEffect(() => {
    getFlightOffers();
  }, []);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="">
      <Navbar />
      <FlightSearch />
      <div>
        <h2 className='text-xl font-bold text-gray-700 m-2'>Master Price</h2>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div className="bg-white rounded shadow-sm p-5 my-5">
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value="Driver License"
                    name="list-radio"
                    className="hidden-input" // Hide the default radio button
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${selectedOption === 'Driver License' ? 'selected' : ''
                      }`}
                  >
                    Round Trip
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value="Driver License"
                    name="list-radio"
                    className="hidden-input" // Hide the default radio button
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${selectedOption === 'Driver License' ? 'selected' : ''
                      }`}
                  >
                    One Way
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value="Driver License"
                    name="list-radio"
                    className="hidden-input" // Hide the default radio button
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    className={`w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${selectedOption === 'Driver License' ? 'selected' : ''
                      }`}
                  >
                    Multi City
                  </label>
                </div>
              </li>
            </ul>
            <div className='flex'>
              <select id="passengers" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[10rem] mr-2">
                <option selected>Adult</option>
                <option value="child">Child</option>
                <option value="infant">Infant</option>
              </select>

              <div class="relative flex items-center max-w-[10rem]">
                <button type="button" id="decrement-button" data-input-counter-decrement="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                  </svg>
                </button>
                <input type="text" id="bedrooms-input" data-input-counter data-input-counter-min="1" data-input-counter-max="5" aria-describedby="helper-text-explanation" class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value="3" required />
                <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                  <span>Passenger</span>
                </div>
                <button type="button" id="increment-button" data-input-counter-increment="bedrooms-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-5">
            <div>
              <input type="text" id="from" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From" required />
            </div>
            <div>
              <input type="text" id="destination" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required />
            </div>
            <div>
              <input type="date" id="departure" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Departure" required />
            </div>
            <div>
              <input type="date" id="return" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Return" />
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>

          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Extra options</label>
            </div>

            <div class="flex mb-6">
              <div class="flex items-center me-4">
                <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Environment</label>
              </div>
              <div class="flex items-center me-4">
                <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dummy</label>
              </div>
              <div class="flex items-center me-4">
                <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PDT</label>
              </div>
            </div>

          </div>
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

        </form>

      </div>
      <DataTable flights={flightOffers} />

    </div>
  );
}

export default App;
