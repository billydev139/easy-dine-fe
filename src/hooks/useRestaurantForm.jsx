import { useState, useCallback } from 'react';
import { isValidEmail, isValidUrl, isValidPhoneNumber } from '../utils/validation';
import { useDispatch } from 'react-redux';
import { addNewRestaurant } from '../store/restaurant/restaurantSlice';

export const useRestaurantForm = () => {
    const dispatch = useDispatch();
  // Form state
  const [state, setState] = useState({
    restaurantName: 'Sasta Lounge',
    address: '',
    openingHourStart: '00:00',
    openingHourEnd: '00:00',
    workingDayStart: 'Monday',
    workingDayEnd: 'Friday',
    formData: {
      name: '',
      phoneNumber: '',
      email: '',
    },
    bannerImage: null,
    logoImage: null,
    faviconImage: null,
    menuItems: [
      {
        id: 1,
        name: '6080 Steubenville Pike',
        category: 'Starter',
        price: '1,230$',
        image: null,
      },
      {
        id: 2,
        name: 'An den Wulzen 7',
        category: 'Main Course',
        price: '1,230$',
        image: null,
      },
    ],
    galleryImages: [{ id: 1, image: null }],
    links: {
      google: '',
      facebook: '',
      instagram: '',
      youtube: '',
      twitter: '',
    },
    activeTab: 'Restaurant 1',
    newMenuItem: {
      category: 'Starter',
      name: '',
      description: '',
      image: null,
      price: '',
    },
  });
console.log(state, 'state from the  ewkewekwkekjwkejwkejkwjew');
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Update state helper
  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Field change handlers
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setState(prev => {
        const sectionValue = prev[section];
        
        return {
          ...prev,
          [section]: {
            ...sectionValue,
            [field]: value,
          },
        };
      });
    } else if (name in state.formData) {
      setState(prev => ({
        ...prev,
        formData: {
          ...prev.formData,
          [name]: value,
        },
      }));
    } else if (name in state.links) {
      setState(prev => ({
        ...prev,
        links: {
          ...prev.links,
          [name]: value,
        },
      }));
    } else if (name in state.newMenuItem) {
      setState(prev => ({
        ...prev,
        newMenuItem: {
          ...prev.newMenuItem,
          [name]: value,
        },
      }));
    } else {
      setState(prev => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  }, [state, errors]);

  // Menu item handlers
  const handleMenuItemChange = useCallback((e) => {
    console.log('e  okkkkkkk i m eeeeeeeeee', e);
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      newMenuItem: {
        ...prev.newMenuItem,
        [name]: value,
      },
    }));
  }, []);

  const handleAddMenuItem = useCallback(() => {
    const { newMenuItem, menuItems } = state;
    
    // Check if required fields are filled
    if (!newMenuItem.name || !newMenuItem.category) {
      setErrors(prev => ({
        ...prev,
        menuItems: 'Name and category are required for menu items',
      }));
      return;
    }
    console.log('New Menu Item:', newMenuItem);

    const newItem = {
      id: Date.now(),
      name: newMenuItem.name,
      category: newMenuItem.category,
      description: newMenuItem.description,
      image: newMenuItem.image,
      price: newMenuItem.price || '0.00$',
    };

    setState(prev => ({
      ...prev,
      menuItems: [...prev.menuItems, newItem],
      newMenuItem: {
        category: 'Starter',
        name: '',
        description: '',
        image: null,
        price: '',
      },
    }));

    // Clear any menu-related errors
    setErrors(prev => ({
      ...prev,
      menuItems: undefined,
    }));
  }, [state]);

  const handleDeleteMenuItem = useCallback((id) => {
    setState(prev => ({
      ...prev,
      menuItems: prev.menuItems.filter(item => item.id !== id),
    }));
  }, []);

  // Gallery image handlers
  const handleAddGalleryImage = useCallback(() => {
    const { galleryImages } = state;
    const preview = state.newMenuItem.image;

    if (preview) {
      const newImage = {
        id: Date.now(),
        image: preview,
      };
      setState(prev => ({
        ...prev,
        galleryImages: [...prev.galleryImages, newImage],
        newMenuItem: {
          ...prev.newMenuItem,
          image: null,
        },
      }));

      // Clear any gallery-related errors
      setErrors(prev => ({
        ...prev,
        galleryImages: undefined,
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        galleryImages: 'Please select an image to add to the gallery',
      }));
    }
  }, [state]);

  const handleDeleteGalleryImage = useCallback((id) => {
    setState(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.filter(image => image.id !== id),
    }));
  }, []);

  // Form validation
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    // Required fields
    if (!state.restaurantName) {
      newErrors.restaurantName = 'Restaurant name is required';
      isValid = false;
    }

    if (!state.address) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (!state.logoImage) {
      newErrors.logoImage = 'Logo image is required';
      isValid = false;
    }

    if (!state.faviconImage) {
      newErrors.faviconImage = 'Favicon image is required';
      isValid = false;
    }

    if (!state.bannerImage) {
      newErrors.bannerImage = 'Banner image is required';
      isValid = false;
    }

    // Contact information
    if (!state.formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    } else if (!isValidPhoneNumber(state.formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!state.formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(state.formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Menu and gallery validation
    if (state.menuItems.length === 0) {
      newErrors.menuItems = 'At least one menu item is required';
      isValid = false;
    }

    if (state.galleryImages.length === 0 || !state.galleryImages.some(image => image.image)) {
      newErrors.galleryImages = 'At least one gallery image is required';
      isValid = false;
    }

    // URL validations
    if (state.links.facebook && !isValidUrl(state.links.facebook)) {
      newErrors.facebook = 'Please enter a valid URL';
      isValid = false;
    }
    
    if (state.links.instagram && !isValidUrl(state.links.instagram)) {
      newErrors.instagram = 'Please enter a valid URL';
      isValid = false;
    }
    
    if (state.links.twitter && !isValidUrl(state.links.twitter)) {
      newErrors.twitter = 'Please enter a valid URL';
      isValid = false;
    }
    
    if (state.links.youtube && !isValidUrl(state.links.youtube)) {
      newErrors.youtube = 'Please enter a valid URL';
      isValid = false;
    }
    
    if (state.links.google && !isValidUrl(state.links.google)) {
      newErrors.google = 'Please enter a valid URL';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [state]);

  // Form submission
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = validateForm();

    if (isValid) {
      // Create restaurant data object
      const restaurantData = {
        restaurant: {
          name: state.restaurantName,
          address: state.address,
          logo: state.logoImage,
          favicon: state.faviconImage,
          bannerImage: state.bannerImage,
        },
        openingHours: {
          from: state.openingHourStart,
          to: state.openingHourEnd,
        },
        workingDays: {
          from: state.workingDayStart,
          to: state.workingDayEnd,
        },
        contact: {
          phoneNumber: state.formData.phoneNumber,
          email: state.formData.email,
        },
        menuItems: state.menuItems.map((item) => ({
          category: item.category,
          dishName: item.name,
          description: item.description || '',
          image: item.image,
          price: item.price,
        })),
        galleryManagement: {
          images: state.galleryImages.map((image) => image.image).filter(Boolean),
        },
        socialMediaLinks: state.links,
      };

      try {
        console.log('Restaurant data submitted:', restaurantData);
        const response =  dispatch(addNewRestaurant(restaurantData));
        console.log('Response:', response);

        
        setSubmitted(true);
        setToastMessage('Restaurant saved successfully!');
        setToastType('success');
        setShowToast(true);
      } catch (error) {
        setToastMessage('Failed to save restaurant data. Please try again.');
        setToastType('error');
        setShowToast(true);
      }
    } else {
      setToastMessage('Please correct the errors before submitting');
      setToastType('error');
      setShowToast(true);
    }
    
    setIsSubmitting(false);
  }, [state, validateForm]);

  return {
    state,
    errors,
    submitted,
    isSubmitting,
    showToast,
    toastMessage,
    toastType,
    updateState,
    handleChange,
    handleMenuItemChange,
    handleAddMenuItem,
    handleDeleteMenuItem,
    handleAddGalleryImage,
    handleDeleteGalleryImage,
    handleSubmit,
    setShowToast,
  };
};

export default useRestaurantForm;