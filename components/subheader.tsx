import {
    Calendar,
    Search,
    FlaskConical,
    Ambulance,
    UserSearch
} from "lucide-react";

const menuItems = [
    {
        title: "Book Appointment",
        icon: Calendar,
        href: "/appointment",
    },
    {
        title: "Search By Department",
        icon: Search,
        href: "/departments",
    },
    {
        title: "Lab Result",
        icon: FlaskConical,
        href: "/lab-results",
    },
    {
        title: "Emergency",
        icon: Ambulance,
        href: "/emergency",
    },
    {
        title: "Quick Search",
        icon: UserSearch,
        href: "/quick-search",
    },
];

export default function SubHeader() {
    return (
        <div className="w-full flex justify-center -mb-8 relative z-10 px-4">
            <div className="bg-white rounded-full shadow-lg border border-gray-100 overflow-hidden max-w-5xl w-full">
                <div className="flex flex-row items-center justify-between divide-x divide-gray-100 overflow-x-auto">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={index}
                                href={item.href}
                                className="flex flex-1 items-center justify-center gap-2 px-4 py-4 hover:bg-teal-50 transition min-w-[max-content]"
                            >
                                <Icon className="w-5 h-5 text-teal-600 shrink-0" />
                                <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                                    {item.title}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}