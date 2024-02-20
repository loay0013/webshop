import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const ProductSectionItem = ({
                              id,
                              img,
                              name,
                              text,
                              size,
                              price,
                              color,
                              totalPrice,
                            }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate function

  const defaultSize = size[0];
  const defaultColor = color[0];

  // Function to handle click and navigate to product details
  const handleProductClick = () => {
    navigate(`/product/${id}`); // Navigate to product details page
  };

  return (
      <div onClick={handleProductClick} className="cursor-pointer">
        <Card className="w-96 relative">
          <Typography
              variant="h4"
              className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
          >
            SALE%
          </Typography>
          <CardHeader floated={false} className="h-96">
            <img src={img} alt={name} />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {name}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              {text}
            </Typography>
            <div className="flex justify-between items-center pt-4">
              <Typography color="red" className="font-medium" textGradient>
                Size left: <span className="text-gray-400 text-base font-extralight">{defaultSize}</span>
              </Typography>
              <Typography color="gray" className="font-medium" textGradient>
                Color: <span className="px-2 rounded-full ml-2" style={{ backgroundColor: defaultColor }}></span>
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Add to Cart" placement="bottom">
              <Button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigating when clicking the button
                    dispatch(
                        addToCart({
                          id,
                          img,
                          amount: 1,
                          price,
                          name,
                        })
                    );
                  }}
                  ripple={true}
              >
                Add to Cart
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
  );
};

export default ProductSectionItem;