// import React, { Component } from "react";
// import "antd/dist/antd.css";

// import { StarOutlined } from "@ant-design/icons";

// import { Rate, Card, Divider, Col } from "antd";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const { Meta } = Card;

// export default class ListItem extends Component {
//   renderMovie = () => {
//     if (this.props.movies.results) {
//       const { results } = this.props.movies;
//       console.log(results);
//       return results.map((e) => {
//         const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
//         const title = e.title;
//         return (
//           <React.Fragment>
//             {/* <Col className="gutter-row" span={this.props.spanNumber}> */}
//             <div>
//               <Card
//                 className="card"
//                 hoverable
//                 cover={<img alt="example" src={urlImg} />}
//               >
//                 <div className="content">
//                   <Meta title={title} />
//                   <span>
//                     <Rate disabled defaultValue={1} style={{ zIndex: -999 }} />
//                   </span>
//                   <b style={{ marginLeft: "-20px", zIndex: 9999 }}>
//                     {e.vote_average}/10
//                   </b>
//                   <br />
//                   <span>
//                     <b>Ngày khởi chiếu:</b> <br />
//                     <Meta title={e.release_date} />
//                   </span>
//                 </div>
//               </Card>
//             </div>
//             {/* </Col> */}
//           </React.Fragment>
//         );
//       });
//     }
//   };

//   renderMoviesRating = () => {
//     if (this.props.moviesRating.results) {
//       const { results } = this.props.movies;
//       return results.map((e) => {
//         const urlImg = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${e.poster_path}`;
//         const title = e.title;
//         return (
//           <React.Fragment>
//             {/* <Col className="gutter-row" span={this.props.spanNumber}> */}
//             <div>
//               <Card
//                 className="card"
//                 hoverable
//                 cover={<img alt="example" src={urlImg} />}
//               >
//                 <div className="content">
//                   <Meta title={title} />
//                   <span>
//                     <Rate disabled defaultValue={1} style={{ zIndex: -999 }} />
//                   </span>
//                   <b style={{ marginLeft: "-20px", zIndex: 9999 }}>
//                     {e.vote_average}/10
//                   </b>
//                   <br />
//                   <span>
//                     <b>Ngày khởi chiếu:</b> <br />
//                     <Meta title={e.release_date} />
//                   </span>
//                 </div>
//               </Card>
//             </div>
//             {/* </Col> */}
//           </React.Fragment>
//         );
//       });
//     }
//   };

//   render;
//   render() {
//     // const settings = {
//     //   // dots: true,
//     //   infinite: false,
//     //   speed: 300,
//     //   slidesToShow: 4,
//     //   slidesToScroll: 4,
//     //   responsive: [
//     //     {
//     //       breakpoint: 1024,
//     //       settings: {
//     //         slidesToShow: 3,
//     //         slidesToScroll: 3,
//     //         infinite: true,
//     //         dots: true,
//     //       },
//     //     },
//     //     {
//     //       breakpoint: 600,
//     //       settings: {
//     //         slidesToShow: 2,
//     //         slidesToScroll: 2,
//     //       },
//     //     },
//     //     {
//     //       breakpoint: 480,
//     //       settings: {
//     //         slidesToShow: 1,
//     //         slidesToScroll: 1,
//     //       },
//     //     },
//     //   ],
//     // };
//     return (
//       <React.Fragment>
//         <div>
//           <Divider
//             orientation="left"
//             style={{ color: "#333", fontWeight: "normal", padding: 0 }}
//           >
//             <p>{this.props.genre_id}</p>
//           </Divider>
//           <Slider
//             {...settings}
//             style={{
//               width: "90%",
//               margin: "0 auto",
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             {this.renderMovie()}
//           </Slider>
//         </div>
//         <div>{this.renderMoviesRating()}</div>
//       </React.Fragment>
//     );
//   }
// }
