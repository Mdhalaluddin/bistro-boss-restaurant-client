import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const MenuCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img src={image} alt="profile-picture" />
                <p className="bg-slate-800 text-white">${price}</p>
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {recipe}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
        </Card>
    );
};

export default MenuCard;