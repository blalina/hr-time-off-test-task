import { CalendarHistoryIcon } from "@/components/CalendarHistoryIcon";
import { EmergencyIcon } from "@/components/EmergencyIcon";
import { PiggyBankIcon } from "@/components/PiggyBankIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CalendarClock, Clock, Dot, MountainSnow, X } from "lucide-react";

export const TimeOff = () => {
    return (
        <div className="flex-1 bg-white rounded-b-2xl pt-9 px-2.5 pb-14">
            <div className="flex justify-between items-center mt-5 mb-2.5">
                <div className="flex items-center space-x-2.5">
                    <CalendarClock
                        width="16"
                        height="16"
                    />
                    <p className="font-medium text-lg leading-6 text-[#204973]">
                        Time Off
                    </p>
                </div>
                <div className="flex items-center space-x-5">
                    <p className="flex items-center font-medium text-sm leading-6 hidden md-high:flex">
                        Accrual Level Start Date{" "}
                        <p className="block text-sm leading-6 text-[#3758AB] pl-1">
                            03/09-2020
                        </p>
                    </p>
                    <Button variant="outline">Add Time Off Policy</Button>
                </div>
            </div>
            <Separator className="bg-[#7C96B1]" />
            {/* md-high:flex-col md-high:gap-4  от этого и выше xl:justify-between sm-low:justify-end*/}
            <div className="flex justify-center m-4  xl:flex-row sm:flex-col xl:gap-0 sm:gap-4">
                <div className="flex flex-col items-center mr-8">
                    <Card className="w-64 h-[8.5rem] flex flex-col items-center justify-center bg-[#F0F3F8] p-2.5 shadow-none border-none rounded-lg">
                        <CardHeader className="p-1.5">
                            <CardTitle className="font-semibold text-xl leading-6 text-center">
                                Sick
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center p-0">
                            <div className="flex items-center">
                                <EmergencyIcon
                                    width="30"
                                    height="30"
                                />
                                <span className="font-semibold text-3xl leading-9 ml-2">
                                    3
                                </span>
                            </div>
                            <p className="font-semibold text-sm leading-4 p-1.5">
                                Days Available
                            </p>
                            <p className="font-semibold text-sm leading-4 text-[#7C96B1]">
                                1 dey scheduled
                            </p>
                        </CardContent>
                    </Card>
                    <p className="font-medium text-sm leading-4 text-[#7C96B1] pt-2">
                        Sick Full-Time
                    </p>
                </div>
                <div className="flex flex-col items-center mr-8">
                    <Card className="w-64 h-[8.5rem] flex flex-col items-center justify-center bg-[#F0F3F8] p-2.5 shadow-none border-none rounded-lg">
                        <CardHeader className="p-1.5">
                            <CardTitle className="font-semibold text-xl leading-6 text-center">
                                Annual Leave
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center p-0">
                            <div className="flex items-center">
                                <MountainSnow
                                    width="30"
                                    height="30"
                                />
                                <span className="font-semibold text-3xl leading-9 ml-2">
                                    10.3
                                </span>
                            </div>
                            <p className="font-semibold text-sm leading-4 p-1.5">
                                Days Available
                            </p>
                        </CardContent>
                    </Card>
                    <p className="font-medium text-sm leading-4 text-[#7C96B1] pt-2">
                        Holiday Full-Time
                    </p>
                </div>
                <div className="flex flex-col items-center xl:mr-0 sm:mr-8">
                    <Card className="w-64 h-[8.5rem] flex flex-col items-center justify-center bg-[#F0F3F8] p-2.5 shadow-none border-none rounded-lg">
                        <CardHeader className="p-1.5">
                            <CardTitle className="font-semibold text-xl leading-6 text-center">
                                Comp/in Lieu Time
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center p-0">
                            <div className="flex items-center">
                                <CalendarClock
                                    width="30"
                                    height="30"
                                />
                                <span className="font-semibold text-3xl leading-9 ml-2">
                                    0
                                </span>
                            </div>
                            <p className="font-semibold text-sm leading-4 p-1.5">
                                Human Used(YTD)
                            </p>
                        </CardContent>
                    </Card>
                    <p className="font-medium text-sm leading-4 text-[#7C96B1] pt-2">
                        Comp/in Lieu Time Flexible Policy
                    </p>
                </div>
            </div>
            <div className="flex items-center mb-2">
                <Clock
                    width="16"
                    height="16"
                />
                <p className="font-medium text-sm leading-4 text-[#204973] pl-1.5">
                    Upcoming Time Off
                </p>
            </div>
            <Separator className="bg-[#7C96B1]" />
            <div className="flex items-center my-4">
                <EmergencyIcon
                    width="30"
                    height="30"
                />
                <div className="">
                    <span className="font-medium text-sm leading-4 pl-2.5">
                        Jan 27
                    </span>
                    <div>
                        <span className="flex items-center font-medium text-sm leading-4">
                            <Dot />1 dey of Sick
                        </span>
                    </div>
                </div>
            </div>
            <Separator className="bg-[#7C96B1]" />
            <div className="flex items-center my-4">
                <PiggyBankIcon
                    width="30"
                    height="30"
                />
                <div className="pl-2.5">
                    <span className="font-medium text-sm leading-4">Jul 4</span>
                    <span className="flex font-medium text-sm leading-4">
                        Independence Day
                    </span>
                </div>
            </div>
            <Separator className="bg-[#7C96B1]" />
            <div className="flex items-center my-4">
                <CalendarHistoryIcon />
                <span className="font-medium text-sm leading-4 pl-2 text-[#204973]">
                    History
                </span>
            </div>
            <div className="select flex w-full items-center gap-2 my-3 md-high:flex-row sm:flex-col sm:items-start">
                <div className="relative min-w-64">
                    <Select>
                        <SelectTrigger className="w-full border-[#7C96B1]">
                            <SelectValue placeholder="Sick" />
                            <X
                                width="16"
                                height="16"
                                className="absolute left-[80%] text-[#7C96B1]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sick</SelectLabel>
                                <SelectItem value="empty">Empty</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="relative min-w-24">
                    <Select>
                        <SelectTrigger className="w-full border-[#7C96B1]">
                            <SelectValue placeholder="All" />
                            <X
                                width="16"
                                height="16"
                                className="absolute left-[45%] text-[#7C96B1]"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>All</SelectLabel>
                                <SelectItem value="empty">Empty</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="ml-auto min-w-44">
                    <Select>
                        <SelectTrigger className="w-[180px] border-[#7C96B1]">
                            <SelectValue placeholder="Balance History" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Balance History</SelectLabel>
                                <SelectItem value="empty">Empty</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <Table className="mb-14">
                    <TableHeader className="bg-[#DAE6F2]">
                        <TableRow>
                            <TableHead className="w-auto text-black">
                                Date ↓
                            </TableHead>
                            <TableHead className="text-black">
                                Description
                            </TableHead>
                            <TableHead className="text-black">
                                Used Days (-)
                            </TableHead>
                            <TableHead className="text-black text-left ">
                                Earned Days (+)
                            </TableHead>
                            <TableHead className="text-black text-left ">
                                Balance
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-[#7C96B1]">
                            <TableCell className="font-medium">
                                23/05/2024
                            </TableCell>
                            <TableCell>
                                Accrual for 23/05/2024 to 20/11/2024
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                        </TableRow>
                        <TableRow className="border-[#7C96B1]">
                            <TableCell className="font-medium">
                                23/05/2024
                            </TableCell>
                            <TableCell>
                                Accrual for 23/05/2024 to 20/11/2024
                            </TableCell>
                            <TableCell>-6</TableCell>
                            <TableCell className="text-left"></TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                        </TableRow>
                        <TableRow className="border-[#7C96B1]">
                            <TableCell className="font-medium">
                                23/05/2024
                            </TableCell>
                            <TableCell>
                                Accrual for 23/05/2024 to 20/11/2024
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                        </TableRow>
                        <TableRow className="bg-[#DAE6F2] border-[#7C96B1]">
                            <TableCell className="font-medium">
                                23/05/2024
                            </TableCell>
                            <TableCell>
                                Accrual for 23/05/2024 to 20/11/2024
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                        </TableRow>
                        <TableRow className="border-[#7C96B1]">
                            <TableCell className="font-medium">
                                23/05/2024
                            </TableCell>
                            <TableCell>
                                Accrual for 23/05/2024 to 20/11/2024
                            </TableCell>
                            <TableCell>-6</TableCell>
                            <TableCell className="text-left"></TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                        </TableRow>
                        <TableRow className="border-[#7C96B1]">
                            <TableCell className="font-medium">
                                23/05/2024
                            </TableCell>
                            <TableCell>
                                Accrual for 23/05/2024 to 20/11/2024
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                            <TableCell className="text-left">3.0</TableCell>
                        </TableRow>
                        <Separator />
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
