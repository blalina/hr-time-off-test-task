import { EuropeIcon } from "@/components/EuropeIcon";
import { GroupPeopleIcon } from "@/components/GroupPeopleIcon";
import { Card, CardContent } from "@/components/ui/card";
import {
    Mail,
    Phone,
    Linkedin,
    Facebook,
    Twitter,
    CircleUserRound,
    UsersRound,
    Clock,
    MapPin,
} from "lucide-react";

const employeeNames = [
    {
        id: 0,
        name: "Shane",
    },
    {
        id: 1,
        name: "Nathan",
    },
    {
        id: 2,
        name: "Mitchell",
    },
    {
        id: 3,
        name: "Philip",
    },
];

export const AsideInfo: React.FC = () => {
    return (
        <aside className="flex flex-col">
            <Card className="font-medium text-sm leading-4 mb-3">
                <CardContent className="flex flex-col pt-6 gap-4 p-[1.2rem]">
                    <div className="flex gap-2">
                        <Phone
                            width="16"
                            height="16"
                        />
                        <p>07911 654321</p>
                    </div>
                    <div className="flex gap-2">
                        <Mail
                            width="16"
                            height="16"
                        />
                        <p>avd.yana@videorollnet</p>
                    </div>
                    <div className="flex gap-2">
                        <Linkedin
                            width="16"
                            height="16"
                        />
                        <Facebook
                            width="16"
                            height="16"
                        />
                        <Twitter
                            width="16"
                            height="16"
                        />
                    </div>
                </CardContent>
            </Card>
            <Card className="font-medium text-sm leading-4 mb-3">
                <CardContent className="p-[1.2rem]">
                    <p className="pb-3">Hire Date</p>
                    <p className="pb-1.5">Sep. 3,2020</p>
                    <p>3y - 9m - 20d</p>
                </CardContent>
            </Card>
            <Card className="font-medium text-sm leading-4 mb-3">
                <CardContent className="p-[1.2rem]">
                    <div>
                        <p className="pb-3"># 5</p>
                    </div>
                    <div className="flex flex-row items-center pb-2">
                        <Clock
                            width="16"
                            height="16"
                            className="mr-2"
                        />
                        <p>Full-Time</p>
                    </div>
                    <div className="flex flex-row items-center pb-2">
                        <GroupPeopleIcon className="mr-2" />
                        <p>Operations</p>
                    </div>
                    <div className="flex flex-row items-center pb-2">
                        <EuropeIcon className="mr-2" />
                        <p>Europe</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <MapPin
                            width="16"
                            height="16"
                            className="mr-2"
                        />
                        <p>London, UK</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="font-medium text-sm leading-4 mb-3">
                <CardContent className="p-[1.2rem]">
                    <p className="pb-3">Direct Reports</p>
                    {employeeNames.map((user) => (
                        <div
                            key={user.id}
                            className="flex flex-row items-center pb-2">
                            <CircleUserRound
                                width="16"
                                height="16"
                                className="mr-2"
                            />
                            <p>{user.name}</p>
                        </div>
                    ))}
                    <div className="flex flex-row items-center">
                        <UsersRound
                            width="16"
                            height="16"
                            className="mr-2"
                        />
                        <p>4 More...</p>
                    </div>
                </CardContent>
            </Card>
        </aside>
    );
};
