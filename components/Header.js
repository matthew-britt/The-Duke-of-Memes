const Header = () => (
  <div className="header">
    <img
      alt="the.duke.of.memes's profile picture"
      src="https://instagram.faus1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/21147211_1950263001852599_8589978997666873344_a.jpg?_nc_ht=instagram.faus1-1.fna.fbcdn.net&amp;_nc_ohc=E3NxDyDpEXAAX-aAQ-2&amp;oh=3b6810a600dfc6601c5ce2d28bd73389&amp;oe=5F476A77"
    ></img>
    <div className="a">
      <h1>Free minds. Free markets. Dank memes.</h1>
      
    </div>
    <style jsx>
      {`
        img {
          border-radius: 180px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 25%;
        }
        .header {
          background: #faebd7;
         
          position: fixed;
          width: 100%;
          z-index: 1;
          height: 51%;

          top: 0;
          left: 0;
        }
        div.a {
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default Header;
