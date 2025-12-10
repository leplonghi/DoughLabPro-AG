import React, { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';
import {
  ArrowRightOnRectangleIcon,
  PencilIcon,
  StarIcon,
  TrashIcon,
  SolidStarIcon,
  BookmarkSquareIcon,
  FlourIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  SettingsIcon,
  UserCircleIcon,
  GlobeAltIcon,
  FireIcon,
  CheckIcon,
  SparklesIcon,
  BookOpenIcon,
  UploadIcon,
} from '@/components/ui/Icons';
import { ImageUpload } from '@/components/ui/ImageUpload';
import { User, Gender, Oven, Page, Levain, UnitSystem } from '@/types';
import OvenModal from '@/components/OvenModal';
import LevainModal from '@/components/LevainModal';
import { LockFeature } from '@/components/auth/LockFeature';

interface ProfilePageProps {
  onNavigate: (page: Page, params?: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const {
    user,
    logout,
    updateUser,
    hasProAccess,
    ovens,
    addOven,
    updateOven,
    deleteOven,
    setDefaultOven,
    levains,
    addLevain,
    updateLevain,
    deleteLevain,
    setDefaultLevain,
    goals,
    batches
  } = useUser();
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<'overview' | 'mylab' | 'settings'>('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({});

  const [isOvenModalOpen, setIsOvenModalOpen] = useState(false);
  const [editingOven, setEditingOven] = useState<Oven | null>(null);

  const [isLevainModalOpen, setIsLevainModalOpen] = useState(false);
  const [editingLevain, setEditingLevain] = useState<Levain | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        gender: user.gender,
        location: user.location,
        bio: user.bio,
        website: user.website,
        instagramHandle: user.instagramHandle,
        skillLevel: user.skillLevel,
        avatar: user.avatar,
      });
    }
  }, [user]);

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl text-center pt-20">
        <p className="text-slate-900">{t('profile.not_logged_in')}</p>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        birthDate: user.birthDate,
        gender: user.gender,
        location: user.location,
        bio: user.bio,
        website: user.website,
        instagramHandle: user.instagramHandle,
        skillLevel: user.skillLevel,
        avatar: user.avatar,
      });
    }
    setIsEditing(false);
  };

  const handleSaveOven = (ovenData: Omit<Oven, 'id' | 'isDefault'> | Oven) => {
    if ('id' in ovenData) {
      updateOven(ovenData);
    } else {
      addOven(ovenData);
    }
    setIsOvenModalOpen(false);
    setEditingOven(null);
  };

  const handleDeleteOven = (id: string) => {
    const ovenToDelete = ovens.find(o => o.id === id);
    if (ovenToDelete && window.confirm(t('confirmations.delete_oven', { name: ovenToDelete.name }))) {
      deleteOven(id);
    }
  }

  const handleSaveLevain = (levainData: Omit<Levain, 'id' | 'isDefault' | 'feedingHistory'> | Levain) => {
    if ('id' in levainData) {
      updateLevain(levainData);
    } else {
      addLevain(levainData);
    }
    setIsLevainModalOpen(false);
    setEditingLevain(null);
  };

  const handleDeleteLevain = (id: string) => {
    const levainToDelete = levains.find(l => l.id === id);
    if (levainToDelete && window.confirm(t('confirmations.delete_levain', { name: levainToDelete.name }))) {
      deleteLevain(id);
    }
  }

  const skillLevels = [
    { value: 'beginner', label: 'Home Baker (Beginner)' },
    { value: 'intermediate', label: 'Enthusiast (Intermediate)' },
    { value: 'advanced', label: 'Advanced Baker' },
    { value: 'pro', label: 'Professional Pizzaiolo' },
  ];

  const genderOptions = Object.values(Gender).map((g) => ({
    value: g,
    label: t(`profile.genders.${(g as string).toLowerCase()}`),
  }));

  const renderTabButton = (id: 'overview' | 'mylab' | 'settings', label: string, icon: React.FC<any>) => {
    const Icon = icon;
    const isActive = activeTab === id;
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive
          ? 'bg-lime-500 text-white shadow-lg shadow-lime-500/30'
          : 'text-slate-600 hover:bg-slate-100'
          }`}
      >
        <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
        {label}
      </button>
    );
  };

  return (
    <div className="mx-auto max-w-5xl animate-fade-in pb-20">
      {/* Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100 mb-8 mt-4">
        <div className="h-32 bg-gradient-to-r from-lime-400 to-lime-600 opacity-90"></div>
        <div className="relative px-8 pb-8 flex flex-col sm:flex-row items-center sm:items-end -mt-12 gap-6">
          <div className="relative">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md bg-white"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 text-4xl font-bold text-slate-400 ring-4 ring-white shadow-md">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            {hasProAccess && (
              <div className="absolute bottom-1 right-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-1.5 rounded-full shadow-sm ring-2 ring-white" title="Pro Member">
                <SparklesIcon className="h-4 w-4" />
              </div>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left mb-2">
            <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
            <p className="text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-2">
              {user.email}
              {hasProAccess && <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">PRO</span>}
            </p>
            {user.location && (
              <p className="text-sm text-slate-400 mt-1 flex items-center justify-center sm:justify-start gap-1">
                <GlobeAltIcon className="h-3 w-3" /> {user.location}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition-colors text-sm"
            >
              <PencilIcon className="h-4 w-4" />
              {isEditing ? t('profile.cancel') : t('profile.edit_profile')}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 pb-2 sm:px-8 border-t border-slate-100 pt-2 flex gap-2 overflow-x-auto no-scrollbar">
          {renderTabButton('overview', 'Overview', UserCircleIcon)}
          {renderTabButton('mylab', 'My Equipment & Levains', BeakerIcon)}
          {renderTabButton('settings', 'Settings & Legal', SettingsIcon)}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">

          {activeTab === 'overview' && (
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 space-y-8 animate-fadeIn">
              {isEditing ? (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">Edit Profile</h3>

                  <div className="flex justify-center mb-6">
                    <ImageUpload
                      currentImage={formData.avatar}
                      onUpload={(url) => setFormData(prev => ({ ...prev, avatar: url }))}
                      onDelete={() => setFormData(prev => ({ ...prev, avatar: undefined }))}
                      path={`users/${user?.uid || 'guest'}/avatar`}
                      label="Profile Photo"
                      circle
                      className="items-center"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('profile.name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-200 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t('profile.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        disabled
                        className="w-full rounded-xl border-slate-200 bg-slate-50 text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Skills</label>
                      <select
                        name="skillLevel"
                        value={formData.skillLevel || ''}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-200 focus:border-lime-500 focus:ring-lime-500"
                      >
                        <option value="">Select Level</option>
                        {skillLevels.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="City, Country"
                        value={formData.location || ''}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-200 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Website</label>
                      <input
                        type="text"
                        name="website"
                        placeholder="https://..."
                        value={formData.website || ''}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-200 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Instagram Handle</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400">@</span>
                        <input
                          type="text"
                          name="instagramHandle"
                          placeholder="username"
                          value={formData.instagramHandle || ''}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border-slate-200 pl-7 focus:border-lime-500 focus:ring-lime-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
                      <textarea
                        name="bio"
                        rows={3}
                        placeholder="Tell us about your pizza journey..."
                        value={formData.bio || ''}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-slate-200 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                    <button onClick={handleCancel} className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg">Cancel</button>
                    <button onClick={handleSave} className="px-6 py-2 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all">Save Changes</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">About</h4>
                      <div className="space-y-3">
                        {user.bio ? (
                          <p className="text-slate-700 leading-relaxed">{user.bio}</p>
                        ) : (
                          <p className="text-slate-400 italic">No bio added yet.</p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {user.skillLevel && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                              {user.skillLevel}
                            </span>
                          )}
                          {user.location && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                              {user.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Contact & Social</h4>
                      <div className="space-y-2">
                        {user.website && (
                          <a href={user.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lime-600 hover:text-lime-700">
                            <GlobeAltIcon className="h-4 w-4" /> {user.website}
                          </a>
                        )}
                        {user.instagramHandle && (
                          <a href={`https://instagram.com/${user.instagramHandle.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                            <span>@</span> {user.instagramHandle.replace('@', '')}
                          </a>
                        )}
                        {!user.website && !user.instagramHandle && (
                          <p className="text-slate-400 text-sm italic">No contact info provided.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Activity Stats</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <span className="block text-2xl font-bold text-slate-800">{batches.length}</span>
                        <span className="text-xs text-slate-500 font-medium uppercase">Batches</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <span className="block text-2xl font-bold text-slate-800">{levains.length}</span>
                        <span className="text-xs text-slate-500 font-medium uppercase">Levains</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <span className="block text-2xl font-bold text-slate-800">{ovens.length}</span>
                        <span className="text-xs text-slate-500 font-medium uppercase">Ovens</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <span className="block text-2xl font-bold text-slate-800">{goals.length}</span>
                        <span className="text-xs text-slate-500 font-medium uppercase">Goals</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {activeTab === 'mylab' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Ovens Section */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                      <FireIcon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">{t('profile.ovens.title')}</h2>
                  </div>
                  <button
                    onClick={() => { setEditingOven(null); setIsOvenModalOpen(true); }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span className="text-lg leading-none">+</span> {t('profile.ovens.add_oven')}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ovens.length === 0 ? (
                    <div className="col-span-full py-8 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      {t('profile.ovens.empty_state')}
                    </div>
                  ) : (
                    ovens.map(oven => (
                      <div key={oven.id} className="relative group p-4 rounded-2xl bg-white border border-slate-200 hover:border-lime-200 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-slate-800">{oven.name}</h3>
                          {oven.isDefault && <StarIcon className="h-4 w-4 text-amber-400 fill-current" />}
                        </div>
                        <p className="text-sm text-slate-500 mb-4">{t(`profile.ovens.types.${oven.type.toLowerCase()}`)} • {oven.maxTemperature}°C</p>
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setDefaultOven(oven.id)} title="Set Default" className="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors">
                            <StarIcon className="h-4 w-4" />
                          </button>
                          <button onClick={() => { setEditingOven(oven); setIsOvenModalOpen(true); }} className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button onClick={() => handleDeleteOven(oven.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Levains Section */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-100 text-pink-600 rounded-xl">
                      <BeakerIcon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">{t('profile.levains.title')}</h2>
                  </div>
                  <button
                    onClick={() => { setEditingLevain(null); setIsLevainModalOpen(true); }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <span className="text-lg leading-none">+</span> {t('profile.levains.add_levain')}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {levains.length === 0 ? (
                    <div className="col-span-full py-8 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      {t('profile.levains.empty_state')}
                    </div>
                  ) : (
                    levains.map(levain => (
                      <div key={levain.id} className="relative group p-4 rounded-2xl bg-white border border-slate-200 hover:border-pink-200 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-slate-800">{levain.name}</h3>
                          {levain.isDefault && <StarIcon className="h-4 w-4 text-amber-400 fill-current" />}
                        </div>
                        <p className="text-sm text-slate-500 mb-4">{levain.hydration}% Hydration • {levain.status}</p>
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => onNavigate('mylab/levain')} title="Manage" className="p-1.5 text-slate-400 hover:text-lime-500 hover:bg-lime-50 rounded-lg transition-colors">
                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                          </button>
                          <button onClick={() => setDefaultLevain(levain.id)} title="Set Default" className="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors">
                            <StarIcon className="h-4 w-4" />
                          </button>
                          <button onClick={() => { setEditingLevain(levain); setIsLevainModalOpen(true); }} className="p-1.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button onClick={() => handleDeleteLevain(levain.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 space-y-8 animate-fadeIn">
              {/* App Preferences */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5 text-slate-500" />
                  App Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.unit_system')}</label>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <p className="text-slate-500 text-sm mb-3">Unit system selection is currently managed in Global Settings.</p>
                      <button onClick={() => onNavigate('settings')} className="text-lime-600 font-bold text-sm hover:underline">
                        Go to Global Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-slate-500" />
                  Legal Support
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button onClick={() => onNavigate('terms')} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors text-left group">
                    <span className="font-medium text-slate-700">Terms of Service</span>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                  </button>
                  <button onClick={() => onNavigate('privacy')} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors text-left group">
                    <span className="font-medium text-slate-700">Privacy Policy</span>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Account Actions */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 text-red-500 flex items-center gap-2">
                  Danger Zone
                </h3>
                <button
                  onClick={logout}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold transition-colors w-full sm:w-auto justify-center"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  <span>{t('auth.sign_out')}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar (Right) */}
        <div className="space-y-6">
          {/* Pro Card */}
          {!hasProAccess ? (
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <SparklesIcon className="h-32 w-32" />
              </div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Upgrade to Pro</h3>
              <p className="text-slate-300 text-sm mb-6 relative z-10">
                Unlock unlimited recipes, advanced tools, and detailed insights.
              </p>
              <button
                onClick={() => onNavigate('settings')} // Or a dedicated pro page
                className="w-full py-3 bg-gradient-to-r from-lime-400 to-lime-600 hover:from-lime-300 hover:to-lime-500 text-slate-900 font-bold rounded-xl shadow-lg shadow-lime-500/20 transition-all active:scale-95 relative z-10"
              >
                Go Pro Now
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-100 text-amber-900">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-amber-200 rounded-full text-amber-700">
                  <SparklesIcon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Pro Member</h3>
              </div>
              <p className="text-sm opacity-80">You have full access to all Lab Pro features.</p>
            </div>
          )}

          {/* Resources Card */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5 text-lime-500" />
              Resources
            </h3>
            <div className="space-y-3">
              <button onClick={() => onNavigate('references')} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookmarkSquareIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-700 text-sm">{t('profile.resources.tech_references')}</p>
                  <p className="text-xs text-slate-500">Books, guides & standards</p>
                </div>
              </button>
              <button onClick={() => onNavigate('flours')} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group">
                <div className="h-10 w-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FlourIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-700 text-sm">{t('profile.resources.flours_library')}</p>
                  <p className="text-xs text-slate-500">Database of flour types</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <OvenModal
        isOpen={isOvenModalOpen}
        onClose={() => { setIsOvenModalOpen(false); setEditingOven(null); }}
        onSave={handleSaveOven}
        ovenToEdit={editingOven}
      />
      <LevainModal
        isOpen={isLevainModalOpen}
        onClose={() => { setIsLevainModalOpen(false); setEditingLevain(null); }}
        onSave={handleSaveLevain}
        levainToEdit={editingLevain}
      />
    </div>
  );
};

export default ProfilePage;
