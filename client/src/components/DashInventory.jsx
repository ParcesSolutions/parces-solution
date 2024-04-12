import { Button, Card, Label, Modal, Select, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { useSelector } from "react-redux";
import Uniform from "../../../api/models/uniform.model";


function DashInventory() {

    const [showModal, setShowModal] = useState(false);
    const { currentUser } = useSelector(state => state.user);

  return (
    <div className="bg-gray-200/30 m-6 w-screen min-h-screen rounded-md flex flex-wrap justify-around gap-4 md:gap-6">
        <Card className="h-80 w-80 m-4">
            <div className="mx-auto ustify-around">
                <div className="text-center">
                    <h5>Image</h5>
                </div>
                <div className="mt-4">
                    <Label>Volvo Pants</Label>
                </div>
            </div>
            <div className="flex gap-4 mx-auto">
                <div>
                    <Label className="mx-auto">Size </Label>
                    <Select className="mx-auto">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                    </Select>
                </div>
                <div>
                    <span className="text-xs">Current Qty In Stock</span>
                    <TextInput className="w-20 mx-auto"></TextInput>
                </div>
            </div>
            <div className="mx-auto">
                <span className="text-xs">New Qty In Inventory</span>
                <TextInput className="mx-auto w-20"></TextInput>
            </div>
            <Button 
                onClick={() => setShowModal(true)}
                className="focus:outline-none text-white hover:font-extrabold bg-red-700 hover:bg-gradient-to-r from-red-800 via-red-800 to-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >
                    Update Inventory
            </Button>
        </Card>
        <Modal
            show={showModal} 
            onClose={() => setShowModal(false)} 
            popup 
            size='md'>
                <Modal.Header />
                    <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 mb-4 mx-auto' />
                        <h3 className='mb-5 text-lg text-gray-500'>Are you sure you want to update inventory for this item?</h3>
                        <div className="flex justify-center gap-10">
                        <Button color='failure'>
                            Yes, Update inventory
                        </Button>
                        <Button color='gray' onClick={() => setShowModal(false)}>
                            No, cancel
                        </Button>
                        </div>
                    </div>
                    </Modal.Body>
            </Modal>
    </div>
  )
}

export default DashInventory





{/* <Card className="h-80 w-80 m-4">
            <div className="mx-auto ustify-around">
                <div className="text-center">
                    <h5>Image</h5>
                </div>
                <div className="mt-4">
                    <Label>Volvo T-Shirt Summer</Label>
                </div>
            </div>
            <div className="flex gap-4 mx-auto">
                <div>
                    <Label className="mx-auto">Size </Label>
                    <Select className="mx-auto">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                    </Select>
                </div>
                <div>
                    <span className="text-xs">Current Qty In Stock</span>
                    <TextInput className="w-20 mx-auto"></TextInput>
                </div>
            </div>
            <div className="mx-auto">
                <span className="text-xs">New Qty In Inventory</span>
                <TextInput className="mx-auto w-20"></TextInput>
            </div>
            <Button 
                onClick={() => setShowModal(true)}
                className="focus:outline-none text-white hover:font-extrabold bg-red-700 hover:bg-gradient-to-r from-red-800 via-red-800 to-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >
                    Update Inventory
            </Button>
        </Card>
        <Card className="h-80 w-80 m-4">
            <div className="mx-auto ustify-around">
                <div className="text-center">
                    <h5>Image</h5>
                </div>
                <div className="mt-4">
                    <Label>Volvo Sweatshirt</Label>
                </div>
            </div>
            <div className="flex gap-4 mx-auto">
                <div>
                    <Label className="mx-auto">Size </Label>
                    <Select className="mx-auto">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                    </Select>
                </div>
                <div>
                    <span className="text-xs">Current Qty In Stock</span>
                    <TextInput className="w-20 mx-auto"></TextInput>
                </div>
            </div>
            <div className="mx-auto">
                <span className="text-xs">New Qty In Inventory</span>
                <TextInput className="mx-auto w-20"></TextInput>
            </div>
            <Button 
                onClick={() => setShowModal(true)}
                className="focus:outline-none text-white hover:font-extrabold bg-red-700 hover:bg-gradient-to-r from-red-800 via-red-800 to-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >
                    Update Inventory
            </Button>
        </Card>
        <Card className="h-80 w-80 m-4">
            <div className="mx-auto ustify-around">
                <div className="text-center">
                    <h5>Image</h5>
                </div>
                <div className="mt-4">
                    <Label>Volvo Shorts</Label>
                </div>
            </div>
            <div className="flex gap-4 mx-auto">
                <div>
                    <Label className="mx-auto">Size </Label>
                    <Select className="mx-auto">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                    </Select>
                </div>
                <div>
                    <span className="text-xs">Current Qty In Stock</span>
                    <TextInput className="w-20 mx-auto"></TextInput>
                </div>
            </div>
            <div className="mx-auto">
                <span className="text-xs">New Qty In Inventory</span>
                <TextInput className="mx-auto w-20"></TextInput>
            </div>
            <Button 
                onClick={() => setShowModal(true)}
                className="focus:outline-none text-white hover:font-extrabold bg-red-700 hover:bg-gradient-to-r from-red-800 via-red-800 to-red-800 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >
                    Update Inventory
            </Button>
        </Card> */}