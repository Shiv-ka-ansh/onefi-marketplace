import React from 'react';
import { TopHeader } from '../components/common/TopHeader';
import { BottomNav } from '../components/common/BottomNav';
import { 
  User, 
  ShoppingBag, 
  PiggyBank, 
  Users, 
  HelpCircle, 
  ShieldCheck, 
  FileText, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';

export const ProfilePage = () => {
  const quickActions = [
    {
      id: 'profile',
      title: 'Profile details',
      subtitle: 'Name, contact and KYC info',
      icon: User,
    },
    {
      id: 'purchases',
      title: 'Purchases',
      subtitle: 'Orders, invoices and loan status',
      icon: ShoppingBag,
    },
    {
      id: 'pledge',
      title: 'Pledge history',
      subtitle: 'Funds you pledged or released',
      icon: PiggyBank,
    },
    {
      id: 'invite',
      title: 'Invite friends',
      subtitle: 'Share the app, earn rewards',
      icon: Users,
      badge: 'EARN ₹500'
    },
    {
      id: 'support',
      title: 'Support & FAQs',
      subtitle: 'Find answers or contact us',
      icon: HelpCircle,
    },
    {
      id: 'privacy',
      title: 'Privacy policy',
      subtitle: 'How we handle your data',
      icon: ShieldCheck,
    },
    {
      id: 'terms',
      title: 'Terms & conditions',
      subtitle: 'Rules governing your use',
      icon: FileText,
    }
  ];

  return (
    <div className="min-h-screen pb-24 flex flex-col bg-[#F8F9FD]">
      <TopHeader title="Profile" />

      <main className="flex-1 p-4 space-y-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Profile
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage your account settings and personal preferences.
          </p>
        </div>

        {/* User Card */}
        <div className="bg-white rounded-3xl p-4 border border-[#ECEFF6] shadow-card flex items-center space-x-3.5">
          <div className="w-14 h-14 rounded-full bg-[#EDE9FE] text-[#6D28D9] font-black text-xl flex items-center justify-center flex-shrink-0">
            U
          </div>
          <div>
            <h2 className="font-extrabold text-slate-900 text-base">User</h2>
            <p className="text-xs text-slate-500 font-medium">+91 9039190550</p>
            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
              ✓ KYC Verified
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-1">
            Quick Actions
          </span>

          <div className="space-y-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.id}
                  className="bg-white rounded-2xl p-3.5 border border-[#ECEFF6] shadow-card flex items-center justify-between hover:border-slate-300 transition-colors cursor-pointer active:scale-[0.99]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#6D28D9] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-slate-900 text-xs">
                          {action.title}
                        </h3>
                        {action.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#6D28D9] text-[9px] font-black">
                            {action.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {action.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Log Out Button */}
        <div className="pt-2">
          <button className="w-full py-3.5 rounded-2xl bg-white border border-red-100 text-red-600 font-bold text-xs flex items-center justify-center space-x-2 shadow-card hover:bg-red-50 transition active:scale-95">
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
