import Image from "next/image";
import React from "react";

const TableFlow = () => {
  return (
    <>
      <div className=" w-full glass-morph-table">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto max-w-full">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="font-medium">
                    <tr className="lexend text-lg glass-morph-header">
                      {/* <th scope="col" className="px-6 py-2 lg:py-4 text-left">
                        Variables
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Next Level Funding
                      </th>
                      <th scope="col" className="px-6 py-4">
                        FundedNext
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Trader4T
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Profit Share From Challenge Phase Profits
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        Balance Based
                      </td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">15%</td>
                      <td className="whitespace-nowrap px-6 py-4">0%</td>
                      <td className="whitespace-nowrap px-6 py-4">2%</td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Drawback
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center">
                        <Image width={300} height={300}
                          src="/assets/good.svg"
                          className="w-5 h-auto"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 ">
                        <Image width={300} height={300}
                          src="/assets/bad.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex justify-center">
                        <Image width={300} height={300}
                          src="/assets/bad.svg"
                          className="w-5 h-auto"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Image width={300} height={300}
                          src="/assets/good.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>{" "}
                      <td className="whitespace-nowrap px-6 py-4 ">
                        <Image width={300} height={300}
                          src="/assets/bad.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 ">
                        <Image width={300} height={300}
                          src="/assets/good.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Image width={300} height={300}
                          src="/assets/good.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>{" "}
                      <td className="whitespace-nowrap px-6 py-4">
                        <Image width={300} height={300}
                          src="/assets/bad.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Image width={300} height={300}
                          src="/assets/bad.svg"
                          className="w-5 h-auto m-auto"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">15%</td>
                      <td className="whitespace-nowrap px-6 py-4">0%</td>
                      <td className="whitespace-nowrap px-6 py-4">2%</td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">15%</td>
                      <td className="whitespace-nowrap px-6 py-4">0%</td>
                      <td className="whitespace-nowrap px-6 py-4">2%</td>
                    </tr>
                    <tr className="lexend font-bold">
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-left">
                        Balance Based
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        Balancaed Base
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        Balanced Base
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        Balanced Base
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableFlow;
