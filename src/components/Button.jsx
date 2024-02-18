const Button = ({ onClick, icon, ariaLabel = "sort icon button" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-1 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  ml-3  hover:text-white  font-medium  text-sm p-1 text-center inline-flex items-center me-2 "
      }
    >
      <img src={icon} alt="icon" />
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
};

export default Button;
