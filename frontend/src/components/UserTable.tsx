import { Settings, Trash2 } from "lucide-react";
import { TableUser } from "../types";

const data: TableUser[] = [
  {
    id: 1,
    name: "Michael Holz",
    dateCreated: "04/10/2013",
    role: "Admin",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 2,
    name: "Paula Wilson",
    dateCreated: "05/08/2014",
    role: "Publisher",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    dateCreated: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    statusColor: "bg-red-100 text-red-800",
  },
  {
    id: 4,
    name: "Mary Saveley",
    dateCreated: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 5,
    name: "Martin Sommer",
    dateCreated: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
];

export default function UserTable() {
  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              #
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              Date Created
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 text-sm text-gray-500">{item.id}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {item.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {item.dateCreated}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{item.role}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 flex">
                <button className="text-blue-600 hover:text-blue-900 flex items-center">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="text-red-600 hover:text-red-900 ml-3 flex items-center">
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
