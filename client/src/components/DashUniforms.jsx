import { Button, Card, Select } from "flowbite-react"


function DashUniforms() {
  return (
    <div className="mx-6 my-6">
        <span className="text-3xl font-semibold">Uniforms</span>
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
    </div>
  )
}

export default DashUniforms