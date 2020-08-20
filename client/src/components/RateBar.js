import React, { Component } from "react";

class RateBar extends Component {
  state = {
    buyrating: 5,
    holdrating: "",
    sellrating: ""
  };

  render() {
    return this.state;
  }




}

// const RateBar = (props) => {
//     const { bgcolor, buyrating } = props;
//     return (
//       <div>
//         <div>
//           <span>{`${buyrating}%`}</span>
//         </div>
//       </div>
//     );
//   };
  
  export default RateBar;