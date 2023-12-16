import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

export default function card() {
    return (
        <div className="w-56 h-72 border-solid border-white shadow-md flex flex-col items-center justify-center gap-8">
            <div className="mr-1">
                <h2 className="font-semibold mb-1">Procurement</h2>
                <span className="border border-yellow-600 bg-yellow-100 p-1 text-xs ">In-Progess</span>
                <h3 className="font-semibold text-sm mb-2 mt-2">Total Usecases - 30</h3>
                <p className="text-xs opacity-30 font-semibold">Due Date: 12-09-2023</p>
            </div>
            <div>
                <Card className="w-32 h-24 border-none">
                    <CardBody className="justify-center items-center">
                        <CircularProgress
                            classNames={{
                                svg: "w-24 h-24 drop-shadow-md",
                                indicator: "stroke-yellow-300",
                                track: "stroke-white/10 bg-blue-500",
                                value: "text-3xl font-semibold text-white",
                            }}
                            value={44}
                            strokeWidth={4}
                        />
                    </CardBody>
                    <CardFooter className="justify-center items-center pt-0 ">
                        <Chip
                            classNames={{
                                base: "border-1 border-white/30",
                                content: "text-black/90 text-sm	font-normal",
                            }}
                            variant="bordered"
                        >
                            Completed
                        </Chip>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
