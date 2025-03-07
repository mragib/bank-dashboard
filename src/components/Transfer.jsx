import Balance from "./Balance";
import Statistics from "./Statistics";

function Transfer() {
  const defaultData = [
    { name: "Livia Bator", designation: "CEO", is_active: true },
    { name: "Randy Press", designation: "Director", is_active: false },
    { name: "Workman", designation: "Designer", is_active: false },
  ];

  return (
    // <div className="pt-4 px-4 ">
    //   <div className="w-[325px] h-[230px] flex flex-col gap-6 mx-auto">
    //     <h2 className="font-semibold text-[18px] text-[#343C6A]">
    //       Quick Transfer
    //     </h2>
    //     <div className="flex items-center gap-6 justify-center ">
    //       {defaultData.map((user, index) => {
    //         return (
    //           <div
    //             key={index}
    //             className="grid items-center justify-center gap-3 "
    //           >
    //             <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
    //               <img src={`/assets/user${index}.svg`} alt={user.name} />
    //             </div>
    //             <div className="grid items-center justify-center gap-1">
    //               <p className="text-[#232323] text-xs text-center">
    //                 {user.name}
    //               </p>
    //               <p className="text-[#718EBF] text-xs text-center">
    //                 {user.designation}
    //               </p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //       <div className="flex items-center ">
    //         <button className="shadow-[0px_4px_10px_rgba(0,0,0,0.15)] hover:bg-gray-50 w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center">
    //           <img src="/assets/caret-right.svg" alt="Next" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="px-8 pt-10 overflow-hidden mb-15">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 grid md:gap-[18px] gap-4">
            <div className="flex justify-between items-center pb-4">
              <p className="font-semibold text-[18px] text-[#343C6A] md:text-[22px]">
                Quick Transfer
              </p>
            </div>
            <div className="bg-[#fff] rounded-[25px] md:h-[276px] px-3 py-6 grid gap-4">
              <div className="flex items-center gap-6 justify-center  ">
                {defaultData.map((user, index) => {
                  return (
                    <div
                      key={index}
                      className="grid items-center justify-center gap-3 "
                    >
                      <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] overflow-hidden rounded-full">
                        <img src={`/assets/user${index}.svg`} alt={user.name} />
                      </div>
                      <div className="grid items-center justify-center gap-1">
                        <p
                          className={`text-[#232323] text-xs text-center md:text-[16px] ${
                            user.is_active ? " font-bold" : " "
                          } `}
                        >
                          {user.name}
                        </p>
                        <p
                          className={`text-[#718EBF] text-xs text-center md:text-[15px] ${
                            user.is_active ? " font-bold" : " "
                          } `}
                        >
                          {user.designation}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center ">
                  <button className="shadow-[0px_4px_10px_rgba(0,0,0,0.15)] hover:bg-gray-50 w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center">
                    <img src="/assets/caret-right.svg" alt="Next" />
                  </button>
                </div>
              </div>
              <div className="flex h-[40px] md:h-[50px]  md:px-4">
                <div className="flex h-full items-center text-[#718EBF] mr-[28px] text-[13px] md:text-[16px]">
                  Write Amount
                </div>
                <div className="flex flex-1 h-full rounded-full bg-[#edf1f7] focus-within:bg-[#e1f1f1]">
                  <div className="flex flex-1 h-full items-center">
                    <input
                      type="text"
                      className="w-full bg-transparent border-none outline-none px-[20px] md:px-[30px] text-[#718EBF] text-[13px] md:text-[16px]"
                      value="525.50"
                    />
                  </div>
                  <button className="flex items-center h-full px-6 md:px-8 gap-3 rounded-full bg-[#1814f3] hover:bg-[#1814f3]/80 text-white cursor-pointer">
                    Send
                    <img src="/assets/send.svg" alt="Icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Balance />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transfer;
