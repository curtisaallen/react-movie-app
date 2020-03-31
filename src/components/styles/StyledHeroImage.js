import styled from 'styled-components';

export const StyledHeroImage = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), #1c1c1c`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;
  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }
  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;
    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      color: #fff;
      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }
    p {
      font-family: 'Abel', sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: #fff;
      @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
        color: #fff;
      }
    }
    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }
  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .movieinfo-content {
    max-width: 1280px;
    min-height: 450px;
    position: relative;
    margin: 0px auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
}
.movieinfo-thumb {
  width: 300px;
  float: left;
}
.movieinfo-thumb img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: all 0.3s ease 0s;
  border-radius: 20px;
}
.movieinfo-text {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(255, 255, 255);
  padding: 40px;
  overflow: hidden;
}
.movieinfo-text h1 {
  font-family: Abel, sans-serif;
  font-size: 48px;
  margin: 0px;
}
.movieinfo-text h3 {
  font-size: 16px;
  line-height: 0;
  margin-top: 30px;
}
.movieinfo-text p {
  font-family: Abel, sans-serif;
  font-size: 18px;
  line-height: 26px;
}
.rating-director {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
}
.movieinfo-text h3 {
  font-size: 16px;
  line-height: 0;
  margin-top: 30px;
}
.score {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  color: rgb(0, 0, 0);
  font-weight: 800;
  background: rgb(255, 255, 255);
  border-radius: 25px;
  margin: 0px;
}
.director {
  margin: 0px 0px 0px 40px;
}
.director p {
  margin: 0px;
}
.movieinfo-hero {
  padding: 4em 0 0 0;
}
`;