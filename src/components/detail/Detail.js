import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import Actor from "../../assets/poster.jpg";
import "../../index.css";

const MovieInfo = ({ movie, directors }) => (
  <div className="rmdb-movieinfo">
    <div className="rmdb-movieinfo-content">
      <div className="rmdb-movieinfo-thumb">ảnh film</div>
      <div className="rmdb-movieinfo-text">
        <h1>Thưa mẹ con đi</h1>
        <h2>Năm sản xuất:0000</h2>
        <h2>Thể loại:tình cảm, gia đình, nhân văn, xã hội</h2>
        <h2> Nội dung</h2>
        <p>
          noi dung cua phim noi dung cua phim noi dung cua phim noi dung cua
          phim noi dung cua phim noi dung cua phim noi dung cua phim noi dung
          cua phim noi dung cua phim noi dung cua phim noi dung cua phim noi
          dung cua phim noi dung cua phim noi dung cua phim noi dung cua phim
          noi dung cua phim noi dung cua phim
        </p>
        <h2>Đánh giá</h2>
        <div className="rmdb-rating">
          <meter min="0" max="100" optimum="100" low="40" high="70"></meter>
          <p className="rmdb-score">7.8</p>
        </div>
      </div>
      <FontAwesome className="fa-film" name="film" size="5x" />
    </div>

    <div className="rmdb-movieinfo-actor">
      <br></br> <h2>Diễn viên</h2> <br></br>
      <div className="row">
        <div className="col-sm-3">
          <div className="image-thumbnail">
            <img src={Actor} />
          </div>
        </div>

        <div className="col-sm-3">
          <div className="image-thumbnail">
            <img src={Actor} />
          </div>
        </div>

        <div className="col-sm-3">
          <div className="image-thumbnail">
            <img src={Actor} />
          </div>
        </div>

        <div className="col-sm-3">
          <div className="image-thumbnail">
            <img src={Actor} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

export default MovieInfo;
