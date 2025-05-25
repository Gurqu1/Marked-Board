import React from 'react';
type StatusType = 'Applied' | 'Interview' | 'Offer' | 'Rejected' | 'In Progress';
interface StatusBadgeProps {
  status: StatusType;
}
const StatusBadge = ({
  status
}: StatusBadgeProps) => {
  const getBadgeColor = () => {
    switch (status) {
      case 'Applied':
        return 'bg-gray-200 text-gray-800';
      case 'Interview':
        return 'bg-blue-100 text-blue-800';
      case 'Offer':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor()}`}>
      {status}
    </span>;
};
export default StatusBadge;