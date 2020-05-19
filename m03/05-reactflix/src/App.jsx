import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "normalize.css";
import "milligram";

import { fetchVideos } from "reducers/videos/actionCreators";

import RegisterVideo from "~/components/RegisterVideo";
import VideoSingle from "~/components/VideoSingle";
import VideosList from "~/components/VideosList";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import { Container, Main } from "~/styles";

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { isRegisterVideoFormOpened, videoSingleId, videos } = this.props;

    return (
      <Container>
        <Header />

        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          {videoSingleId && (
            <VideoSingle
              id={videoSingleId}
              title={videos[videoSingleId].title}
            />
          )}
          <VideosList />
        </Main>

        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos,
});

// Ao invés de fazer assim, como o nome da chave é o mesmo da action
// const mapDispatchToProps = (dispatch) => ({
//   fetchVideos: () => dispatch(fetchVideos()),
// });

// Pode fazer assim:
const mapDispatchToProps = { fetchVideos };

export default connect(mapStateToProps, mapDispatchToProps)(App);
