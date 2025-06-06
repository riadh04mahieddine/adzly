'use client';

import { useState } from 'react';

interface InitialQuestionnaireProps {
  onSubmit: (data: {
    experienceLevel: string;
    platformsUsed: string[];
    monthlyConversions: string;
    industry: string;
    product: string;
  }) => void;
}

export default function InitialQuestionnaire({ onSubmit }: InitialQuestionnaireProps) {
  const [formData, setFormData] = useState({
    experienceLevel: '',
    platformsUsed: [] as string[],
    monthlyConversions: '',
    industry: '',
    product: '',
  });
  
  const [errors, setErrors] = useState({
    experienceLevel: '',
    platformsUsed: '',
    monthlyConversions: '',
    industry: '',
    product: '',
  });

  const handleExperienceLevelChange = (level: string) => {
    setFormData({
      ...formData,
      experienceLevel: level,
    });
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData({
      ...formData,
      platformsUsed: formData.platformsUsed.includes(platform)
        ? formData.platformsUsed.filter(p => p !== platform)
        : [...formData.platformsUsed, platform],
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      experienceLevel: '',
      platformsUsed: '',
      monthlyConversions: '',
      industry: '',
      product: '',
    };

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Veuillez sélectionner votre niveau d\'expérience';
      isValid = false;
    }

    if (formData.platformsUsed.length === 0) {
      newErrors.platformsUsed = 'Veuillez sélectionner au moins une plateforme';
      isValid = false;
    }

    if (!formData.monthlyConversions) {
      newErrors.monthlyConversions = 'Veuillez indiquer votre nombre de conversions mensuelles';
      isValid = false;
    }

    if (!formData.industry) {
      newErrors.industry = 'Veuillez sélectionner votre secteur d\'activité';
      isValid = false;
    }

    if (!formData.product) {
      newErrors.product = 'Veuillez décrire votre produit ou service';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Niveau d'expérience */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Quel est votre niveau d'expérience en publicité digitale ?
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {['débutant', 'intermédiaire', 'avancé'].map((level) => (
            <div 
              key={level}
              onClick={() => handleExperienceLevelChange(level)}
              className={`relative rounded-lg border p-4 flex cursor-pointer focus:outline-none ${
                formData.experienceLevel === level
                  ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 capitalize">{level}</p>
                    {level === 'débutant' && (
                      <p className="text-gray-500">Peu ou pas d'expérience</p>
                    )}
                    {level === 'intermédiaire' && (
                      <p className="text-gray-500">Quelques campagnes lancées</p>
                    )}
                    {level === 'avancé' && (
                      <p className="text-gray-500">Gestion régulière de campagnes</p>
                    )}
                  </div>
                </div>
                {formData.experienceLevel === level && (
                  <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        {errors.experienceLevel && (
          <p className="mt-2 text-sm text-red-600">{errors.experienceLevel}</p>
        )}
      </div>

      {/* Plateformes utilisées */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Sur quelles plateformes avez-vous déjà fait de la publicité ? (plusieurs choix possibles)
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {
            [
              { name: 'Google Ads', icon: '/images/partenaire/Google__G__logo.svg.webp' },
              { name: 'Facebook Ads', icon: '/images/partenaire/Facebook.svg.webp' },
              { name: 'Instagram Ads', icon: '/images/partenaire/insta.jpeg' },
              { name: 'LinkedIn Ads', icon: '/images/partenaire/LinkedIn_logo.png' },
              { name: 'TikTok Ads', icon: '/images/partenaire/snap.png' }, // Utilisation de snap comme substitut pour TikTok
              { name: 'Aucune', icon: '' }
            ].map((platform) => (
              <div 
                key={platform.name}
                onClick={() => handlePlatformToggle(platform.name)}
                className={`relative rounded-lg border p-4 flex cursor-pointer focus:outline-none ${
                  formData.platformsUsed.includes(platform.name)
                    ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    {platform.icon && (
                      <div className="flex-shrink-0 h-10 w-10 mr-3">
                        <img 
                          src={platform.icon} 
                          alt={`${platform.name} logo`} 
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{platform.name}</p>
                    </div>
                  </div>
                  {formData.platformsUsed.includes(platform.name) && (
                    <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            ))
          }
        </div>
        {errors.platformsUsed && (
          <p className="mt-2 text-sm text-red-600">{errors.platformsUsed}</p>
        )}
      </div>

      {/* Conversions mensuelles */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Combien de conversions (ventes, leads, etc.) générez-vous mensuellement avec vos campagnes publicitaires actuelles ?
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {['Moins de 10', '10 à 30', '30 à 100', 'Plus de 100', 'Je ne sais pas'].map((range) => (
            <div 
              key={range}
              onClick={() => setFormData({ ...formData, monthlyConversions: range })}
              className={`relative rounded-lg border p-4 flex cursor-pointer focus:outline-none ${
                formData.monthlyConversions === range
                  ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{range}</p>
                  </div>
                </div>
                {formData.monthlyConversions === range && (
                  <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        {errors.monthlyConversions && (
          <p className="mt-2 text-sm text-red-600">{errors.monthlyConversions}</p>
        )}
      </div>

      {/* Secteur d'activité */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
          Quel est votre secteur d'activité ?
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">Sélectionnez un secteur</option>
          <option value="energie">Énergie & Environnement</option>
          <option value="immobilier">Immobilier</option>
          <option value="sante">Santé & Bien-être</option>
          <option value="education">Éducation & Formation</option>
          <option value="finance">Finance & Assurance</option>
          <option value="ecommerce">E-commerce & Retail</option>
          <option value="tech">Technologie & SaaS</option>
          <option value="services">Services aux entreprises</option>
          <option value="tourisme">Tourisme & Loisirs</option>
          <option value="autre">Autre</option>
        </select>
        {errors.industry && (
          <p className="mt-2 text-sm text-red-600">{errors.industry}</p>
        )}
      </div>

      {/* Produit ou service */}
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700">
          Décrivez le produit ou service pour lequel vous souhaitez faire de la publicité
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="product"
            id="product"
            value={formData.product}
            onChange={handleInputChange}
            placeholder="Ex: Installation de panneaux solaires, Formation en ligne, etc."
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {errors.product && (
          <p className="mt-2 text-sm text-red-600">{errors.product}</p>
        )}
      </div>

      {/* Submit button */}
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Créer ma campagne
          </button>
        </div>
      </div>
    </form>
  );
}
