import DashboardLayout from '../../../layouts/dashboardLayout';
import DiscountCampaignTracker from './discount-campaigns';
import StaffingCalendar from './staffing-calendar';
import TrendingPredictions from './trending-predictions';

const UserManagement = () => {
  return (
    <>
      <DashboardLayout>
        <TrendingPredictions />
        <div className='flex gap-x-4'>
          <StaffingCalendar />
          <DiscountCampaignTracker />
        </div>
      </DashboardLayout>
    </>
  );
};

export default UserManagement;
