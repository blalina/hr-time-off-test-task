import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Search,
    Settings,
    CircleHelp,
    Bell,
    ChevronDown,
    LogOut,
} from "lucide-react";
import { TimeOff } from "../TimeOff/TimeOff";
import { AsideInfo } from "../Aside/AsideInfo";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { My_PROFILE_QUERY } from "@/graphql/query";

export const MyInfo = () => {
    const { data, loading, error } = useQuery(My_PROFILE_QUERY);
    const navigate = useNavigate();

    const navLinkClasses =
        "font-light text-lg leading-5 py-4 px-3.5 whitespace-nowrap";

    const tabLinkClasses =
        "text-black font-medium text-sm leading-4 p-3 mr-2.5";

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data || !data.myProfile) {
        return <p>No profile data available</p>;
    }

    const { name, avatar } = data.myProfile;

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        console.log("Tokens have been removed");

        navigate("/login");
    };

    return (
        <div className="max-w-full h-[90rem] bg-[#F0F3F8]">
            <div className="flex justify-between pt-8 px-6 pb-3.5 bg-white">
                <div>
                    <a href="/MyInfo">
                        <span className="font-inter font-semibold text-xl leading-6">
                            HarmonyHR
                        </span>
                    </a>
                </div>
                <div className="flex items-end">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navLinkClasses}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={`${navLinkClasses} ${"bg-[#DAE6F2] rounded-t-xl"}`}>
                                    My Info
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navLinkClasses}>
                                    People
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navLinkClasses}>
                                    Hiring
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navLinkClasses}>
                                    Reports
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={navLinkClasses}>
                                    Files
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="relative">
                    <Search
                        className="absolute left-2.5 top-1/2 transform -translate-y-1/2"
                        width="16"
                        height="16"
                    />
                    <Input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="w-80 shadow-none font-light text-lg leading-5 text-black placeholder:text-black pl-12 border border-black focus:border-black focus:ring-0 rounded-xl"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Settings />
                    <CircleHelp />
                    <Bell />
                    <Avatar>
                        <AvatarImage
                            src={avatar}
                            alt="User's avatar"
                        />
                    </Avatar>
                    <LogOut onClick={handleLogout} />
                </div>
            </div>
            <div className="flex justify-center w-full bg-[#DAE6F2]">
                <div className="flex justify-between w-full  mt-8">
                    {/* // ml-24 заменить на padding-left: 6rem */}
                    <div className="w-1/5 pl-24">
                        <Avatar className="w-[10rem] h-auto z-10">
                            <AvatarImage
                                src={avatar}
                                alt="User's avatar"
                            />
                        </Avatar>
                    </div>
                    {/* // mr-16 заменить на padding-left: 3rem and padding-right:
                    4rem */}
                    <div className="w-4/5 flex flex-col self-end gap-[2rem] pl-12 pr-16">
                        <div className="flex flex-row justify-between">
                            <span className="font-semibold text-28 leading-8">
                                {name}
                            </span>
                            <div className="flex ">
                                <Select>
                                    <SelectTrigger className="w-[180px] mr-4 border-[#7C96B1]">
                                        <SelectValue placeholder="Request a Change" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Request</SelectLabel>
                                            <SelectItem value="empty">
                                                Empty
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <div className="">
                                    <Select>
                                        <SelectTrigger className="w-auto border-[#7C96B1]">
                                            <Settings
                                                width="16"
                                                height="16"
                                            />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Request
                                                </SelectLabel>
                                                <SelectItem value="empty">
                                                    Empty
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NavigationMenu className="block flex-none max-w-none">
                                <NavigationMenuList className="flex justify-between items-center">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Personal
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Job
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={`${tabLinkClasses} ${"bg-white rounded-t-xl pb-4 whitespace-nowrap"}`}>
                                            Time Off
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Emergency
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Documents
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Notes
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Benefits
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Training
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={tabLinkClasses}>
                                            Assets
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={`${tabLinkClasses} ${"flex items-center"}`}>
                                            More
                                            <ChevronDown />
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full px-[5%] gap-[2%]">
                <div>
                    <AsideInfo />
                </div>
                <TimeOff />
            </div>
        </div>
    );
};
