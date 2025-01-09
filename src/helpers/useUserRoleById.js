import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/features/users/user.service";

// Define a new async function to fetch the user role by ID
const useUserRoleById = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        // Retrieve the user ID from the token
        const decoded = jwtDecode(localStorage.getItem("token"));
        const userId = decoded.id;

        const response = await dispatch(getUser(userId));

        setRole(response?.payload?.accountrole);
        setUserId(userId);
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [dispatch]); // Ensure useEffect runs only once after initial render

  return { role, loading, userId };
};

export default useUserRoleById;
