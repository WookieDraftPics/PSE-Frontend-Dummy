//no dynamic input because this button only exists as this version
const GuestButton = () => {
  return (
    <div>
      <h3>------ODER------</h3>
      <br></br>
      <button className="bg-guestButton w-80 h-10 text-3xl text-textGrayish rounded-full border border-black ">
        Weiter als Gast
      </button>
    </div>
  );
};

export default GuestButton;
