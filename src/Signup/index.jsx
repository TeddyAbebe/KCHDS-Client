import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { registerMemberThunk } from "./slice"; // Replace with your actual import
import "react-toastify/dist/ReactToastify.css"; // Ensure you have the CSS for react-toastify
import { CgSpinner } from "react-icons/cg"; // Error occurs here

const DiasporaSubCategories = [
  "DownTown",
  "MidTown",
  "SubUrban",
  "SingleFamily",
  "Commercial",
];
const singleFamilySubCategories = ["Luxury", "Medium", "Fair"];

const singleFamilySubSubCategories = ["Luxury", "Medium", "Fair"];

const commercialSubCategories = [
  "ApartmentBureaus",
  "CondominiumMall",
  "MixedUseBuildings",
  "RecreationalCenters",
];

const commercialSubSubCategories = [
  "ApartmentBureaus",
  "CondominiumMall",
  "MixedUseBuildings",
  "RecreationalCenters",
];

const categories = [
  "Diaspora",
  "SingleFamily",
  "DownTown",
  "MidTown",
  "SubUrban",
  "Commercial",
];

const housingLocations = [
  "Addis Ababa",
  "Adama",
  "Gondar",
  "Diredawa",
  "Aksum",
  "Jijiga",
  "Bishoftu",
  "Shashemne",
  "Dese",
  "Asosa",
  "Kombolcha",
  "Debere Markos",
  "Gambela",
  "Dila",
  "Debre Birhan",
  "Ambo",
  "Adigrat",
  "Sodo",
  "Waliso",
  "Asela",
  "Mekelle",
  "Bahirdar",
  "Hawassa",
  "Harar",
  "Arbaminch",
  "Moyale",
  "Mojo",
  "Shire",
  "Lalibela",
  "Zeway",
  "Jimma",
];

const AllHousingLocations = [...housingLocations];

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [filteredHousingLocations, setFilteredHousingLocations] =
    useState(housingLocations);
  const [isDiaspora, setIsDiaspora] = useState(false);
  const [isSingleFamily, setIsSingleFamily] = useState(false);
  const [isCommercial, setIsCommercial] = useState(false);
  const [filteredSubSubCategories, setFilteredSubSubCategories] = useState([]);
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "category") {
      if (["DownTown", "MidTown", "SubUrban"].includes(value)) {
        setFilteredHousingLocations(housingLocations);
      } else if (value === "SingleFamily") {
        setFilteredHousingLocations(AllHousingLocations);
      } else if (value === "Commercial") {
        setFilteredHousingLocations(AllHousingLocations);
        setFilteredSubCategories(commercialSubCategories);
      } else {
        setFilteredHousingLocations([]);
      }

      setIsDiaspora(value === "Diaspora");
      setIsSingleFamily(value === "SingleFamily");
      setIsCommercial(value === "Commercial");

      // Clear sub-sub categories
      setFilteredSubSubCategories([]);
    }

    if (name === "subCategory") {
      if (value === "SingleFamily") {
        setFilteredSubSubCategories(singleFamilySubSubCategories);

        setFilteredHousingLocations(AllHousingLocations);
      } else if (["DownTown", "MidTown", "SubUrban"].includes(value)) {
        setFilteredSubSubCategories([]);

        setFilteredHousingLocations(housingLocations);
      } else if (value === "Commercial") {
        setFilteredSubSubCategories(commercialSubSubCategories);

        setFilteredHousingLocations(AllHousingLocations);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(registerMemberThunk(formData));
      toast.success("Member registration successful!");
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("Member registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar position="top-center" />
      <div className="sm:w-[70%] h-screen flex items-center mx-auto justify-center">
        <form
          className="w-full px-5 pb-5 border border-gray-300 rounded-md mt-56 sm:mt-20 flex flex-col sm:gap-10 mb-20"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-between sm:gap-5">
            <h2 className="text-lg font-bold sm:mb-4 mb-3 text-center">
              Registration as a Member
            </h2>

            <div className="flex flex-wrap justify-between w-full">
              <div className="sm:mb-4 mb-3 w-full sm:w-[40%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>

              <div className="sm:mb-4 mb-3 w-full sm:w-[40%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>

              <div className="sm:mb-4 mb-3 w-full sm:w-[40%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>

              <div className="sm:mb-4 mb-3 w-full sm:w-[40%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>

              <div className="sm:mb-4 mb-3 w-full sm:w-[40%]">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4 w-full">
              <div className="sm:mb-4 mb-3 w-36 sm:w-40">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Select
                  </option>

                  {categories?.map((category) => (
                    <option key={category} value={category}>
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:mb-4 mb-3 w-36 sm:w-40">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sub Category
                </label>
                <select
                  name="subCategory"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  disabled={!isDiaspora && !isSingleFamily && !isCommercial}
                >
                  <option value="" disabled selected>
                    {isDiaspora || isSingleFamily || isCommercial
                      ? "Select"
                      : "No Sub Category"}
                  </option>
                  {isDiaspora &&
                    DiasporaSubCategories?.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory.replace(/([A-Z])/g, " $1").trim()}
                      </option>
                    ))}

                  {isSingleFamily &&
                    singleFamilySubCategories?.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}

                  {isCommercial &&
                    filteredSubCategories?.map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory.replace(/([A-Z])/g, " $1").trim()}
                      </option>
                    ))}
                </select>
              </div>

              {filteredSubSubCategories.length > 0 && (
                <div className="sm:mb-4 mb-3 w-36 sm:w-40">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Sub-Sub Category
                  </label>
                  <select
                    name="subSubCategory"
                    className="shadow border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>

                    {filteredSubSubCategories?.map((subSubCategory) => (
                      <option key={subSubCategory} value={subSubCategory}>
                        {subSubCategory.replace(/([A-Z])/g, " $1").trim()}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="sm:mb-4 mb-3 w-36 sm:w-40">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Housing Location
                </label>
                <select
                  name="housingLocation"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    {filteredHousingLocations?.length === 0
                      ? "No Location"
                      : "Select Location"}
                  </option>

                  {filteredHousingLocations?.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-950 hover:bg-[#D7A022] text-white font-bold w-1/3 mx-auto py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? (
              <CgSpinner size={28} className="animate-spin " />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
