import DashboardLayout from '../../../layouts/dashboardLayout';
import RestaurantSection from './restaurant-section';
import BannerImage from './banner-image';
import RestaurantInfo from './restaurant-info';
import OpeningHoursDays from './schedule';
import ContactForm from './contact-info-form';
import RestaurantManagementApp from './menu-management';
import SocialMediaForm from './socialMediaForm';
import RestaurantList from './restaurant-list';

const RestaurantSettingsPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className='max-w-full my-11 min-h-screen'>
          <RestaurantSection />
          <BannerImage />
          <RestaurantInfo />
          <OpeningHoursDays />
          <ContactForm />
          <RestaurantManagementApp />
          <SocialMediaForm />
          <RestaurantList />
        </div>
      </DashboardLayout>
    </>
  );
};

export default RestaurantSettingsPage;
