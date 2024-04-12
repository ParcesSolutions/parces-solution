import { Button, Card, Select } from "flowbite-react"
import { useSelector } from "react-redux";
import Uniform from "../../../api/models/uniform.model";
import { useState, useEffect } from "react";


function DashUniforms() {

    const { currentUser } = useSelector(state => state.user);
    const [inventory, setInventory] = useState([]);
    const [gender, setGender] = useState("");

    useEffect(() => {
        // Initial query for inventory when component mounts
        queryInventory('Shirt', 'Male', 'S');
        queryInventory('Sweatshirt', 'Male', 'S');
        queryInventory('Pants', 'Male', { width: 32, length: 32 });
        queryInventory('Shorts', 'Male', { width: 30 });
    
        // Function to query inventory for a specific uniform type, gender, and size
        async function queryInventory(type, gender, size) {
          try {
            const result = await Uniform.findOne({ type, gender, size });
            setInventory((prevInventory) => [...prevInventory, { type, gender, size, quantity: result ? result.quantity : 0 }]);
          } catch (error) {
            console.error('Error querying inventory:', error);
          }
        }
      }, [gender]);


  return (
    <div className="mx-6 my-6">
        <div className="text-3xl mb-4 font-semibold">Uniforms</div>
        <div className="flex justify-center">
            <div className="p-8 m-4 flex flex-wrap min-w-screen bg-slate-200/30 rounded-md min-h-screen min-w-full gap-4 md:gap-8 mx-auto justify-around justify-center">
            <Card className="h-80 w-90 ">
                        <div className="text-center">
                            <span>Image</span>
                            <h5 className="text-sm md:text-lg font-bold tracking-tight text-gray-900 text-center">
                                Item Type
                            </h5>
                        </div>
                        <div className="flex gap-10 mx-auto">
                            <div>
                                <span>Gender</span>
                                <Select 
                                    className="">
                                    <option>M</option>
                                    <option>F</option>
                                </Select>
                            </div>
                            <div>
                                <span>Size</span>
                                <Select 
                                    className="">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>2XL</option>
                                    <option>3XL</option>
                                    <option>4XL</option>
                                    <option>5XL</option>
                                    <option>6XL</option>
                                </Select>
                            </div>
                            <div>
                                <span>Qty</span>
                                <Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </div>
                        </div>
                        {currentUser.isAdmin && (
                            <Button 
                                className='mt-8' 
                                color="blue"
                                disabled>
                                    Add to cart
                            </Button>
                        )}
                        {!currentUser.isAdmin && (
                            <Button 
                                className='mt-8' 
                                color="blue">
                                    Add to cart
                            </Button>
                        )}
                    </Card>
                    <Card className="h-80 w-80 "/>
                    <Card className="h-80 w-80 "/>
                    <Card className="h-80 w-80 "/>
                    <Card className="h-80 w-80 "/>
            </div>
        </div>
    </div>
  )
}

export default DashUniforms


{/* <span className="text-3xl font-semibold">Uniforms</span>
        <div className="py-6 px-4 flex flex-wrap w-full gap-4 mt-4 mx-2 bg-slate-200/30 rounded-md min-h-screen">
            <Card className=" max-w-sm min-w-md min-h-70 max-h-80 mx-auto">
                <h5 className="text-sm md:text-lg font-bold tracking-tight text-gray-900 text-center">
                    Noteworthy technology acquisitions 2021
                </h5>
                <div className="flex gap-10 mx-auto">
                    <div>
                        <span>Size</span>
                        <Select className="">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                        <option>4XL</option>
                        <option>5XL</option>
                        <option>6XL</option>
                        </Select>
                    </div>
                    <div>
                        <span>Qty</span>
                        <Select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Select>
                    </div>
                </div>
                <Button className='mt-10' color="blue">Add to cart</Button>
            </Card>
        </div>
        <div className="">
            side
        </div> */}