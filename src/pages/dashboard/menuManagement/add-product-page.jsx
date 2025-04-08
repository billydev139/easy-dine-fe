"use client";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
//import { addProduct, updateProductStatus } from '../features/product/productSlice';
import { createNewMenu } from "../../../store/menuSlice/menuSlice";
import Swal from "sweetalert2";
//import { useToast } from '@/hooks/use-toast';
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  FileImage,
  Plus,
} from "lucide-react";
import DashboardLayout from "../../../layouts/dashboardLayout";

export default function AddProductPage() {
  const dispatch = useDispatch();
  // State for form fields
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [collection, setCollection] = useState("");
  const [category, setCategory] = useState("");
  const [articleNumber, setArticleNumber] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [availableDate, setAvailableDate] = useState("");
  const [discount, setDiscount] = useState(true);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [options, setOptions] = useState([]);
  const [settings, setSettings] = useState({
    monthlyProductUpdates1: false,
    monthlyProductUpdates2: false,
    optionaleAuswahlPakete: false,
    altersnachweis: false,
  });

  // State for new ingredient/option
  const [newIngredient, setNewIngredient] = useState("");
  const [newOption, setNewOption] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // State for form validation
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for scrolling
  const formRef = useRef(null);

  // ✅ Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors({ image: "Only image files are allowed!" });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ image: "Image size should be less than 5MB" });
        return;
      }

      setImageFile(file);
      setErrors((prev) => ({ ...prev, image: null }));

      const reader = new FileReader();
      reader.onload = (e) => setProductImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle tag removal
  const removeTag = (id, type) => {
    if (type === "ingredient") {
      setIngredients(ingredients.filter((item) => item.id !== id));
    } else {
      setOptions(options.filter((item) => item.id !== id));
    }
  };

  // Add new ingredient
  const addIngredient = () => {
    if (newIngredient.trim()) {
      const newId =
        ingredients.length > 0
          ? Math.max(...ingredients.map((i) => i.id)) + 1
          : 1;
      setIngredients([
        ...ingredients,
        { id: newId, name: newIngredient, color: selectedColor },
      ]);
      setNewIngredient("");
    }
  };

  // Add new option
  const addOption = () => {
    if (newOption.trim()) {
      const newId =
        options.length > 0 ? Math.max(...options.map((i) => i.id)) + 1 : 1;
      setOptions([
        ...options,
        { id: newId, name: newOption, color: selectedColor },
      ]);
      setNewOption("");
    }
  };

  const [prepTime, setPrepTime] = useState("");
  const [orderDeadline, setOrderDeadline] = useState("");
  const [trend, setTrend] = useState("");
  const [originCountry, setOriginCountry] = useState("");

  // State for toggles
  const [offers, setOffers] = useState(true);
  const [optionalSelection, setOptionalSelection] = useState(true);

  // State for packages and allergic ingredients
  const [packages, setPackages] = useState([]);
  const [allergicIngredients, setAllergicIngredients] = useState([]);

  // State for new package and allergic ingredient
  const [newPackage, setNewPackage] = useState("");
  const [newAllergicIngredient, setNewAllergicIngredient] = useState("");

  // Function to add a package
  const addPackage = () => {
    if (newPackage.trim()) {
      setPackages([...packages, newPackage]);
      setNewPackage("");
    }
  };

  // Function to add an allergic ingredient
  const addAllergicIngredient = () => {
    if (newAllergicIngredient.trim()) {
      setAllergicIngredients([...allergicIngredients, newAllergicIngredient]);
      setNewAllergicIngredient("");
    }
  };

  // Function to remove a package
  const removePackage = (index) => {
    setPackages(packages.filter((_, i) => i !== index));
  };

  // Function to remove an allergic ingredient
  const removeAllergicIngredient = (index) => {
    setAllergicIngredients(allergicIngredients.filter((_, i) => i !== index));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!productName.trim()) newErrors.productName = "Product name is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!category.trim()) newErrors.category = "Category is required";
    if (!price.trim()) newErrors.price = "Price is required";
    if (!imageFile) newErrors.image = "Image is required";
    if (!articleNumber.trim())
      newErrors.articleNumber = "Item number is required";

    // Validate price format
    if (price && !price.match(/^\$?\d+(\.\d{1,2})?$/)) {
      newErrors.price = "Price must be in format $XX.XX";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Prepare payload with FormData
  const preparePayload = () => {
    // Create FormData object
    const formData = new FormData();

    // Add restaurant ID
    formData.append("restaurantId", "67e3e27803c48233005233b6");

    // Create menuItems data object
    const menuItem = {
      productName,
      description,
      collection,
      category,
      articleNumber,
      isAvailable,
      availableDate,
      discount,
      discountPercentage,
      quantity,
      price,
      ingredients,
      options,
      settings,
      prepTime,
      orderDeadline,
      trend,
      originCountry,
      offers,
      optionalSelection,
      packages,
      allergicIngredients,
    };

    // Add menuItems as JSON string to FormData
    formData.append("menuItems", JSON.stringify([menuItem]));

    // Add image file if exists (important: use 'images' as the field name based on your backend)
    if (imageFile) {
      formData.append("images", imageFile);
    }

    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      const payload = preparePayload();

      try {
        const response = await dispatch(createNewMenu(payload)).unwrap();

        if (response && response.status === 201) {
          Swal.fire({
            title: "Success!",
            text: "Product has been saved successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });

          setTimeout(() => {}, 3000);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to save product.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error saving product:", error);

        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);

      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <DashboardLayout>
      <div className="p-4 my-4 rounded-lg bg-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="text-sm font-medium mb-4 md:mb-0">
            Menu Customization &gt; Add New Product
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto"
              onClick={() => {
                if (confirm("Are you sure you want to delete this product?")) {
                  alert("Product deleted");
                }
              }}
            >
              Delete Product
            </button>
            <button
              type="button"
              className="bg-green-400 text-white px-4 py-2 rounded w-full md:w-auto"
            >
              Active
            </button>
          </div>
        </div>
        {/* Main Content */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Product Image */}
              <div className="bg-white p-6 rounded-xl border border-[#C1C1C1]">
                <h2 className="font-medium mb-6 flex items-center">
                  Product Image <span className="ml-1 text-gray-400">*</span>
                </h2>
                <div className="mb-6">
                  <img
                    src={productImage || "/placeholder.svg"}
                    alt="Product"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex gap-3">
                  <label className="bg-[#0F0A33] hover:shadow-lg hover:shadow-blue-700 text-white font-bold text-xs px-10 py-2 rounded-xl cursor-pointer">
                    EDIT
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                  <button
                    type="button"
                    className="bg-[#0075FF] hover:bg-[#0055FF] text-white font-bold text-xs px-10 py-2 rounded-xl"
                    onClick={() => {
                      setProductImage("/placeholder.svg?height=300&width=400");
                      setImageFile(null); // Clear the file as well
                    }}
                  >
                    REMOVE
                  </button>
                </div>
                {errors.image && (
                  <p className="text-red-500 text-xs mt-2">{errors.image}</p>
                )}
              </div>
              {/* Ingredients */}
              <div className="border border-[#C1C1C1] rounded-xl px-6 py-10">
                <div className="bg-white mb-8">
                  <h2 className="text-lg font-bold text-[#131313] mb-3">
                    Ingredients
                  </h2>
                  <p className="text-sm font-bold text-[#131313] mb-3">
                    Ingredients
                  </p>
                  <div className="bg-[#EEF5FF] border border-[#9EC3FF] p-3 rounded-xl mb-4">
                    {ingredients.map((tag) => (
                      <span
                        key={tag.id}
                        className={`inline-flex items-center m-1 px-3 py-1 rounded-full text-xs text-white ${
                          tag.color === "red"
                            ? "bg-red-500"
                            : tag.color === "purple"
                            ? "bg-purple-500"
                            : "bg-[#0075FF]"
                        }`}
                      >
                        <span className="mr-1">•</span> {tag.name}
                        <button
                          type="button"
                          className="ml-1"
                          onClick={() => removeTag(tag.id, "ingredient")}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  {/* Add new ingredient */}
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      className="flex-1 p-2 border border-[#9EC3FF] rounded-xl outline-none bg-blue-50"
                      value={newIngredient}
                      onChange={(e) => setNewIngredient(e.target.value)}
                      placeholder="Add new ingredient"
                    />
                    <select
                      className="p-2 border border-[#9EC3FF] rounded-xl outline-none bg-blue-50"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    >
                      <option value="red">Red</option>
                      <option value="purple">Purple</option>
                      <option value="blue">Blue</option>
                    </select>
                    <button
                      type="button"
                      className="bg-[#0075FF] text-white p-2 rounded"
                      onClick={addIngredient}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
                {/* Options */}
                <div className="bg-white mb-8">
                  <h2 className="font-bold text-sm text-[#131313] mb-3">
                    Options
                  </h2>
                  <div className="bg-[#EEF5FF] border border-[#9EC3FF] p-3 rounded-xl mb-4">
                    {options.map((tag) => (
                      <span
                        key={tag.id}
                        className={`inline-flex items-center m-1 px-3 py-1 rounded-full text-xs text-white ${
                          tag.color === "red"
                            ? "bg-red-500"
                            : tag.color === "purple"
                            ? "bg-purple-500"
                            : "bg-[#0075FF]"
                        }`}
                      >
                        <span className="mr-1">•</span> {tag.name}
                        <button
                          type="button"
                          className="ml-1"
                          onClick={() => removeTag(tag.id, "option")}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  {/* Add new option */}
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      className="flex-1 p-2 border border-[#9EC3FF] rounded-xl outline-none bg-blue-50"
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                      placeholder="Add new option"
                    />
                    <select
                      className="p-2 border border-[#9EC3FF] rounded-xl outline-none bg-blue-50"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    >
                      <option value="red">Red</option>
                      <option value="purple">Purple</option>
                      <option value="blue">Blue</option>
                    </select>
                    <button
                      type="button"
                      className="bg-[#0075FF] text-white p-2 rounded"
                      onClick={addOption}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
                {/* Translate */}
                <div className="bg-white mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#131313] font-medium mb-2">
                        Translate
                      </p>
                      <button
                        type="button"
                        className="bg-[#0075FF] hover:bg-[#0055FF] text-white w-full py-3 rounded-2xl"
                        onClick={() =>
                          alert("Translation feature will be available soon!")
                        }
                      >
                        Translate
                      </button>
                    </div>
                    <div>
                      <p className="text-sm text-[#131313] font-medium mb-2">
                        Art
                      </p>
                      <select className="w-full p-2 border border-[#9EC3FF] rounded-xl outline-none bg-[#EEF5FF]">
                        <option>Art</option>
                        <option>Painting</option>
                        <option>Sculpture</option>
                        <option>Digital</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4">
              {/* Product Information */}
              <div className="bg-white p-4 rounded-lg border border-[#C1C1C1]">
                <h2 className="font-medium mb-4">Product Information</h2>
                <div className="mb-4">
                  <label className="block text-sm mb-1">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-2 outline-none rounded-xl ${
                      errors.productName
                        ? "border-red-500"
                        : "border border-[#9EC3FF]"
                    } rounded bg-blue-50`}
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="eg. Hookah"
                  />
                  {errors.productName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.productName}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className="mb-2 bg-gray-100 rounded p-1 flex items-center">
                    <select className="bg-transparent text-sm p-1 mr-2">
                      <option>Normal</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                      <option>Heading 3</option>
                    </select>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() => setDescription(description + "<b></b>")}
                    >
                      <Bold size={16} />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() => setDescription(description + "<i></i>")}
                    >
                      <Italic size={16} />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() => setDescription(description + "<u></u>")}
                    >
                      <Underline size={16} />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() =>
                        setDescription(description + "<ul><li></li></ul>")
                      }
                    >
                      <List size={16} />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() =>
                        setDescription(description + "<ol><li></li></ol>")
                      }
                    >
                      <ListOrdered size={16} />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() =>
                        setDescription(description + '<a href=""></a>')
                      }
                    >
                      <Link size={16} />
                    </button>
                    <button
                      type="button"
                      className="p-1 hover:bg-gray-200 rounded"
                      onClick={() =>
                        setDescription(
                          description + '<img src="/placeholder.svg" alt="" />'
                        )
                      }
                    >
                      <FileImage size={16} />
                    </button>
                  </div>
                  <textarea
                    className={`w-full p-2 outline-none rounded-xl ${
                      errors.description
                        ? "border-red-500"
                        : "border border-[#9EC3FF]"
                    } rounded bg-blue-50 min-h-[100px]`}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1">Collection</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-[#9EC3FF] rounded-xl outline-none bg-blue-50"
                    value={collection}
                    onChange={(e) => setCollection(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1">Category</label>
                  <div className="relative">
                    <select
                      className="w-full p-2 border border-[#9EC3FF] rounded-xl outline-none bg-blue-50 appearance-none"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    {errors.category && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.category}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1">
                    Item Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className={`w-full p-2 outline-none rounded-xl ${
                      errors.articleNumber
                        ? "border-red-500"
                        : "border border-[#9EC3FF]"
                    } rounded bg-blue-50`}
                    value={articleNumber}
                    onChange={(e) => setArticleNumber(e.target.value)}
                  />
                  {errors.articleNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.articleNumber}
                    </p>
                  )}
                </div>
                <div className="mb-4 flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isAvailable}
                        onChange={() => setIsAvailable(!isAvailable)}
                      />
                      <div
                        className={`block w-10 h-6 rounded-full ${
                          isAvailable ? "bg-green-400" : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          isAvailable ? "transform translate-x-4" : ""
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 text-sm">Not available</div>
                  </label>
                  <input
                    type="text"
                    className="ml-auto p-2 border border-gray-300 rounded bg-blue-50 w-40"
                    value={availableDate}
                    onChange={(e) => setAvailableDate(e.target.value)}
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={discount}
                        onChange={() => setDiscount(!discount)}
                      />
                      <div
                        className={`block w-10 h-6 rounded-full ${
                          discount ? "bg-green-400" : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                          discount ? "transform translate-x-4" : ""
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 text-sm">Discount in %</div>
                  </label>
                  <input
                    type="text"
                    className="ml-auto p-2 border border-gray-300 rounded bg-blue-50 w-40"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)}
                    disabled={!discount}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1">Quantity</label>
                  <div className="relative">
                    <select
                      className="w-full p-2 border border-gray-300 rounded bg-blue-50 appearance-none"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing */}
              <div className="flex gap-x-2.5">
                <div className="bg-white w-full p-4 rounded-lg border border-[#C1C1C1]">
                  <h2 className="font-medium mb-4">Pricing</h2>
                  <div className="mb-4">
                    <label className="block text-sm mb-1">
                      Price <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      className={`w-full outline-none p-2 border ${
                        errors.price ? "border-red-500" : "border-gray-300"
                      } rounded bg-blue-50`}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="eg. $99.99"
                    />
                    {errors.price && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.price}
                      </p>
                    )}
                  </div>
                </div>
                {/* Settings */}
                <div className="bg-white p-4 w-full rounded-lg border border-[#C1C1C1]">
                  <h2 className="font-medium mb-4">Settings</h2>
                  <div className="mb-3 flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={settings.monthlyProductUpdates1}
                          onChange={() =>
                            setSettings({
                              ...settings,
                              monthlyProductUpdates1:
                                !settings.monthlyProductUpdates1,
                            })
                          }
                        />
                        <div
                          className={`block w-10 h-6 rounded-full ${
                            settings.monthlyProductUpdates1
                              ? "bg-green-400"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                            settings.monthlyProductUpdates1
                              ? "transform translate-x-4"
                              : ""
                          }`}
                        ></div>
                      </div>
                      <div className="ml-3 text-sm">
                        Monthly product updates
                      </div>
                    </label>
                  </div>
                  <div className="mb-3 flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={settings.monthlyProductUpdates2}
                          onChange={() =>
                            setSettings({
                              ...settings,
                              monthlyProductUpdates2:
                                !settings.monthlyProductUpdates2,
                            })
                          }
                        />
                        <div
                          className={`block w-10 h-6 rounded-full ${
                            settings.monthlyProductUpdates2
                              ? "bg-green-400"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                            settings.monthlyProductUpdates2
                              ? "transform translate-x-4"
                              : ""
                          }`}
                        ></div>
                      </div>
                      <div className="ml-3 text-sm">
                        Monthly product updates
                      </div>
                    </label>
                  </div>
                  <div className="mb-3 flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={settings.optionaleAuswahlPakete}
                          onChange={() =>
                            setSettings({
                              ...settings,
                              optionaleAuswahlPakete:
                                !settings.optionaleAuswahlPakete,
                            })
                          }
                        />
                        <div
                          className={`block w-10 h-6 rounded-full ${
                            settings.optionaleAuswahlPakete
                              ? "bg-green-400"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                            settings.optionaleAuswahlPakete
                              ? "transform translate-x-4"
                              : ""
                          }`}
                        ></div>
                      </div>
                      <div className="ml-3 text-sm">
                        Optional selection packages
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={settings.altersnachweis}
                          onChange={() =>
                            setSettings({
                              ...settings,
                              altersnachweis: !settings.altersnachweis,
                            })
                          }
                        />
                        <div
                          className={`block w-10 h-6 rounded-full ${
                            settings.altersnachweis
                              ? "bg-green-400"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <div
                          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                            settings.altersnachweis
                              ? "transform translate-x-4"
                              : ""
                          }`}
                        ></div>
                      </div>
                      <div className="ml-3 text-sm">Proof of age 18?</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Information */}
          <div className="w-full bg-white py-7">
            <div className="w-full bg-white rounded-xl border border-[#C1C1C1] p-5">
              <h1 className="text-xl font-bold mb-4">Product Information</h1>
              {/* Input fields section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preparation time in minutes
                  </label>
                  <input
                    type="text"
                    value={prepTime}
                    placeholder="eg. 10.00-15.00 min"
                    onChange={(e) => setPrepTime(e.target.value)}
                    className="w-full px-3 py-2 bg-blue-50 rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Deadline
                  </label>
                  <input
                    type="text"
                    value={orderDeadline}
                    placeholder="eg. 22:45"
                    onChange={(e) => setOrderDeadline(e.target.value)}
                    className="w-full px-3 py-2 bg-blue-50 rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trend
                  </label>
                  <input
                    type="text"
                    value={trend}
                    placeholder="eg. Hott"
                    onChange={(e) => setTrend(e.target.value)}
                    className="w-full px-3 py-2 bg-blue-50 rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    value={originCountry}
                    onChange={(e) => setOriginCountry(e.target.value)}
                    placeholder="eg. CH"
                    className="w-full px-3 py-2 bg-blue-50 rounded-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              {/* Toggle switches */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center">
                  <div
                    className={`relative inline-block w-12 h-6 mr-2 ${
                      offers ? "bg-green-400" : "bg-gray-200"
                    } rounded-full transition-colors duration-200 ease-in-out`}
                  >
                    <input
                      type="checkbox"
                      className="opacity-0 w-0 h-0"
                      checked={offers}
                      onChange={() => setOffers(!offers)}
                    />
                    <span
                      className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                        offers ? "transform translate-x-6" : ""
                      }`}
                    ></span>
                  </div>
                  <span className="text-sm text-gray-700">Offers</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={`relative inline-block w-12 h-6 mr-2 ${
                      optionalSelection ? "bg-green-400" : "bg-gray-200"
                    } rounded-full transition-colors duration-200 ease-in-out`}
                  >
                    <input
                      type="checkbox"
                      className="opacity-0 w-0 h-0"
                      checked={optionalSelection}
                      onChange={() => setOptionalSelection(!optionalSelection)}
                    />
                    <span
                      className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                        optionalSelection ? "transform translate-x-6" : ""
                      }`}
                    ></span>
                  </div>
                  <span className="text-sm text-gray-700">
                    Optional Selection
                  </span>
                </div>
              </div>
              {/* Packages section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Packages
                </label>
                <div className="bg-[#EEF5FF] rounded-xl border border-[#9EC3FF] p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {packages.map((pkg, index) => (
                      <div
                        key={`package-${index}`}
                        className="flex items-center bg-blue-500 text-white rounded-full px-3 py-1"
                      >
                        <span className="mr-1">🍹</span>
                        <span>{pkg}</span>
                        <button
                          type="button"
                          onClick={() => removePackage(index)}
                          className="ml-2 text-white focus:outline-none"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* Add new package */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 p-2 border border-blue-300 rounded bg-white"
                      value={newPackage}
                      onChange={(e) => setNewPackage(e.target.value)}
                      placeholder="Add new package"
                    />
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={addPackage}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* Allergic Ingredients section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Allergic Ingredients
                </label>
                <div className="bg-[#EEF5FF] rounded-xl border border-[#9EC3FF] p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {allergicIngredients.map((ingredient, index) => {
                      // Different colors for different ingredients
                      const bgColor =
                        ingredient === "Apple"
                          ? "bg-red-500"
                          : ingredient === "Grape"
                          ? "bg-purple-500"
                          : "bg-blue-500";
                      // Different icons for different ingredients
                      const icon =
                        ingredient === "Apple"
                          ? "🍎"
                          : ingredient === "Grape"
                          ? "🍇"
                          : "🍹";
                      return (
                        <div
                          key={`ingredient-${index}`}
                          className={`flex items-center ${bgColor} text-white rounded-full px-3 py-1`}
                        >
                          <span className="mr-1">{icon}</span>
                          <span>{ingredient}</span>
                          <button
                            type="button"
                            onClick={() => removeAllergicIngredient(index)}
                            className="ml-2 text-white focus:outline-none"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {/* Add new allergic ingredient */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 p-2 border border-blue-300 rounded bg-white"
                      value={newAllergicIngredient}
                      onChange={(e) => setNewAllergicIngredient(e.target.value)}
                      placeholder="Add allergic ingredient"
                    />
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={addAllergicIngredient}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300"
                  style={{ backgroundColor: "#0a0a2e" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* Add CSS for animations */}
        <style>{`
          @keyframes fadeInOut {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          .animate-fade-in-out {
            animation: fadeInOut 3s ease-in-out;
          }
        `}</style>
      </div>
    </DashboardLayout>
  );
}
