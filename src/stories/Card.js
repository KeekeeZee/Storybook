import React from "react";
import SimpleButton from "./SimpleButton"; // Réutilisation de ton composant bouton d'icône

const Card = ({
  title = "Titre par défaut",
  description = "Description par défaut",
  image = null, // Image ou illustration
  buttonLabel = "Créer",
  buttonIcon = "circle-plus",
  buttonTheme = "secondary", // Thème du bouton
  onClick, // Fonction déclenchée par le bouton
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl flex flex-col justify-start items-center gap-6">
      {/* Section image */}
      <div className="flex justify-center items-center w-full max-h-fit bg-gray-800 rounded-t-2xl overflow-hidden object-cover">
        {image ? (
          <img
            src={image}
            alt="Illustration"
            className="opacity-80 h-full w-full"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center opacity-80 bg-white">
            <div className="w-1/3 h-3/4 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-1 bg-gray-300 rounded my-1"></div>
            <div className="w-1/4 h-1/2 bg-gray-300 rounded-sm"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full mt-2"></div>
          </div>
        )}
      </div>

      {/* Section contenu */}
      <div className="flex flex-col w-full p-4">
        <div className="space-y-2">
          <h2 className="text-black text-xl md:text-2xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>
        <div>
          <SimpleButton
            label="Créer"
            leftIcon="faCirclePlus"
            rightIcon={null}
            rounded
            showLabel
            showLeftIcon
            size="L"
            theme="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
