import * as React from 'react';
import { Label } from '@fluentui/react-components';

export interface IStarRatingControlProps {
  value: number;
  options: ComponentFramework.PropertyHelper.OptionMetadata[];
  onChange: (value: number) => void;

}

export const StarRatingControl: React.FC<IStarRatingControlProps> = ({ value, options, onChange }) => {
  const sortedOptions = [...options].sort((a, b) => a.Value - b.Value);

  return (
    <div className="star-rating">
      {sortedOptions.map((option) => (
        <span
          key={option.Value}
          style={{
            cursor: "pointer",
            color: option.Value <= value ? "#FFD700" : "#E0E0E0",
            fontSize: "2rem",
            transition: "color 0.1s",
            textShadow: option.Value <= value ? "0 0 2px rgba(255, 215, 0, 0.6)" : "none"
          }} 
          onClick={() => onChange(option.Value)}
          title={option.Label || ""}
        >
          ★
        </span>
      ))}
    </div>
  );
};