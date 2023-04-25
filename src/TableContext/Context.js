import React, { createContext, useState } from "react";
import { BsSortAlphaDown, BsSortNumericDown } from "react-icons/bs";

// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// export const TableData = createContext();
// const Context = (props) => {
//   const file = "http://localhost:3004/products";

//   const [data, setData] = useState([]);
//   const [heading, setHeading] = useState([]);
//   useEffect(() => {
//     axios.get(file).then((res) => {
//       setData(res.data);
//       setHeading(res.data[0]);
//     });
//   }, [file]);

//   console.log(data);

//   console.log(data);
//   const keyValue = Object.keys(heading);

//   const tableHeading = () => {
//     return keyValue.map((item) => {
//       console.log(item);
//       return <th key={item}>{item}</th>;
//     });
//   };

//   const tableData = () => {
//     return data.map((item) => {
//       return (
//         <tr>
//           {keyValue.map((value) => {
//             return <td>{item[value]}</td>;
//           })}
//         </tr>
//       );
//     });
//   };

//   return (
//     <TableData.Provider
//       value={{
//         heading: tableHeading(),
//         headingData: tableData(),
//       }}
//     >
//       {props.children}
//     </TableData.Provider>
//   );
// };

// export default Context;

export const TableData = createContext();
const Context = (props) => {
  const Config = [
    { Header: "itemname", render: (user) => user.itemname },
    { Header: "price", render: (user) => user.price },
    { Header: "quantity", render: (user) => user.quantity },
    { Header: "image", render: (user) => user.image },
    { Header: "id", render: (user) => user.id },
  ];
  const Data = [
    {
      itemname: "Mouse Corsair M65 Gaming Mouse",
      price: 5499,
      quantity: 1,
      image:
        "https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png",
      id: 1,
    },
    {
      itemname:
        "Carbide Series SPEC-OMEGA RGB Mid-Tower Tempered Glass Gaming Case-White",
      price: 15599,
      quantity: 1,
      image:
        "https://www.corsair.com/medias/sys_master/images/images/h98/hbd/8994288697374/-CC-9011141-WW-Gallery-SPEC-OMEGA-RGB-WHT-01.png",
      id: 2,
    },
    {
      itemname: "STRAFE RGB MK.2 Mechanical Gaming Keyboard — CHERRY® MX Red",
      price: 13999,
      quantity: 1,
      image:
        "https://www.corsair.com/medias/sys_master/images/images/hc6/h70/9030612090910/-CH-9104110-NA-Gallery-Strafe-Mk2-RGB-04.png",
      id: 3,
    },
    {
      itemname: "T1 RACE 2018 Gaming Chair — Black/Red",
      price: 8999,
      quantity: 1,
      image:
        "https://www.corsair.com/medias/sys_master/images/images/h80/h49/8918703734814/-CF-9010013-WW-Gallery-T1-Chair-2018-03-RED.png",
      id: 4,
    },
    {
      itemname:
        "CORSAIR XENEON 32QHD240 32-Inch IPS QHD (2560 x1440), 240Hz Refresh Rate, HDR600 Gaming Monitor",
      price: 25499,
      quantity: 1,
      image:
        "https://www.corsair.com/ww/en/medias/sys_master/images/images/h53/h15/10199804084254/CM-9020002-AU/Gallery/CM-9020002-AU_01/-CM-9020002-AU-Gallery-CM-9020002-AU-01.png_515Wx515H",
      id: 5,
    },
  ];

  const [state, setState] = useState(true);
  const [statePrice, setStatePrice] = useState(true);
  //by name sorting
  const sorter1 = (a, b) =>
    state ? Data : a.itemname.toLowerCase() > b.itemname.toLowerCase() ? 1 : -1;
  Data.sort(sorter1);

  //by price sorting
  const sorter2 = (a, b) => (statePrice ? Data : a.price > b.price ? 1 : -1);
  Data.sort(sorter2);

  //   const keyValue = Object.values(Config);
  const tableHeading = () => {
    return Config.map((item) => {
      return (
        <th key={item.id}>
          {item.Header}
          {item.Header === "itemname" && (
            <BsSortAlphaDown
              className="icons"
              onClick={() => {
                setState(!state);
              }}
            />
          )}
          {item.Header === "price" && (
            <BsSortNumericDown
              className="icons"
              onClick={() => {
                setStatePrice(!statePrice);
              }}
            />
          )}
        </th>
      );
    });
  };

  const tableData = () => {
    return Data.map((item) => {
      return (
        <tr>
          {Config.map((value) => {
            return <td>{value.render(item)}</td>;
            // return <td>{item[value.Header]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <TableData.Provider
      value={{
        heading: tableHeading(),
        headingData: tableData(),
      }}
    >
      {props.children}
    </TableData.Provider>
  );
};

export default Context;
