import Icons from "../assets/icons";


export const renderButtonContent = (isLoading, label,Icon) => {
    return isLoading ? (
      <Icons.LuLoader2 className="animate-spin" size={24} />
    ) : (
      <div className="flex items-center justify-center gap-4">
        <p>{label}</p>
        {Icon? Icon:<Icons.FaArrowRightLong className="mt-[2px]" />}
      </div>
    );
  };
  