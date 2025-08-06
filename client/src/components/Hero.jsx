import React, { useState } from 'react';
import { assets, cityList } from '../assets/assets';

const Hero = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ pickupLocation, pickupDate, returnDate });
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4 py-12">
            {/* Content container */}
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-light text-neutral-800 mb-3">
                        Premium <span className="font-medium">Car Rentals</span>
                    </h1>
                    <p className="text-neutral-600 text-sm md:text-base">
                        Experience luxury on your terms
                    </p>
                </div>

                {/* Booking form - Clean card style */}
                <form 
                    onSubmit={handleSubmit}
                    className="w-full bg-white rounded-lg shadow-sm p-6 mb-10 border border-neutral-200"
                >
                    <div className="flex flex-col md:flex-row items-end gap-4">
                        {/* Pickup Location */}
                        <div className="flex-1 w-full">
                            <label htmlFor="pickup-location" className="block text-xs font-normal text-neutral-700 mb-2 text-left">
                                Pickup Location
                            </label>
                            <select
                                id="pickup-location"
                                required
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                className="w-full p-3 text-sm rounded border border-neutral-300 text-neutral-800 focus:outline-none focus:border-neutral-500 appearance-none bg-white"
                            >
                                <option value="" className="text-neutral-400">Select city</option>
                                {cityList.map((city) => (
                                    <option key={city} value={city} className="text-neutral-800">{city}</option>
                                ))}
                            </select>
                        </div>

                        {/* Pickup Date */}
                        <div className="flex-1 w-full">
                            <label htmlFor="pickup-date" className="block text-xs font-normal text-neutral-700 mb-2 text-left">
                                Pickup Date
                            </label>
                            <input
                                type="date"
                                id="pickup-date"
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                                min={today}
                                className="w-full p-3 text-sm rounded border border-neutral-300 text-neutral-800 focus:outline-none focus:border-neutral-500"
                                required
                            />
                        </div>

                        {/* Return Date */}
                        <div className="flex-1 w-full">
                            <label htmlFor="return-date" className="block text-xs font-normal text-neutral-700 mb-2 text-left">
                                Return Date
                            </label>
                            <input
                                type="date"
                                id="return-date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                min={pickupDate || today}
                                className="w-full p-3 text-sm rounded border border-neutral-300 text-neutral-800 focus:outline-none focus:border-neutral-500"
                                required
                            />
                        </div>

                        {/* Search Button */}
                        <div className="w-full md:w-auto">
                            <button
                                type="submit"
                                className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-normal rounded transition-colors"
                            >
                                <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-2 filter brightness-0 invert" />
                                Find Vehicles
                            </button>
                        </div>
                    </div>
                </form>

                {/* Car image */}
                <div className="relative">
                    <img 
                        src={assets.main_car}
                        alt="Luxury rental car"
                        className="w-full max-h-80 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;