import React from "react";

function LocationPanel({ setOpenModal, setVehicleModal }) {
  const locations = [
    {
      id: 1,
      name: "Sabarmati Ashram",
      address: "Ashram Road, Ahmedabad, Gujarat",
    },
    { id: 2, name: "Kankaria Lake", address: "Maninagar, Ahmedabad, Gujarat" },
    {
      id: 3,
      name: "Sardar Vallabhbhai Patel National Memorial",
      address: "Shahibaug, Ahmedabad, Gujarat",
    },
    { id: 4, name: "Law Garden", address: "Ellisbridge, Ahmedabad, Gujarat" },
    {
      id: 5,
      name: "Adalaj Stepwell",
      address: "Adalaj, Gandhinagar-Ahmedabad Highway, Gujarat",
    },
  ];
  return (
    <>
      <h3 className="text-lg font-semibold mb-2">Search Locations </h3>
      <ul className="space-y-2 overflow-y-auto">
        {locations.map((location) => (
          <li
            onClick={() => {
              setVehicleModal(true);
              setOpenModal(false);
            }}
            key={location.id}
            className="px-4 py-2 bg-white hover:bg-[#eee] cursor-pointer"
          >
            <i className="ri-map-pin-fill mr-3 shadow-lg"></i>
            {location.name}, {location.address}
          </li>
        ))}
      </ul>
    </>
  );
}

export default LocationPanel;
