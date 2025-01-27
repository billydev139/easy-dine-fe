import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";
import Images from "../../../assets/images";

const ItemCard = ({ item, handleRating, setOpen, key }) => {
  return (
    <div
      key={key}
      onClick={() => setOpen(true)}
      className="flex items-center  p-4 rounded-lg border"
    >
      <div className="flex-1">
        <h3 className="font-medium">{item?.name}</h3>
        <p className="text-base text-gray-400">{item?.price}</p>
        <div className="flex items-center justify-between pr-4">
          <Rating
            onClick={handleRating}
            size={16}
            /* Available Props */
          />
          <p className="text-xs">(456 reviews)</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={Images.chicken}
          alt={item?.name}
          className="w-28 h-20 rounded-md"
        />
        <button className="absolute bottom-0 right-0 text-black bg-white py-0.5 px-2 rounded hover:bg-white hover:text-white">
          +
        </button>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  handleRating: PropTypes.func,
  key: PropTypes.any,
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
  }),
  setOpen: PropTypes.func,
};

// Default props
ItemCard.defaultProps = {
  handleRating: () => {},
  key: null,
  item: {
    name: "Default Item",
    price: "0.00",
  },
  setOpen: () => {},
};

export default ItemCard;
