import React from "react";

export default function Button({
  onClick,
  disabled,
  icon: Icon,
  text,
  className = "",
  iconSize = 18,
  iconColor = "#D3D4D4",
  textClass = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-x-2 cursor-pointer px-[14px] py-[7px] -mr-[14px] rounded-lg hover:bg-[#222628]/60  transition-all duration-150 ease-in-out ${className}`}
    >
      {Icon && <Icon size={iconSize} weight="bold" color={iconColor} />}
      <div
        className={`text-[#D3D4D4] text-xs font-bold leading-[18px] ${textClass}`}
      >
        {text}
      </div>
    </button>
  );
}